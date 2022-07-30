import { setProductDetail } from "./setProdutDetail.js"
import { isCarClose } from "./isCarClose.js"

const productDetail = document.querySelector('.product-detail')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')



const openProductDetail = (e) => {
  productDetail.classList.remove('inactive')
  
  const isDesktopMenuClose = desktopMenu.classList.contains('inactive')
  const isMobileMenuClose = mobileMenu.classList.contains('inactive')

  if(!isDesktopMenuClose || !isMobileMenuClose) {
    desktopMenu.classList.add('inactive')
    mobileMenu.classList.add('inactive')
  }
  isCarClose()
  setProductDetail(e.target.parentNode)
}

export {openProductDetail}