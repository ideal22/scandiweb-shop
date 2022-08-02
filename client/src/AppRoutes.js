import { Routes as Swith, Route } from 'react-router-dom'
import Layout from './Components/Layout'
import CartPage from './pages/CartPage'
import CategoryPage from './pages/CategoryPage'
import ProductPage from './pages/ProductPage'

const AppRoutes = () => {
  return (
    <Swith>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<CategoryPage />} />
        <Route path="cart-page" element={<CartPage />} />
        <Route path="product-page/:id" element={<ProductPage />} />
      </Route>
    </Swith>
  )
}
export default AppRoutes
