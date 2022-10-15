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

menuEmail.addEventListener("click", toggleDesktopMenu)
menuHamIcon.addEventListener("click", toggleMobileMenu)
menuCarritoIcon.addEventListener("click", toggleCarritoAside)
productDetailCloseIcon.addEventListener("click", closeProductDetailAside)
shoppingCartContainerFlechita.addEventListener("click", toggleCarritoAside)

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



fetch('https://fakestoreapi.com/products')
  .then((response) => response.json())
  .then((data) => renderProducts(data))

// fetch("https://api.escuelajs.co/api/v1/products")
//   .then((response) => response.json())
//   .then((data) => renderProducts(data))


//antigua lista de productos, manualmente. Ahora se hace con el fetch y la api.
// const productList = []
// productList.push({
//   name: "Bike",
//   price: 120.00,
//   image:
//     "https://m.media-amazon.com/images/I/91i3WK9EqbL._AC_SX679_.jpg",
// })
// productList.push({
//   name: "Car",
//   price: "239,000",
//   image:
//     "https://snipstock.com/assets/cdn/png/f9754c97bb39a0ebd73ff0d8654d51c0.png",
// })
// productList.push({
//   name: "Pc gamer",
//   price: "1,299.08",
//   image:
//     "https://m.media-amazon.com/images/I/91jHNGBFflL._AC_SX679_.jpg",
// })
// productList.push({
//   name: "Mouse Logitech",
//   price: 29.99,
//   image:
//     "https://s3-sa-east-1.amazonaws.com/saasargentina/oaPmQNJPQeMZynN9AOk5/imagen",
// })
// productList.push({
//   name: "Refrigerator",
//   price: "2,000",
//   image:
//     "https://images.fravega.com/f300/ee7f6e5ad50b5328c0f702992e87267b.jpg.webp",
// })
// productList.push({
//   name: "Xbox Series X",
//   price: 499.98,
//   image:
//     "https://m.media-amazon.com/images/I/61JGKhqxHxL._SX522_.jpg",
// })

// productList.push({
//   name: "PlayStation 5",
//   price: 549.99,
//   image:
//     "https://m.media-amazon.com/images/I/51051FiD9UL._SL1456_.jpg",
// })
// productList.push({
//   name: "Apple iPhone 13, 128GB",
//   price: 734.99,
//   image:
//     "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/main_card_image/https/bdt.computerhoy.com/sites/default/files/iphone-13-pro-max-blue-select.png?itok=0Ct_Tzqa",
// })
// productList.push({
//   name: "Samsung Galaxy S20 Ultra 5G",
//   price: 798.99,
//   image:
//     "https://handy.com.ar/wp-content/uploads/2020/12/samsung-galaxy-s20-ultra.png",
// })


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

