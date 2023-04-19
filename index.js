const email = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const bntMenuMobile = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const productContent= document.querySelector(".product-content");
const navbarShopingCart = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");
const productDetailClose = document.querySelector(".product-detail-close");
email.addEventListener('click', () => {
    const cartMenuClosed = productContent.classList.contains("inactive");
    if (!cartMenuClosed) {
        productContent.classList.add("inactive")
    }
    desktopMenu.classList.toggle("inactive");

})

bntMenuMobile.addEventListener("click", () => {
    const productDetailClosed = productDetail.classList.contains("inactive");
    if(!productDetailClosed){
        productDetail.classList.add("inactive");
    }
    const cartMenuClosed = productContent.classList.contains("inactive");
    if (!cartMenuClosed) {
        productContent.classList.add("inactive")
    }
    mobileMenu.classList.toggle("inactive");
})

navbarShopingCart.addEventListener("click", () => {

    const mobileMenuClosed = mobileMenu.classList.contains("inactive");
    const emailClosed = desktopMenu.classList.contains("inactive");
    
    if (!emailClosed) {
        desktopMenu.classList.add("inactive");
    }
    if (!mobileMenuClosed) {
        mobileMenu.classList.add("inactive");
    }

    const isProductDetailClosed = productDetail.classList.contains("inactive");
    
    if(!isProductDetailClosed){
        productDetail.classList.add("inactive");
    }
    productContent.classList.toggle("inactive");

})

productDetailClose.addEventListener("click", ()=>{
    productDetail.classList.add("inactive");
})

const productList = [];
productList.push({
    name: "bike",
    price: 120,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push({
    name: "Pantalla",
    price: 300,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push({
    name: "Phone",
    price: 990,
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})




function renderProducts(arr){
productList.forEach((productos) => {
    const productCard = document.createElement('div');
    productCard.classList.add("product-card");

    const productImg = document.createElement('img');
    productImg.setAttribute('src', productos.img);
    
    productImg.addEventListener("click",()=>{
        productContent.classList.add("inactive");
        productDetail.classList.remove("inactive");

    })

    const productInfo = document.createElement('div');
    productInfo.classList.add("product-info");

    const productInfoInfo = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = "$ " + productos.price;

    const productName = document.createElement('p');
    productName.innerText = productos.name;

    productInfoInfo.appendChild(productPrice);
    productInfoInfo.appendChild(productName);
    
    const addCartFigure = document.createElement('figure');

    const addCartImg = document.createElement('img');
    addCartImg.setAttribute('src', "./icons/bt_add_to_cart.svg");

    const cardsContainer = document.querySelector('.cards-container');

    addCartFigure.appendChild(addCartImg);  
    productInfo.appendChild(productInfoInfo);
    productInfo.appendChild(addCartFigure);
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    cardsContainer.appendChild(productCard);
    
    
})}

renderProducts(productList);