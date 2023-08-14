// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 runtimeConfig: {
  openweathermap_key: process.env.OpenWeathermap_key,
  photo_data_file: process.env.photo_data_file,
  todoData: process.env.todoData,

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
