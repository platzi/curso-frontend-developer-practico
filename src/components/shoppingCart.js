const myOrdersContent = document.querySelector('.my-order-content')
const order = document.querySelector('.order')
import {removeProductCart} from "./removeProductCart.js"

const shoppingCart = (src, value, name) => {
  const shoppCart = document.createElement('div')
  shoppCart.classList.add('shopping-cart')
  
  const figure = document.createElement('figure')
  const img = document.createElement('img')
  img.src = src
  const title = document.createElement('p')
  title.textContent = name
  const price = document.createElement('p')
  price.textContent = `$${value}`
  const iconClose = document.createElement('img')
  iconClose.src = './icons/icon_close.png'
  iconClose.alt = 'close'
  iconClose.addEventListener('click', removeProductCart)
  
  figure.appendChild(img)
  shoppCart.appendChild(figure)
  shoppCart.appendChild(title)
  shoppCart.appendChild(price)
  shoppCart.appendChild(iconClose)

  const reference = myOrdersContent.firstChild
  myOrdersContent.insertBefore(shoppCart, reference)
}

export {shoppingCart}