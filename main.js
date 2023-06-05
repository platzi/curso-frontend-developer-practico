const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu")
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const mobileMenu = document.querySelector(".mobile-menu")
const cardsContainer = document.querySelector(".cards-container")
const asidecartproductdetail = document.querySelector(".cart-product-detail")

menuEmail.addEventListener("click", toggleDesktopMenu);


function toggleDesktopMenu() {
    const siAsideColsed = asidecartproductdetail.classList.contains("inactive")

    if(!siAsideColsed){
        asidecartproductdetail.classList.add("inactive")
    }

    desktopMenu.classList.toggle("inactive");
}

menuHamIcon.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
    const isMenuCarritoIcon = menuCarritoIcon.classList.contains("inactive")
    
    if (!isMenuCarritoIcon){
        asidecartproductdetail.classList.add("inactive")
    }
    
    mobileMenu.classList.toggle("inactive");
}

menuCarritoIcon.addEventListener("click", toggleCarritoAside)

function toggleCarritoAside() {
    const isMobileMenuClosed = menuHamIcon.classList.contains("inactive")
    const isDesctopMenuClosed = desktopMenu.classList.contains("inactive")

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");
    }

    if (!isDesctopMenuClosed){
        desktopMenu.classList.add("inactive")
    }

    asidecartproductdetail.classList.toggle("inactive")
}

const productList =  []

productList.push({
    name: "bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

productList.push({
    name: "Pantalla",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

productList.push({
    name: "CPU",
    price: 900,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})


function renderProducts (array){
    for (product of array) {
        const productCard = document.createElement("div")
        productCard.classList.add("product-card")
    
        const productImg = document.createElement("img")
        productImg.setAttribute("src", product.image)
    
        const productInfo = document.createElement("div")
        productInfo.classList.add("product-info")
    
        const productInfoDiv = document.createElement("div")
    
        const productPrice = document.createElement("p")
        productPrice.innerText = "$" + product.price
        const productName = document.createElement("p")
        productName.innerText = product.name
    
        productInfoDiv.append(productPrice, productName)
    
        const productInfoFigure = document.createElement("figure")
        const productImgCart = document.createElement("img")
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg")
    
        productInfoFigure.append(productImgCart)
        productInfo.append(productInfoDiv, productInfoFigure)
    
        productCard.append(productImg, productInfo)
        cardsContainer.append(productCard)
    }
}

renderProducts (productList)