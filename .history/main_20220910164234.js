const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

menuEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
/*   const isAsideClosed = aside.classList.contains('inactive')
  if (!isAsideClosed) {
    aside.classList.add('inactive')    
  }
  desktopMenu.classList.toggle("inactive"); */
  mobileMenu.classList.add('inactive');
  shoppingCartContainer.classList.add('inactive');

  desktopMenu.classList.toggle('inactive');
}

menuHamIcon.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu () {
  /* const isAsideClosed = aside.classList.contains('inactive')
  if (!isAsideClosed){
    aside.classList.add('inactive')
  }  
  mobileMenu.classList.toggle('inactive') */
    desktopMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleCarritoAside () {
  /* const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
  //si mobileMenu esta open, hay que cerrarlo
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive')
  }
  aside.classList.toggle('inactive') */
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    shoppingCartContainer.classList.toggle('inactive');
}

const cardsContainer = document.querySelector('.cards-container')

const productsList = []
productsList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productsList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productsList.push({
  name: 'PC',
  price: 200,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productsList.push({
  name: 'phone',
  price: 130,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productsList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productsList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productsList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productsList.push({
  name: 'car',
  price: 3000,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
/* modelo para maquetar desde js
<div class="product-card">
  <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
  <div class="product-info">
    <div>
      <p>$120,00</p>
      <p>Bike</p>
    </div>
    <figure>
      <img src="./icons/bt_add_to_cart.svg" alt="">
    </figure>
  </div>
</div>
*/

function renderProducts (arr) {
  for (product of arr) {
    const productCard = document.createElement('div')
    productCard.classList.add('product-card')
  
    const productImg = document.createElement('img')
    //product = {name, price, image} -> product.image
    productImg.setAttribute('src', product.image)
    productImg.addEventListener('click', console.log

    const productInfo = document.createElement('div')
    productInfo.classList.add('product-info')
  
    const productInfoDiv = document.createElement('div')
    const productPrice = document.createElement('p')
    productPrice.innerText = `$ ${product.price}`
    const productName = document.createElement('p')
    productName.innerText = product.name
    productInfoDiv.appendChild(productPrice)
    productInfoDiv.appendChild(productName)
  
    const productInfoFigure = document.createElement('figure')
    const productImgCart = document.createElement('img')
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
    productInfoFigure.appendChild(productImgCart)
  
    productInfo.appendChild(productInfoDiv)
    productInfo.appendChild(productInfoFigure)
  
    productCard.appendChild(productImg)
    productCard.appendChild(productInfo)
  
    cardsContainer.appendChild(productCard)  
  
  }
}

renderProducts(productsList)
