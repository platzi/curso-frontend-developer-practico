const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu")

const mobileMenu = document.querySelector(".mobile-menu")
const menuHamIcon = document.querySelector(".menu")

const menuCarIcon = document.querySelector(".navbar-shopping-cart")
const shoppingCar = document.querySelector(".product-detail")

const cardsContainer = document.querySelector(".cards-container")

menuEmail.addEventListener("click", toggleMenu); 
menuHamIcon.addEventListener("click", toggleMenuMobile)
menuCarIcon.addEventListener("click", toggleShoppingCar)

function toggleMenu(){

    const isShoppingCarClose = shoppingCar.classList.contains("inactive"); 

    if(!isShoppingCarClose){
        desktopMenu.classList.remove("inactive")
        shoppingCar.classList.add("inactive")
    } else{
        desktopMenu.classList.toggle("inactive")
    }
}

function toggleMenuMobile(){

    const isShoppingCarClose = shoppingCar.classList.contains("inactive"); 

    if(!isShoppingCarClose){
        mobileMenu.classList.remove("inactive")
        shoppingCar.classList.add("inactive")
    } else{
        mobileMenu.classList.toggle("inactive")
    }
}

function toggleShoppingCar(){
    const isMobileMenuClose = mobileMenu.classList.contains("inactive"); 

    if(!isMobileMenuClose){
        mobileMenu.classList.add("inactive")
        shoppingCar.classList.remove("inactive")
    } else{
        shoppingCar.classList.toggle("inactive")
    }
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
    price: 620, 
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

})

renderProducts(productList)

function renderProducts(arr){
    for(product of productList){

        const productCard = document.createElement("div")
        productCard.classList.add("product-card")
    
        const productImg = document.createElement("img")
        productImg.setAttribute("src", product.image)
    
        const productInfo = document.createElement("div")
        productInfo.classList.add("product-info")
    
        const productInfoDiv = document.createElement("div")
        
        const productPrice = document.createElement("p")
        productPrice.innerHTML = product.price
    
        const productName = document.createElement("p")
        productName.innerHTML = product.name
    
        const productInfoFigure = document.createElement("figure")
    
        const productImgCar = document.createElement("img")
        productImgCar.setAttribute("src", "./icons/bt_add_to_cart.svg")
    
        productInfoFigure.appendChild(productImgCar); 
        productInfoDiv.append(productPrice,productName)
        productInfo.append(productInfoDiv, productInfoFigure)
        productCard.append(productImg, productInfo)
    
        cardsContainer.appendChild(productCard)
    
    }
}

