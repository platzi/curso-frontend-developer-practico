const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const menuHamIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const carritoShop = document.querySelector(".navbar-shopping-cart")
const shoppingCartContainer = document.querySelector("#shoppingCartContainer")
const cardsContainer = document.querySelector(".cards-container")

menuEmail.addEventListener("click", toggleDesktopMenu)
menuHamIcon.addEventListener("click", toggleMobileMenu)
carritoShop.addEventListener("click", toggleCarrito)


function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive")

    const isAsideClosed = shoppingCartContainer.classList.contains("inactive")

    if(!isAsideClosed) {
        shoppingCartContainer.classList.add("inactive")
    }
}


function toggleCarrito(){
    shoppingCartContainer.classList.toggle("inactive")
    mobileMenu.classList.add("inactive")
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

for (product of productList) {
    const productCard = document.createElement("div")
    productCard.classList.add("product-card");

    const productImg = document.createElement("img")
    productImg.setAttribute("src", product.image)

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