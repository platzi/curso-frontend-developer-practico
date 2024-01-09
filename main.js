const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuBurger = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");



menuEmail.addEventListener("click", toggleDesktopMenu);
menuBurger.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside)


function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive")
    aside.classList.add("inactive")
}
function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive")
    aside.classList.add("inactive")
}

function toggleCarritoAside(){
    mobileMenu.classList.add("inactive")
    aside.classList.toggle("inactive")
    desktopMenu.classList.add("inactive")
}

const productList = [];

productList.push({
    name: "bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push({
    name: "TV",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push({
    name: "Drill",
    price: 99,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
    name: "bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push({
    name: "TV",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push({
    name: "Drill",
    price: 99,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

// for (const product of productList) {
//     const productCard = document.createElement("div");
//     productCard.classList.add("product-card");

//     const productImg = document.createElement("img");
//     productImg.setAttribute("src", product.image);

//     const productInfo = document.createElement("div");
//     productInfo.classList.add("product-info");

//     const productInfoDiv = document.createElement("div");

//     const productPrice = document.createElement("p");
//     productPrice.innerText = "$ " + product.price;
//     const productName = document.createElement("p");
//     productName.innerText = product.name;

//     productInfoDiv.appendChild(productPrice);
//     productInfoDiv.appendChild(productName);

//     const productInfoFigure = document.createElement("figure");
//     const productImgCard = document.createElement("img");
//     productImgCard.setAttribute("src", "./icons/bt_add_to_cart.svg");
//     productInfoFigure.appendChild(productImgCard);

//     productInfo.appendChild(productInfoDiv);
//     productInfo.appendChild(productInfoFigure);

//     productCard.appendChild(productImg);
//     productCard.appendChild(productInfo);

//     cardsContainer.appendChild(productCard);
// }

function renderProducts(arr){
    for (const product of arr) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "$ " + product.price;
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement("figure");
        const productImgCard = document.createElement("img");
        productImgCard.setAttribute("src", "./icons/bt_add_to_cart.svg");
        productInfoFigure.appendChild(productImgCard);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList)
