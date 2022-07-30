const cardsContainer = document.querySelector('.cards-container')
const desktopMenu = document.querySelector('.desktop-menu')
const navbarEmail = document.querySelector('.navbar-email')
const menu = document.querySelector('.menu')
const navbarShoppingCard = document.querySelector('.navbar-shopping-cart')
const menuMobile = document.querySelector('.mobile-menu')
const productDetail = document.querySelector('.product-detail')
const productDetailTwo = document.querySelector('.product-detail-two')
const productDetailTwoClose = document.querySelector('.product-detail-two-close')


const toggleDesktopMenu = () =>{
    const isProductDetailClosed = productDetail.classList.contains('inactive')
    const isProductDetailTwoClosed = productDetailTwo.classList.contains('inactive')

    if(!isProductDetailClosed || !isProductDetailTwoClosed){
        productDetail.classList.add('inactive')
        productDetailTwo.classList.add('inactive')
    }
    
    desktopMenu.classList.toggle('inactive')
}

const toggleMenuMobile = () =>{
    const isProductDetailClosed = productDetail.classList.contains('inactive')
    const isProductDetailTwoClosed = productDetailTwo.classList.contains('inactive')
    
    if(!isProductDetailClosed || !isProductDetailTwoClosed){
        productDetail.classList.add('inactive')
        productDetailTwo.classList.add('inactive')
    }
    
    menuMobile.classList.toggle('inactive')
}

const toggleProductDetail = () =>{
    const isMenuMobileClosed = menuMobile.classList.contains('inactive')
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    const isProductDetailTwoClosed = productDetailTwo.classList.contains('inactive')
    
    if(!isMenuMobileClosed || !isDesktopMenuClosed || !isProductDetailTwoClosed ){
        menuMobile.classList.add('inactive')
        desktopMenu.classList.add('inactive')
        productDetailTwo.classList.add('inactive')
    }
    
    productDetail.classList.toggle('inactive')
}

const closeProductDetail = () =>{
    productDetailTwo.classList.contains('inactive')? null : productDetailTwo.classList.add('inactive')
}


const openProductDetailAside = () =>{
    const isMenuMobileClosed = menuMobile.classList.contains('inactive')
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    const isProductDetailClosed = productDetail.classList.contains('inactive')

    

    if(!isMenuMobileClosed || !isDesktopMenuClosed || !isProductDetailClosed){
        menuMobile.classList.add('inactive')
        desktopMenu.classList.add('inactive')
        productDetail.classList.add('inactive')
    }

    productDetailTwo.classList.remove('inactive')
}

navbarEmail.addEventListener('click', toggleDesktopMenu)
menu.addEventListener('click', toggleMenuMobile)
navbarShoppingCard.addEventListener('click', toggleProductDetail)
productDetailTwoClose.addEventListener('click', closeProductDetail)

const productList = [{
    name: 'Bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},{
    name: 'Bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},{
    name: 'Bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},{
    name: 'Bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},{
    name: 'Bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
}
]

const items = productList.map(it=>
    `
    <div class="product-card">
    <img id="img" src=${it.image} alt="" onclick="openProductDetailAside()">
    <div class="product-info">
    <div>
    <p>${it.price}</p>
    <p>${it.name}</p>
    </div>
    <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
        </div>
        </div>
            `).join('')
        
cardsContainer.innerHTML= items