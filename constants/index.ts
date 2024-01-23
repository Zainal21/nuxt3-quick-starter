export * from "./Locale";
export * from "./App";

const runtime = useRuntimeConfig();

export const BASE_API_URL = runtime.public.baseApiUrl ?? "";
