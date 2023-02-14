const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuCarrito = document.querySelector(".navbar-shopping-cart")
const aside = document.querySelector(".product-detail")
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const cardsContainer = document.querySelector(".cards-container");



menuCarrito.addEventListener("click", toggleCarritoAside)
menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);

function toggleDesktopMenu() {
    const isAsideClose = aside.classList.contains("inactive")

    if (!isAsideClose) {
        aside.classList.toggle("inactive");
    }
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    const isAsideClose = aside.classList.contains("inactive")

    if (!isAsideClose) {
        aside.classList.toggle("inactive");
    }
    mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
    const isMobileMenuclose = mobileMenu.classList.contains("inactive")

    if (!isMobileMenuclose) {
        mobileMenu.classList.toggle("inactive");
    }
    aside.classList.toggle("inactive");
}

const productList = [];

productList.push({
    name: "Bike",
    price: 120.00,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "Football",
    price: 70.00,
    image: "https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=300"
})
productList.push({
    name: "Basketball",
    price: 30.00,
    image: "https://images.pexels.com/photos/1462618/pexels-photo-1462618.jpeg?auto=compress&cs=tinysrgb&w=300"
})
productList.push({
    name: "Smile ball",
    price: 10.00,
    image: "https://images.pexels.com/photos/1579371/pexels-photo-1579371.jpeg?auto=compress&cs=tinysrgb&w=300"
})

function llamarProductos(arr) {
    for (product of arr) {
        /* MAQUETAMOS DESDE JAVASCRIPT A HTML */

        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        //PRODUCT = {NAME, PRICE, IMAGE} -> PRODUCT.IMAGE
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);

        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");

        const productInfoDiv = document.createElement("div");

        const producPrice = document.createElement("p");
        producPrice.innerText = "€ " + product.price;
        const productName = document.createElement("p");
        productName.innerText = product.name;

        productInfoDiv.appendChild(producPrice);
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
llamarProductos(productList);
