const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const navbarShoppingCart = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");

const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const productDetail = document.querySelector("#productDetail");
const productDetailClose = document.querySelector(".product-detail-close");
productDetailClose.addEventListener("click", toggleProductDetail);

navEmail.addEventListener("click", () => {
    shoppingCartContainer.classList.add("inactive");
    productDetail.classList.add("inactive");
    desktopMenu.classList.toggle("inactive");
});

menuHamIcon.addEventListener("click", () => {
    shoppingCartContainer.classList.add("inactive");
    productDetail.classList.add("inactive");
    mobileMenu.classList.toggle("inactive");
});

navbarShoppingCart.addEventListener("click", () => {
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    productDetail.classList.add("inactive");
    shoppingCartContainer.classList.toggle("inactive");
});

function toggleProductDetail() {
    desktopMenu.classList.add("inactive");
    shoppingCartContainer.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    productDetail.classList.toggle("inactive");
}

const productList = [];
for (let index = 0; index < 10; index++) {
    productList.push({
        name: "Bike",
        price: 120,
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    });
}

function renderProducts(productList) {

    const cardsContainer = document.querySelector(".cards-container");

    for (const product of productList) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const img = document.createElement("img");
        img.setAttribute("src", product.image);
        img.setAttribute("class", "imgProduct");
        img.addEventListener("click", toggleProductDetail);
        productCard.append(img);

        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");

        const priceAndName = document.createElement("div");
        const price = document.createElement("p");
        price.append(`$${product.price}`);
        const name = document.createElement("p");
        name.append(product.name);
        priceAndName.append(price);
        priceAndName.append(name);
        productInfo.append(priceAndName);

        const figure = document.createElement("figure");
        const imgCart = document.createElement("img");
        imgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
        figure.append(imgCart);
        productInfo.append(figure);

        productCard.append(productInfo);
        cardsContainer.append(productCard);
    }

}

renderProducts(productList);