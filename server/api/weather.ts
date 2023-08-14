const config = useRuntimeConfig()

export default defineEventHandler(async () => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${config.public.weather_location}&units=metric&appid=${config.openweathermap_key}`
  const encodedUrl = encodeURI(apiUrl)

  try {
    const response = await fetch(encodedUrl)

    if (!response.ok) {
      // Handle non-200 HTTP status codes
      throw new Error(`OpenWeatherMap API returned status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    // Handle specific types of errors and provide meaningful error messages
    if (error instanceof SyntaxError) {
      console.error(
        'Error parsing JSON response from OpenWeatherMap API:',
        error.message,
      )
    } else {
      console.error('Error fetching OpenWeatherMap API:', error.message)
    }
    return null
  }
})
