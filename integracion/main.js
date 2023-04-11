const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const menuHamIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const carritoShop = document.querySelector(".navbar-shopping-cart")
const productDetailCloseIcon = document.querySelector(".product-detail-close")
const shoppingCartContainer = document.querySelector("#shoppingCartContainer")
const productDetailContainer = document.querySelector("#productDetail")
const cardsContainer = document.querySelector(".cards-container")

menuEmail.addEventListener("click", toggleDesktopMenu)
menuHamIcon.addEventListener("click", toggleMobileMenu)
carritoShop.addEventListener("click", toggleCarrito)
productDetailCloseIcon.addEventListener("click", closeProductDetailAside)


function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive")
    productDetailContainer.classList.add("inactive")

    const isAsideClosed = shoppingCartContainer.classList.contains("inactive")

    if(!isAsideClosed) {
        shoppingCartContainer.classList.add("inactive")
    }
}


function toggleCarrito(){
    shoppingCartContainer.classList.toggle("inactive")
    mobileMenu.classList.add("inactive")

    const isProductDetailClosed = productDetailContainer.classList.contains("inactive")

    if (!isProductDetailClosed) {
        productDetailContainer.classList.add("inactive")
    }
}

function openProductDetailAside(){
    shoppingCartContainer.classList.add("inactive")
    productDetailContainer.classList.remove("inactive")
}

function closeProductDetailAside(){
    productDetailContainer.classList.add("inactive")
}

//Creación del array
const productList = []
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "Pantalla",
    price: 520,
    image: "./Image/pexels-format-1029757.jpg"
});
productList.push({
    name: "Laptop",
    price: 1050,
    image: "./Image/pexels-nataliya-vaitkevich-5412270.jpg"
});

function renderProduct(arr){
for (product of arr) {
    const productCard = document.createElement("div")
    productCard.classList.add("product-card")

    const productImg = document.createElement("img")
    productImg.setAttribute("src", product.image)
    productImg.addEventListener("click", openProductDetailAside)

    const productInfo = document.createElement ("div")
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

renderProduct(productList)