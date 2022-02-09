import { useEffect, useState } from 'react'
import { url } from '../config'

export const useFetch = ({ route }) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(url + route)
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [url, route])

  return { data, loading, error }
}
