const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const menuHamIcon = document.querySelector(".menu")
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart")
const mobileMenu = document.querySelector(".mobile-menu")
const aside = document.querySelector(".product-detail")
const cardsContainer = document.querySelector(".cards-container")

menuEmail.addEventListener("click", toggleDesktopMenu)
menuHamIcon.addEventListener("click", toggleMobileMenu)
menuCarritoIcon.addEventListener("click", toggleCarritoAside)

function toggleDesktopMenu() {
  const isAaideClosed = aside.classList.contains("inactive")
  if (!isAaideClosed) {
    aside.classList.add("inactive")
  }

  // Funcion para que mi cuenta aparezca en Destokp
  desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu() {
  const isAaideClosed = aside.classList.contains("inactive")
  if (!isAaideClosed) {
    // Si el aside esta abierto lo cerramos para abrir el mobileMenu
    aside.classList.add("inactive")
  }
  // Funcion para que mi cuenta aparezca en Mobile
  mobileMenu.classList.toggle("inactive")
}
function toggleCarritoAside() {
  const ismobileMenuClosed = mobileMenu.classList.contains("inactive")

  if (!ismobileMenuClosed) {
    // Si el mobileMenu esta Abierto lo cerramos para abrir el aside
    mobileMenu.classList.add("inactive")
  }
  aside.classList.toggle("inactive")
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

function rederProducts(arr) {
  for (product of arr) {
    const prodructCard = document.createElement("div")
    prodructCard.classList.add("product-card")

    // product = {name, price, image}

    const productImg = document.createElement("img")
    productImg.setAttribute("src", product.image)

    const productInfo = document.createElement("div")
    productInfo.classList.add("product-info")

    const productInfoDiv = document.createElement("div")

    const productprice = document.createElement("p")
    productprice.innerText = "$" + product.price

    const productName = document.createElement("p")
    productName.innerText = product.name

    productInfoDiv.appendChild(productprice)
    productInfoDiv.appendChild(productName)

    const productInfoFigure = document.createElement("figure")
    const productImgCart = document.createElement("img")
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg")

    productInfoFigure.appendChild(productImgCart)

    productInfo.appendChild(productInfoDiv)
    productInfo.appendChild(productInfoFigure)

    prodructCard.appendChild(productImg)
    prodructCard.appendChild(productInfo)

    cardsContainer.appendChild(prodructCard)
  }
}

rederProducts(productList)
