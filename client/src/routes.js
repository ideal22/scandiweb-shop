import CartPage from './pages/CartPage'
import CategoryPage from './pages/CategoryPage'
import ProductPage from './pages/ProductPage'

export const routes = [
  {
    path: 'categories/:category',
    isIndex: true,
    Element: CategoryPage,
  },
  {
    path: 'product-page',
    isIndex: false,
    Element: ProductPage,
  },
  {
    path: 'cart-page',
    isIndex: false,
    Element: CartPage,
  },
]
