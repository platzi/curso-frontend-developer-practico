// Desktop menu
const navLink = document.querySelector(".navbar-email");
const desktopInactive = document.querySelector(".desktop-menu");
// Movile menu
const burger = document.querySelector(".menu-burger");
const mobileInactive = document.querySelector(".mobile-menu");
// Shopping car
const productDetail = document.querySelector(".product-detail")
const shoppingCar = document.querySelector(".navbar-shopping-cart")

navLink.addEventListener("click", toggleMenu);
burger.addEventListener("click", toggleBurger)
shoppingCar.addEventListener("click", toggleShoppingCar);

function toggleMenu() {
    desktopInactive.classList.toggle("inactive");
}
function toggleBurger() {
    productDetail.classList.add("inactive");
    mobileInactive.classList.toggle("inactive");
}

function toggleShoppingCar() {
    mobileInactive.classList.add("inactive");
    productDetail.classList.toggle("inactive");
}

// first container of products list
const cardsContainer = document.querySelector(".cards-container");
// product list 
const productList = [];

productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Table",
    price: 450,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Monitor",
    price: 740,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Sound",
    price: 351,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

/**
* render a list of items 
*/
function renderProducts(arrList) {
    for (product of arrList) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const img = document.createElement("img");
        img.setAttribute("alt", "product");
        img.setAttribute("src", product.image);

        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");

        const divp = document.createElement("div");
        const price = document.createElement("p");
        price.textContent = "$ " + product.price;
        const name = document.createElement("p");
        name.textContent = product.name;
        divp.append(price, name);

        const figure = document.createElement("figure");
        const figImg = document.createElement("img");
        figImg.setAttribute("alt", "cart");
        figImg.setAttribute("src", "./icons/bt_add_to_cart.svg");
        figure.appendChild(figImg);

        // add first and second child to productCard
        productCard.append(img, productInfo);
        // add product-info two childs
        productInfo.append(divp, figure);
        // add each product to cardsContainer
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);
