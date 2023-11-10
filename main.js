const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const iconoMenuMobile = document.querySelector(".menu");
const menuMobile = document.querySelector(".mobile-menu");
const navbarImage = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");


menuEmail.addEventListener("click", toggleDesktopMenu);
iconoMenuMobile.addEventListener("click", toggleMobileMenu);
navbarImage.addEventListener("click", toggleCart);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
    
    const isproductDetailClosed = productDetail.classList.contains("inactive");
    if(!isproductDetailClosed){
        productDetail.classList.add("inactive");
    }

}

function toggleMobileMenu(){
    menuMobile.classList.toggle("inactive");
    
    const isproductDetailClosed = productDetail.classList.contains("inactive")
    if(!isproductDetailClosed){
        productDetail.classList.add("inactive");

    }

}

function toggleCart(){
    productDetail.classList.toggle("inactive");
    
    const ismenuMobileClosed = menuMobile.classList.contains("inactive");
    const isdesktopMenuClosed = desktopMenu.classList.contains("inactive");
    if (!ismenuMobileClosed){
        menuMobile.classList.add("inactive")
    } 
   if(!isdesktopMenuClosed){
    desktopMenu.classList.add("inactive")
   }
}    

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

})
productList.push({
    name: "Screen",
    price: 500,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    
})
productList.push({
    name: "Personal Computer",
    price: 5000,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    
})
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

})
productList.push({
    name: "Screen",
    price: 500,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    
})
productList.push({
    name: "Personal Computer",
    price: 5000,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    
})

function renderProducts(arr){
    for (product of arr){

        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info")
    
        const productInfoDiv = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement("figure");
    
        const productInfoImg = document.createElement("img");
        productInfoImg.setAttribute("src", "./icons/bt_add_to_cart.svg")
    
        productInfoFigure.appendChild(productInfoImg);
    
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }

}
renderProducts(productList);


