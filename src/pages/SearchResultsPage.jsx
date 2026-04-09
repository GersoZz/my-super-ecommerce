import { useSearchParams } from 'react-router-dom'
import { API_ENDPOINTS } from '../utils/constant'
import useFetch from '../hooks/useFetch'
import { productAdapter } from '../adapters/products.adapter'
import ErrorMessage from '../components/ErrorMessage'
import Loader from '../components/Loader'
import ProductList from '../components/ProductList'

function SearchResultsPage() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''

  const searchUrl = query ? `${API_ENDPOINTS.PRODUCTS}/?title=${encodeURIComponent(query)}` : null

  const { data: productsRawData, isLoading, error } = useFetch(searchUrl)

  const products = productsRawData ? productsRawData.slice(0, 12).map(productAdapter) : []

  console.log('🚀 ~ SearchResultsPage ~ products:', products)

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '20px' }}>
      <h1>Resultados de búsqueda</h1>
      {query && (
        <p style={{ opacity: 0.8, marginBottom: 20 }}>
          Mostrando resultados para: <strong>"{query}"</strong>
        </p>
      )}

      {!query && <p>Ingresa un término de búsqueda en la barra superior.</p>}

      {isLoading && (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '40px 0' }}>
          <Loader />
        </div>
      )}

      {error && <ErrorMessage message={'Error al cargar los productos.'} />}

      {!isLoading && products.length === 0 && query && (
        <p style={{ textAlign: 'center', opacity: 0.8 }}>No se encontraron productos para "{query}"</p>
      )}

      {products.length > 0 && <ProductList productsData={products} />}
    </div>
  )
}

export default SearchResultsPage
