import './App.css'
import ProductCard from './components/ProductCard'

function App() {
  const productsData = [
    {
      title: 'Cat Toy',
      description: 'Juguete para gato',
      price: 100,
      imageUrl: 'https://cdn.petsathome.com/public/images/products/900_7111664.jpg',
    },
    {
      title: 'Dog Toy',
      description: 'Juguete para perro',
      price: 200,
    },
    {
      title: 'Parrot Toy',
      description: 'Juguete para Loro',
      price: 200,
      imageUrl: 'https://i.etsystatic.com/24759185/r/il/99c176/3021454798/il_570xN.3021454798_exyo.jpg',
    },
  ]

  return (
    <>
      <div className="card-list">
        {productsData.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            description={product.description}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </>
  )
}

export default App
