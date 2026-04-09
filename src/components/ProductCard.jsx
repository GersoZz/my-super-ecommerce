import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import './ProductCard.css'
import { Link } from 'react-router-dom'

// props
function ProductCard({ id, title, description, price, imageUrl = 'https://picsum.photos/600/400' }) {
  const { handleAddToCart } = useContext(CartContext)

  const [isAdded, setIsAdded] = useState(false)

  const handleClick = () => {
    setIsAdded(!isAdded)
    handleAddToCart(!isAdded)
  }

  return (
    <div
      id={`card-${id}`}
      className="card"
    >
      <Link
        to={`/product/${id}`}
        className="card-link"
      >
        <img
          src={imageUrl}
          alt={title}
          className="card-image"
        />
      </Link>

      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>

        <p className="card-footer">
          <span className="card-price">${price}</span>
          <button
            onClick={handleClick}
            className={isAdded ? 'card-button added' : 'card-button'}
          >
            {isAdded ? 'Agregado' : 'Agregar'}
          </button>
        </p>
      </div>
    </div>
  )
}

export default ProductCard
