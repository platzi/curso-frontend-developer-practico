const liMenuEmail = document.querySelector(".navbar-email");
const divDesktopMenu = document.querySelector(".desktop-menu");

const imgFaviconMenu = document.querySelector(".menu");
const divMobileMenu = document.querySelector(".mobile-menu");

const liIconCarrito = document.querySelector(".navbar-shopping-cart");
const asideShoppingCart = document.querySelector(".shopping-cart");

const divCardsContainer = document.querySelector(".cards-container");

const asideProductDetail = document.querySelector(".product-detail");
const divProductDetailClose = document.querySelector(".product-detail-close");

const productList = [];

productList.push({
    name: "Bike",
    price: 120,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "Computer",
    price: 500,
    img: "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&tinysrgb&h=650&w=940",
});

productList.push({
    name: "Mobile Phone",
    price: 300,
    img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productList.push({
    name: "Watch",
    price: 250,
    img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productList.push({
    name: "Sneakers",
    price: 150,
    img: "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productList.push({
    name: "New Nintendo 3DS XL",
    price: 180,
    img: "https://images.pexels.com/photos/3702458/pexels-photo-3702458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productList.push({
    name: "Headphones",
    price: 220,
    img: "https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productList.push({
    name: "Camera",
    price: 250,
    img: "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productList.push({
    name: "GameBoy Color",
    price: 110,
    img: "https://images.pexels.com/photos/2263816/pexels-photo-2263816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

liMenuEmail.addEventListener("click", toggleDesktopMenu);
imgFaviconMenu.addEventListener("click", toggleMobileMenu);
liIconCarrito.addEventListener("click", toggleShoppingCart);
divProductDetailClose.addEventListener("click", closeAsideProductDetail);

function toggleDesktopMenu() {
    divDesktopMenu.classList.toggle("inactive");
    asideShoppingCart.classList.add("inactive");
    asideProductDetail.classList.add("inactive");
}

function toggleMobileMenu() {
    divMobileMenu.classList.toggle("inactive");
    divDesktopMenu.classList.add("inactive");
    asideShoppingCart.classList.add("inactive");
    asideProductDetail.classList.add("inactive");
}

function toggleShoppingCart() {
    asideShoppingCart.classList.toggle("inactive");
    divMobileMenu.classList.add("inactive");
    divDesktopMenu.classList.add("inactive");
    asideProductDetail.classList.add("inactive");
}

function openAsideProductDetail(obj) {
    asideProductDetail.classList.remove("inactive");
    divMobileMenu.classList.add("inactive");
    divDesktopMenu.classList.add("inactive");
    asideShoppingCart.classList.add("inactive");

    console.log(obj);
}

function closeAsideProductDetail() {
    asideProductDetail.classList.add("inactive");
}

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const imgProduct = document.createElement("img");
        imgProduct.setAttribute("src", product.img);
        imgProduct.addEventListener("click", openAsideProductDetail);

        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");

        const productInfoDiv = document.createElement("div");

        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;

        const productName = document.createElement("p");
        productName.innerText = product.name;

        const figureProductInfo = document.createElement("figure");

        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

        productCard.append(imgProduct, productInfo);
        productInfo.append(productInfoDiv, figureProductInfo);
        productInfoDiv.append(productPrice, productName);
        figureProductInfo.append(productImgCart);

        divCardsContainer.append(productCard);
    }
}

renderProducts(productList);
