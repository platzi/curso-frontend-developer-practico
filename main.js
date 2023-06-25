//Variables del navbar
const deskMenuEmail = document.querySelector('.desk-menu')
const menuEmail = document.querySelector('.mail')
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarIcon = document.querySelector('.navbar-sopping-card')

//Variables productos
const shoppingCartContain = document.getElementById('shopping-cart-cont')
const productDetailContainer = document.getElementById('product-detail')

const productDetailCloseIcon = document.querySelector('.close-product-inf')
const cardsContainer = document.querySelector('.cards-container')
//Variables de la lista de productos
let productList = []

// INTERACCIÓN CON NAVBAR

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuCarIcon.addEventListener('click', toggleCarritoAside)
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)
console.log(productDetailCloseIcon);
function toggleDesktopMenu() {
   const  isShoppingCartContainClose = shoppingCartContain.classList.contains('inactive')
   //si el asisde carrito está abierto, hay que cerrarlo
   if (!isShoppingCartContainClose) {
   shoppingCartContain.classList.add('inactive')
   }
   deskMenuEmail.classList.toggle('inactive') //quita o pone la clase inactive si ya está puesta o no
}

function toggleMobileMenu() {
   const  isShoppingCartContainClose = shoppingCartContain.classList.contains('inactive')
   //si el asisde carrito está abierto, hay que cerrarlo
   if (!isShoppingCartContainClose) {
   shoppingCartContain.classList.add('inactive')
   }
   mobileMenu.classList.toggle('inactive')

   closeProductDetailAside()
}

function toggleCarritoAside() {
   const  isMobileMenuClose = mobileMenu.classList.contains('inactive') 
   //si el mobile menu está abierto, hay que cerrarlo
   if (!isMobileMenuClose) {
      mobileMenu.classList.add('inactive')
   }

   const  isProductDetailClose = productDetailContainer.classList.contains('inactive') 
   //si el mobile menu está abierto, hay que cerrarlo
   if (!isProductDetailClose) {
      productDetailContainer.classList.add('inactive')
   }


   shoppingCartContain.classList.toggle('inactive')

}

productList.push({
   name: 'Bike',
   price: 120,
   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
})

productList.push({
   name: 'Bike',
   price: 120,
   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
})
productList.push({
   name: 'Bike',
   price: 120,
   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
})

function renderProducts(products) {
   for (product of products) {

      const productCard = document.createElement('div')
      productCard.classList.add('product-card')
      const productImg = document.createElement('img')
      productImg.classList.add('img-art')
      productImg.setAttribute('src', product.image)
      productImg.addEventListener('click', openProductDetailAside)
      const productInfo = document.createElement('div')
      productInfo.classList.add('product-inf')
      const productInfoDiv = document.createElement('div')
      const productPrice = document.createElement('p')
      productPrice.innerText = `$ ${product.price} COP`
      const productName = document.createElement('p')
      productName.innerText = product.name
      productInfoDiv.appendChild(productPrice)
      productInfoDiv.appendChild(productName)
      const productFigure = document.createElement('figure')
      productFigure.classList.add('icon-status')
      const imgCart = document.createElement('img')
      imgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
      productFigure.appendChild(imgCart)
      productInfo.appendChild(productInfoDiv)
      productInfo.appendChild(productFigure)
      productCard.appendChild(productImg)
      productCard.appendChild(productInfo)
      cardsContainer.appendChild(productCard)
   }   
}

   renderProducts(productList)


   //abrir y cerrar el aside de compras

   function openProductDetailAside() {
      shoppingCartContain.classList.add('inactive')
      productDetailContainer.classList.remove('inactive')
   }
   
   function closeProductDetailAside() {
      productDetailContainer.classList.add('inactive')
   }