import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { FetchProductById } from '../../GraphqlApi/queries'

export const fetchProductById = createAsyncThunk(
  'product/fetchProductById',
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const { data } = await FetchProductById(id)
      if (!data.product) {
        throw new Error('Server Error!')
      }
      dispatch(setProduct(data.product))
    } catch (e) {
      return rejectWithValue(e.message)
    }
  },
)

const productByIdSlice = createSlice({
  name: 'productById',
  initialState: {
    product: {},
    status: null,
    error: null,
  },
  reducers: {
    setProduct(state, action) {
      state.product = action.payload
    },
  },
})

const { setProduct } = productByIdSlice.actions
export default productByIdSlice.reducer
