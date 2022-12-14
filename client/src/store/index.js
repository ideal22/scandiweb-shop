import { combineReducers } from '@reduxjs/toolkit'
import categoriesReducer from './slices/categoriesSlice'
import currenciesReducer from './slices/currenciesSlice'
import productsByCategoryReducer from './slices/productsByCategorySlice'
import addProductSlice from './slices/addProductSlice'
import modalReducer from './slices/modalSlice'
import productByIdReducer from './slices/productByIdSlice'

export const rootReducer = combineReducers({
  categories: categoriesReducer,
  currencies: currenciesReducer,
  products: productsByCategoryReducer,
  addedProducts: addProductSlice,
  modal: modalReducer,
  product: productByIdReducer,
})
