import { Route, Routes } from 'react-router-dom'
import routes from './routerConfig'
function AppRouter() {
  return (
    <Routes>
      {routes.map((layout, index) => (
        <Route
          key={index}
          element={layout.element}
        >
          {layout.children.map((child, childIndex) => (
            <Route
              key={childIndex}
              path={child.path}
              element={child.element}
            />
          ))}
        </Route>
      ))}

      {/* 
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/add-product" element={<AddProductPage />} />
      </Route>

      <Route element={<CartLayout />}>
        <Route path="/cart" element={<CartPage />} />
      </Route>
       */}
    </Routes>
  )
}

export default AppRouter
