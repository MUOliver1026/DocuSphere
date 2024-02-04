import axios from 'axios'

const API_URL = 'http://localhost:8080/api'

export const registerUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/users/register`, { email, password })
    return response.data
  } catch (error: any) {
    throw new Error(error.response.data.message || 'Failed to register')
  }
}

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, { email, password })
    return response.data
  } catch (error: any) {
    throw new Error(error.response.data.message || 'Failed to login')
  }
}
