import axios from "axios";
import { useRuntimeConfig } from "nuxt/app";
import { useAuthStore } from "~/stores/useAuthStore";
// @ts-ignore
import { EventSourcePolyfill } from "event-source-polyfill";

export const useApi = () => {
  const config = useRuntimeConfig();
  const authStore = useAuthStore();
  const baseURL = config.public.baseApiUrl as string;
  const headers: any = {};
  if (authStore.currentUser) {
    headers["Authorization"] = `Bearer ${authStore.accessToken}`;
  }
  const api = axios.create({
    baseURL,
    headers,
  });

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (!error.response) {
        console.log(error);
        console.log("Network Error");
      } else if (error.response.status === 401) {
        authStore.signOut();
        return;
      }
      throw error;
    }
  );
  return api;
};

export const useSse = (url: string): EventSourcePolyfill => {
  const config = useRuntimeConfig();
  const authStore = useAuthStore();
  const baseURL = config.public.baseApiUrl as string;
  const headers: any = {};
  if (authStore.currentUser) {
    headers["Authorization"] = `Bearer ${authStore.accessToken}`;
  }
  const sse = new EventSourcePolyfill(`${baseURL}${url}`, {
    headers,
    heartbeatTimeout: 10 * 60 * 1000,
  });
  return sse;
};
