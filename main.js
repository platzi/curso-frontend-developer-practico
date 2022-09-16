const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const menuCartIcon = document.querySelector(".navbar-shopping-cart")
const shoppingCartContainer = document.querySelector("#shoppingCartContainer")
const cardsContainer = document.querySelector(".cards-container")


menuEmail.addEventListener('click', toggleDesktopMenu);
menuIcon.addEventListener('click', toggleMobileMenu)
menuCartIcon.addEventListener('click', toggleCartshoppingCartContainer)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
    shoppingCartContainer.classList.add('inactive')
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive')
    shoppingCartContainer.classList.add('inactive')
}

function toggleCartshoppingCartContainer() {
    shoppingCartContainer.classList.toggle('inactive')
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
}

const productList = [];
productList.push({
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    price: "$120",
    name: "Bike",
})

productList.push({
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    price: "$220",
    name: "Screen",
})

productList.push({
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    price: "$500",
    name: "Computer",
})

function renderProducts(arr){
    for (product of arr) {
        const productCard = document.createElement("div")
        productCard.classList.add("product-card")
    
        const productImg = document.createElement("img")
        productImg.setAttribute("src", product.image)
    
        const productInfo = document.createElement("div")
        productInfo.classList.add("product-info")
    
        const productInfoDiv = document.createElement("div")
        const productPrice = document.createElement("p")
        productPrice.innerHTML = "$" + product.price
        const productName = document.createElement("p")
        productName.innerHTML = product.name
    
        productInfoDiv.appendChild(productName)
        productInfoDiv.appendChild(productPrice)
    
        const productInfoFigure = document.createElement("figure")
        const productImgCard = document.createElement("img")
        productImgCard.setAttribute("src", "./icons/bt_add_to_cart.svg")
        productInfoFigure.appendChild(productImgCard)
    
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
    
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
    
    }
}

renderProducts(productList)