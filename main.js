const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const carrito = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
carrito.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu() {
    console.log("click")
    desktopMenu.classList.toggle("inactive");
    if (!desktopMenu.classList.contains("inactive")) {
        mobileMenu.classList.add("inactive");
        aside.classList.add("inactive");
    }
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive");
    if (!mobileMenu.classList.contains("inactive")) {
        desktopMenu.classList.add("inactive");
        aside.classList.add("inactive");
    }
}

function toggleCarritoAside() {
    console.log("Click");
    aside.classList.toggle("inactive");
    if (!aside.classList.contains("inactive")) {
        desktopMenu.classList.add("inactive");
        mobileMenu.classList.add("inactive");
    }

}

const productList = [];
productList.push({
    namee:"Bike", 
    price:120.00 ,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
     
});
productList.push({
    namee:"Computer", 
    price:1200.00 ,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
     
});
productList.push({
    namee:"Phone", 
    price:205.00 ,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
     
});
productList.push({
    namee:"T-shirt", 
    price:35.00 ,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
     
});
productList.push({
    namee:"Car", 
    price:2000.00 ,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
     
});
productList.push({
    namee:"T-shirt", 
    price:35.00 ,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
     
});
productList.push({
    namee:"Car", 
    price:2000.00 ,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
     
});

function renderProducts(arr) {

for (product of productList) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price ;
    const productName = document.createElement("p");
    productName.innerText = product.namee;
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");
    const productFigureImg = document.createElement("img");
    productFigureImg.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productFigureImg);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);

}
}
renderProducts(productList);