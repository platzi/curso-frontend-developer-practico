import './style.css'

import { products } from "./products"
import { renderProducts } from "./render.Products"

const menuEmail = document.querySelector(".navbar-email")
const menuHamIcon = document.querySelector(".menu")
const menuCartIcon = document.querySelector(".navbar-shopping-cart")
const desktopMenu = document.querySelector(".desktop-menu") as HTMLElement
const mobileMenu = document.querySelector(".mobile-menu") as HTMLElement
const aside = document.querySelector(".product-detail") as HTMLElement
const cardsContainer = document.querySelector(".cards-container") as HTMLDivElement

menuEmail?.addEventListener("click", showMenu(desktopMenu))
menuHamIcon?.addEventListener("click", showMenu(mobileMenu))
menuCartIcon?.addEventListener("click", showMenu(aside))

function showMenu(menuToShow:HTMLElement) {
  return () => {
    const itIsVisible = !menuToShow.classList.contains("inactive")

    if(itIsVisible) {
      menuToShow.classList.add("inactive")
    } else {
      // agregar inactive a absolutamente todo
      desktopMenu.classList.add("inactive")
      mobileMenu.classList.add("inactive")
      aside.classList.add("inactive")
    
      // quitar inactive a un menu especifico
      menuToShow.classList.toggle("inactive")
    }
  }
}

renderProducts(cardsContainer, products)