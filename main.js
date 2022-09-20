const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const productDetailCloseIcon = document.querySelector ('.product-detail-close')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarIcon = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const cardsContainer = document.querySelector('.cards-container')
const productDetailContainer = document.querySelector('#productDetail')



menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuCarIcon.addEventListener('click', toggleCarritoAside)
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu (){
    const isAsideMenuClosed = shoppingCartContainer.classList.contains('inactive')
    if (!isAsideMenuClosed) {
        shoppingCartContainer.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu (){
    closeProductDetailAside()
    const isAsideMenuClosed = shoppingCartContainer.classList.contains('inactive')
    if (!isAsideMenuClosed) {
        shoppingCartContainer.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside (){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive')
   if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive')
    }

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }
    
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive')
    }

    shoppingCartContainer.classList.toggle('inactive')
    
}
function openProductDetailAside ( ){
    shoppingCartContainer.classList.add('inactive')
    productDetailContainer.classList.remove('inactive')
    
}

function closeProductDetailAside ( ){
    productDetailContainer.classList.add('inactive')
}

const productList = [];
productList.push({
    name:'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name:'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name:'PC Gamer',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
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
function renderProducts (arr) {
    for (product of arr) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
     
        const img = document.createElement('img')
        img.setAttribute('src', product.image)
        img.addEventListener('click', openProductDetailAside)
     
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
     
        const productInfoDiv = document.createElement('div')
     
        const productPrice = document.createElement('p');
        productPrice.innerHTML = '$' + product.price
     
        const productName = document.createElement('p');
        productName.innerHTML = product.name
     
        const productInfoFigure = document.createElement('figure')
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
     
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
        productInfoFigure.appendChild(productImgCart)
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
     
        productCard.appendChild(img)
        productCard.appendChild(productInfo)
     
        cardsContainer.appendChild(productCard)
     }
}

renderProducts(productList)