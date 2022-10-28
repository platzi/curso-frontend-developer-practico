const menuEmail = document.querySelector(".navbar-email")
const bugerMenu = document.querySelector(".menu")
const desktopMenu = document.getElementById("desktop-menu")
const mobileMenu = document.querySelector(".mobile-menu")
const menuCartIcon = document.querySelector(".navbar-shopping-cart")
const shoppingCartContainer = document.querySelector("#shoppingCartContainer")

menuEmail.addEventListener("click", toggleDesktopMenu)
bugerMenu.addEventListener("click", toggleMobileMenu)
menuCartIcon.addEventListener("click", toggleCart)

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive")
}

function toggleCart() {
  shoppingCartContainer.classList.toggle("inactive")
}

const cardsContainer = document.getElementById("cards-container")
const productList = []
productList.push({
  name: "Bike",
  price: 120,
  image: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
})
productList.push({
  name: "Xbox Series S",
  price: 399,
  image: "https://images.unsplash.com/photo-1612801799890-4ba4760b6590?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
})
productList.push({
  name: "Scooter",
  price: 200,
  image: "https://images.unsplash.com/photo-1597260491619-bab87197869f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2126&q=80"
})

for (product of productList) {
  const productCard = document.createElement("div")
  productCard.classList.add("product-card")

  const img = document.createElement("img")
  img.setAttribute("src", product.image)

  const productInfo = document.createElement("div")
  productInfo.classList.add("product-info")

  const productInfoDiv = document.createElement("div")

  const productPrice = document.createElement("p")
  productPrice.innerText = `$${product.price} USD`
  const productName = document.createElement("p")
  productName.innerText = `${product.name}`

  productInfoDiv.appendChild(productPrice)
  productInfoDiv.appendChild(productName)

  const productInfoFigure = document.createElement("figure")
  const productImgCart = document.createElement("img")
  productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg")

  productInfoFigure.appendChild(productImgCart)

  productInfo.appendChild(productInfoDiv)
  productInfo.appendChild(productInfoFigure)

  productCard.appendChild(img)
  productCard.appendChild(productInfo)

  cardsContainer.appendChild(productCard)
}