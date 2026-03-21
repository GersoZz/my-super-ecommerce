import './App.css'
import ProductCard from './components/ProductCard'

function App() {
  return (
    <>
      <ProductCard 
        title="Cat Toy" 
        description="Juguete para gato" 
        price="100" 
        imageUrl="https://cdn.petsathome.com/public/images/products/900_7111664.jpg" />
      <ProductCard 
        title="Dog Toy" 
        description="Juguete para perro" 
        price="200" 
        imageUrl="https://i5.walmartimages.com/seo/Plush-Dog-Toys-Electric-Plush-Toys-Pet-Dogs-Walking-Barking-Wagging-Tail-Children-s-Interactive-Toy-Dogs-Training-Children-Love-Animals-Children_e3754944-3a2d-47bf-b35d-1bf74e1d6e61.d6e9c779e7cc9c2d14f99b6e185746eb.jpeg"
      />
    </>
  )
}

export default App
