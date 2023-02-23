const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu")
const menuHamIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const navCarrito = document.querySelector(".product-detail")
const cartMenu = document.querySelector(".navbar-shopping-cart")
const cardsContainer = document.querySelector(".cards-container")


navEmail.addEventListener("click", toggleDesktopMenu) 
menuHamIcon.addEventListener("click", toggleMobileMenu) 
cartMenu.addEventListener("click", toggleCartMenu) 

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive")
    // para q el otro se cierre
    if (navCarrito.className === "product-detail") {
        navCarrito.classList.toggle("inactive")
    }
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive")
}

function toggleCartMenu() {
    navCarrito.classList.toggle("inactive")
    // para q el otro se cierre
    if (desktopMenu.className === "desktop-menu") {
        desktopMenu.classList.toggle("inactive")
    }
}



const productList = []
productList.push({
    name: "Bike",
    precio: 120,
    img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "Pantalla",
    precio: 220,
    img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "Computadora",
    precio: 420,
    img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})


function renderProducts(arr) {
    for (product of arr) {
    const productCard = document.createElement("div")
    productCard.classList.add("product-card")
    
    const productImg = document.createElement("img")
    productImg.setAttribute("src", product.img)
    
    const productInfo = document.createElement("div")
    productInfo.classList.add("product-info")
    
    const productInfoDiv = document.createElement("div")
    
    const productPrice = document.createElement("p")
    productPrice.innerText =  "$" + product.precio
    const productName = document.createElement("p")
    productName.innerText=product.name
    
    productInfoDiv.appendChild(productPrice)
    productInfoDiv.appendChild(productName)
    
    const productInfoFigure = document.createElement("figure")
    const productimgCart = document.createElement("img")
    productimgCart.setAttribute("src", "./icons/bt_add_to_cart.svg")
    productimgCart.setAttribute("class", "botonCompra")
    productimgCart.setAttribute("id", product.name)
    
    console.log(productimgCart);
    
    productInfoFigure.appendChild(productimgCart)
    
    productInfo.appendChild(productInfoDiv)
    productInfo.appendChild(productInfoFigure)
    
    productCard.appendChild(productImg)
    productCard.appendChild(productInfo)
    
    cardsContainer.appendChild(productCard)
    
    
}
}

renderProducts(productList)

// apreto en product figure y tiene q ir al carritp
