import './style.css'

import { products } from "./products"
import { renderProducts } from "./render.Products"

const menuEmail = document.querySelector(".navbar-email")
const menuHamIcon = document.querySelector(".menu")
const menuCartIcon = document.querySelector(".navbar-shopping-cart")
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const desktopMenu = document.querySelector(".desktop-menu") as HTMLElement
const mobileMenu = document.querySelector(".mobile-menu") as HTMLElement
const shoppingCardContainer = document.querySelector("#shoppingCardContainer") as HTMLElement
export const productDetailContainer = document.querySelector('#productDetail') as HTMLElement
const cardsContainer = document.querySelector(".cards-container") as HTMLDivElement

menuEmail?.addEventListener("click", showMenu(desktopMenu))
menuHamIcon?.addEventListener("click", showMenu(mobileMenu))
menuCartIcon?.addEventListener("click", showMenu(shoppingCardContainer))
productDetailCloseIcon?.addEventListener("click", () => productDetailContainer.classList.add("inactive"))

export function showMenu(menuToShow:HTMLElement) {
  return () => {
    const itIsVisible = !menuToShow.classList.contains("inactive")

    if(itIsVisible) {
      menuToShow.classList.add("inactive")
    } else {
      // agregar inactive a absolutamente todo
      desktopMenu.classList.add("inactive")
      mobileMenu.classList.add("inactive")
      shoppingCardContainer.classList.add("inactive")
      productDetailContainer.classList.add("inactive")
    
      // quitar inactive a un menu especifico
      menuToShow.classList.toggle("inactive")
    }
  }
}

renderProducts(cardsContainer, products)