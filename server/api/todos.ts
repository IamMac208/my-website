import yaml from 'js-yaml'

const config = useRuntimeConfig()

export default defineEventHandler(async () => {
  try {
    const response = await fetch(config.todoData)

    if (!response.ok) {
    
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
    console.error('Error fetching TODOs data:', fetchError)
    return null
  }
})
