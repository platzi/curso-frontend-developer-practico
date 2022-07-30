import { shoppingCart } from "./shoppingCart.js"

const addProductCart = e => {
  const productCard = e.target.parentElement.parentElement.parentElement

  const img = productCard.children[0].src
  const price = productCard.children[1].children[0].firstChild.textContent
  const title = e.target.parentElement.lastChild.textContent

  const newPrice = price.slice(1)
  shoppingCart(img, newPrice, title)
}

export {addProductCart}