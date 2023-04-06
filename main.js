// CALL CSS ELEMENTS

const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const burguerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const shoppingCart = document.querySelector(".navbar-shopping-cart");
const checkoutMenu = document.querySelector("#shoppingCartContainer");

const cardsContainer = document.querySelector(".cards-container");

const productDetailContainer = document.querySelector("#productDetail");
const productDetailCloseIcon = document.querySelector(".product-detail-close");


// INTERACTION

menuEmail.addEventListener("click", toggleDesktopMenu);

burguerMenu.addEventListener("click", toggleMobileMenu);

shoppingCart.addEventListener("click", toggleShoppingCart);

productDetailCloseIcon.addEventListener("click", closeProductDetailAside);


// FUNCTIONS FOR THE INTERACTIONS

function toggleDesktopMenu() {
    const isShoppingCartOpen = checkoutMenu.classList.contains('inactive');

    if (!isShoppingCartOpen){
        checkoutMenu.classList.add("inactive");
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isShoppingCartOpen = checkoutMenu.classList.contains('inactive');

    if (!isShoppingCartOpen){
        checkoutMenu.classList.add("inactive");
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart() {
    const isMobileMenuOpen = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuOpen){
        mobileMenu.classList.add("inactive");
    }

    const isEmailMenuOpen = desktopMenu.classList.contains('inactive');

    if (!isEmailMenuOpen){
        desktopMenu.classList.add("inactive");
    }

    checkoutMenu.classList.toggle('inactive');
}

function openProductDetailAside() {
    productDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside() {
    productDetailContainer.classList.add("inactive");
}

// GENERATE PRODUCT CARDS AND THE HTML FOR THEM

const productList = [];

productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: "Computer",
    price: 1100,
    image: "https://images.pexels.com/photos/5552789/pexels-photo-5552789.jpeg?auto=compress&cs=tinysrgb&w=1600"
});

productList.push({
    name: "Fridge",
    price: 750,
    image: "https://media.istockphoto.com/id/1344561356/es/foto/lado-a-lado-refrigerador-lleno-refrigerador-muestra-interior.jpg?s=612x612&w=0&k=20&c=oixNLthMLEYJb7RxjE8SDrg0kKc214V7JSdy9Eg1VuE="
});

productList.push({
    name: "Headphones",
    price: 200,
    image: "https://images.pexels.com/photos/15840650/pexels-photo-15840650.jpeg?auto=compress&cs=tinysrgb&w=1600"
});

productList.push({
    name: "Plants",
    price: 30,
    image: "https://images.pexels.com/photos/4484184/pexels-photo-4484184.jpeg?auto=compress&cs=tinysrgb&w=1600"
});

for (product of productList){
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);

    // FUNCTION TO OPEN PRODUCT DETAIL FROM THE CARD'S IMAGE
    productImg.addEventListener("click", openProductDetailAside);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;

    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.append(productPrice, productName);

    const productInfoFigure = document.createElement("figure");

    const productImgCard = document.createElement("img");
    productImgCard.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCard);

    productInfo.append(productInfoDiv, productInfoFigure);

    productCard.append(productImg, productInfo);

    cardsContainer.appendChild(productCard);
}



