import ProductCard from './ProductCard'

function ProductList({ productsData, handleAddToCart }) {
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
          handleAddToCart={handleAddToCart}
        />
      ))}
    </div>
  )
}

export default ProductList
