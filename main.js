const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu")

const mobileMenu = document.querySelector(".mobile-menu")
const menuHamIcon = document.querySelector(".menu")

const menuCarIcon = document.querySelector(".navbar-shopping-cart")
const shoppingCar = document.querySelector(".product-detail")

const cardsContainer = document.querySelector(".cards-container")

const productDetail = document.querySelector(".product-detail-secondScreen")

const productDetailClose = document.querySelector(".product-detail-close")


menuEmail.addEventListener("click", toggleMenu); 
menuHamIcon.addEventListener("click", toggleMenuMobile)
menuCarIcon.addEventListener("click", toggleShoppingCar)
productDetailClose.addEventListener("click", closeProductoDetail)

function toggleMenu(){

    productDetail.classList.add("inactive")
    shoppingCar.classList.add("inactive")
    desktopMenu.classList.toggle("inactive")
}

function toggleMenuMobile(){

    productDetail.classList.add("inactive")
    shoppingCar.classList.add("inactive")
    mobileMenu.classList.toggle("inactive")
}

function toggleShoppingCar(){

    mobileMenu.classList.add("inactive")
    desktopMenu.classList.add("inactive")
    productDetail.classList.add("inactive")
    shoppingCar.classList.toggle("inactive")
    
}

function openProductDetail(){

    mobileMenu.classList.add("inactive")
    desktopMenu.classList.add("inactive")
    shoppingCar.classList.add("inactive")
    productDetail.classList.remove("inactive")

}

function closeProductoDetail(){
    productDetail.classList.add("inactive")
}
productList = []

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
        productImg.addEventListener("click", openProductDetail )
    
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

