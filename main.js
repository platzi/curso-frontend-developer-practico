const toggleDesktopMenu = () => {
    const isAsideMenuClosed = aside.classList.contains("inactive");
    if(!isAsideMenuClosed){
        aside.classList.add("inactive");
    }
    desktopMenu.classList.toggle("inactive");
}

const toggleMobileMenu = () =>{
    const isAsideMenuClosed = aside.classList.contains("inactive");
    if(!isAsideMenuClosed){
        aside.classList.add("inactive");
    }
    mobileMenu.classList.toggle("inactive");
}

const toggleCarritoAside = () => {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isMenuDesktopClosed = desktopMenu.classList.contains("inactive");
    if(!isMenuDesktopClosed){
        desktopMenu.classList.add("inactive");
    }
    if(!isMobileMenuClosed){
        mobileMenu.classList.add("inactive");
    }
        aside.classList.toggle("inactive");
}
const renderProducts = (arr) => {
    for(products of arr){

        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        
        const img = document.createElement("img");
        img.setAttribute("src",products.image);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
        
    
        const productInfoDiv = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + products.price;
    
        const productName = document.createElement("p");
        productName.innerText = products.name;
    
        const productInfoFigure = document.createElement("figure");
    
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(img);
        productCard.appendChild(productInfo);
    
        cardContainer.appendChild(productCard);
    }
}
const menuEmail = document.querySelector(".navbar-email");
menuEmail.addEventListener("click", toggleDesktopMenu);

const desktopMenu = document.querySelector(".desktop-menu");

const menuHamIcon =document.querySelector(".menu");
menuHamIcon.addEventListener("click",toggleMobileMenu);

const mobileMenu = document.querySelector(".mobile-menu");

const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

const aside = document.querySelector(".product-detail");

const cardContainer = document.querySelector(".cards-container");

const productList = [];
productList.push({
    name:"Bike",
    price:120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name:"Tv",
    price:220,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name:"Pc",
    price:600,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

renderProducts(productList);