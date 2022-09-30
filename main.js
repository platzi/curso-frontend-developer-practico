//const { render } = require("express/lib/application");

// desktop menu
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

menuEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains("inactive"); 
    if (!isAsideClosed){
        aside.classList.add("inactive");

    } 
    desktopMenu.classList.toggle("inactive");
}

// mobile menu

const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

menuHamIcon.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains("inactive"); 
    if (!isAsideClosed){
        aside.classList.add("inactive");

    } 
    mobileMenu.classList.toggle("inactive");
}


// displace car

const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleCarritoAside() {

    const isMobileMenuClosed = mobileMenu.classList.contains("inactive"); //si mobileMenu tiene la clase inactive, quiere decir que esta cerrado
    //const isDesktopMenuclosed = desktopMenu.classList.contains("inactive");

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");

    } 
        aside.classList.toggle("inactive");
}

// seleccion de container para luedo incluir todo el producto
const cardsContainer =document.querySelector(".cards-container");

// vamos a crear un array para realizar consultas futuras y traer los productos

const productList = []
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

});
productList.push({
    name: "Tennis",
    price: 150,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

});
productList.push({
    name: "Banda",
    price: 100,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

});

function renderProducts(array){
    for (product of array) {

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
        productName.innerText = "$" + product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement("figure");
    
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);



/* y en la consola...
for (product of productList) {
    console.log(product.name)
}
VM2448:2 Bike
VM2448:2 Tennis
VM2448:2 Banda

/** 
// selecionamos nuestro main container. 
const mainContainer = document.querySelector(".main-container");

// creamos una funcion que va a validar si alguno de los 2 menus o el carrito de compras este abierto y va a cerrarlo si esta abierto. 
function colseMenusClick() {

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isCarritoComprasClosed = carritoDeCompras.classList.contains('inactive');
    
    if (!isMobileMenuClosed || !isDesktopMenuClosed || !isCarritoComprasClosed )  {

        mobileMenu.classList.add("inactive");
        desktopMenu.classList.add("inactive");   
        carritoDeCompras.classList.add("inactive");
   
    }

}

// añadimos un evento de escucha y llamamos a la funcion antes creada  
mainContainer.addEventListener('click', colseMenusClick);



/*
const menuDesktop = document.querySelector('.inactive')
const navEmail = document.querySelector('.navbar-email');

navEmail.addEventListener('click', () => {
    menuDesktop.classList.toggle('inactive');
});

otra forma

navEmail.addEventListener("click", toggleDesktopMenu);

const toggleDesktopMenu = () => {
  desktopMenu.classList.toggle("inactive");
};
*/



