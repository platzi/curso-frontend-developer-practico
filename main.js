const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileNavOptions = document.querySelector(".menu");
const cartIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
mobileNavOptions.addEventListener("click", toggleMobileMenu);
cartIcon.addEventListener("click", togglecartItems);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu(){
    const isCartItemsClosed = shoppingCartContainer.classList.contains("inactive");
    if(!isCartItemsClosed){
        cartItems.classList.add("inactive");
    }
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    const isCartItemsClosed = shoppingCartContainer.classList.contains("inactive");
    if(!isCartItemsClosed){
        shoppingCartContainer.classList.add("inactive");
    }
    closeProductDetailAside();
    mobileMenu.classList.toggle("inactive");
}

function togglecartItems(){

    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
    const isProductDetailClosed = productDetailContainer.classList.contains("inactive");
    
    if(!isMobileMenuClosed){
        mobileMenu.classList.add("inactive");
    } else if(!isDesktopMenuClosed){
        desktopMenu.classList.add("inactive");
    } else if(!isProductDetailClosed){
        productDetailContainer.classList.add("inactive");
    }

    shoppingCartContainer.classList.toggle("inactive");
}

function openProductDetailAside(){

    shoppingCartContainer.classList.add("inactive");
    productDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside(){
    productDetailContainer.classList.add("inactive");
}

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "TV",
    price: 520,
    image: "https://images.pexels.com/photos/5721908/pexels-photo-5721908.jpeg",
});
productList.push({
    name: "Laptop",
    price: 720,
    image: "https://images.pexels.com/photos/40185/mac-freelancer-macintosh-macbook-40185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
});

function renderProducts(array){
    for(product of array){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
        productImg.addEventListener("click", openProductDetailAside);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
    
        const productPrice = document.createElement("div");
        productPrice.innerText = "$" + product.price;
        const productName = document.createElement("div");
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);