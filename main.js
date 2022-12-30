const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close")
const shoppingCartConteiner = document.querySelector("#shoppingCartConteiner");
const cardsContainer =document.querySelector(".cards-container");
const productDetailContainer = document.querySelector("#product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside )


function toggleDesktopMenu(){
     desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
     const isAsideClosed = shoppingCartConteiner.classList.contains("inactive");

     if(!isAsideClosed){
     shoppingCartConteiner.classList.add("inactive");
     }

     closeProductDetailAside();
     mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside(){
     const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

     if(!isMobileMenuClosed){
     mobileMenu.classList.add("inactive");
     }

     const isProductDetailClosed = 
     productDetailContainer.classList.contains("inactive");

     if(!isProductDetailClosed){
     productDetailContainer.classList.add("inactive");
     }
     shoppingCartConteiner.classList.toggle("inactive");
}

function openProductDetailAside(){
     shoppingCartConteiner.classList.add("inactive")
     productDetailContainer.classList.remove("inactive")
}
 
 function  closeProductDetailAside(){
     productDetailContainer.classList.add("inactive")
}

const productList = []
productList.push({
     nombre: "bike",
     price: 120.0,
     image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?a uto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

})
productList.push({
     nombre: "tv",
     price: 240.0,
     image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?a uto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});
productList.push({
     nombre: "computador",
     price: 680.0,
     image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?a uto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

});
productList.push({
     nombre: "telefono",
     price: 210.0,
     image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?a uto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});


function renderProducts(arr){
     for (product of arr){
          const productCart = document.createElement("div");
          productCart.classList.add("product-card");
     
          const  productImg = document.createElement("img");
          productImg.setAttribute("src", product.image);
          productImg.addEventListener("click", openProductDetailAside)
     
          const productInfo = document.createElement("div");
          productInfo.classList.add("product-info");
     
          const productInfoDiv= document.createElement("div");
          
          const productPrice = document.createElement("p");
          productPrice.innerText = "$ " + product.price;
     
          const productName = document.createElement("p");
          productName.innerText = product.nombre;
     
          productInfoDiv.appendChild(productPrice);
          productInfoDiv.appendChild(productName);
     
          const productInfoFigure= document.createElement("figure");
          const productImgCart= document.createElement("img");
          productImgCart.setAttribute("src","./icons/bt_add_to_cart.svg");
     
          productInfoFigure.appendChild(productImgCart);
     
          productInfo.appendChild(productInfoFigure);
          productInfo.appendChild(productInfoDiv);
     
          productCart.appendChild(productImg);
          productCart.appendChild(productInfo);
     
          cardsContainer.appendChild(productCart);
     }
}

renderProducts(productList)