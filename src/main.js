// MENU EMAIL
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu")
menuEmail.addEventListener("click", toggleDesktopMenu);


// MOBILE MENU BAR
const menuBurguerIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
menuBurguerIcon.addEventListener("click", toggleMobileMenu);


// ASIDE CART MENU
const menuCart = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail")
menuCart.addEventListener("click",  toggleAsideCart);

// CARDS CONTAINER

const cardsContainer = document.querySelector(".cards-container")


// MENU BAR
function toggleDesktopMenu(){
    aside.classList.add("inactive");
    desktopMenu.classList.toggle("inactive");
}

// MOBILE MENU
function toggleMobileMenu(){
    aside.classList.add("inactive");
    mobileMenu.classList.toggle("inactive");
}

// ASIDE CART
function toggleAsideCart(){
    mobileMenu.classList.add("inactive")
    desktopMenu.classList.add("inactive")
    aside.classList.toggle("inactive")
}

const productList = [];
productList.push({
    name: "bike",
    price: 150,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push({
    name: "Computadora",
    price: 620,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push({
    name: "Car",
    price: 1500,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

for (product of productList){
    const productCard = document.createElement("div")
    productCard.classList.add("product-card")

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image)

    const productInfo = document.createElement("div")
    productInfo.classList.add("product-info");

    const productPrice =  document.createElement("p")
    productPrice.innerText = "$" + product.price

    const productName = document.createElement("p")
    productName.innerHTML = "$" + product.name

    const productInfoDiv = document.createElement("div");
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productFigure = document.createElement("figure");
    const productImgCart = document.createElement("img")
    productImgCart.setAttribute ("src", "../icons/bt_add_to_cart.svg")

    productFigure.append(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard)

}