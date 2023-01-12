const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
mobileMenuIcon.addEventListener("click", toggleMobileMenu);
shoppingIcon.addEventListener("click", toggleShoppingIcon);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside)

//* En las funciones siguientes en realidad no deben acabar en OPEN, sino en CLOSED*//
function toggleDesktopMenu(){
    const isshoppingCartContainerOpen = shoppingCartContainer.classList.contains("inactive")

    if (!isshoppingCartContainerOpen){
        shoppingCartContainer.classList.add("inactive")
    }

    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    const isshoppingCartContainerOpen = shoppingCartContainer.classList.contains("inactive")
    const isProductDetailContainerOpen = productDetailContainer.classList.contains("inactive")
    if (!isshoppingCartContainerOpen){
        shoppingCartContainer.classList.add("inactive");
    } else if (!isProductDetailContainerOpen);
    productDetailContainer.classList.add("inactive")
    mobileMenu.classList.toggle("inactive");
}

function toggleShoppingIcon(){
    const isMobileMenuOpen = mobileMenu.classList.contains("inactive");
    const isDesktopMenuOpen = desktopMenu.classList.contains("inactive");
    const isProductDetailContainerOpen = productDetailContainer.classList.contains("inactive")
    if (!isMobileMenuOpen){
        mobileMenu.classList.add("inactive")
    } else if (!isDesktopMenuOpen){
        desktopMenu.classList.add("inactive")
    } else if (!isProductDetailContainerOpen);
        productDetailContainer.classList.add("inactive")
    shoppingCartContainer.classList.toggle("inactive")
}

function openProductDetailAside(){
    shoppingCartContainer.classList.add("inactive");
    productDetailContainer.classList.remove("inactive")
}

function closeProductDetailAside(){
    productDetailContainer.classList.add("inactive")
}

const productList = [];
productList.push({
    name: "bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "TV",
    price: 1000,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Laptop",
    price: 2200,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function  renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
        productImg.addEventListener("click",openProductDetailAside);
    
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
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgCart);
        
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList)




