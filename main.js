const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const iconoMenuMobile = document.querySelector(".menu");
const menuMobile = document.querySelector(".mobile-menu");
const navbarImage = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");
const productDetail = document.querySelector("#productDetail");
const productDetailClose = document.querySelector(".product-detail-close");


menuEmail.addEventListener("click", toggleDesktopMenu);
iconoMenuMobile.addEventListener("click", toggleMobileMenu);
navbarImage.addEventListener("click", toggleCart);
productDetailClose.addEventListener("click", closePoductDetail);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
    
    const isshoppingCartClosed = shoppingCartContainer.classList.contains("inactive");
    if(!isshoppingCartClosed){
        shoppingCartContainer.classList.add("inactive");
    }

}

function toggleMobileMenu(){
    menuMobile.classList.toggle("inactive");
    
    const isshoppingCartClosed = shoppingCartContainer.classList.contains("inactive")
    if(!isshoppingCartClosed){
        shoppingCartContainer.classList.add("inactive");

    }
    closePoductDetail();

}

function toggleCart(){
    shoppingCartContainer.classList.toggle("inactive");
    
    const ismenuMobileClosed = menuMobile.classList.contains("inactive");
    const isdesktopMenuClosed = desktopMenu.classList.contains("inactive");
    const isproductDetailClosed = productDetail.classList.contains("inactive");

    if (!ismenuMobileClosed){
        menuMobile.classList.add("inactive")
    } 
    if(!isdesktopMenuClosed){
    desktopMenu.classList.add("inactive")
    }
    if(!isproductDetailClosed){
        productDetail.classList.add("inactive");
   }
}    

function closePoductDetail(){
    productDetail.classList.add("inactive");


}

function openProductDetail(){
        productDetail.classList.remove("inactive")
        shoppingCartContainer.classList.add("inactive");
};

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
        productImg.addEventListener("click", openProductDetail)
    
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


