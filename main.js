const manuEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const menuCarIcon= document.querySelector(".navbar-shopping-cart");

const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");

manuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarIcon.addEventListener("click", toggleShoppingCartContainer);

function toggleDesktopMenu() {
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains("inactive");
    if(!isShoppingCartContainerClosed){
        shoppingCartContainer.classList.add("inactive");
        desktopMenu.classList.add("inactive");/* Esto permite agrefar .inactive a la función  toggleDesktopMenu para primero ponerle la calse y luego,  al hacer clic sobre la etiqueta la funcion por defecto cambia la clase (en este caso la quita)*/
    }
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains("inactive");
    if(!isShoppingCartContainerClosed){
        shoppingCartContainer.classList.add("inactive");
    }
    mobileMenu.classList.toggle("inactive");
}

function toggleShoppingCartContainer() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isdesktopMenuClosed = desktopMenu.classList.contains("inactive");
    if(!isMobileMenuClosed || !isdesktopMenuClosed){
        mobileMenu.classList.add("inactive");
        desktopMenu.classList.add("inactive");
    }
    shoppingCartContainer.classList.toggle("inactive");
}

const productList = [];

productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Patines",
    price: 300,
    image: "https://images.pexels.com/photos/14858006/pexels-photo-14858006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});
productList.push({
    name: "Balón",
    price: 80,
    image: "https://images.pexels.com/photos/3074920/pexels-photo-3074920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});
productList.push({
    name: "Raqueta",
    price: 110,
    image: "https://images.pexels.com/photos/14288783/pexels-photo-14288783.jpeg?auto=compress&cs=tinysrgb&w=600",
});

function renderProduts(arr){
    for(product of productList){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        //product = {name, proce, image} -> product.image
        const imageCard = document.createElement("img");
        imageCard.setAttribute("src", product.image);
        
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
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(imageCard);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProduts(productList);
