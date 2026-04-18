import { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import useFetch from '../hooks/useFetch'
import { API_ENDPOINTS } from '../utils/constant'
import { productAdapter } from '../adapters/products.adapter'
import { CartContext } from '../context/CartContext'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'
import './ProductDetailPage.css'

function ProductDetailPage() {
  const { productId } = useParams()
  const productUrl = `${API_ENDPOINTS.PRODUCTS}/${productId}`

  const { data, isLoading, error } = useFetch(productUrl)
  const { handleAddToCart } = useContext(CartContext)

  const [isAdded, setIsAdded] = useState(false)

  const handleClick = () => {
    setIsAdded((prev) => !prev)
    handleAddToCart(!isAdded)
  }

  if (isLoading) return <Loader />

  if (error || !data) {
    return (
      <>
        <ErrorMessage message={'Error al cargar el producto'} />
        <p>No se encontró el producto.</p>
        <Link
          to="/"
          style={{ color: 'black' }}
        >
          Volver al inicio
        </Link>
      </>
    )
  }

  const { title, price, description, imageUrl } = productAdapter(data)

  return (
    <div className="product-detail">
      <img
        src={imageUrl}
        alt={title}
        className="product-detail-image"
      />

      <div className="product-detail-info">
        <h1 className="product-detail-title">{title}</h1>
        <p className="product-detail-description">{description}</p>
        <span className="product-detail-price">${price}</span>
        <button
          className={`card-button ${isAdded ? 'added' : ''}`}
          onClick={handleClick}
        >
          {isAdded ? 'Agregado al carrito' : 'Agregar al carrito'}
        </button>
      </div>
    </div>
  )
}

export default ProductDetailPage
