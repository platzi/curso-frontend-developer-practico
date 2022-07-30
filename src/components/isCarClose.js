const productCart = document.querySelector('.product-cart')


const isCarClose = () => {
  const isproductCartClose = productCart.classList.contains('inactive')
  if(!isproductCartClose) {
    productCart.classList.add('inactive')
  }
}

export {isCarClose}