// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  srcDir: "source",
  imports: { dirs: ["stores"] },

  modules: ["@pinia/nuxt", "@nuxt/ui"],

  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
});