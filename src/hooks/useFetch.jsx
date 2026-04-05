import { useEffect, useState } from 'react'
import { productAdapter } from '../adapters/products.adapter'

function useFetch(url) {
  const [productsData, setProductsData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const productsAdapteds = data.map((e) => productAdapter(e))
        setProductsData(productsAdapteds)
      })
      .finally(() => setIsLoading(false))
  }, [])

  return { productsData, isLoading }
}

export default useFetch
