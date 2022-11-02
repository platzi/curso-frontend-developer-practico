const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuCarIcon = document.querySelector(".navbar-shopping-cart");

const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");

const carsContainer = document.querySelector(".cards-container");

navEmail.addEventListener("click", toggleDesktopMenu);
burgerMenu.addEventListener("click", toggleMobileMenu);
menuCarIcon.addEventListener("click", toggleCarAside);

function toggleDesktopMenu() {
    closeOthermenu(aside);

    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    closeOthermenu(aside);

    mobileMenu.classList.toggle("inactive");
}

function toggleCarAside() {
    closeOthermenu(desktopMenu);
    closeOthermenu(mobileMenu);

    aside.classList.toggle("inactive");
}

function closeOthermenu(menu) {
    if (!menu.classList.contains("inactive")) {
        menu.classList.add("inactive");
    }
}

// product cards
const productList = [];
productList.push({
    name: "bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "pantalla",
    price: 120,
    image: "https://images.pexels.com/photos/704555/pexels-photo-704555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    name: "compu",
    price: 620,
    image: "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

function renderProducts(array) {
    for (product of array) {
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

        productInfoDiv.append(productPrice, productName);

        const productInfoFigure = document.createElement("figure");
        const productImageCart = document.createElement("img");
        productImageCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

        productInfoFigure.append(productImageCart);

        productInfo.append(productInfoDiv, productInfoFigure);

        productCard.append(productImg, productInfo);

        carsContainer.appendChild(productCard);
    }
}

renderProducts(productList);

// funcion de elementos aleatorios sin mucho sentido (no hace parte del curso)
const nameAlpha = [
    "tv",
    "trash bag",
    "leg warmers",
    "sword",
    "ring",
    "rock",
    "lace",
    "towel",
    "light bulb",
    "martini glass",
];
const imageAlpha = [
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/704555/pexels-photo-704555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/5769387/pexels-photo-5769387.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/5540995/pexels-photo-5540995.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/10096370/pexels-photo-10096370.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/10585050/pexels-photo-10585050.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3663060/pexels-photo-3663060.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/10487220/pexels-photo-10487220.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/10204853/pexels-photo-10204853.jpeg?auto=compress&cs=tinysrgb&w=600",
];

function ramdomProducts(numProducts = 0) {
    let productsR = [];
    for (let index = 0; index < numProducts; index++) {
        productsR.push({
            name: nameAlpha[getRandomInt(0, nameAlpha.length)],
            price: getRandomInt(50, 5000),
            image: imageAlpha[getRandomInt(0, imageAlpha.length)],
        });
    }

    return productsR;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

renderProducts(ramdomProducts(17));
