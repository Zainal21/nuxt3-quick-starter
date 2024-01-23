import { navigateTo } from "nuxt/app";
import {
  defineStore,
  type StoreActions,
  type StoreGetters,
  type StoreState,
} from "pinia";
import { useApi } from "~/composables/useApi";

export interface User {
  name: string;
  email: string;
  password: string;
  roles: string[];
}

const useDef = defineStore(
  "authStore",
  () => {
    const currentUser = ref<User | null>(null);
    const accessToken = ref<string | null>(null);
    const refreshToken = ref<string | null>(null);
    const signIn = async (email: string, password: string) => {
      const url = "/auth/signin";
      const api = useApi();
      const response = await api.post(url, { email, password });
      const { user, tokens } = response.data;
      currentUser.value = user;
      accessToken.value = tokens.accessToken;
      refreshToken.value = tokens.refreshToken;
      return user;
    };

    const signUp = async (name: string, email: string, password: string) => {
      const url = "/auth/signup";
      const api = useApi();
      const response = await api.post(url, { name, email, password });
      const user = response.data;
      currentUser.value = user;
      return user;
    };

    const signOut = async () => {
      currentUser.value = null;
      accessToken.value = null;
      refreshToken.value = null;
      navigateTo("/auth/login");
      return;
    };

    return { signIn, signUp, currentUser, signOut, accessToken, refreshToken };
  },
  {
    // @ts-ignore
    persist: true,
  }
);

export type ReachableStore = StoreActions<ReturnType<typeof useDef>> &
  StoreGetters<ReturnType<typeof useDef>> &
  StoreState<ReturnType<typeof useDef>>;
const useStore = (): ReachableStore => useDef();
export const useAuthStore = useStore;
