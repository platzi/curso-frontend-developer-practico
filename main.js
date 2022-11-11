const menuEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");

const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu() {
    const isAsideclosed = shoppingCartContainer.classList.contains("inactive");
    
    if (!isAsideclosed) {
        shoppingCartContainer.classList.toggle("inactive")
    }
    closeShoppingCart()
    desktopMenu.classList.toggle("inactive");
}

function closeShoppingCart() {
    shoppingCartContainer.classList.add("inactive")
}

function toggleMobileMenu() {
    const isAsideclosed = shoppingCartContainer.classList.contains("inactive");

    if (!isAsideclosed) {
        shoppingCartContainer.classList.toggle("inactive")
    }
    closeProductDetailAside()
    mobileMenu.classList.toggle("inactive")
}

function toggleCarritoAside() {
   const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
   if(!isMobileMenuClosed){
    mobileMenu.classList.toggle("inactive");
   }

   const isProductDetailClosed = productDetailContainer.classList.contains("inactive");
   if(!isProductDetailClosed){
    productDetailContainer.classList.toggle("inactive");
   }

   shoppingCartContainer.classList.toggle("inactive")
}

function openProducDetailAside() {
    shoppingCartContainer.classList.add("inactive")
    productDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside() {
    productDetailContainer.classList.add("inactive");
}

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push({
    name: "Pantalla",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push({
    name: "Compu",
    price: 620,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
/* 
<div class="product-card">
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
</div>
 */

function renderProducts(arrayName) {
    for (product of productList){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
        productImg.addEventListener("click", openProducDetailAside)
    
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