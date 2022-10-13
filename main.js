
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerMenu = document.querySelector(".menu");
// este es el menu de los telefonos
const mobileMenu = document.querySelector(".mobile-menu");
// este es el menu de los telefonos
const carritoCompra = document.querySelector(".navbar-shopping-cart");
// este es el es carrito 
const shopppingCartContainer = document.querySelector("#shopppingCartContainer");
// shopppingCartContainer es el que se abre cuando le das al carrito 
const cardContainer = document.querySelector(".cards-container");
const productDetail = document.querySelector("#productDetail");  
// productDetail es el que se abre cuando le das a la imagen
const xClose = document.querySelector("#xClose");

menuEmail.addEventListener("click", toggleDesktopMenu);
burguerMenu.addEventListener("click", togglemobileMenu);
carritoCompra.addEventListener("click", toggleCarrito);
xClose.addEventListener("click", closeCommentBox);


function toggleDesktopMenu(){

const isAsideClosed = shopppingCartContainer.classList.contains("inative");
const isproductDetailClosed = productDetail.classList.contains("inative");

if(!isAsideClosed){
    shopppingCartContainer.classList.add("inative");
}

if (!isproductDetailClosed){
    productDetail.classList.add("inative");
}
desktopMenu.classList.toggle("inative");
}

function togglemobileMenu (){
    const isAsideClosed = shopppingCartContainer.classList.contains("inative");
    const isproductDetailClosed = productDetail.classList.contains("inative");

    if(!isAsideClosed){
        shopppingCartContainer.classList.add("inative");
    }
    if (!isproductDetailClosed){
        productDetail.classList.add("inative");
    }
    mobileMenu.classList.toggle("inative");
    }

function toggleCarrito (){
    const isMobileMenuClosed = mobileMenu.classList.contains("inative");
const isDesktopMenuClosed = desktopMenu.classList.contains("inative");
const isproductDetailClosed = productDetail.classList.contains("inative");

    if(!isMobileMenuClosed){
    mobileMenu.classList.add("inative");
    }
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add("inative");
        }
    if (!isproductDetailClosed){
        productDetail.classList.add("inative");
    }
    shopppingCartContainer.classList.toggle("inative");
    }



function openCommentBox(){
    const isAsideClosed = shopppingCartContainer.classList.contains("inative");
    const isDesktopMenuClosed = desktopMenu.classList.contains("inative");
    const isMobileMenuClosed = mobileMenu.classList.contains("inative");

    if(!isAsideClosed){
        shopppingCartContainer.classList.add("inative");
    }

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add("inative");
        }
    
        if(!isMobileMenuClosed){
            mobileMenu.classList.add("inative");
            }     
productDetail.classList.remove("inative");
}

function closeCommentBox(){
    productDetail.classList.add("inative");
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
 

 function activo(){  
    for (product of productList){
const productCard = document.createElement("div");
productCard.classList.add("product-card");


const productImg = document.createElement("img");
productImg.setAttribute("src", product.image);
productImg.addEventListener("click", openCommentBox);

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
  
 


