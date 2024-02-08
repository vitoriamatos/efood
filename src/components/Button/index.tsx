import {
  ButtonCart,
  ButtonCartPayment,
  ButtonContainer,
  ButtonLink
} from './styles'

type Props = {
  type: 'button' | 'link' | 'cart' | 'button_cart' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children: string
  disabled?: boolean
}

const Button = ({ type, title, to, onClick, children }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer type="button" title={title} onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }

  if (type === 'submit') {
    return (
      <ButtonCartPayment type="submit" title={title} onClick={onClick}>
        {children}
      </ButtonCartPayment>
    )
  }

  if (type === 'button_cart') {
    return (
      <ButtonCartPayment type="button" title={title} onClick={onClick}>
        {children}
      </ButtonCartPayment>
    )
  }

  if (type === 'cart') {
    return (
      <ButtonCart onClick={onClick} title={title}>
        {children}
      </ButtonCart>
    )
  }
  return (
    <ButtonLink to={to as string} title={title}>
      {children}
    </ButtonLink>
  )
}

export default Button
