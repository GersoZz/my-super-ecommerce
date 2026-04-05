import { useState } from 'react'
import './App.css'
import PromoBanner from './components/PromoBanner'
import Header from './components/Header'
import ProductList from './components/ProductList'
import Container from './components/Container'
import { productAdapter } from './adapters/products.adapter'
import Loader from './components/Loader'
import useFetch from './hooks/useFetch'
import ErrorMessage from './components/ErrorMessage'
import { API_ENDPOINTS } from './utils/constant'

function App() {
  const [showPromo, setShowPromo] = useState(true)

  const {
    data: productsAvailableRawData,
    isLoading: isLoadingAvailable,
    error: errorAvailable,
  } = useFetch(API_ENDPOINTS.PRODUCTS_AVAILABLE)

  const {
    data: productsSuggestedRawData,
    isLoading: isLoadingSuggested,
    error: errorSuggested,
  } = useFetch(API_ENDPOINTS.PRODUCTS_SUGGESTED)

  const {
    data: productsBestSellerRawData,
    isLoading: isLoadingBestSeller,
    error: errorBestSeller,
  } = useFetch(API_ENDPOINTS.PRODUCTS_BEST_SELLER)

  const productsAvailableData = productsAvailableRawData === null ? [] : productsAvailableRawData.map(productAdapter)
  const productsSuggestedData = productsSuggestedRawData === null ? [] : productsSuggestedRawData.map(productAdapter)
  const productsBestSellerData = productsBestSellerRawData === null ? [] : productsBestSellerRawData.map(productAdapter)

  const onClosePromo = () => {
    setShowPromo(false)
  }

  return (
    <>
      <Header />
      {showPromo && (
        <PromoBanner
          onClose={onClosePromo}
          totalSeconds={30}
        />
      )}

      {errorAvailable && <ErrorMessage message={'No se pudo cargar los productos disponibles'} />}
      {errorSuggested && <ErrorMessage message={'No se pudo cargar los productos sugeridos'} />}
      {errorBestSeller && <ErrorMessage message={'No se pudo cargar los productos más vendidos'} />}

      {!errorAvailable && (
        <Container title="Productos disponibles">
          <p style={{ fontSize: '1.5rem' }}>Explora nuestra selección de productos disponibles</p>
          {isLoadingAvailable ? <Loader /> : <ProductList productsData={productsAvailableData} />}
        </Container>
      )}

      {!errorSuggested && (
        <Container title="Productos sugeridos">
          <p style={{ fontSize: '1.5rem' }}>Explora nuestra selección de productos sugerido</p>
          {isLoadingSuggested ? <Loader /> : <ProductList productsData={productsSuggestedData} />}
        </Container>
      )}
      {!errorBestSeller && (
        <Container title="Productos más vendidos">
          <p style={{ fontSize: '1.5rem' }}>Explora nuestra selección de productos más vendidos</p>
          {isLoadingBestSeller ? <Loader /> : <ProductList productsData={productsBestSellerData} />}
        </Container>
      )}
    </>
  )
}

export default App
