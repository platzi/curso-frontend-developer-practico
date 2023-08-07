const navbarEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")

navbarEmail.addEventListener("click", toogleDesktopMenu)

function toogleDesktopMenu() {
  const isAsideMenuOpen = !asideShoppingCart.classList.contains("inactive")
  if (isAsideMenuOpen) {
    asideShoppingCart.classList.toggle("inactive")
  }
  desktopMenu.classList.toggle("inactive")
}

const hamburguerMenu = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
hamburguerMenu.addEventListener("click", toggleMobileMenu)
function toggleMobileMenu() {
  const isAsideMenuOpen = !asideShoppingCart.classList.contains("inactive")
  if (isAsideMenuOpen) {
    asideShoppingCart.classList.toggle("inactive")
  }
  mobileMenu.classList.toggle("inactive")
}

const navbarShoppingCart = document.querySelector(".navbar-shopping-cart")
const asideShoppingCart = document.querySelector("#asideShoppingCart")
navbarShoppingCart.addEventListener("click", toggleCartAside)
function toggleCartAside() {
  const isMobileMenuOpen = !mobileMenu.classList.contains("inactive")
  const isDesktopMenuOpen = !desktopMenu.classList.contains("inactive")
  if (isMobileMenuOpen) {
    toggleMobileMenu()
  } else if (isDesktopMenuOpen) {
    toogleDesktopMenu()
  }
  asideShoppingCart.classList.toggle("inactive")
}

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

function renderProducts(arr) {
  for (product of arr) {
    const cardsContainer = document.querySelector(".cards-container")

    const productCart = document.createElement("div")
    productCart.classList.add("product-card")

    const img = document.createElement("img")
    img.setAttribute("src", product.img)
    productCart.appendChild(img)
    cardsContainer.appendChild(productCart)

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
