/**
 * Seleccionando del DOM lo que necesitamos
 */
const menuEmail = document.querySelector(".navbar-email"); //Email
const desktopMenu = document.querySelector(".desktop-menu"); //Menu desktop

const menuIcon = document.querySelector(".menu"); //Icono de mobile
const mobileMenu = document.querySelector(".mobile-menu"); //Menu mobile

const menuCarritoIcon = document.querySelector(".navbar-shopping-cart"); //Icono carrito
const shoppingCartContainer = document.querySelector("#shoppingCartContainer") //Menu carrito

const cardsContainer = document.querySelector(".cards-container");

const productDetailContainer = document.querySelector("#productDetail")
const productDetailCloseIcon = document.querySelector(".product-detail-close");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);
/**
 * Funciones par desplegar menus
 */
// Aparecer desktop menu, presionar email
function toggleDesktopMenu() {
    const isAsideOpen = !shoppingCartContainer.classList.contains("inactive");

    if(isAsideOpen){
        shoppingCartContainer.classList.add("inactive");
    }
    desktopMenu.classList.toggle("inactive"); //if inactive is set remove it, otherwise add it
}
// Aparecer mobile menu, presionar icono
function toggleMobileMenu(){
    const isAsideOpen = !shoppingCartContainer.classList.contains("inactive");

    if(isAsideOpen){
        shoppingCartContainer.classList.add("inactive");
    }
    closeProductDetailAside();
    mobileMenu.classList.toggle("inactive");
}

// Aparece menu carrito
function toggleCarritoAside(){
    const isMobileMenuOpen = !mobileMenu.classList.contains("inactive");
    const isDesktopMenuOpen = !desktopMenu.classList.contains("inactive");
    const isProductDetailContainerOpen = !productDetailContainer.classList.contains("inactive");
    //Si mobile esta open lo cerramos.
    if(isMobileMenuOpen){
        mobileMenu.classList.add("inactive");
    }
    //Si desktop esta open lo cerramos
    if(isDesktopMenuOpen){
        desktopMenu.classList.add("inactive");
    }

    if(isProductDetailContainerOpen){
        productDetailContainer.classList.add("inactive");
    }

    shoppingCartContainer.classList.toggle("inactive");
}

//Mostrar detalles del producto
function openProductDetailAside(){
    shoppingCartContainer.classList.add("inactive");
    productDetailContainer.classList.remove("inactive");
}

//Cerrar detalles dedl producto
function closeProductDetailAside(){
    productDetailContainer.classList.add("inactive");
}
/**
 * Agarran elemento como si lo hubieramos tráido desde el backend
 */
const productList = []; //Haga de cuenta que lo traemos de una base de datos
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
    name: "Pantalla",
    price: 220,
    image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
})
productList.push({
    name: "Computadora",
    price: 620,
    image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
})

//Insertar en HTML
/**
 * 1. Utilizar un ciclo for
 * 2. Utilizar sintaxis for prod of productList
 */
/*
<div class="product-card">
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
</div>
*/

function renderProducts(arr){
    for( product of arr){
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
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement('img');
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