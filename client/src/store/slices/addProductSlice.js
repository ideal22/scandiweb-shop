import { createSlice } from '@reduxjs/toolkit'

const addProductSlice = createSlice({
  name: 'addProduct',
  initialState: {
    addedProducts: [],
    totalCount: 0,
    totalAmount: 0,
    isProductAdded: false,
    selectedAttrs: [],
  },
  reducers: {
    setAddedProducts(state, action) {
      const isProductAlreadyExist = state.addedProducts.some(
        (product) => product.productId === action.payload.productId,
      )
      if (isProductAlreadyExist) {
        state.addedProducts = state.addedProducts.map((product) => {
          if (product.productId === action.payload.productId) {
            return { ...product, productCount: product.productCount + 1 }
          }
          return product
        })
      } else {
        state.addedProducts.push(action.payload)
      }
    },
    getTotalCount(state) {
      state.totalCount = state.addedProducts.reduce((acc, val) => {
        return acc + val.productCount
      }, 0)
    },
    getTotalAmount(state, action) {
      state.totalAmount = state.addedProducts.reduce((acc, val) => {
        const { amount } = val.productPrices.find(
          (pr) => pr.currency.label === action.payload,
        )
        return acc + amount * val.productCount
      }, 0)
    },
    deleteProduct(state, action) {
      state.addedProducts = state.addedProducts.filter(
        (product) => product.productId !== action.payload,
      )
    },
    increaseProductCount(state, action) {
      state.addedProducts = state.addedProducts.map((product) => {
        if (product.productId === action.payload) {
          return { ...product, productCount: product.productCount + 1 }
        }
        return product
      })
    },
    decreaseProductCount(state, action) {
      state.addedProducts = state.addedProducts.map((product) => {
        if (product.productId === action.payload) {
          return { ...product, productCount: product.productCount - 1 }
        }
        return product
      })
    },

    setIsProductAdded(state, action) {
      state.isProductAdded = action.payload
    },

    setSelectedAttrs(state, action) {
      const uniqueAttrs = [
        ...new Map(
          action.payload.map((item) => [item.attributeName, item]),
        ).values(),
      ]
      state.selectedAttrs = uniqueAttrs
    },

    clearSelectedAttrs(state) {
      state.selectedAttrs = []
    },

    checkout(state) {
      state.addedProducts = []
      state.totalAmount = 0
      state.totalCount = 0
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
  setIsProductAdded,
  setSelectedAttrs,
  clearSelectedAttrs,
  checkout,
} = addProductSlice.actions
export default addProductSlice.reducer
