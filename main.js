const manuEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const menuCarIcon= document.querySelector(".navbar-shopping-cart");
const productdetailCloseIcon = document.querySelector(".product-detail-close");

const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDitail");
const productDetailContainerClass = document.querySelector(".productDitailClass");
const cardsContainer = document.querySelector(".cards-container");
/* const productCardImg = document.querySelector(".product-card"); */

manuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarIcon.addEventListener("click", toggleShoppingCartContainer);
productdetailCloseIcon.addEventListener("click", closePoductdetailAside);
/* productCardImg.addEventListener("click", insertProductDetailList(productCardImg.getAttribute("src"))); */

function toggleDesktopMenu() {
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains("inactive");
    const isProductDetailContainerClosed = productDetailContainer.classList.contains("inactive");

    if(!isShoppingCartContainerClosed || !isProductDetailContainerClosed){
        shoppingCartContainer.classList.add("inactive");
        desktopMenu.classList.add("inactive");/* Esto permite agrefar .inactive a la función  toggleDesktopMenu para primero ponerle la calse y luego,  al hacer clic sobre la etiqueta la funcion por defecto cambia la clase (en este caso la quita)*/
        productDetailContainer.classList.add("inactive");
    }
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains("inactive");
    const isProductDetailContainerClosed = productDetailContainer.classList.contains("inactive");

    if(!isShoppingCartContainerClosed || !isProductDetailContainerClosed){
        shoppingCartContainer.classList.add("inactive");
        productDetailContainer.classList.add("inactive");
    }
    mobileMenu.classList.toggle("inactive");
}

function toggleShoppingCartContainer() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isdesktopMenuClosed = desktopMenu.classList.contains("inactive");
    const isProductDetailContainerClosed = productDetailContainer.classList.contains("inactive");

    if(!isMobileMenuClosed || !isdesktopMenuClosed || !isProductDetailContainerClosed){
        mobileMenu.classList.add("inactive");
        desktopMenu.classList.add("inactive");
        productDetailContainer.classList.add("inactive");
    }
    shoppingCartContainer.classList.toggle("inactive");
}

function openProductDetailAside() {
    productDetailContainer.classList.remove("inactive");
    shoppingCartContainer.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    /* Esto permite que al abrir el productDetail se cierre todo lo que pueda estar abuerto, se ahorran lineas de codigo por que no es necesaria la condicional */
        /* const iconProductCardClose = document.createElement("img");
        iconProductCardClose.setAttribute("src","./icons/bt_add_to_cart.svg");
        productdetailCloseIcon.appendChild(iconProductCardClose);
        
        const imageProductDetail = document.createElement("img");
        imageProductDetail.setAttribute("src",productDetailList[0].image);

        const productDetailInfo = document.createElement("div");
        productDetailInfo.classList.add("productDetail-info");

        const productDetailPrice = document.createElement("p");
        productDetailPrice.innerText = "$" + productDetailList[0].price;
        const productDetailName = document.createElement("p");
        productDetailName.innerText = productDetailList[0].name;
        const productDetailDescription = document.createElement("p");
        productDetailDescription.innerText = productDetailList[0].description;

        const addToCartButton = document.createElement("button");
        addToCartButton.classList.add("primary-button");
        const iconAddToCart = document.createElement("img");
        iconAddToCart.setAttribute("src","./icons/bt_add_to_cart.svg");
        addToCartButton.appendChild(iconAddToCart);

        productDetailInfo.appendChild(productDetailPrice);
        productDetailInfo.appendChild(productDetailName);
        productDetailInfo.appendChild(productDetailDescription);
        productDetailInfo.appendChild(addToCartButton);

        productDetailContainerClass.appendChild(imageProductDetail);
        productDetailContainerClass.appendChild(productDetailInfo); */
}

function closePoductdetailAside() {
    productDetailContainer.classList.add("inactive");
}

function insertProductDetailList(getAtt){
    productDetailList.push(getAtt);
}

const productList = [];
const productDetailList = [];

productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
});
productList.push({
    name: "Patines",
    price: 300,
    image: "https://images.pexels.com/photos/14858006/pexels-photo-14858006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
});
productList.push({
    name: "Balón",
    price: 80,
    image: "https://images.pexels.com/photos/3074920/pexels-photo-3074920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
});
productList.push({
    name: "Raqueta",
    price: 110,
    image: "https://images.pexels.com/photos/14288783/pexels-photo-14288783.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
});


function renderProduts(arr){
    for(product of productList){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        //product = {name, proce, image} -> product.image
        var imageCard = document.createElement("img");
        imageCard.setAttribute("src", product.image);
        /* imageCard.classList.add("product-card-img");
        imageCard.classList.add(product.name); */
        imageCard.addEventListener("click", openProductDetailAside);
        imageCard.addEventListener("click", insertProductDetailList(imageCard.getAttribute("src")));

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
    /* imageCard.addEventListener("click", insertProductDetailList(imageCard.getAttribute("src"))); */
}

renderProduts(productList);
