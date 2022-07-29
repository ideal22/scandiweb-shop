import { createSlice } from '@reduxjs/toolkit'

const addProductSlice = createSlice({
  name: 'addProduct',
  initialState: {
    addedProducts: [],
    totalCount: 0,
    totalAmount: 0,
  },
  reducers: {
    setAddedProducts(state, action) {
      const isProductAlreadyExist = state.addedProducts.some(
        (product) => product.id === action.payload.id,
      )
      if (isProductAlreadyExist) {
        state.addedProducts = state.addedProducts.map((product) => {
          if (product.id === action.payload.id) {
            return { ...product, count: product.count + 1 }
          }
          return product
        })
      } else {
        state.addedProducts.push(action.payload)
      }
    },
    getTotalCount(state) {
      state.totalCount = state.addedProducts.reduce((acc, val) => {
        return acc + val.count
      }, 0)
    },
    getTotalAmount(state, action) {
      state.totalAmount = state.addedProducts.reduce((acc, val) => {
        const { amount } = val.prices.find(
          (pr) => pr.currency.label === action.payload,
        )
        return acc + amount * val.count
      }, 0)
    },
    deleteProduct(state, action) {
      state.addedProducts = state.addedProducts.filter(
        (product) => product.id !== action.payload,
      )
    },
    increaseProductCount(state, action) {
      state.addedProducts = state.addedProducts.map((product) => {
        if (product.id === action.payload) {
          return { ...product, count: product.count + 1 }
        }
        return product
      })
    },
    decreaseProductCount(state, action) {
      state.addedProducts = state.addedProducts.map((product) => {
        if (product.id === action.payload) {
          return { ...product, count: product.count - 1 }
        }
        return product
      })
    },
  },
})

export const {
  setAddedProducts,
  getTotalCount,
  getTotalAmount,
  deleteProduct,
  increaseProductCount,
  decreaseProductCount,
} = addProductSlice.actions
export default addProductSlice.reducer
