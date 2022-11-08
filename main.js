const liMenuEmail = document.querySelector(".navbar-email");
const divDesktopMenu = document.querySelector(".desktop-menu");

const imgFaviconMenu = document.querySelector(".menu");
const divMobileMenu = document.querySelector(".mobile-menu");

const liIconCarrito = document.querySelector(".navbar-shopping-cart");
const asideShoppingCart = document.querySelector(".shopping-cart");

const divCardsContainer = document.querySelector(".cards-container");

const asideProductDetail = document.querySelector(".product-detail");

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

function toggleDesktopMenu() {
    const isasideShoppingCartOpen = !asideShoppingCart.classList.contains("inactive");

    if (isasideShoppingCartOpen) {
        asideShoppingCart.classList.toggle("inactive");
    }

    divDesktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    const isasideShoppingCartOpen = !asideShoppingCart.classList.contains("inactive");

    if (isasideShoppingCartOpen) {
        asideShoppingCart.classList.toggle("inactive");
    }
    divMobileMenu.classList.toggle("slide-right");
}

function toggleShoppingCart() {
    const isDivDesktopMenuOpen = !divDesktopMenu.classList.contains("inactive");
    const isDivMobileMenuOpen = divMobileMenu.classList.contains("slide-right");

    if (isDivMobileMenuOpen) {
        divMobileMenu.classList.toggle("slide-right");
    }

    if (isDivDesktopMenuOpen) {
        divDesktopMenu.classList.toggle("inactive");
    }
    asideShoppingCart.classList.toggle("inactive");
}

function toggleProductDetail() {
    asideProductDetail.classList.toggle("inactive");
}

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const imgProduct = document.createElement("img");
        imgProduct.setAttribute("src", product.img);

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
    const divProductCard = document.querySelectorAll(".product-card");
}

renderProducts(productList);
