const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const menuHamIcon = document.querySelector(".menu")
const menuCartIcon = document.querySelector(".navbar-shopping-cart")
const mobileMenu = document.querySelector(".mobile-menu")
const aside = document.querySelector(".cart-product")
const cardsContainer = document.querySelector(".cards-container")
const productDetails = document.querySelector(".product-specifities")
const productDetailCloseIcon = document.querySelector(".product-detail-close")
const productShadow = document.querySelector(".shadow")

menuEmail.addEventListener("click", toggleDesktopMenu)
menuHamIcon.addEventListener("click", toggleMobileMenu)
menuCartIcon.addEventListener("click", toggleAsideCart)
productDetailCloseIcon.addEventListener("click", toggleAsideDetails)
productShadow.addEventListener("click", toggleMobileMenu)


function toggleDesktopMenu() {
    mobileMenu.classList.add("inactive")
    aside.classList.add("inactive")
    cardsContainer.classList.add("inactive")
    productDetails.classList.add("inactive")

    desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu() {
    desktopMenu.classList.add("inactive")
    aside.classList.add("inactive")
    cardsContainer.classList.add("inactive")
    productDetails.classList.add("inactive")

    mobileMenu.classList.toggle("inactive")
    if(window.innerWidth < 640) {
        productShadow.classList.toggle("inactive")
    }
}

function toggleAsideCart() {
    mobileMenu.classList.add("inactive")
    desktopMenu.classList.add("inactive")
    cardsContainer.classList.add("inactive")
    productDetails.classList.add("inactive")

    aside.classList.toggle("inactive")
}

const productList = []

productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
    name: "Screen",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
    name: "Desktop",
    price: 420,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
    name: "Laptop",
    price: 400,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

/* <div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
<div>
<p>$120,00</p>
<p>Bike</p>
</div>
<figure>
<img src="./icons/bt_add_to_cart.svg" alt="">
</figure>
</div>
</div> */

function renderProducts(arr){
    for(product of arr) {
        const productCard = document.createElement("div")
        productCard.classList.add("product-card")
        
        const productImg = document.createElement("img")
        productImg.setAttribute("src", product.image)
        
        const productInfo = document.createElement("div")
        productInfo.classList.add("product-info")
        
        
        const productInfoDiv = document.createElement("div")
        
        const productPrice = document.createElement("p")
        productPrice.innerText = "$" + product.price;
        
        const productName = document.createElement("p")
        productName.innerText = product.name;
        
        const productInfoFigure = document.createElement("figure")
        const productImgCart = document.createElement("img")
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg")
        
        productInfoFigure.appendChild(productImgCart)
        
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
        
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
        
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
        
        cardsContainer.appendChild(productCard)
    }
}
renderProducts(productList)

const cardProduct = document.querySelectorAll(".product-card")

for (let i = 0; i < cardProduct.length; i++) {
    cardProduct[i].addEventListener("click", toggleAsideDetails)
}

function toggleAsideDetails() {
    mobileMenu.classList.add("inactive")
    aside.classList.add("inactive")
    cardsContainer.classList.add("inactive")
    desktopMenu.classList.add("inactive")
    
    productDetails.classList.toggle("inactive")
}
