// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    openweathermap_key: '',
    public: {
      apiBase: '/api',
      weather_location: 'Lopburi, TH'
    }
  },
  css: ['~/assets/css/styles.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})


