import './App.css'
import ProductCard from './components/ProductCard'

function App() {
  return (
    <>
      <ProductCard
        title="Cat Toy"
        description="Juguete para gato"
        price="100"
        imageUrl="https://cdn.petsathome.com/public/images/products/900_7111664.jpg"
      />
      <ProductCard title="Dog Toy" description="Juguete para perro" price="200" />
    </>
  )
}

export default App
