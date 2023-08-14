import yaml from 'js-yaml'

const config = useRuntimeConfig()

export default defineEventHandler(async () => {
  const endpoint = config.photo_data_file

  try {
    const response = await fetch(endpoint)

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`)
    }

    const data = await response.text()

    try {
      const yamldata = yaml.load(data)
      return yamldata
    } catch (parseError) {
      console.error('Error parsing YAML:', parseError)
      return null
    }
  } catch (fetchError) {
    console.error('Error fetching Photos data:', fetchError)
    return null
  }
})
