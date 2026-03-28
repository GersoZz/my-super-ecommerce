import { createContext, useState } from 'react'

export const CartContext = createContext()

function CartProvider({ children }) {
  const [cartCount, setCartCount] = useState(0)

  const handleAddToCart = (isAdded) => {
    if (isAdded === true) setCartCount(cartCount + 1)
    if (isAdded === false) setCartCount(cartCount - 1)
  }

  const value = {
    cartCount,
    handleAddToCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export default CartProvider
