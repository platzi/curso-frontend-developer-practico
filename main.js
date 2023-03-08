const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuBurger = document.querySelector(".menu");
const shoppingCartDetail = document.querySelector(".shopping-cart-detail");
const asideCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailInfo = document.querySelector(".product-detail-info");
const closeProductDetail = document.querySelector(".product-detail-close");


menuEmail.addEventListener("click", toggleDesktopMenu );
function toggleDesktopMenu (){
    desktopMenu.classList.toggle("inactive");
    shoppingCartDetail.classList.add("inactive");
    productDetailInfo.classList.add("inactive");
}

menuBurger.addEventListener("click", toggleMobileMenu );
function toggleMobileMenu (){
    mobileMenu.classList.toggle("inactive");
    shoppingCartDetail.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    productDetailInfo.classList.add("inactive");
    
}

asideCarritoIcon.addEventListener("click", toggleCarrito);
function toggleCarrito(){
    shoppingCartDetail.classList.toggle("inactive");
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");  
    productDetailInfo.classList.add("inactive"); 
}

/* esta funcion se ubica al hacer click en la imagen en el ciclo For */
function openProductInfoDetail () {
    productDetailInfo.classList.toggle("inactive");
    shoppingCartDetail.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
}
closeProductDetail.addEventListener("click",closeProductDetailContainer);
function closeProductDetailContainer (){
    productDetailInfo.classList.add("inactive");
}




const cardsContainer = document.querySelector(".cards-container")
const productList = [];

productList.push({
    name: "bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "imac",
    price: 950,
    image: "https://images.pexels.com/photos/930530/pexels-photo-930530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});
productList.push({
    name: "camera",
    price: 850,
    image: "https://images.pexels.com/photos/274973/pexels-photo-274973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

for (product of productList){
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productCardImg = document.createElement("img");
    productCardImg.setAttribute("src", product.image);
    productCardImg.addEventListener("click", openProductInfoDetail);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");
    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    
    const productFigure = document.createElement("figure");
    const productFigureImg = document.createElement("img");
    productFigureImg.setAttribute("src","./icons/bt_add_to_cart.svg");
    productFigure.appendChild(productFigureImg);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productFigure);

    productCard.appendChild(productCardImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}

