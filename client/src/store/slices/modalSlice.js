import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isModalOpened: false,
  },
  reducers: {
    toggleModal(state) {
      state.isModalOpened = !state.isModalOpened
    },
  },
})
export const { toggleModal } = modalSlice.actions
export default modalSlice.reducer
