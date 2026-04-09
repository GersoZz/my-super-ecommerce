import { useEffect, useState } from 'react'

function useFetch(url) {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setData(null)
    setIsLoading(true)
    setError(null)

    fetch(url)
      .then((response) => {
        if (response.ok === false) {
          throw new Error('Petición fallida')
        }

        return response.json()
      })
      .then((data) => {
        setData(data)
      })
      .catch((error) => {
        setError(error)
      })
      .finally(() => setIsLoading(false))
  }, [url])

  return { data, isLoading, error }
}

export default useFetch
