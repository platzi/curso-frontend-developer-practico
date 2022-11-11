const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuCarIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");

const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingcartcotainer = document.querySelector("#shoppingCartCotainer");
const productDetailContainer = document.querySelector("#product-detail");

const carsContainer = document.querySelector(".cards-container");

navEmail.addEventListener("click", toggleDesktopMenu);
burgerMenu.addEventListener("click", toggleMobileMenu);
menuCarIcon.addEventListener("click", toggleCarAside);
productDetailCloseIcon.addEventListener("click", closeProductDetail);

// mostrar y ocultar paneles
function toggleDesktopMenu() {
    closeOtherPanel(shoppingcartcotainer);
    closeOtherPanel(productDetailContainer);

    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    closeOtherPanel(shoppingcartcotainer);
    closeOtherPanel(productDetailContainer);

    mobileMenu.classList.toggle("inactive");
}

function toggleCarAside() {
    closeOtherPanel(desktopMenu);
    closeOtherPanel(mobileMenu);
    closeOtherPanel(productDetailContainer);

    shoppingcartcotainer.classList.toggle("inactive");
}

function openProductDetail() {
    closeOtherPanel(shoppingcartcotainer);

    productDetailContainer.classList.remove("inactive");
}

function closeProductDetail() {
    productDetailContainer.classList.add("inactive");
}

function closeOtherPanel(menu) {
    if (!menu.classList.contains("inactive")) {
        menu.classList.add("inactive");
    }
}

// product cards
const productList = [];
productList.push({
    id: "productList_0",
    name: "bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    id: "productList_1",
    name: "pantalla",
    price: 120,
    image: "https://images.pexels.com/photos/704555/pexels-photo-704555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    id: "productList_2",
    name: "compu",
    price: 620,
    image: "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

function renderProducts(array) {
    for (product of array) {
        const productCard = document.createElement("div");
        productCard.id = product.id;
        productCard.classList.add("product-card");

        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
        productImg.addEventListener("click", openProductDetail);
        productImg.addEventListener("click", () =>
            insertContentToProductDetail(productImg)
        );

        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");

        const productInfoDiv = document.createElement("div");

        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price + ",00";
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

// product detail
// incertar contenido a product detail segun producto clikeado
const productDetail_img = document.getElementById("product-detail-img");
const productDetail_price = document.getElementById("product-detail-price");
const productDetail_name = document.getElementById("product-detail-name");

function insertContentToProductDetail(element) {
    let idIndex = element.parentNode.id.split("_");

    switch (idIndex[0]) {
        case "productList":
            changeProductDeatail(productList, idIndex[1]);
            break;
        case "productsR":
            changeProductDeatail(productsR, idIndex[1]);
            break;
    }

    function changeProductDeatail(array, i) {
        arrayI = array[i];

        productDetail_img.setAttribute("src", arrayI.image);
        productDetail_img.setAttribute("alt", arrayI.name);

        productDetail_price.textContent = "$" + arrayI.price + ",00";
        productDetail_name.textContent = arrayI.name;
    }

    //console.log(element.parentNode.id);
}

// Shopping car list
// añadir productos a la lista con el botón de la card o el product detail
// en la lista aparece específicamente el producto añadido y el total del precio de todos
// y el número de la notificación del carrito cambia según la cantidad de productos

// Random products
// funcion de elementos aleatorios sin mucho sentido (no hace parte del curso)
let productsR = [];

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
    for (let index = 0; index < numProducts; index++) {
        productsR.push({
            id: "productsR_" + index,
            name: nameAlpha[getRandomInt(0, nameAlpha.length)],
            price: getRandomInt(50, 5000),
            image: imageAlpha[getRandomInt(0, imageAlpha.length)],
        });
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
ramdomProducts(17);

renderProducts(productsR);
//#region
