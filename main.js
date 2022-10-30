const menuEmail = document.querySelector('.navbar-email')
const desktopMenu= document.querySelector('.desktop-menu')
const mobileMenu= document.querySelector('.mobile-menu')
const menuHamb = document.querySelector('.menu')
const orderList = document.querySelector('.product-detail')
const shoppingCartImg = document.querySelector('.shopping-cart-img')

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamb.addEventListener('click', toggleHambMenu)
shoppingCartImg.addEventListener('click', toggleOrderList)

function toggleOrderList(){
    orderList.classList.toggle('inactive')
    desktopMenu.classList.add('inactive')
    mobileMenu.classList.add('inactive')
   
}

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
    orderList.classList.add('inactive')
    
}
function toggleHambMenu(){
    mobileMenu.classList.toggle('inactive')
    orderList.classList.add('inactive')
    
}

