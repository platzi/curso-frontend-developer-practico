const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const menuHamIcon = document.querySelector(".menu")
const menuCarIcon = document.querySelector(".navbar-shopping-cart")
const mobileMenu = document.querySelector(".mobile-menu")
const shoppingCartContainer = document.querySelector("#shoppingCartContainer")
const productDetail = document.querySelector("#productDetail")
const cardsContainer = document.querySelector(".cards-container")
const iconClosedProductDetail = document.querySelector(".product-detail-close")

menuEmail.addEventListener("click", toggleDesktopMenu)
menuHamIcon.addEventListener("click", toggleMobileMenu)
menuCarIcon.addEventListener("click", toggleCarAside)
iconClosedProductDetail.addEventListener("click", closedProductDetail)

function toggleDesktopMenu() {
  shoppingCartContainer.classList.add("inactive")
  productDetail.classList.add("inactive")
  desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu() {
  shoppingCartContainer.classList.add("inactive")
  productDetail.classList.add("inactive")
  mobileMenu.classList.toggle("inactive")
}

function toggleCarAside() {
  mobileMenu.classList.add("inactive")
  desktopMenu.classList.add("inactive")
  productDetail.classList.add("inactive")
  shoppingCartContainer.classList.toggle("inactive")
}
function open() {
  productDetail.classList.remove("inactive")
}

function closedProductDetail() {
  mobileMenu.classList.add("inactive")
  desktopMenu.classList.add("inactive")
  shoppingCartContainer.classList.add("inactive")
  productDetail.classList.toggle("inactive")
}

const productList = []

productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
  name: "Screen",
  price: 400,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
  name: "Laptop",
  price: 600,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div")
    productCard.classList.add("product-card")

    const productImg = document.createElement("img")
    productImg.setAttribute("src", product.image)
    productImg.addEventListener("click", open)

    const productInfo = document.createElement("div")
    productInfo.classList.add("product-info")

    const productInfoDiv = document.createElement("div")
    const productPrice = document.createElement("p")
    productPrice.innerText = "$" + product.price
    const productName = document.createElement("p")
    productName.innerText = product.name
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
renderProducts(productList)
