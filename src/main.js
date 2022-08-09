// MENU EMAIL
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu")
menuEmail.addEventListener("click", toggleDesktopMenu);
// MOBILE MENU BAR
const menuBurguerIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
menuBurguerIcon.addEventListener("click", toggleMobileMenu);
// ASIDE CART MENU
const menuCart = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer")
menuCart.addEventListener("click",  toggleAsideCart);
// CARDS CONTAINER
const cardsContainer = document.querySelector(".cards-container")

// DISPLAY IMAGE
// OPEN DISPLAY
const productDetailContainer = document.querySelector("#productDetail");
// CLOSE DISPLAY
const productDetailCloseIcon = document.querySelector(".product-detail-close")
productDetailCloseIcon.addEventListener("click", closeProductDetailAside)


// FUNCTIONS
// MENU BAR
function toggleDesktopMenu(){
    shoppingCartContainer.classList.add("inactive");
    desktopMenu.classList.toggle("inactive");
    productDetailContainer.classList.add("inactive")
    mobileMenu.classList.add("inactive")

}

// MOBILE MENU
function toggleMobileMenu(){
    shoppingCartContainer.classList.add("inactive");
    mobileMenu.classList.toggle("inactive");
    productDetailContainer.classList.add("inactive");
    desktopMenu.classList.add("inactive");
}

// ASIDE CART
function toggleAsideCart(){
    mobileMenu.classList.add("inactive")
    desktopMenu.classList.add("inactive")
    shoppingCartContainer.classList.toggle("inactive")
    productDetailContainer.classList.add("inactive")
    

}

// OPEN & CLOSE DISPLAY
function openProductDetailAside(){
    productDetailContainer.classList.remove("inactive")
}

function closeProductDetailAside(){
    productDetailContainer.classList.add("inactive")
}


const productList = [];
productList.push({
    name: "bike",
    price: 150,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push({
    name: "Computadora",
    price: 620,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push({
    name: "Car",
    price: 1500,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

function renderProducts (arr){

    for (product of productList){
        const productCard = document.createElement("div")
        productCard.classList.add("product-card")
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image)
        productImg.addEventListener("click", openProductDetailAside)
    
        const productInfo = document.createElement("div")
        productInfo.classList.add("product-info");
    
        const productPrice =  document.createElement("p")
        productPrice.innerText = `$ ${product.price}`
    
        const productName = document.createElement("p")
        productName.innerHTML = `${product.name}`
    
        const productInfoDiv = document.createElement("div");
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productFigure = document.createElement("figure");
        const productImgCart = document.createElement("img")
        productImgCart.setAttribute ("src", "../icons/bt_add_to_cart.svg")
    
        // INSIDE THE FIGURE WE PUT THE CART 
        productFigure.append(productImgCart);

        productInfo.append(productInfoDiv, productFigure);
        productCard.append(productImg, productInfo);
        cardsContainer.append(productCard)
    
    }
}

renderProducts(productList)
