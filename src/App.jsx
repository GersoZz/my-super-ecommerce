import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import CartPage from './pages/CartPage'
import AddProductPage from './pages/AddProductPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/add-product" element={<AddProductPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
