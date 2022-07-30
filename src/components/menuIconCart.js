const productCart = document.querySelector('.product-cart')
const menuIconCar = document.querySelector('.navbar-shopping-cart')
const desktopMenu = document.querySelector('.desktop-menu')
const burgerMenuIcon = document.querySelector('.menu')
const productDetail = document.querySelector('.product-detail')
const mobileMenu = document.querySelector('.mobile-menu')


const iconCart = () => {
  menuIconCar.addEventListener('click', () => {
    productCart.classList.toggle('inactive')
    const isBurgerMenuClose = burgerMenuIcon.classList.contains('inactive')
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive')
    const isProductDetailClose = productDetail.classList.contains('inactive')
    
    if(!isBurgerMenuClose || !isDesktopMenuClose || !isProductDetailClose) {
      mobileMenu.classList.add('inactive')
      desktopMenu.classList.add('inactive')
      productDetail.classList.add('inactive')
    }
  })
}

export {iconCart}