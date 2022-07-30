const mobileMenu = document.querySelector('.mobile-menu')
const burgerMenuIcon = document.querySelector('.menu')
const productDetail = document.querySelector('.product-detail')


import { isCarClose } from "./isCarClose.js"

const burgerMenu = () => {
  burgerMenuIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('inactive')
    productDetail.classList.add('inactive')                        
    isCarClose()
  })
}

export {burgerMenu}