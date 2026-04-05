import { AboutPage, AddProductPage, CartPage, HomePage } from './pages'

const routerConfig = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/cart',
    element: <CartPage />,
  },
  {
    path: '/add-product',
    element: <AddProductPage />,
  },
]

export default routerConfig
