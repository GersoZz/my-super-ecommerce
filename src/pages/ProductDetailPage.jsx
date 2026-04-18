import { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import useFetch from '../hooks/useFetch'
import { API_ENDPOINTS } from '../utils/constant'
import { productAdapter } from '../adapters/products.adapter'
import { CartContext } from '../context/CartContext'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'
import productDetailStyles from './ProductDetailPage.module.css'

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
    <div className={productDetailStyles.productDetail}>
      <img
        src={imageUrl}
        alt={title}
        className={productDetailStyles.productDetailImage}
      />

      <div className={productDetailStyles.productDetailInfo}>
        <h1 className={productDetailStyles.productDetailTitle}>{title}</h1>
        <p className={productDetailStyles.productDetailDescription}>{description}</p>
        <span className={productDetailStyles.productDetailPrice}>${price}</span>
        <button
          className={`${productDetailStyles['card-button']} ${isAdded ? productDetailStyles.added : ''}`}
          onClick={handleClick}
        >
          {isAdded ? 'Agregado al carrito' : 'Agregar al carrito'}
        </button>
      </div>
    </div>
  )
}

export default ProductDetailPage
