import { useState } from 'react'
import './ProductCard.css'

// props
function ProductCard({ title, description, price, imageUrl = 'https://picsum.photos/600/400' }) {
  const [isAdded, setIsAdded] = useState(false)

  return (
    <div id="card-01" className="card">
      <img src={imageUrl} alt={title} className="card-image" />

      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>

        <p className="card-footer">
          <span className="card-price">${price}</span>
          <button onClick={() => setIsAdded(!isAdded)} className={isAdded ? 'card-button added' : 'card-button'}>
            {isAdded ? 'Agregado' : 'Agregar'}
          </button>
        </p>
      </div>
    </div>
  )
}

export default ProductCard
