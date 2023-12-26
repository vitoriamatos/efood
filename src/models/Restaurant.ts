class Restaurant {
  id: number
  restaurant: string
  stars: string
  description: string
  image: string
  infos: string[]
  button: string

  constructor(
    id: number,
    restaurant: string,
    stars: string,
    description: string,
    image: string,
    infos: string[],
    button: string
  ) {
    this.id = id
    this.restaurant = restaurant
    this.stars = stars
    this.description = description
    this.image = image
    this.infos = infos
    this.button = button
  }
}
export default Restaurant
