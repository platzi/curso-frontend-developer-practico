const menuEmail = document.querySelector(".navbar-email")
const menuIcon = document.querySelector(".menu")
const menuCartIcon = document.querySelector(".navbar-shopping-cart")

const desktopMenu = document.querySelector(".desktop-menu")
const mobileMenu = document.querySelector(".mobile-menu")
const cartDetail = document.querySelector("#cartDetail")
const cardsContainer = document.querySelector(".cards-container")

menuEmail.addEventListener("click", toggleDesktopMenu)
menuIcon.addEventListener("click", toggleMobileMenu)
menuCartIcon.addEventListener("click", togglecartDetail)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive")
    if(!(cartDetail.classList.contains("inactive"))){
        cartDetail.classList.toggle("inactive")}
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive")
    if(!(cartDetail.classList.contains("inactive"))){
        cartDetail.classList.toggle("inactive")}
}

function togglecartDetail(){
    cartDetail.classList.toggle("inactive")
    if(!(desktopMenu.classList.contains("inactive"))){
        desktopMenu.classList.toggle("inactive")}
    if(!(mobileMenu.classList.contains("inactive"))){
        mobileMenu.classList.toggle("inactive")}
}


const productList = [{
    name:"Bike", price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
},{
    name:"Bike2", price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
},{
    name:"Bike3", price: 320,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
},{
    name:"Bike4", price: 420,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
}]

function renderProducts(productArray){
    for (item of productArray) {
        const productCard = document.createElement("div")
        productCard.classList.add("product-card")
        
        const productImg = document.createElement("img")
        productImg.setAttribute("src", item.image)
        
        const productInfo = document.createElement("div")
        productInfo.classList.add("product-info")
    
        const productInfoDiv = document.createElement("div")
        
        const productPrice = document.createElement("p")
        productPrice.innerText = "$" + item.price
        
        const productName = document.createElement("p")
        productName.innerText = item.name
        
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
    
        const productInfoFig = document.createElement("figure")
        const productImgCart = document.createElement("img")
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg")
    
        productInfoFig.appendChild(productImgCart)
    
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFig)
    
        
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
    }
    
    // <!-- <div class="product-card">
    // <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    // <div class="product-info">
    //   <div>
    //     <p>$120,00</p>
    //     <p>Bike</p>
    //   </div>
    //   <figure>
    //     <img src="./icons/bt_add_to_cart.svg" alt="">
    //   </figure>
    // </div>
    // </div> -->
}

renderProducts(productList)


