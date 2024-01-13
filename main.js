//QuerySelectors
const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const burgerIcon = document.querySelector("img.menu")
const mobileMenu = document.querySelector(".mobile-menu")
const shoppingCart = document.querySelector(".product-detail")
const cartIcon = document.querySelector(".navbar-shopping-cart")
const cardsContainer = document.querySelector(".cards-container")
const productCard = document.querySelector(".product-card")
const productDetailDescription = document.querySelector(".product-detail-description")
const productDetailClose = document.querySelector(".product-detail-close")

//EventListeners
menuEmail.addEventListener("click", toogleDesktopMenu)
burgerIcon.addEventListener("click", tooglemobileMenu)
cartIcon.addEventListener("click", toogleShoppingCart)


//NavFunctions
function closeShoppingCartIfOpen () {
    const isShoppingCartOpen = !shoppingCart.classList.contains("inactive")
    if (isShoppingCartOpen) {
        shoppingCart.classList.add("inactive")
    }
}

function closeDesktopMenuIfOpen () {
    const isDesktopMenuOpen = !desktopMenu.classList.contains("inactive")
    if (isDesktopMenuOpen) {
        desktopMenu.classList.add("inactive")
    }
}

function closeMobileMenuIfOpen () {
    const isMobileMenuOpen = !mobileMenu.classList.contains("inactive")
    if (isMobileMenuOpen) {
        mobileMenu.classList.add("inactive")
    }
}

function closeProductDetailIfOpen () {
    const isProductDescriptionOpen = !productDetailDescription.classList.contains("inactive")
    if (isProductDescriptionOpen) {
        productDetailDescription.classList.add("inactive")
    }
}

function toogleDesktopMenu () {
    closeShoppingCartIfOpen()
    closeProductDetailIfOpen()
    desktopMenu.classList.toggle("inactive")
}

function tooglemobileMenu () {
    closeShoppingCartIfOpen()
    mobileMenu.classList.toggle("inactive")
}

function toogleShoppingCart () {
    closeDesktopMenuIfOpen()
    closeMobileMenuIfOpen()
    closeProductDetailIfOpen()
    shoppingCart.classList.toggle("inactive")
} 

function openProductDescription () {
    closeShoppingCartIfOpen()
    closeDesktopMenuIfOpen()
    closeMobileMenuIfOpen()
    productDetailDescription.classList.remove("inactive")
}

function closeProductDescription () {
    productDetailDescription.classList.add("inactive")
}

const productList = []
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "Pantalla",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "Computador",
    price: 1340,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

function renderProducts(arr) {
    for (product of productList) {
        const productCard = document.createElement("div")
        productCard.classList.add("product-card")
     
        const productImg = document.createElement("img")
        productImg.setAttribute("src", product.image)
        //ESTA PARTE ES PARA ABRIR/CERRAR EL PRODUCT DESCRIPTION
        productImg.addEventListener("click", openProductDescription)
        productDetailClose.addEventListener("click", closeProductDescription)
     
        const productInfo = document.createElement("div")
        productInfo.classList.add("product-info")
        
        const productInfoInitDiv = document.createElement("div")
        const productInfoPrice = document.createElement("p")
        productInfoPrice.innerText = "$" + product.price
        
        const productInfoName = document.createElement("p")
        productInfoName.innerText = product.name
        
        const productInfoFigure = document.createElement("figure")
        const productInfoImage = document.createElement("img")
        productInfoImage.setAttribute("src", "./icons/bt_add_to_cart.svg")
        
        //ESPECIFICAS
        productInfo.append(productInfoInitDiv, productInfoFigure)
        productInfoInitDiv.append(productInfoPrice, productInfoName)
        
        //GENERALES
        productInfoFigure.appendChild(productInfoImage)
        productCard.append(productImg, productInfo)
     
        //FINAL
        cardsContainer.appendChild(productCard)
     }
}
renderProducts(productList)