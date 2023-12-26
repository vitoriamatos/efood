class Menu {
  id: number
  restaurant: string
  name: string
  value: string
  description: string
  image: string
  infos: string[]
  button: string

  constructor(
    id: number,
    restaurant: string,
    name: string,
    value: string,
    description: string,
    image: string,
    infos: string[],
    button: string
  ) {
    this.id = id
    this.restaurant = restaurant
    this.name = name
    this.value = value
    this.description = description
    this.image = image
    this.infos = infos
    this.button = button
  }
}
export default Menu
