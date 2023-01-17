const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon =  document.querySelector('.product-detail-close')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDestopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

function toggleDestopMenu (){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')
    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive')    
    }
    desktopMenu.classList.toggle('inactive')
}


function toggleMobileMenu (){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')
    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive')    
    }

    closeProductDetailAside()
    mobileMenu.classList.toggle('inactive')
}


function toggleCarritoAside () {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')    
    }
    
    const isproductDetailClosed = productDetailContainer.classList.contains('inactive')
    
    if(!isproductDetailClosed){
        productDetailContainer.classList.add('inactive')    
    }
    
    shoppingCartContainer.classList.toggle('inactive')
}

function openProductDetailAside () {
    shoppingCartContainer.classList.add('inactive')
    productDetailContainer.classList.remove('inactive')
}

function closeProductDetailAside () {
    const isproductDetailClosed = productDetailContainer.classList.contains('inactive')
    
    if(!isproductDetailClosed){
        productDetailContainer.classList.add('inactive')    
    }
    
    
    productDetailContainer.classList.add('inactive') 
}

const productList = []

productList.push({
    name: 'bike',
    price: 120,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'pantalla',
    price: 220,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'compu',
    price: 620,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});




/* Crear esta plantilla de HTML  desde Js 
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
*/

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const ProductImg = document.createElement('img')
        ProductImg.setAttribute('src', product.image)
        ProductImg.addEventListener('click', openProductDetailAside)
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div')
        
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price
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
    
        productCard.appendChild(ProductImg)
        productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
    
    
    }

}

renderProducts(productList)



