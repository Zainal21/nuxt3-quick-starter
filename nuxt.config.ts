// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/sass/app.scss"],
  postcss: {},
  typescript: {
    typeCheck: true,
  },
  dir: {
    public: "../public",
  },
  app: {
    head: {
      charset: "utf-8",
      meta: [
        { "http-equiv": "x-ua-compatible", content: "IE=edge" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      ],
      link: [{ rel: "icon", href: "favicon.ico" }],
    },
  },
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
  ],
  components: [
    {
      extensions: ["vue"],
      path: "@/components/*",
      pathPrefix: false,
    },
  ],
  runtimeConfig: {
    public: {
      baseApiUrl: process.env.NUXT_BASE_API_URL,
      basePath: process.env.NUXT_BASE_PATH,
    },
  },
  nitro: {
    routeRules: {
      ...(process.env.PROXY_URL && {
        [`${process.env.NUXT_BASE_API_URL || "/"}**`]: {
          proxy: `${process.env.PROXY_URL}${
            process.env.NUXT_BASE_API_URL || "/"
          }**`,
        },
      }),
    },
  },
});
