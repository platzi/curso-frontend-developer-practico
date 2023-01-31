const menuEmail = document.querySelector(".navbar-email");
const menuFlecha = document.querySelector(".email-flecha")
const desktopMenu = document.querySelector(".desktop-menu");

const burgerIcon = document.querySelector(".burgerIcon");
const mobileMenu = document.querySelector(".mobile-menu");

const cartNavIcon = document.querySelector(".navbar-shopping-cart");
const orderResumeAside = document.querySelector(".order-resume-aside");

const cardsContainer = document.querySelector(".cards-container");




menuEmail.addEventListener("click", toggleDesktopMenu);
menuFlecha.addEventListener("click", toggleDesktopMenu);

burgerIcon.addEventListener("click", toggleMobileMenu);

cartNavIcon.addEventListener("click", toggleOrderResumeAside);



function toggleDesktopMenu(){
    let isOrderResumeAsideOpen = !orderResumeAside.classList.contains("inactive"); 
    let isProductResumeAsideOpen = !productResumeAside.classList.contains("inactive");
    
    if(isOrderResumeAsideOpen){
        orderResumeAside.classList.toggle("inactive");
    }

    if(isProductResumeAsideOpen){
        productResumeAside.classList.toggle("inactive");
    }

    desktopMenu.classList.toggle("inactive");

}

function toggleMobileMenu(){
    let isOrderResumeAsideOpen = !orderResumeAside.classList.contains("inactive"); 
    
    if(isOrderResumeAsideOpen){
        orderResumeAside.classList.toggle("inactive");
    }

    mobileMenu.classList.toggle("inactive");
}

function toggleOrderResumeAside(){
    let isMobileMenuOpen = !mobileMenu.classList.contains("inactive");  
    let isEmailMenuOpen = !desktopMenu.classList.contains("inactive");
    let isProductResumeAsideOpen = !productResumeAside.classList.contains("inactive");

    if(isMobileMenuOpen){
        mobileMenu.classList.toggle("inactive");
    }

    if(isEmailMenuOpen){
        desktopMenu.classList.toggle("inactive");
    }

    if(isProductResumeAsideOpen){
        productResumeAside.classList.toggle("inactive");
    }

    orderResumeAside.classList.toggle("inactive");
}

function toggleProductResumeAside(){
    let isOrderResumeAsideOpen = !orderResumeAside.classList.contains("inactive");
    let isMobileMenuOpen = !mobileMenu.classList.contains("inactive");  
    let isEmailMenuOpen = !desktopMenu.classList.contains("inactive");

    if(isMobileMenuOpen){
        mobileMenu.classList.toggle("inactive");
    }

    if(isEmailMenuOpen){
        desktopMenu.classList.toggle("inactive");
    } 
    
    if(isOrderResumeAsideOpen){
        orderResumeAside.classList.toggle("inactive");
    }

    productResumeAside.classList.toggle("inactive");
}

const productList = [];

productList.push({
    name: "Chaqueta",
    price: 200,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: "PC",
    price: 500,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: "Telefono",
    price: 350,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: "Gorra",
    price: 350,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

function renderProducts(productList){
    for(product of productList){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        //product = {name, price, img}
        const productImg = document.createElement("img");
        productImg.setAttribute("src",product.img);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-card-info");
    
        const productInfoDiv = document.createElement("div");
        const productPrice = document.createElement("p");
        productPrice.innerText = "$ " + product.price;
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement("figure");
        const figureImg = document.createElement("img");
        figureImg.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        //Estructurar el "HTML"
    
        productInfoDiv.append(productPrice, productName);
    
        productInfoFigure.appendChild(figureImg);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(productImg, productInfo);
    
        cardsContainer.appendChild(productCard);
    
        console.log("Funcionando");
    }
}

renderProducts(productList);


const productSpot = document.getElementsByClassName("product-card");
const productResumeAside = document.querySelector(".product-detail");

for(let i=0;i<productSpot.length;i++){
    productSpot[i].addEventListener("click", toggleProductResumeAside);

}
