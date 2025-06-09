import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/projects'

let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

const getProject = async id => {
  const response = await axios.post(`${baseUrl}/${id}`)
  return response.data
}

const create = async newObject => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const remove = async id => {
  const config = {
    headers: { Authorization: token }
  }
  const response = await axios.delete(`${baseUrl}/${id}`, config)
  return response.data
}

export default { create, setToken, remove , getProject}