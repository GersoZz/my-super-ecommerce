import { useParams } from 'react-router-dom'

import useFetch from '../hooks/useFetch'
import { API_ENDPOINTS } from '../utils/constant'

function ProductDetailPage() {
  const { productId } = useParams()
  const productUrl = `${API_ENDPOINTS.PRODUCTS}/${productId}`

  const { data, loading, error } = useFetch(productUrl)

  return <div>ProductDetailPage: {productId}</div>
}

export default ProductDetailPage
