import axios from 'axios'
const baseUrl = '/api/allProjects'

const getAll = async id => {
  const response = await axios.post(baseUrl, id)
  return response.data
}

export default {getAll}