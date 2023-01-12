const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const navShoppingCart = document.querySelector('.navbar-shopping-cart')
const asideOrder = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
navShoppingCart.addEventListener('click', toggleAsideOrder)

function toggleDesktopMenu() {
    asideOrder.classList.add('inactive')
    desktopMenu.classList.toggle('inactive')
}
function toggleMobileMenu() {
    asideOrder.classList.add('inactive')
    mobileMenu.classList.toggle('inactive')
 }
 function toggleAsideOrder() {
    desktopMenu.classList.add('inactive')
    asideOrder.classList.toggle('inactive')
    mobileMenu.classList.add('inactive')
 }

 /*     Lista de Productos       */
const cardsContainer = document.querySelector('.cards-container')
 const productList = []
 
 productList.push({
    name: 'bike',
    price: 120.00,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
 })
 productList.push({
    name: 'surtidor',
    price: 95.00,
    image: 'https://images.pexels.com/photos/15062513/pexels-photo-15062513.jpeg?auto=compress&cs=tinysrgb&w=1600',
 })
 productList.push({
    name: 'reloj',
    price: 50.00,
    image: 'https://images.pexels.com/photos/14750487/pexels-photo-14750487.jpeg?auto=compress&cs=tinysrgb&w=1600',
 })
 
function renderProducts(array) {
    for (product of array) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image)
        
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

renderProducts(productList)