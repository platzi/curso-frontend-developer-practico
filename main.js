const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const carritoMenu = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const cardContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
burguerMenu.addEventListener("click", toggleMobileMenu);
carritoMenu.addEventListener("click", toggleAsideMenu);


function toggleDesktopMenu(){
    const isAsideClose = aside.classList.contains("inactive");
   
    if(!isAsideClose){
        aside.classList.add("inactive")
    }
    desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu(){
    const isAsideClose = aside.classList.contains("inactive");
   
    if(!isAsideClose){
        aside.classList.add("inactive")
    }
    mobileMenu.classList.toggle("inactive")
}

function toggleAsideMenu(){
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

    if(!isDesktopMenuClosed | !isMobileMenuClosed){
        desktopMenu.classList.add("inactive")
        mobileMenu.classList.add("inactive")
    }
    aside.classList.toggle("inactive")
}


//Maquetando HTML//

const productList = [];
productList.push({
    name: "bike",
    price: 120000,
    Image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Monitor",
    price: 25000,
    Image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Teclado",
    price: 5000,
    Image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function renderProducts (arr){
    for (product of arr){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.Image);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
        
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgCart);
        productInfoDiv.append(productName, productPrice);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(productImg, productInfo);
    
        cardContainer.appendChild(productCard);
    }
}

renderProducts(productList);

