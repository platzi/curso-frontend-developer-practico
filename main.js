const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuCarrito = document.querySelector(".navbar-shopping-cart");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector("#shoppingCartContainer");
const cardContainer = document.querySelector(".cards-container");
const productDetailContainer = document.querySelector("#productDetail");
const productDetailClose = document.querySelector(".product-detail-close");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarrito.addEventListener("click", toggleMenuCarrito);
productDetailClose.addEventListener("click", closeProductDetail);

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

    closeProductDetail();
}

function toggleMenuCarrito(){
    const isMobileClosed = mobileMenu.classList.contains("inactive");
    const isDesktopMenuClosed = desktopMenu.classList.toggle("inactive");
    
    if(!isMobileClosed){
        mobileMenu.classList.toggle("inactive");
    }

    const isProductDetailClosed = productDetailContainer.classList.contains("inactive");
    
    if(!isProductDetailClosed){
        productDetailContainer.classList.toggle("inactive");
    }

    if(!isDesktopMenuClosed){
        desktopMenu.classList.toggle("inactive");
    }

    aside.classList.toggle("inactive");
};

function openProductDetailAside(){
    aside.classList.add("inactive")
    productDetailContainer.classList.remove("inactive");
}

function closeProductDetail(){
    productDetailContainer.classList.add("inactive");
}

function render (arr){
    for (product of arr){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
        productImg.addEventListener("click", openProductDetailAside)
    
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
