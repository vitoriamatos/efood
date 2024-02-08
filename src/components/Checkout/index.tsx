import React, { useState } from 'react'
import {
  Sidebar,
  Overlay,
  Quantity,
  Prices,
  CheckoutContainer,
  Label,
  Input,
  CheckoutArea,
  DeliveryArea,
  FormStep1,
  FormStep2,
  CartArea,
  FormStep3,
  SucessText,
  SucessTitle,
  TitlePayment
} from './styles' // Reuse styles from Cart
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { clear, closeCheckout } from '../../store/reducers/cart'
import Button from '../Button'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'
import { Navigate } from 'react-router-dom'

const Checkout = () => {
  const { isOpen, items, isOpenCheckout } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()
  const [currentStep, setCurrentStep] = useState(1)

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1)
  }
  const prevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1))
  }
  const closeCart = () => {
    dispatch(closeCheckout())
  }

  const clearLocalStorageAndCloseCheckout = () => {
    dispatch(clear())
    closeCart()
  }

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price, 0)
  }

  const totalAmount = calculateTotal()
  const [purchase, { isLoading, isError, data, isSuccess }] =
    usePurchaseMutation()
  const form = useFormik({
    initialValues: {
      ClientName: '',
      address: '',
      citty: '',
      postalCode: '',
      number: '',
      complement: '',
      CartName: '',
      CartNumber: '',
      cvv: '',
      month: '',
      year: ''
    },
    validationSchema: Yup.object({
      ClientName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 Caracteres')
        .required('O Campo é obrigatório'),
      address: Yup.string()
        .min(5, 'O endereço ter pelo menos 5 Caracteres')
        .required('O Campo é obrigatório'),
      citty: Yup.string()
        .min(5, 'O nome da cidade ter pelo menos 5 Caracteres')
        .required('O Campo é obrigatório'),
      postalCode: Yup.string()
        .min(9, 'O cep precisa ter pelo menos 8 Caracteres')
        .max(9, 'O CEP precisa ter 8 caracteres')
        .required('O Campo é obrigatório'),
      number: Yup.string()
        .min(2, 'O número da casa precisa ter pelo menos 2 Caracteres')
        .required('O Campo é obrigatório'),
      complement: Yup.string().min(
        3,
        'O nome precisa ter pelo menos 3 Caracteres'
      ),
      CartName: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 Caracteres')
        .required('O Campo é obrigatório'),
      CartNumber: Yup.string()
        .min(13, 'O campo precisa ter pelo menos 13 Caracteres')
        .max(16, 'O campo só pode ter 16 caracteres')
        .required('O Campo é obrigatório'),
      cvv: Yup.string()
        .min(3, 'O campo precisa ter pelo menos 3 Caracteres')
        .max(3, 'O campo só pode ter 3 Caracteres')
        .required('O Campo é obrigatório'),
      month: Yup.string()
        .min(2, 'O campo precisa ter pelo menos 2 Caracteres')
        .max(2, 'O campo só pode ter 2 Caracteres')
        .required('O Campo é obrigatório'),
      year: Yup.string()
        .min(2, 'O campo precisa ter pelo menos 2 Caracteres')
        .max(2, 'O campo só pode ter 2 Caracteres')
        .required('O Campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        products: [
          {
            id: 1,
            price: 0
          }
        ],
        delivery: {
          receiver: values.ClientName,
          address: {
            description: '',
            city: values.citty,
            zipCode: values.postalCode,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.CartName,
            number: values.CartNumber,
            code: Number(values.cvv),
            expires: {
              month: Number(values.month),
              year: Number(values.year)
            }
          }
        }
      })
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isChange = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isChange && isInvalid) return message
    return ''
  }
  const checkInputHasError = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  if (items.length === 0) {
    return <Navigate to="/" />
  }

  const handleStep1Blur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target

    // Ativar a validação do campo quando ele perde o foco
    form.setFieldTouched(name, true, false)
  }

  // Função para manipular a mudança de entrada nos campos do formulário
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    // Atualize os valores do formulário
    form.handleChange(e)

    // Execute a validação do campo alterado
    form.validateField(name)
    // Verifique se todos os campos obrigatórios da etapa 1 estão preenchidos
    const ClientName = form.values.ClientName
    const address = form.values.address
    const citty = form.values.address
    const postalCode = form.values.postalCode
    const number = form.values.number

    // form.validateField(name).then(() => {
    //   // Verifique se todos os campos obrigatórios da etapa 1 estão preenchidos
    //   const isStep1Valid =
    //     form.values.ClientName !== '' &&
    //     form.values.address !== '' &&
    //     form.values.citty !== '' &&
    //     form.values.postalCode !== '' &&
    //     form.values.number !== ''

    //   setIsFormValidStep1(isStep1Valid)
    // })
  }

  // Função para manipular o evento de foco nos campos do formulário
  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target

    // Ative a validação do campo quando ele perde o foco
    form.setFieldTouched(name, true, false)
  }

  // Função para manipular o clique no botão "Continuar com o pagamento"
  const handleContinuePaymentClick = () => {
    // Verifique se todos os campos obrigatórios da etapa 1 estão preenchidos
    console.log(form.values.ClientName !== '')
    console.log(form.values.address !== '')
    console.log(form.values.citty !== '')
    console.log(form.values.postalCode !== '')
    console.log(form.values.number !== '')

    const isStep1Valid =
      form.values.ClientName !== '' &&
      form.values.address !== '' &&
      form.values.citty !== '' &&
      form.values.postalCode !== '' &&
      form.values.number !== ''
    console.log(isStep1Valid)
    // Se os campos estiverem preenchidos corretamente, avance para a próxima etapa
    if (isStep1Valid) {
      nextStep()
    } else {
      // Caso contrário, exiba uma mensagem de alerta
      alert(
        'Por favor, preencha todos os campos obrigatórios antes de prosseguir.'
      )
    }
  }
  return (
    <CheckoutContainer className={isOpenCheckout ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <Quantity>Entrega</Quantity>
        <CheckoutArea>
          {isSuccess ? (
            <FormStep3 style={{ display: 'block' }}>
              <SucessTitle>
                Pedido Realizado - Numero: {data.orderId}{' '}
              </SucessTitle>

              <SucessText>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </SucessText>
              <SucessText>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
              </SucessText>
              <SucessText>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </SucessText>
              <SucessText>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </SucessText>
              <Button
                type="button_cart"
                title="Pagamento"
                onClick={clearLocalStorageAndCloseCheckout}
              >
                Concluir
              </Button>
            </FormStep3>
          ) : (
            <form onSubmit={form.handleSubmit}>
              <FormStep1
                style={{ display: currentStep === 1 ? 'block' : 'none' }}
              >
                <Label htmlFor="ClientName">Quem irá receber</Label>
                <Input
                  id="ClientName"
                  type="text"
                  name="ClientName"
                  value={form.values.ClientName}
                  onInput={handleInputChange}
                  onBlur={handleInputBlur}
                  className={checkInputHasError('ClientName') ? 'error' : ''}
                  placeholder="Seu nome"
                />
                <small>
                  {getErrorMessage('ClientName', form.errors.ClientName)}
                </small>
                <Label htmlFor="address">Endereço</Label>
                <Input
                  id="address"
                  type="text"
                  name="address"
                  value={form.values.address}
                  onInput={handleInputChange}
                  onBlur={handleInputBlur}
                  className={checkInputHasError('address') ? 'error' : ''}
                  placeholder="Nome da Rua"
                />
                <small>{getErrorMessage('address', form.errors.address)}</small>
                <Label htmlFor="citty">Cidade</Label>
                <Input
                  id="citty"
                  type="text"
                  name="citty"
                  value={form.values.citty}
                  onInput={handleInputChange}
                  onBlur={handleInputBlur}
                  className={checkInputHasError('citty') ? 'error' : ''}
                  placeholder="Cidade"
                />
                <small>{getErrorMessage('citty', form.errors.citty)}</small>
                <DeliveryArea>
                  <div>
                    <Label htmlFor="postalCode">CEP</Label>
                    <Input
                      id="postalCode"
                      type="text"
                      name="postalCode"
                      value={form.values.postalCode}
                      onInput={handleInputChange}
                      onBlur={handleInputBlur}
                      className={
                        checkInputHasError('postalCode') ? 'error' : ''
                      }
                      placeholder="CEP"
                    />
                    <small>
                      {getErrorMessage('postalCode', form.errors.postalCode)}
                    </small>
                  </div>

                  <div>
                    <Label htmlFor="number">Number</Label>
                    <Input
                      id="number"
                      type="text"
                      name="number"
                      value={form.values.number}
                      onInput={handleInputChange}
                      onBlur={handleInputBlur}
                      className={checkInputHasError('number') ? 'error' : ''}
                      placeholder="Número da Residência"
                    />
                    <small>
                      {getErrorMessage('number', form.errors.number)}
                    </small>
                  </div>
                </DeliveryArea>
                <Label htmlFor="complement">Complemento (opcional)</Label>
                <Input
                  id="complement"
                  type="text"
                  name="complement"
                  value={form.values.complement}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('complement') ? 'error' : ''}
                  placeholder="Opcional"
                />
                <small>
                  {getErrorMessage('complement', form.errors.complement)}
                </small>
                <Button
                  type="button_cart"
                  title="Pagamento"
                  onClick={() => handleContinuePaymentClick()}
                >
                  Continuar com o pagamento
                </Button>
                <Button
                  type="button_cart"
                  title="Pagamento"
                  onClick={() => closeCart()}
                >
                  Voltar para o carrinho
                </Button>
              </FormStep1>

              <FormStep2
                style={{ display: currentStep === 2 ? 'block' : 'none' }}
              >
                <TitlePayment>
                  Pagamento - Valor a receber {totalAmount.toFixed(2)}
                </TitlePayment>

                <Label htmlFor="CartName">Nome no cartão</Label>
                <Input
                  id="CartName"
                  type="text"
                  name="CartName"
                  value={form.values.CartName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('CartName') ? 'error' : ''}
                  placeholder="Nome do Titular escrito no cartão"
                />
                <small>
                  {getErrorMessage('CartName', form.errors.CartName)}
                </small>
                <CartArea>
                  <div>
                    <Label htmlFor="CartNumber">Número do cartão</Label>
                    <Input
                      id="CartNumber"
                      type="number"
                      name="CartNumber"
                      value={form.values.CartNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={
                        checkInputHasError('CartNumber') ? 'error' : ''
                      }
                      placeholder="Número do Cartão"
                    />
                    <small>
                      {getErrorMessage('CartNumber', form.errors.CartNumber)}
                    </small>
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      type="text"
                      name="cvv"
                      value={form.values.cvv}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('number') ? 'error' : ''}
                      maxLength={3}
                      placeholder="123"
                    />
                    <small>{getErrorMessage('cvv', form.errors.cvv)}</small>
                  </div>
                </CartArea>

                <DeliveryArea>
                  <div>
                    <Label htmlFor="month">Mês do vencimento</Label>
                    <Input
                      id="month"
                      type="text"
                      name="month"
                      value={form.values.month}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      maxLength={2}
                      className={checkInputHasError('month') ? 'error' : ''}
                      placeholder="28"
                    />
                    <small>{getErrorMessage('month', form.errors.month)}</small>
                  </div>
                  <div>
                    <Label htmlFor="year">Ano do vencimento</Label>
                    <Input
                      id="year"
                      type="text"
                      name="year"
                      value={form.values.year}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('year') ? 'error' : ''}
                      maxLength={2}
                      placeholder="02"
                    />
                    <small>{getErrorMessage('year', form.errors.year)}</small>
                  </div>
                </DeliveryArea>

                <Button type="submit" title="Pagamento">
                  Continuar com o pagamento
                </Button>
                <Button
                  type="button_cart"
                  title="Pagamento"
                  onClick={() => prevStep()}
                >
                  Voltar para a edição de endereço
                </Button>
              </FormStep2>
            </form>
          )}
        </CheckoutArea>
      </Sidebar>
    </CheckoutContainer>
  )
}

export default Checkout
