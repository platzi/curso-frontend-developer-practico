const menuEmail = document.querySelector(".navbar-email")
const menuHamIcon = document.querySelector(".menu")
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart")
const productDetailCloseIcon = document.querySelector(".product-detail-close")
const desktopMenu = document.querySelector(".desktop-menu")
const mobileMenu = document.querySelector(".mobile-menu")
const shoppingCartContainer = document.querySelector("#shoppingCartContainer")
const productDetailContainer = document.querySelector("#productDetail")
const cardsContainer = document.querySelector(".cards-container")

menuEmail.addEventListener("click", toggleDesktopMenu)
menuHamIcon.addEventListener("click", toggleMobileMenu)
menuCarritoIcon.addEventListener("click", toggleCarritoAside)
productDetailCloseIcon.addEventListener("click", closeProductDetailAside)

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

const productList = []
productList.push({
  name: "Byke",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
  name: "Tarjeta Grafica",
  price: 430,
  image:
    "https://images.pexels.com/photos/10558582/pexels-photo-10558582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
})
productList.push({
  name: "Mazda cx-30",
  price: 34.678,
  image:
    "https://http2.mlstatic.com/D_NQ_NP_2X_781562-MCO54647448121_032023-F.webp",
})
productList.push({
  name: "Yamaha V80",
  price: 2035,
  image:
    "https://tecnimotos.com/wp-content/uploads/2016/06/manual-para-mecanicos-de-la-moto-yamha-v80-modelo-2000.jpg",
})
productList.push({
  name: "Poco X5 Pro",
  price: 360,
  image:
    "https://gsmphone.co/wp-content/uploads/2023/02/POCO-X5-Pro-4-635x635-1.jpeg",
})
productList.push({
  name: "Monitor",
  price: 278,
  image:
    "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
})
productList.push({
  name: "Tarjeta Grafica",
  price: 430,
  image:
    "https://images.pexels.com/photos/10558582/pexels-photo-10558582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
})
productList.push({
  name: "Mazda cx-30",
  price: 34.678,
  image:
    "https://http2.mlstatic.com/D_NQ_NP_2X_781562-MCO54647448121_032023-F.webp",
})
productList.push({
  name: "Yamaha V80",
  price: 2035,
  image:
    "https://tecnimotos.com/wp-content/uploads/2016/06/manual-para-mecanicos-de-la-moto-yamha-v80-modelo-2000.jpg",
})
productList.push({
  name: "Poco X5 Pro",
  price: 360,
  image:
    "https://gsmphone.co/wp-content/uploads/2023/02/POCO-X5-Pro-4-635x635-1.jpeg",
})
productList.push({
  name: "Monitor",
  price: 278,
  image:
    "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
})

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
