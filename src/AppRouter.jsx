import { Route, Routes } from 'react-router-dom'
import routes from './routerConfig'
function AppRouter() {
  return (
    <Routes>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            element={route.element}
          />
        )
      })}
    </Routes>
  )
}

export default AppRouter
