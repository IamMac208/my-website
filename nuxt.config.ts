// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 modules: ['@nuxt/image'],

 image: {},

 runtimeConfig: {
  openweathermap_key: process.env.OpenWeathermap_key,
  photo_data_file: process.env.photo_data_file,

  public: {
   api: '/api',
   weather_location: process.env.weather_location,
  },
 },
 css: ['~/assets/css/styles.css'],
 postcss: {
  plugins: {
   tailwindcss: {},
   autoprefixer: {},
  },
 },
})
