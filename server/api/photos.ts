import { defineEventHandler } from 'h3'
import yaml from 'js-yaml'

const config = useRuntimeConfig()

export default defineEventHandler(async () => {
 const endpoint =
  'https://raw.githubusercontent.com/azuremist208/assets/main/photos.yaml'

 try {
  const response = await fetch(endpoint)

  const data = await response.text()

  const yamldata = yaml.load(data)
  return yamldata
 } catch (error) {
  console.error('Error fetching Photos data:', error)
  return null
 }
})
