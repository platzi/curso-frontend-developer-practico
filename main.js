const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuCarrito = document.querySelector(".navbar-shopping-cart");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector("#shoppingCartContainer");
const cardContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarrito.addEventListener("click", toggleMenuCarrito);

function toggleDesktopMenu(){
    const isAsideClosed =  aside.classList.toggle("inactive");

    if (!isAsideClosed){
        aside.classList.toggle("inactive");
    }

    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    const isAsideClosed =  aside.classList.toggle("inactive");

    if (!isAsideClosed){
        aside.classList.toggle("inactive");
    }

    mobileMenu.classList.toggle("inactive");
}

function toggleMenuCarrito(){
    const isMobileClosed = mobileMenu.classList.toggle("inactive");
    const isDesktopMenuClosed = desktopMenu.classList.toggle("inactive");
    
    if(!isMobileClosed){
        mobileMenu.classList.toggle("inactive");
    }

    if(!isDesktopMenuClosed){
        desktopMenu.classList.toggle("inactive");
    }

    aside.classList.toggle("inactive");
};

function render (arr){
    for (product of arr){
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
    
        productInfoDiv.append(productPrice,productName);
    
        const productInfoFigure = document.createElement("figure");
        const productImgCar = document.createElement("img");
        productImgCar.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgCar);
        productInfo.append(productInfoDiv,productInfoFigure);
        productCard.append(productImg,productInfo);
        cardContainer.append(productCard);
    
    } 
}

const productList = [];

productList.push({
    name: "bike",
    price: 120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

render(productList);
