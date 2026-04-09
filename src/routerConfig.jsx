import Layout from './components/Layout'
import CartLayout from './components/CartLayout'
import { AboutPage, AddProductPage, CartPage, HomePage, NotFoundPage, ProductDetailPage } from './pages'

const routerConfig = [
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/product/:productId',
        element: <ProductDetailPage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/add-product',
        element: <AddProductPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
  {
    element: <CartLayout />,
    children: [
      {
        path: '/cart',
        element: <CartPage />,
      },
    ],
  },
]

export default routerConfig
