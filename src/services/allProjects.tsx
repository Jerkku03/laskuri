import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/allProjects'

const getAll = async id => {
  const response = await axios.post(baseUrl, id)
  return response.data
}

export default {getAll}