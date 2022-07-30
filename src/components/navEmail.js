const navEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const productDetail = document.querySelector('.product-detail')

import { isCarClose } from "./isCarClose.js"

const navEmailToggle = () => {
  navEmail.addEventListener('click', () => {
    desktopMenu.classList.toggle('inactive')
  
    productDetail.classList.add('inactive')
    isCarClose()
  })
}
export {navEmailToggle}