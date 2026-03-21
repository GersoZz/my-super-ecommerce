import './ProductCard.css'

// props
function ProductCard({ title, description, price, imageUrl }) {
  return (
    <div id='card-01' className='card'>
        <img src={imageUrl} alt={title}
        className="card-image"
        />

        <div className="card-content">
            <h3 className="card-title">{title}</h3>
            <p className="card-text">
                {description}
            </p>

            <p className = "card-footer">
                <span className="card-price">${price}</span>
                <button className="card-button">
                    Agregar al Carrito
                </button>
            </p>
         </div>
    </div>
  )
}

export default ProductCard