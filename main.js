
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const carritoCompra = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const cardContainer = document.querySelector(".cards-container");


menuEmail.addEventListener("click", toggleDesktopMenu);
burguerMenu.addEventListener("click", togglemobileMenu);
carritoCompra.addEventListener("click", toggleCarrito);



function toggleDesktopMenu(){

const isAsideClosed = aside.classList.contains("inative");

if(!isAsideClosed){
    aside.classList.add("inative");
}
desktopMenu.classList.toggle("inative");
}


function togglemobileMenu (){
    const isAsideClosed = aside.classList.contains("inative");

    if(!isAsideClosed){
        aside.classList.add("inative");
    }
    mobileMenu.classList.toggle("inative");
    }

function toggleCarrito (){
    const isMobileMenuClosed = mobileMenu.classList.contains("inative");
const isDesktopMenuClosed = desktopMenu.classList.contains("inative");

    if(!isMobileMenuClosed){
    mobileMenu.classList.add("inative");
    }
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add("inative");
        }
    aside.classList.toggle("inative");
    }

const productList = [];
 productList.push({
name : "Bike",
price : "120",
image : "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
 });

 productList.push({
    name : "Comp",
    price : "520",
    image : "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
     });

productList.push({
name : "Dog",
price : "620",
image : "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
 });
 
 productList.push({
 name : "Cat",
 price : "200",
 image : "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
 });
 
{/* <div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
<div>
<p>$120,00</p>
<p>Bike</p>
</div>
<figure>
<img src="./icons/bt_add_to_cart.svg" alt="">
</figure>
</div>
</div> */}

 function activo(){  
    for (product of productList){
const productCard = document.createElement("div");
productCard.classList.add("product-card");


const productImg = document.createElement("img");
productImg.setAttribute("src", product.image);

const productInfo = document.createElement("div");
productInfo.classList.add("product-info");

const productInfoDiv = document.createElement("div");

const productPrice = document.createElement("p");
productPrice.innerText = "$" + product.price;

const productName = document.createElement("p");
productName.innerText = product.name;

const productInfoFigure = document.createElement("figure");

const imgIcons = document.createElement("img");
imgIcons.setAttribute("src", "./icons/bt_add_to_cart.svg");

productInfoFigure.appendChild(imgIcons);
productCard.appendChild(productImg);
productCard.appendChild(productInfo);
productInfoDiv.appendChild(productPrice);
productInfoDiv.appendChild(productName);
productInfo.appendChild(productInfoDiv);
productInfo.appendChild(productInfoFigure);

cardContainer.appendChild(productCard);
}
}
activo(productList);
  
 


