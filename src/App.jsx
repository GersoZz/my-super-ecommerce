import { useState } from 'react'
import './App.css'
import PromoBanner from './components/PromoBanner'
import Header from './components/Header'
import ProductList from './components/ProductList'
import Container from './components/Container'
import { productAdapter } from './adapters/products.adapter'
import Loader from './components/Loader'
import useFetch from './hooks/useFetch'

function App() {
  const [showPromo, setShowPromo] = useState(true)

  const { data: productsAvailableRawData, isLoading: isLoadingAvailable } = useFetch(
    'https://api.escuelajs.co/api/v1/products?offset=0&limit=6',
  )

  const { data: productsSuggestedRawData, isLoading: isLoadingSuggested } = useFetch(
    'https://api.escuelajs.co/api/v1/products?offset=6&limit=6',
  )

  const { data: productsBestSellerRawData, isLoading: isLoadingBestSeller } = useFetch(
    'https://api.escuelajs.co/api/v1/products?offset=12&limit=3',
  )

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

      <Container title="Productos disponibles">
        <p style={{ fontSize: '1.5rem' }}>Explora nuestra selección de productos disponibles</p>
        {isLoadingAvailable ? <Loader /> : <ProductList productsData={productsAvailableData} />}
      </Container>

      <Container title="Productos sugeridos">
        <p style={{ fontSize: '1.5rem' }}>Explora nuestra selección de productos sugerido</p>
        {isLoadingSuggested ? <Loader /> : <ProductList productsData={productsSuggestedData} />}
      </Container>

      <Container title="Productos más vendidos">
        <p style={{ fontSize: '1.5rem' }}>Explora nuestra selección de productos más vendidos</p>
        {isLoadingBestSeller ? <Loader /> : <ProductList productsData={productsBestSellerData} />}
      </Container>
    </>
  )
}

export default App
