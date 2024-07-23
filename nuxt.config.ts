// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  srcDir: "source",
  imports: { dirs: ["stores"] },

  modules: ["@pinia/nuxt", "@nuxt/ui", "@nuxt/eslint"],
  runtimeConfig: {
    public: {
      DatabaseLCK: process.env.DATABASE_LCK,
      DatabaseKEY: process.env.DATABASE_KEY,
    },
  },

  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
});
