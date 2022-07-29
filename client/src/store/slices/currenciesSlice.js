import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { FetchCurrencies } from '../../GraphqlApi/queries'

export const fetchCurrencies = createAsyncThunk(
  'currencies/fetchCurrencies',
  async function (_, { dispatch }) {
    try {
      const { data } = await FetchCurrencies()
      dispatch(setCurrencies(data.currencies))
    } catch (e) {
      console.log(e.message)
    }
  },
)

const currenciesSlice = createSlice({
  name: 'currencies',
  initialState: {
    currencies: [],
    selectedCurrency: { label: 'USD', symbol: '$', __typename: 'Currency' },
  },
  reducers: {
    setCurrencies(state, action) {
      state.currencies = action.payload
    },
    setSelectedCurrency(state, action) {
      state.selectedCurrency = action.payload
    },
  },
})

export const { setCurrencies, setSelectedCurrency } = currenciesSlice.actions

export default currenciesSlice.reducer
