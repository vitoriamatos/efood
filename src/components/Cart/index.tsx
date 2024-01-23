import Button from '../Button'
import {
  CartContainer,
  CartList,
  Overlay,
  Price,
  Prices,
  Quantity,
  Sidebar,
  TextContainer,
  Title,
  Image,
  TrashImage,
  PriceContainer,
  List
} from './styles'
import pizza from '../../assets/images/pizza.png'
import lixo from '../../assets/images/lixo.svg'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

import closeIcon from '../../assets/images/fechar.png'
import { useState } from 'react'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((count, actualValue) => {
      return (count += actualValue.price!)
    }, 0)
  }

  const formattedTotalPrice = getTotalPrice().toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  const formattedPrice = getTotalPrice().toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }
  const [openModal, setOpenModal] = useState(false)
  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <header>
          <img
            src={closeIcon}
            onClick={() => {
              closeCart()
            }}
          ></img>
        </header>
        <ul>
          {items.map((item) => (
            <List key={item.id}>
              <CartList>
                <Image src={item.image} alt={item.name} />
                <TextContainer>
                  <Title>{item.name}</Title>
                  <Price>
                    {item.price.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    })}
                  </Price>
                </TextContainer>
                <footer>
                  <TrashImage onClick={() => removeItem(item.id)} src={lixo} />
                </footer>
              </CartList>
            </List>
          ))}
        </ul>
        <Quantity>{items.length} pedido(s) no carrinho</Quantity>
        <PriceContainer>
          <Prices>Valor total</Prices>
          <Prices>{formattedTotalPrice}</Prices>
        </PriceContainer>
        <Button
          title="Clique aqui para continuar com a compra"
          type="button_cart"
        >
          Continuar para a entrega
        </Button>
      </Sidebar>
    </CartContainer>
  )
}
export default Cart
