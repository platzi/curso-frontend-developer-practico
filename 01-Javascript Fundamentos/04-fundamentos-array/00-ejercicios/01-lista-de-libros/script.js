let bookCart = []

const ADD_TO_CART_ACTION = 'addToCart'
const REMOVE_FROM_CART_ACTION = 'removeFromCart'
const VIEW_CART_ACTION = 'viewCart'

function viewCart() {
  console.log('Current cart of books:', bookCart)
}

function performCartActions(action, newBook) {
  switch (action) {
    case ADD_TO_CART_ACTION:
      bookCart.push(newBook)
      break;
    case REMOVE_FROM_CART_ACTION:
      if (bookCart.length === 0) {
        console.log('Cart is empty. Not  to remove');
      } else {
        const removeBook = bookCart.pop()
        console.log(`Removed book from the cart: ${removeBook}`);
      }
      break;
    case VIEW_CART_ACTION:
      viewCart()
      break;
    default:
      console.log('Invalid actions. Please choose a vaid option');
  }
}

performCartActions(ADD_TO_CART_ACTION, 'Quien se ha llevado mi queso')
performCartActions(ADD_TO_CART_ACTION, 'El caballero de la armadura oxidada')
performCartActions(VIEW_CART_ACTION)