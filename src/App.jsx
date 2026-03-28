import { useState } from 'react'
import './App.css'
import ProductCard from './components/ProductCard'
import PromoBanner from './components/PromoBanner'
import Header from './components/Header'
import ProductList from './components/ProductList'

function App() {
  const [cartCount, setCartCount] = useState(0)
  const [showPromo, setShowPromo] = useState(true)

  const productsData = [
    {
      id: '01',
      title: 'Cat Toy',
      description: 'Juguete para gato',
      price: 100,
      imageUrl: 'https://cdn.petsathome.com/public/images/products/900_7111664.jpg',
    },
    {
      id: '02',
      title: 'Dog Toy',
      description: 'Juguete para perro',
      price: 200,
    },
    {
      id: '03',
      title: 'Parrot Toy',
      description: 'Juguete para Loro',
      price: 200,
      imageUrl: 'https://i.etsystatic.com/24759185/r/il/99c176/3021454798/il_570xN.3021454798_exyo.jpg',
    },
  ]

  const onClosePromo = () => {
    setShowPromo(false)
  }

  const handleAddToCart = (isAdded) => {
    if (isAdded === true) setCartCount(cartCount + 1)
    if (isAdded === false) setCartCount(cartCount - 1)
  }

  return (
    <>
      <Header cartCount={cartCount} />
      {showPromo && (
        <PromoBanner
          onClose={onClosePromo}
          totalSeconds={30}
        />
      )}
      <ProductList
        productsData={productsData}
        handleAddToCart={handleAddToCart}
      />
    </>
  )
}

export default App
