import { ButtonCart, ButtonContainer, ButtonLink } from './styles'

type Props = {
  type: 'button' | 'link' | 'cart'
  title: string
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ type, title, to, onClick, children }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer type="button" title={title} onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }

  if (type === 'cart') {
    return (
      <ButtonCart to={to as string} title={title}>
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
