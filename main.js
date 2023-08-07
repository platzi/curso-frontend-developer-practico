const navbarEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const hamburguerMenu = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const navbarShoppingCart = document.querySelector(".navbar-shopping-cart")
const asideShoppingCart = document.querySelector("#asideShoppingCart")
const asideProductDetail = document.querySelector('#asideProductDetail')
const productDetailCloseIcon = document.querySelector(".product-detail-close")

const isAsideMenuOpen = !asideShoppingCart.classList.contains("inactive")
const isAsideProductDetailOpen = !asideProductDetail.classList.contains("inactive")
const isMobileMenuOpen = !mobileMenu.classList.contains("inactive")
const isDesktopMenuOpen = !desktopMenu.classList.contains("inactive")

navbarEmail.addEventListener("click", toogleDesktopMenu)
hamburguerMenu.addEventListener("click", toggleMobileMenu)
navbarShoppingCart.addEventListener("click", toggleCartAside)
productDetailCloseIcon.addEventListener("click", closeAsideProductDetail)

const productList = [
  {
    name: "Bike",
    price: 130,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Polo",
    price: 50,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Pizza",
    price: 15,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Muela",
    price: 5,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Polo",
    price: 50,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Pizza",
    price: 15,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "Muela",
    price: 5,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
]

function toogleDesktopMenu() {
  closeAsideProductDetail()
  closeAsideShoppingCart()
  desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu() {
  closeAsideProductDetail()
  closeAsideShoppingCart()
  mobileMenu.classList.toggle("inactive")
}

function toggleCartAside() {
  closeAsideProductDetail()
  closeMobileMenu()
  closeDesktopMenu()
  asideShoppingCart.classList.toggle("inactive")
}

function openAsideProductDetail() {
  closeAsideShoppingCart()
  closeMobileMenu()
  closeDesktopMenu()
  asideProductDetail.classList.remove("inactive")
 }

 function closeDesktopMenu() {
  desktopMenu.classList.add("inactive")
 }

 function closeMobileMenu() {
  mobileMenu.classList.add("inactive")
 }
 
 function closeAsideShoppingCart() {
  asideShoppingCart.classList.add("inactive")
 }
 function closeAsideProductDetail() {
  asideProductDetail.classList.add("inactive")
}

function renderProducts(arr) {
  for (product of arr) {
    const cardsContainer = document.querySelector(".cards-container")

    const productCart = document.createElement("div")
    productCart.classList.add("product-card")

    const img = document.createElement("img")
    img.setAttribute("src", product.img)
    productCart.appendChild(img)
    cardsContainer.appendChild(productCart)


    cardsContainer.addEventListener('click', openAsideProductDetail)


    const productInfo = document.createElement("div")
    productInfo.classList.add("product-info")
    productCart.appendChild(productInfo)

    const productInfoDiv = document.createElement("div")

    const priceProduct = document.createElement("p")
    priceProduct.innerText = "$" + product.price
    productInfoDiv.appendChild(priceProduct)

    const nameProduct = document.createElement("p")
    nameProduct.innerText = product.name
    productInfoDiv.appendChild(nameProduct)

    productInfo.appendChild(productInfoDiv)

    const productInfoFigure = document.createElement("figure")

    const imgProductInfoFigure = document.createElement("img")
    imgProductInfoFigure.setAttribute("src", "./icons/bt_add_to_cart.svg")
    productInfoFigure.appendChild(imgProductInfoFigure)

    productInfo.appendChild(productInfoFigure)
  }
}

renderProducts(productList)
