import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { FetchProductsByCategory } from '../../GraphqlApi/queries'

export const fetchProductsByCategory = createAsyncThunk(
  'products/fetchProductsByCategory',
  async function (category, { dispatch, rejectWithValue }) {
    try {
      const { data } = await FetchProductsByCategory(category)
      if (!data.category) {
        throw new Error('Server Error')
      }
      dispatch(setProductsByCategory(data.category.products))
    } catch (e) {
      return rejectWithValue(e.message)
    }
  },
)

const productsByCategorySlice = createSlice({
  name: 'productsByCategory',
  initialState: {
    products: [],
    error: null,
    status: null,
  },
  reducers: {
    setProductsByCategory(state, action) {
      state.products = action.payload.map((product) => ({
        ...product,
        count: 1,
      }))
    },
  },
  extraReducers: {
    [fetchProductsByCategory.pending]: (state) => {
      state.status = 'loading'
      state.error = null
    },
    [fetchProductsByCategory.fulfilled]: (state) => {
      state.status = 'success'
      state.error = null
    },
    [fetchProductsByCategory.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    },
  },
})

const { setProductsByCategory } = productsByCategorySlice.actions
export default productsByCategorySlice.reducer
