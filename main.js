const menuEmail = document.querySelector(".navbar-email")
const menuHamIcon = document.querySelector(".menu")
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart")
const productDetailCloseIcon = document.querySelector(".product-detail-close")
const desktopMenu = document.querySelector(".desktop-menu")
const mobileMenu = document.querySelector(".mobile-menu")
const shoppingCartContainer = document.querySelector("#shoppingCartContainer")
const shoppingCartContainerFlechita = document.querySelector(
  "#shoppingCartContainerFlechita"
)
const productDetailContainer = document.querySelector("#productDetail")
const cardsContainer = document.querySelector(".cards-container")
const productCart = document.querySelector("my-order-content")

const nav = document.querySelector("nav")
const aside = document.querySelector("aside")


menuEmail.addEventListener("click", toggleDesktopMenu)
menuHamIcon.addEventListener("click", toggleMobileMenu)
menuCarritoIcon.addEventListener("click", toggleCarritoAside)
productDetailCloseIcon.addEventListener("click", closeProductDetailAside)
shoppingCartContainerFlechita.addEventListener("click", toggleCarritoAside)

// window.addEventListener('scroll', () => {

//   if (window.scrollY === 0) {
//     nav.classList.remove("fixed-top")
//     return;
//   }
//   if (window.scrollY >= 1) {
//     nav.classList.add("fixed-top")
//     return;
//   }
// })



// if (!isAsideClosed && window.scrollY >0) {
//   shoppingCartContainer.classList.add("fixed-top")
//   return;
// }
// if(!isAsideClosed && window.scrollY === 0){
//   shoppingCartContainer.classList.remove("fixed-top")
// }



function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive")

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add("inactive")
  }

  desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive")

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add("inactive")
  }

  closeProductDetailAside()

  mobileMenu.classList.toggle("inactive")
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive")

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive")
  }

  const isProductDetailClosed =
    productDetailContainer.classList.contains("inactive")

  if (!isProductDetailClosed) {
    productDetailContainer.classList.add("inactive")
  }

  shoppingCartContainer.classList.toggle("inactive")
}

function openProductDetailAside() {
  shoppingCartContainer.classList.add("inactive")
  productDetailContainer.classList.remove("inactive")
}

function closeProductDetailAside() {
  productDetailContainer.classList.add("inactive")
}

const email = document.querySelector(".navbar-email")


fetch('https://fakestoreapi.com/products')
  .then((response) => response.json())
  .then((json) => renderProducts(json))

// fetch("https://api.escuelajs.co/api/v1/products")
//   .then((response) => response.json())
//   .then((data) => renderProducts(data))





function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div")
    productCard.classList.add("product-card")

    // product= {name, price, image} -> product.image
    const productImg = document.createElement("img")
    productImg.setAttribute("src", product.image)
    productImg.addEventListener("click", openProductDetailAside)

    const productInfo = document.createElement("div")
    productInfo.classList.add("product-info")

    const productInfoDiv = document.createElement("div")

    const productPrice = document.createElement("p")
    productPrice.innerText = "$" + product.price
    const productName = document.createElement("p")
    productName.innerText = product.title

    productInfoDiv.appendChild(productPrice)
    productInfoDiv.appendChild(productName)

    const productInfoFigure = document.createElement("figure")
    const productImgCart = document.createElement("img")
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg")

    productInfoFigure.appendChild(productImgCart)

    productInfo.appendChild(productInfoDiv)
    productInfo.appendChild(productInfoFigure)

    productCard.appendChild(productImg)
    productCard.appendChild(productInfo)

    cardsContainer.appendChild(productCard)
  }
}

