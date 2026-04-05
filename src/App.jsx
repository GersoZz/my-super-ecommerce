import { useEffect, useState } from 'react'
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

  const [productsSuggestedData, setProductsSuggestedData] = useState([])
  const [productsBestSellerData, setProductsBestSellerData] = useState([])

  const [isLoadingSuggested, setIsLoadingSuggested] = useState(true)
  const [isLoadingBestSeller, setIsLoadingBestSeller] = useState(true)

  const { productsData, isLoading } = useFetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=6')

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products?offset=6&limit=6')
      .then((res) => res.json())
      .then((data) => {
        const productsAdapteds = data.map(productAdapter)
        setProductsSuggestedData(productsAdapteds)
        setIsLoadingSuggested(false)
      })
      .finally(() => setIsLoadingSuggested(false))

    fetch('https://api.escuelajs.co/api/v1/products?offset=12&limit=3')
      .then((res) => res.json())
      .then((data) => {
        const productsAdapteds = data.map(productAdapter)
        setProductsBestSellerData(productsAdapteds)
        setIsLoadingBestSeller(false)
      })
      .finally(() => setIsLoadingBestSeller(false))
  }, [])

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
        {isLoading ? <Loader /> : <ProductList productsData={productsData} />}
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
