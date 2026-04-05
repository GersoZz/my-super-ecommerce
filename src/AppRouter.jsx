import { Route, Routes } from 'react-router-dom'
import { HomePage, AboutPage, CartPage, AddProductPage } from './pages'

function AppRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />
      <Route
        path="/about"
        element={<AboutPage />}
      />
      <Route
        path="/cart"
        element={<CartPage />}
      />
      <Route
        path="/add-product"
        element={<AddProductPage />}
      />
    </Routes>
  )
}

export default AppRouter
