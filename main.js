const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const menuCel = document.querySelector(".menu")
const selectorMobile = document.querySelector(".mobile-menu")
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart")
const aside = document.querySelector(".product-detail")
const cardsContainer = document.querySelector(".cards-container")




menuEmail.addEventListener("click", toggleDesktopMenu)
menuCel.addEventListener("click", toggleMobileMenu)
menuCarritoIcon.addEventListener("click", toggleCarritoAside)

function toggleDesktopMenu(){
    const asideClosed = aside.classList.contains("inactive")
    if(!asideClosed){
        aside.classList.add("inactive")
    }

    desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu(){
    const asideClosed = aside.classList.contains("inactive")

    if(!asideClosed){
        aside.classList.add("inactive")
    }

    selectorMobile.classList.toggle("inactive")


}

function toggleCarritoAside(){
    const mobileMenuClosed = selectorMobile.classList.contains("inactive")
    const desktopMenuClosed = desktopMenu.classList.contains("inactive")
    

    if(!mobileMenuClosed){
        selectorMobile.classList.add("inactive")
    }

    if(!desktopMenuClosed){
        desktopMenu.classList.add("inactive")
    }

    aside.classList.toggle("inactive")

    
}

const productList = []
productList.push({
    name: "Bike",
    price: "120",
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

})
productList.push({
    name: "Pantalla",
    price: "640",
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

})
productList.push({
    name: "Computadora",
    price: "1200",
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

})

function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement("div")
        productCard.classList.add("product-card")
    
        const productImg = document.createElement("img")
        productImg.setAttribute("src",product.image)
    
        const productInfo = document.createElement("div")
        productInfo.classList.add("product-info")
    
        const productInfoDiv = document.createElement("div")
    
        const productPrice = document.createElement("p")
        productPrice.innerText ="$"+ product.price
    
        const productName = document.createElement("p")
        productName.innerText = product.name
    
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
        
        const productInfoFigure = document.createElement("div")
        
        const productImgCard = document.createElement("div")
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