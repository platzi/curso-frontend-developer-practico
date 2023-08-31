const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const hamburMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const carritoShop = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu); //toggle es como intercambiar
hamburMenu.addEventListener("click", toggleMobileMenu);
carritoShop.addEventListener("click", toggleCarritoShop);

function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

    if(!isAsideClosed){
        shoppingCartContainer.classList.add("inactive");
    }

    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

    if(!isAsideClosed){
        shoppingCartContainer.classList.add("inactive");
    }
    mobileMenu.classList.toggle("inactive");
}

function toggleCarritoShop(){
    const isMobileMenuClosed = mobileMenu.classList.contains("inative");
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add("inactive");
    }
    
    if(!isMobileMenuClosed){
        mobileMenu.classList.add("inactive");
    }
    shoppingCartContainer.classList.toggle("inactive");

}

const productList = [];
productList.push({
    name:"Bike",
    price: 120,
    image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
})

productList.push({
    name: "Monitor",
    price: 220,
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
})

productList.push({
    name: "Keyboard",
    price: 320,
    image: "https://images.pexels.com/photos/7915219/pexels-photo-7915219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
})

for(product of productList){
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

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    

    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "icons/bt_add_to_cart.svg")

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}




