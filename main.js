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
        productImageCart.addEventListener("click", () =>
            addProductToCart(productImageCart)
        );

        productInfoFigure.append(productImageCart);

        productInfo.append(productInfoDiv, productInfoFigure);

        productCard.append(productImg, productInfo);

        carsContainer.appendChild(productCard);
    }
}

// product detail
// incertar contenido a product detail segun producto clikeado
const productDetail_img = document.getElementById("product-detail-img");
const productDetail_price = document.getElementById("product-detail-price");
const productDetail_name = document.getElementById("product-detail-name");

let idIndex = new Array();

function insertContentToProductDetail(element) {
    idIndex = element.parentNode.id.split("_")[1];

    productDetail_img.setAttribute("src", productList[idIndex].image);
    productDetail_img.setAttribute("alt", productList[idIndex].name);

    productDetail_price.textContent = "$" + productList[idIndex].price + ",00";
    productDetail_name.textContent = productList[idIndex].name;
}

// Shopping car list
// añadir productos a un array (shoppingCartList) con el botón de la card o el product detail
const productDetail_botton = document.getElementById("product-detail-button");
productDetail_botton.addEventListener("click", () => addProductToCart());

let shoppingCartList = new Array();

function addProductToCart(element = null) {
    element == null
        ? (element = idIndex)
        : (element = element.parentNode.parentNode.parentNode.id.split("_")[1]);

    if (shoppingCartList.length != 0) {
        for (item of shoppingCartList) {
            //console.log(`item: ${item.id} element: ${productList[element].id}`);
            if (item.id == productList[element].id) {
                return;
            }
        }
    }

    shoppingCartList.push(productList[element]);

    renderShoppingCart();
}

// en la lista aparece específicamente el producto añadido y el total del precio de todos
const myOrderContent = document.getElementById("my-order-content");

function renderShoppingCart() {
    let inCart = shoppingCartList[shoppingCartList.length - 1];

    const shoppingCart = document.createElement("div");
    //TODO: insertar id
    shoppingCart.classList.add("shopping-cart");

    const shoppingFigure = document.createElement("figure");
    const shoppingImgProduct = document.createElement("img");
    shoppingImgProduct.setAttribute("src", inCart.image);
    shoppingImgProduct.setAttribute("alt", inCart.name);
    shoppingFigure.append(shoppingImgProduct);

    const nameProduct = document.createElement("p");
    nameProduct.innerText = inCart.name;
    const priceProduct = document.createElement("p");
    priceProduct.innerText = inCart.price + ",00";
    const closeProduct = document.createElement("img");
    closeProduct.setAttribute("src", "./icons/icon_close.png");
    closeProduct.setAttribute("alt", "close");

    shoppingCart.append(
        shoppingFigure,
        nameProduct,
        priceProduct,
        closeProduct
    );

    myOrderContent.appendChild(shoppingCart);
}

// y el número de la notificación del carrito cambia según la cantidad de productos

// Random products
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

function randomProducts(numProducts = 0) {
    for (let index = 0; index < numProducts; index++) {
        productList.push({
            id: "productsR_" + (index + 3),
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

randomProducts(7);
renderProducts(productList);
