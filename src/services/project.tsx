import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/projects'

const projects = async credentials => {
  const response = await axios.get(baseUrl, credentials)
  return response.data
}

export default { projects }