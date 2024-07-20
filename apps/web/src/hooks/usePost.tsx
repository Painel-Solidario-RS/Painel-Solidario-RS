import { useState } from 'react'

interface PostResult<T> {
  data: T | null
  loading: boolean
  error: string | null
  postData: (data: T) => void
}

function usePost<T>(url: string): PostResult<T> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const postData = async (postData: T) => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      })
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const responseData: T = await response.json()
      setData(responseData)
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('An error occurred')
      }
    } finally {
      setLoading(false)
    }
  }

  return { data, loading, error, postData }
}

export default usePost
