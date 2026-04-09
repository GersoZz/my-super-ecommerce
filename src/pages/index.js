import React from 'react'
import HomePage from './HomePage'

// Promesa
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const ProductDetailPage = React.lazy(() => import('./ProductDetailPage'))

export const AboutPage = React.lazy(() => import('./AboutPage'))
export const AddProductPage = React.lazy(() => import('./AddProductPage'))
export const SearchResultsPage = React.lazy(() => import('./SearchResultsPage'))

export const CartPage = React.lazy(async () => {
  await delay(2000)
  return import('./CartPage')
})

export const NotFoundPage = React.lazy(() => import('./NotFoundPage'))

export { HomePage }
