const menuFromEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuBurgerIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const productDetailSummary = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

const practicaMenuFromAll = document.querySelector(".all");
practicaMenuFromAll.addEventListener("click", toggleDesktopMenu);
const practicaMenuFromClothes = document.querySelector(".clothes");
practicaMenuFromClothes.addEventListener("click", toggleSummaryFromShoppingCart);
const practicaMenuFromElectronics = document.querySelector(".electronics");
practicaMenuFromElectronics.addEventListener("click", toggleDesktopMenu);
const practicaMenuFromFurnitures = document.querySelector(".furnitures");
practicaMenuFromFurnitures.addEventListener("click", toggleSummaryFromShoppingCart);
const practicaMenuFromToys = document.querySelector(".toys");
practicaMenuFromToys.addEventListener("click", toggleDesktopMenu);
const practicaMenuFromOthers = document.querySelector(".others");
practicaMenuFromOthers.addEventListener("click", toggleSummaryFromShoppingCart);

const productResumeAside = document.querySelector(".product-resume");
const closeProductResumeAside = document.querySelector(".product-resume-close");


menuFromEmail.addEventListener("click", toggleDesktopMenu);
menuBurgerIcon.addEventListener("click", toggleMenuBurger);
shoppingCartIcon.addEventListener("click", toggleSummaryFromShoppingCart);

closeProductResumeAside.addEventListener("click", closeSpecificProductDetailResume);

function toggleDesktopMenu(event) {
    event.preventDefault();
    productResumeAside.classList.add("inactive");
    productDetailSummary.classList.add("inactive");
    desktopMenu.classList.toggle("inactive");
};
function toggleMenuBurger() {
    productResumeAside.classList.add("inactive");
    productDetailSummary.classList.add("inactive");
    mobileMenu.classList.toggle("inactive");
};
function toggleSummaryFromShoppingCart(event) {
    event.preventDefault();
    productResumeAside.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    productDetailSummary.classList.toggle("inactive");
};
function openSpecificProductDetailResume() {

    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    productDetailSummary.classList.add("inactive");
    productResumeAside.classList.remove("inactive");
};
function closeSpecificProductDetailResume() {
    productResumeAside.classList.add("inactive");
};

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Helment",
    price: 50,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Gloves",
    price: 20,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

// <!-- <div class="product-card">
// <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
// <div class="product-info">
//   <div>
//     <p>$120,00</p>
//     <p>Bike</p>
//   </div>
//   <figure>
//     <img src="./icons/bt_add_to_cart.svg" alt="">
//   </figure>
// </div>
// </div> -->

function renderProducts (list) {

    for (product of list) {

        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
        productImg.addEventListener("click", openSpecificProductDetailResume);
    

        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");

    
        const productInfoDiv = document.createElement("div");
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement("figure");
        const productInfoCart = document.createElement("img");
        productInfoCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productInfoCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productInfo);
        productCard.appendChild(productImg);
    
        cardsContainer.appendChild(productCard);
    
    };
};

renderProducts(productList);