import { useRuntimeConfig } from "nuxt/app";
import { useAuthStore } from "~/stores/useAuthStore";

export interface HttpOptions {
  headers?: Record<string, string>;
  method?: string;
  body?: string | object;
  timeout?: number;
}

export const useHttp = (
  url: string,
  options: RequestInit = { method: "get" }
) => {
  const config = useRuntimeConfig();
  const authStore = useAuthStore();
  const baseURL = config.public.baseApiUrl as string;
  const fullUrl = `${baseURL}${url}`;
  if (authStore.currentUser) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${authStore.accessToken}`,
    };
  }

  return fetch(fullUrl, options);
};
