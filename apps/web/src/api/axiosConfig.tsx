import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000', // Utiliza a variável de ambiente para a URL base
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Expose-Headers': 'x-auth-token',
    Authorization: `Bearer ${import.meta.env.REACT_APP_API_TOKEN}`
  }
})

axiosInstance.interceptors.request.use(
  config => {
    const token = import.meta.env.REACT_APP_API_TOKEN // Utiliza a variável de ambiente para o token
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

export default axiosInstance
