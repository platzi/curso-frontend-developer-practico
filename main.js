const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const burgerMenuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container")

menuEmail.addEventListener("click", toggleDesktopMenu);
burgerMenuIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoshoppingCartContainer);

function toggleDesktopMenu() {

    desktopMenu.classList.toggle("inactive");
    shoppingCartContainer.classList.add("inactive");

}


function toggleMobileMenu() {

    mobileMenu.classList.toggle("inactive");
    shoppingCartContainer.classList.add("inactive");

}

function toggleCarritoshoppingCartContainer() {

    shoppingCartContainer.classList.toggle("inactive");
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");

}

const productsList = [];

productsList.push({
   name : "Bike",
   price : 120,
   image : "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"  
});

productsList.push({
   name : "Screen",
   price : 200,
   image : "https://images.pexels.com/photos/5721879/pexels-photo-5721879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  
});

productsList.push({
   name : "PC",
   price : 600,
   image : "https://images.pexels.com/photos/5797997/pexels-photo-5797997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  
});

function renderProducts(arr){

    for (product of productsList){

        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const productImg = document.createElement("img");
        // product = {name, price, image} -> product.image
        productImg.setAttribute("src", product.image);

        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");

        const productInfoDiv = document.createElement("div");

        const productPrice = document.createElement("div");
        productPrice.innerText = "$" + product.price;

        const productName = document.createElement("div");
        productName.innerText = product.name;
        productInfoDiv.append(productPrice, productName);

        const productInfoFigure = document.createElement("figure");

        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

        productInfoFigure.appendChild(productImgCart);

        productInfo.append(productInfoDiv, productInfoFigure);

        productCard.append(productImg, productInfo);

        cardsContainer.append(productCard);

    }
}

renderProducts(productsList);