import ProductCard from './ProductCard'
import './ProductList.css'

function ProductList({ productsData }) {
  return (
    <div className="card-list">
      {productsData.map((product, index) => (
        <ProductCard
          id={product.id}
          key={index}
          title={product.title}
          description={product.description}
          price={product.price}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  )
}

export default ProductList
