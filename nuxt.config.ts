// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  srcDir: "source",
  imports: { dirs: ["stores"] },

  modules: ["@pinia/nuxt"],

  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
});
