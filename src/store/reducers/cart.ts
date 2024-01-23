import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Restaurant from '../../pages/Home'

type CartState = {
  items: CartItem[]
  isOpen: boolean
}

type CartItem = {
  id: number
  image: string
  name: string
  description: string
  price: number
  portion: string
  idRestaurant: number // Assuming 'Restaurant' is the correct type
}

const initialState: CartState = {
  items: [],
  isOpen: false
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CartItem>) => {
      const restaurant = state.items.find(
        (item) => item.id === action.payload.id
      )
      if (!restaurant) {
        state.items.push(action.payload)
      } else {
        alert('Este pedido já está adicionado ao carrinho.')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

cartSlice.actions.add

export const { add, remove, open, close } = cartSlice.actions

export default cartSlice.reducer
