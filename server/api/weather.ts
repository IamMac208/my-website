import { defineEventHandler } from 'h3';

const config = useRuntimeConfig();

export default defineEventHandler(async () => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${config.public.weather_location}&units=metric&appid=${config.openweathermap_key}`;
  const encodedUrl = encodeURI(apiUrl);

  try {
    const response = await fetch(encodedUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching OpenWeatherMap API:', error);
    return null;
  }
});

