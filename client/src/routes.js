import CartPage from './pages/CartPage'
import CategoryPage from './pages/CategoryPage'
import ProductPage from './pages/ProductPage'
import { ROUTES } from './shared/constants'

export const routes = [
  {
    path: ROUTES.categoryPage,
    isIndex: true,
    Element: CategoryPage,
  },
  {
    path: ROUTES.productPage,
    isIndex: false,
    Element: ProductPage,
  },
  {
    path: ROUTES.cartPage,
    isIndex: false,
    Element: CartPage,
  },
]
