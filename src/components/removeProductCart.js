const removeProductCart = e => {
  const myOrder = e.target.parentElement
  myOrder.remove()
}
export {removeProductCart}