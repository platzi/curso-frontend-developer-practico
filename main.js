const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

// Menu hamburguesa
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector ('.mobile-menu')

// Menu carrito
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')

// Card container
const cardsContainer = document.querySelector('.cards-container')


menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', togglemenuHamIcon)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)


function toggleDesktopMenu(){
    aside.classList.add('inactive')
    desktopMenu.classList.toggle('inactive')
}

function togglemenuHamIcon(){
    aside.classList.add('inactive')
    mobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside () {
 mobileMenu.classList.add('inactive')
 desktopMenu.classList.add('inactive')
 aside.classList.toggle('inactive')
}

// Product List

const productList = []
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

})

productList.push({
    name: 'Pantalla',
    price: 120,
    image: 'https://conceptodefinicion.de/wp-content/uploads/2017/03/Pantalla.jpg'

})

productList.push({
    name: 'Reloj',
    price: 120,
    image: 'https://m.media-amazon.com/images/I/61Z1+6XhWwL._AC_SX466_.jpg'

})
// Pasando el div en js
/* <div class="product-card">
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

function rederProducts(arr){
    for (product of arr){
       const productCard= document.createElement('div')
       productCard.classList.add('product-card')
    
        const productImg = document.createElement('img')
    
        productImg.setAttribute('src', product.image)
    
        const productInfo= document.createElement('div')
       productInfo.classList.add('product-info')
    
       const productInfoDiv = document.createElement('div')
    
       const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price
    
       const productName = document.createElement('p')
    
       productName.innerText = product.name
    
    productInfoDiv.append(productPrice, productName)
    
       const productInfoFigure = document.createElement('figure')
    
       const productImgCart = document.createElement('img')
       productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
    
    productInfoFigure.appendChild(productImgCart)
    
    productInfo.append(productInfoDiv,productInfoFigure)
    productCard.append(productImg, productInfo)
    
    cardsContainer.append(productCard)
    }
}

rederProducts(productList)