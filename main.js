const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu")
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const closeProductDetailIcon = document.querySelector(".product-detail-close")
const mobileMenu = document.querySelector(".mobile-menu")
const cardsContainer = document.querySelector(".cards-container")
const asideproductDetail = document.querySelector(".product-detail")
const asidecartproductdetail = document.querySelector(".cart-product-detail")

menuEmail.addEventListener("click", toggleDesktopMenu);


function toggleDesktopMenu() {
    asidecartproductdetail.classList.add("inactive")
    asideproductDetail.classList.add("inactive")
    desktopMenu.classList.toggle("inactive");
}

menuHamIcon.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
    asidecartproductdetail.classList.add("inactive")   
    asideproductDetail.classList.add("inactive") 
    mobileMenu.classList.toggle("inactive");
}

menuCarritoIcon.addEventListener("click", toggleCarritoAside)

function toggleCarritoAside() {
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    asideproductDetail.classList.add("inactive")
    asidecartproductdetail.classList.toggle("inactive")
}

function openProductDetail() {
    asidecartproductdetail.classList.add("inactive")
    asideproductDetail.classList.remove("inactive")
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
}

closeProductDetailIcon.addEventListener("click", closeProductDetail)

function closeProductDetail(){
    asideproductDetail.classList.add("inactive")
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
        productImg.addEventListener("click", openProductDetail)
    
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