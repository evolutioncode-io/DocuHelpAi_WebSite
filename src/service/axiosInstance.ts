import axios from 'axios'
import { auth } from '@/config/firebase'
import { getIdToken } from 'firebase/auth'

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL ?? ''}/api/v1`,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosInstance.interceptors.request.use(async (config) => {
  const user = auth.currentUser
  if (user) {
    try {
      const token = await getIdToken(user)
      config.headers.Authorization = `Bearer ${token}`
    } catch (error) {
      console.error('Error fetching token:', error)
    }
  }
  return config
})

export { axiosInstance }
