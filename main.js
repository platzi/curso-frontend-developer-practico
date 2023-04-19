const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const imgMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const imgShoppingCar = document.querySelector(".shopping-cart");
const shoppingSummary = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toogleDesktopMenu);
imgMenu.addEventListener("click", toogleMobileMenu);
imgShoppingCar.addEventListener("click", toogleproductDetail);

function toogleDesktopMenu() {
    const isShoppingSummaryClosed = shoppingSummary.classList.contains("inactive");

    if (!isShoppingSummaryClosed) {
        shoppingSummary.classList.toggle("inactive");
    } 

    desktopMenu.classList.toggle("inactive");

    
}

function toogleMobileMenu() {
    const isShoppingSummaryClosed = shoppingSummary.classList.contains("inactive");

    if (!isShoppingSummaryClosed) {
        shoppingSummary.classList.toggle("inactive");
    } 

    mobileMenu.classList.toggle("inactive");   
}

function toogleproductDetail() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

    if (!isMobileMenuClosed) {
        mobileMenu.classList.toggle("inactive");
    } 
        
    shoppingSummary.classList.toggle("inactive");
    
}

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image : "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
},
{
    name: "Washmachine",
    price: 100,
    image : "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
},
{
    name: "Cooler",
    price: 1200,
    image : "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
}
)

function renderProducts(arr) {

    for (product of arr){

        /*Create product cards based on an array of products*/
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
        productImg.setAttribute("alt", product.name);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
        
        const productInfoPrice = document.createElement("p");
        productInfoPrice.innerText = "$" + product.price;
        
        const productInfoName = document.createElement("p");
        productInfoName.innerText = product.name;
    
        productInfoDiv.append(productInfoPrice, productInfoName);
        
        const productInfoFigure = document.createElement("figure");
        
        const figureIMG = document.createElement("img");
        figureIMG.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        /*Append created elements*/ 
        cardsContainer.appendChild(productCard);

        productCard.append(productImg, productInfo);

        productInfo.append(productInfoDiv, productInfoFigure);
        
        productInfoFigure.appendChild(figureIMG);
    
    }

};
renderProducts(productList);
