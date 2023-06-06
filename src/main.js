const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");

const productDetailCloseIcon = document.querySelector(".product-detail-2-close");

const aside = document.querySelector(".product-detail");

const productDetailContainer = document.querySelector(".product-detail-2")

const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
burgerMenu.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProductAside);


function toggleDesktopMenu () {
    const isAsideClosed = aside.classList.contains("inactive");
    if (!isAsideClosed) {
    aside.classList.add("inactive");
} 
  desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu () {
    const isAsideClosed = aside.classList.contains("inactive");
    if (!isAsideClosed) {
    aside.classList.add("inactive");
}
    closeProductAside();
    mobileMenu.classList.toggle("inactive")
}

function toggleCarritoAside () {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    if (!isMobileMenuClosed) {
     mobileMenu.classList.add("inactive");
}

const isProductDetailClosed = productDetailContainer.classList.contains("inactive");
if (!isProductDetailClosed) {
    productDetailContainer.classList.add("inactive");
}

aside.classList.toggle("inactive");
}

function openProductAside () {
  aside.classList.add("inactive")
  productDetailContainer.classList.remove("inactive")
}

function closeProductAside () {
    productDetailContainer.classList.add("inactive") 
}

const productList = [];
productList.push ({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push ({
    name: "computadora",
    price: 620,
    image: "https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1600"
});

productList.push ({
    name: "airpods",
    price: 320,
    image: "https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=1600"
});

productList.push ({
    name: "table",
    price: 80,
    image: "https://images.pexels.com/photos/890669/pexels-photo-890669.jpeg?auto=compress&cs=tinysrgb&w=300"
});

productList.push ({
    name: "planta",
    price: 35,
    image: "https://images.pexels.com/photos/2253844/pexels-photo-2253844.jpeg?auto=compress&cs=tinysrgb&w=300"
});

productList.push ({
    name: "teclado",
    price: 100,
    image: "https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=300"
});

/* <div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
    <div>
    <p>$120,00</p>
    <p>Bike</p>
    </div>
    <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
    </figure>
    </div>
</div> */

function renderProducts (arr) {
    for ( product of arr) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
        productImg.addEventListener("click", openProductAside);
    
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

renderProducts(productList);
