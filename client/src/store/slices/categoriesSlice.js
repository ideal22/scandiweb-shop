import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { FetchCategories } from '../../GraphqlApi/queries'

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async function (_, { dispatch }) {
    try {
      const { data } = await FetchCategories()
      dispatch(setCategories(data.categories))
    } catch (e) {
      return e.message
    }
  },
)
const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    selectedCategory: 'all',
  },
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload
    },
    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload
    },
  },
})

export const { setCategories, setSelectedCategory } = categoriesSlice.actions

export default categoriesSlice.reducer
