// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  srcDir: "source",
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
});
