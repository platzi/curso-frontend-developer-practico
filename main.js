const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const buttonMenuMobile = document.querySelector(".menuMobile");
const menuMobile = document.querySelector(".mobile-menu");
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const asideShoppingCart = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");
const asideProductDetail = document.querySelector(".product-card-info");
const productClose = document.querySelector(".product-close");
const arrowShoppingCart = document.querySelector(".closeShoppingCart");

navEmail.addEventListener("click", toggleDesktopMenu);
buttonMenuMobile.addEventListener("click", toggleMobileMenu);
shoppingCart.addEventListener("click", toggleShoppingCart);
productClose.addEventListener("click", closeAsideProductDetail);
arrowShoppingCart.addEventListener("click", closeShoppingCart);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
    asideShoppingCart.classList.add("inactive");
    asideProductDetail.classList.add("inactive");
}

function toggleMobileMenu() {
    menuMobile.classList.toggle("inactive");
    asideShoppingCart.classList.add("inactive");
    asideProductDetail.classList.add("inactive");
}

function toggleShoppingCart() {
    asideShoppingCart.classList.toggle("inactive");
    menuMobile.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    asideProductDetail.classList.add("inactive");
}

function openAsideProductDetail() {
    asideProductDetail.classList.remove("inactive");
    asideShoppingCart.classList.add("inactive");
    menuMobile.classList.add("inactive");
    desktopMenu.classList.add("inactive");
}

function closeAsideProductDetail() {
    asideProductDetail.classList.add("inactive")
}

function closeShoppingCart() {
    asideShoppingCart.classList.add("inactive")
}

const productList = [];

productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: "Shoes",
    price: 60,
    image: "https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

productList.push({
    name: "Glasses",
    price: 200,
    image: "https://images.pexels.com/photos/39716/pexels-photo-39716.jpeg?auto=compress&cs=tinysrgb&w=1600"
});

function renderPoducts(arr) {
    for (product of arr) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const image = document.createElement("img");
        image.setAttribute("src", product.image);
        image.addEventListener("click", openAsideProductDetail);

    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
    
        const priceProduct = document.createElement("p");
        priceProduct.innerText = "$" + product.price;
    
        const nameProduct = document.createElement("p");
        nameProduct.innerText = product.name;
    
        productInfoDiv.append(priceProduct, nameProduct);
    
        const productInfoFigure = document.createElement("figure");
        const productInfoFigureImg = document.createElement("img");
        productInfoFigureImg.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productInfoFigureImg);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(image, productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderPoducts(productList);