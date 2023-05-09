const btnBurgerMenu = document.querySelector(".menu-icon");
const btnEmailMenu = document.querySelector(".navbar-email");
const btnShopCar = document.querySelector(".navbar-shopping-cart");
const menuMobile = document.querySelector(".mobile-menu");
const menuDesktop = document.querySelector(".desktop-menu");
const menuProdDetail = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

btnBurgerMenu.addEventListener("click", toggleMenuMobile);
btnEmailMenu.addEventListener("click", toggleMenuDesktop);
btnShopCar.addEventListener("click", toggleMenuProdDetail);

function toggleMenuMobile() {
    menuMobile.classList.toggle("inactive");

    if(!menuMobile.classList.contains("inactive") &&
            !menuProdDetail.classList.contains("inactive")) {
        toggleMenuProdDetail();
    }
}

function toggleMenuDesktop() {
    menuDesktop.classList.toggle("inactive");

    if(!menuDesktop.classList.contains("inactive") &&
            !menuProdDetail.classList.contains("inactive")) {
        toggleMenuProdDetail();
    }
}

function toggleMenuProdDetail() {
    menuProdDetail.classList.toggle("inactive");

    if(!menuProdDetail.classList.contains("inactive")) {
        if(!menuMobile.classList.contains("inactive")) {
            toggleMenuMobile();
        }
        if(!menuDesktop.classList.contains("inactive")) {
            toggleMenuDesktop();
        }
    }
}

const productList = [{
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
}, {
    name: "Pantalla",
    price: 230,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
}, {
    name: "Computador",
    price: 640,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
}];

function fillProductList(productList) {

    for(product of productList) {
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
        const productInfoFigure = document.createElement('figure');
        const productImgCar = document.createElement("img");
        productImgCar.setAttribute("src", "./icons/bt_add_to_cart.svg")

        productInfoDiv.append(productPrice, productName);
        productInfoFigure.appendChild(productImgCar);
        productInfo.append(productInfoDiv, productInfoFigure);
        productCard.append(productImg, productInfo);
        cardsContainer.appendChild(productCard);
    }
}

fillProductList(productList);
fillProductList(productList);
fillProductList(productList);
fillProductList(productList);