export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    app: {
      apiBaseUri: process.env.API_URL || "http://127.0.0.1:8055",
    },
  },
  css: ["/assets/scss/main.scss"],
})
