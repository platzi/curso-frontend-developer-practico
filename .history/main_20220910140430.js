const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
/*   const isAsideClosed = aside.classList.contains('inactive')
  if (!isAsideClosed) {
    aside.classList.add('inactive')    
  }
  desktopMenu.classList.toggle("inactive"); */
  mobileMenu.classList.add('inactive');
  aside.classList.add('inactive');

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
    aside.classList.add('inactive');
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
    aside.classList.toggle('inactive');
}

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
/*
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
for (product of productsList) {
  const productCard = document.createElement('div')
  productCard.classList.add('product-card')

  const img = document.createElement('img')
  //product = {name, price, image} -> product.image
  img.setAttribute('src', product.image)

  const productInfo = document.createElement('div')
  productInfo.classList.add('product-info')

  const productInfoDiv = document.createElement('div')

  const productPrice = document.createElement('p')
  productPrice.innerText = product.price

  const productName = document.createElement('p')
  productName.innerText = product.name




}