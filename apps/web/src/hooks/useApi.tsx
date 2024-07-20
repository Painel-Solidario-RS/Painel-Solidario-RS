import { useState, useEffect } from 'react'
import { AxiosRequestHeaders, Method } from 'axios'
import axiosInstance from '../api/axiosConfig' // Importa a instância configurada do axios

interface UseAxiosProps<B> {
  url: string
  method: Method
  body?: B | null
  headers?: AxiosRequestHeaders
}

interface UseAxiosResponse<T> {
  response: T | null
  error: string
  loading: boolean
}

const useApi = <T, B = unknown>({
  url,
  method,
  body = null,
  headers
}: UseAxiosProps<B>): UseAxiosResponse<T> => {
  const [response, setResponse] = useState<T | null>(null)
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)

  const fetchData = (): void => {
    console.log(body)
    axiosInstance({
      method,
      url,
      headers, // Inclui headers apenas se definidos
      ...(body && { data: body }) // Inclui body apenas se definido
    })
      .then(res => {
        setResponse(res.data)
      })
      .catch(err => {
        setError(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    console.log(response)
    fetchData()
  }, [method, url, body, headers])

  return { response, error, loading }
}

export default useApi
