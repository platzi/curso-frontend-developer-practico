const menuEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const menuCarBuy = document.querySelector(".navbar-shopping-cart")
const li = document.querySelectorAll("li")
const productDetailCloseIcon = document.querySelector(".product-detail-close");

const destopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer")
const productDetailContainer = document.querySelector("#productDetail")
const cardsContainer = document.querySelector(".cards-container");


menuEmail.addEventListener("click", toggleDestopMenu);
menuHamIcon.addEventListener("click", togglemobileMenu);
menuCarBuy.addEventListener("click", toggleCarAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);



function toggleDestopMenu () {
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add("inactive")
        
    }
    destopMenu.classList.toggle("inactive")
    closeProductDetailAside()

    

}
function togglemobileMenu () {
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add("inactive")
    }
    closeProductDetailAside()

    mobileMenu.classList.toggle("inactive")

}
function toggleCarAside () {

    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isDesktopMenuClosed = destopMenu.classList.toggle("inactive");

    if (!isDesktopMenuClosed) {
        destopMenu.classList.add("inactive")

    }
    const isProductDetailClosed = productDetailContainer.classList.contains("inactive");
    if (!isProductDetailClosed) {
        productDetailContainer.classList.add("inactive")

    }

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive")
    }
    

    shoppingCartContainer.classList.toggle("inactive")

}

function openProductDetailAside () {
    shoppingCartContainer.classList.add("inactive")

    productDetailContainer.classList.remove("inactive")

}
function closeProductDetailAside () {
    productDetailContainer.classList.add("inactive")
}

const productList = [];
productList.push ({
    name: "bike",
    price: 350,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    
});
productList.push ({
    name: "computer",
    price: 1200,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push ({
    name: "radio",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push ({
    name: "televisor",
    price: 1200,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push ({
    name: "car",
    price: 50200,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push ({
    name: "bike",
    price: 350,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push ({
    name: "computer",
    price: 1200,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});


function renderProducts (arr) {
    for (product of arr) {
        const productCar = document.createElement("div")
        productCar.classList.add("product-card")
    
        const productImg = document.createElement("img")
        productImg.setAttribute("src", product.image)
        productImg.addEventListener("click", openProductDetailAside);
    
        const productInfo = document.createElement("div")
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div")
    
        const productPrice = document.createElement("p")
        productPrice.innerText = `$ + ${product.price}`;
    
        const productName = document.createElement("p")
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice)
        productInfoDiv.append(productName)
    
        const productInfoFigure = document.createElement("figure");
        const productImageCar = document.createElement("img")
        productImageCar.setAttribute("src", product.image)
    
        productInfoFigure.append(productImageCar)
    
        productInfo.append(productInfoDiv)
        productInfo.append(productInfoFigure)
    
        productCar.append(productImg)
        productCar.append(productInfo);
    
        cardsContainer.append(productCar)
    
    
    }

}

renderProducts(productList)

