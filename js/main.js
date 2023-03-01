const email = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menu = document.querySelector(".menu");
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetail = document.querySelector("#product-detail");
const productDetailClose = document.querySelector(".product-detail-close");

email.addEventListener("click", toggleDesktopMenu);
menu.addEventListener("click", toggleMobileMenu);
shoppingCart.addEventListener("click", toggleshoppingCartContainer);
productDetailClose.addEventListener("click", closeProductDetail);

function toggleDesktopMenu(){
    isMobileMenuOpen();
    isshoppingCartContainerOpen();
    closeProductDetail();
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    isshoppingCartContainerOpen();
    isDesktopMenuOpen();
    closeProductDetail();
    mobileMenu.classList.toggle("inactive");
}

function toggleshoppingCartContainer(){
    isMobileMenuOpen();
    isDesktopMenuOpen();
    closeProductDetail();
    shoppingCartContainer.classList.toggle("inactive");
}

function openProductDetail(){
    isshoppingCartContainerOpen();
    isMobileMenuOpen();
    isDesktopMenuOpen();
    productDetail.classList.remove("inactive");

}

function closeProductDetail(){
    productDetail.classList.add("inactive");
}

// Comprobar si el menú mobile esta abierto

function isMobileMenuOpen(){
    const isMobileMenuOpen = mobileMenu.classList.contains("inactive");

    if(!isMobileMenuOpen){
        return mobileMenu.classList.add("inactive");
    }
}

// Comprobar si el DesktopMenu esta abierto

function isDesktopMenuOpen(){
    const isDesktopMenuOpen = desktopMenu.classList.contains("inactive");

    if(!isDesktopMenuOpen){
        return desktopMenu.classList.add("inactive");
    }
}

// Comprobar si el shoppingCartContainer esta abierto

function isshoppingCartContainerOpen(){
    const isshoppingCartContainerOpen = shoppingCartContainer.classList.contains("inactive");

    if(!isshoppingCartContainerOpen){
        return shoppingCartContainer.classList.add("inactive");
    }
}

// Comprobar si el product detail esta abierto

function isProductDetailOpen(){
    const isProductDetailOpen = productDetail.classList.contains("inactive");

    if(!isProductDetailOpen){
        return productDetail.classList.add("inactive");
    }
}



const producList = [];

producList.push({
    name: "Bike",
    price: 120.0,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

producList.push({
    name: "Pantalla",
    price: 320.0,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

producList.push({
    name: "Computador portatil",
    price: 1320.0,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

producList.push({
    name: "Bike",
    price: 120.0,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

producList.push({
    name: "Pantalla",
    price: 320.0,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

producList.push({
    name: "Computador portatil",
    price: 1320.0,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

function renderProducts(arra){
    const cardsContainer = document.querySelector(".cards-container");

// Insertar en HTML

    for (const product of arra) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const imgProduct = document.createElement("img");

        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");

        const div = document.createElement("div");

        const productPrice = document.createElement("p");
        const productName = document.createElement("p");

        const figure = document.createElement("figure");

        const imgIcoCar = document.createElement("img");

        cardsContainer.append(productCard);

        productCard.append(imgProduct);
        imgProduct.setAttribute("src", product.image);
        imgProduct.addEventListener("click", openProductDetail);

        productCard.append(productInfo);
        productInfo.append(div);

        div.append(productPrice);
        productPrice.innerText = "$ " + product.price;

        div.append(productName);
        productName.innerText = product.name;
        productInfo.append(figure);
        figure.append(imgIcoCar);
        imgIcoCar.setAttribute("src", "./icons/bt_add_to_cart.svg");
        
    }
}

renderProducts(producList);