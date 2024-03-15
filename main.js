const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const cardsContainer = document.querySelector(".cards-container");
  
menuEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu () {
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive"); 

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add("inactive") 
    }

    desktopMenu.classList.toggle("inactive");
}

menuHamIcon.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu () {
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive"); 

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add("inactive") 
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle("inactive");
}  

menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleCarritoAside () {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive"); 

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive") 
    }

    const isProductDetailClosed = productDetail.classList.contains("inactive");

    if (!isProductDetailClosed) {
        productDetailContainer.classList.add("inactive");
    }
    
    shoppingCartContainer.classList.toggle("inactive");
}

function openProductDetailAside(){

    shoppingCartContainer.classList.add("inactive"); 

    productDetailContainer.classList.remove("inactive");
}

productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function closeProductDetailAside () {
    productDetailContainer.classList.add("inactive");
}

const productList = [];
productList.push({
    name:"bike",
    price: 120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name:"pantalla",
    price: 220,
    image:"https://media.istockphoto.com/id/1316933938/es/foto/hombre-viendo-tv-en-vivo-en-la-habitaci%C3%B3n.jpg?s=1024x1024&w=is&k=20&c=Gc5J2hxgjjlVyg4TBknZf68OH6VQwbQyuGjlRZQ5bGY="
});
productList.push({
    name:"computadora",
    price: 320,
    image:"https://images.pexels.com/photos/159394/pc-computer-android-android-pc-159394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});


for (product of productList) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);  
    productImg.addEventListener("click", openProductDetailAside);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");
    
    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;
    
    const productInfoFigure= document.createElement("figure");

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productImgCart= document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}