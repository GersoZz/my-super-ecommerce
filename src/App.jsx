import { useEffect, useState } from 'react'
import './App.css'
import PromoBanner from './components/PromoBanner'
import Header from './components/Header'
import ProductList from './components/ProductList'
import Container from './components/Container'

function App() {
  const [showPromo, setShowPromo] = useState(true)

  const [productsData, setProductsData] = useState([])
  const [productsSuggestedData, setProductsSuggestedData] = useState([])
  const [productsBestSellerData, setProductsBestSellerData] = useState([])

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=6')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)

        const productsAdapteds = data.map((product) => {
          const { id, title, description, price, images } = product

          const productAdapted = {
            id: id,
            title: title,
            description: description,
            price: price,
            imageUrl: images[0],
          }
          return productAdapted
        })

        setProductsData(productsAdapteds)
      })

    fetch('https://api.escuelajs.co/api/v1/products?offset=6&limit=6')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)

        const productsAdapteds = data.map((product) => {
          const { id, title, description, price, images } = product

          const productAdapted = {
            id: id,
            title: title,
            description: description,
            price: price,
            imageUrl: images[0],
          }
          return productAdapted
        })

        setProductsSuggestedData(productsAdapteds)
      })

    fetch('https://api.escuelajs.co/api/v1/products?offset=12&limit=3')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)

        const productsAdapteds = data.map((product) => {
          const { id, title, description, price, images } = product

          const productAdapted = {
            id: id,
            title: title,
            description: description,
            price: price,
            imageUrl: images[0],
          }
          return productAdapted
        })

        setProductsBestSellerData(productsAdapteds)
      })
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
        <ProductList productsData={productsData} />
      </Container>

      <Container title="Productos sugeridos">
        <p style={{ fontSize: '1.5rem' }}>Explora nuestra selección de productos sugerido</p>
        <ProductList productsData={productsSuggestedData} />
      </Container>

      <Container title="Productos más vendidos">
        <p style={{ fontSize: '1.5rem' }}>Explora nuestra selección de productos más vendidos</p>
        <ProductList productsData={productsBestSellerData} />
      </Container>
    </>
  )
}

export default App
