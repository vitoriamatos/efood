import {
  CardContainer,
  Description,
  Title,
  TitleContainer,
  Stars,
  StarsLabel,
  Image,
  Modal,
  ModalContent,
  Overlay,
  ModalContainer,
  Card,
  CardImage,
  CardText,
  DescriptionMenu
} from './styles'
import Button from '../Button'
import { useState } from 'react'

import closeIcon from '../../assets/images/fechar.png'

type Props = {
  image: string
  price: number
  id: number
  name: string
  description: string
  portion: string
}
const Menu = ({ image, price, id, name, description, portion }: Props) => {
  const [openModal, setOpenModal] = useState(false)
  const [modalUrl, setModalUrl] = useState('')
  const formattedPrice = price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
  const finalPrice = 'Adicionar ao carrinho - ' + formattedPrice
  return (
    <>
      <CardContainer>
        <Image src={image} alt={name} width="350" />

        <TitleContainer>
          <Title>{name}</Title>
          <Stars>
            <StarsLabel>{formattedPrice}</StarsLabel>
          </Stars>
        </TitleContainer>

        <Description>{description}</Description>
        <Button
          type="cart"
          title="carrinho"
          onClick={() => {
            setOpenModal(true)
            setModalUrl(name)
          }}
        >
          Adicionar ao carrinho
        </Button>
      </CardContainer>

      <Modal className={openModal ? 'visible' : ''}>
        <Overlay className={openModal ? 'visible' : ''} />

        <ModalContainer>
          <ModalContent>
            <Card>
              <CardImage src={image} alt={name} sizes="" />
              <CardText>
                <header>
                  <img
                    src={closeIcon}
                    onClick={() => {
                      setOpenModal(false)
                    }}
                  ></img>
                </header>
                <h3>{modalUrl}</h3>
                <DescriptionMenu>{description}</DescriptionMenu>
                <DescriptionMenu>Serve: de {portion}</DescriptionMenu>
                <Button type="cart" title="carrinho">
                  {finalPrice}
                </Button>
              </CardText>
            </Card>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </>
  )
}
export default Menu
