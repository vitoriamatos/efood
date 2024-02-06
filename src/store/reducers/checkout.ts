import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Restaurant from '../../pages/Home'

type CartState = {
  items: CartItem[]
  isOpen: boolean
  isOpenCheckout: boolean
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
const storedCart = localStorage.getItem('cart')

const initialState: CartState = {
  items: storedCart ? JSON.parse(storedCart) : [],
  isOpen: false,
  isOpenCheckout: false
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
        localStorage.setItem('cart', JSON.stringify(state.items))
      } else {
        alert('Este pedido já está adicionado ao carrinho.')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
      localStorage.setItem('cart', JSON.stringify(state.items))
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    openCheckout: (state) => {
      state.isOpenCheckout = true
    },
    closeCheckout: (state) => {
      state.isOpenCheckout = false
    }
  }
})

export const { add, remove, open, close, openCheckout, closeCheckout } =
  cartSlice.actions

export default cartSlice.reducer
