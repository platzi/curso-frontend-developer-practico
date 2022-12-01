const emailNavbar = document.querySelector(".navbar-email");
const menuDesktop = document.querySelector(".desktop-menu");
const menuHam = document.querySelector(".menu");
const menuMobile = document.querySelector(".mobile-menu");
const carritoMenu = document.querySelector(".carrito");
const productDetail = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");


emailNavbar.addEventListener("click", toggleDesktopMenu);
menuHam.addEventListener("click", toggleMobileMenu);
carritoMenu.addEventListener("click", toggleCarritoMenu);

function toggleDesktopMenu() {
    const isProductDetailDesktopClose = productDetail.classList.contains("inactive");
    if (!isProductDetailDesktopClose) {
        productDetail.classList.add("inactive");
    }

    menuDesktop.classList.toggle("inactive");

}

function toggleMobileMenu() {
    const isProductDetailClose = productDetail.classList.contains("inactive");
    if (!isProductDetailClose) {
        productDetail.classList.add("inactive");
    }

    menuMobile.classList.toggle("menu-inactive");
}
function toggleCarritoMenu(){
    const isMobileMenuClose = menuMobile.classList.contains("menu-inactive");
    const isMenuDesktopClose = menuDesktop.classList.contains("inactive");

    if (!isMobileMenuClose) {
        menuMobile.classList.add("menu-inactive");
    }
   if (!isMenuDesktopClose) {
        menuDesktop.classList.add("inactive");
   }

    productDetail.classList.toggle("inactive");

}

const productList = [];
productList.push({
    name: "bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Silla",
    price: 1800,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Mouse",
    price: 500,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Silla",
    price: 1800,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});


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

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
       
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        // product = {name, price, image} -> product.image
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
       
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgIcon = document.createElement('img');
        productImgIcon.setAttribute('src', './icons/bt_add_to_cart.svg');
       
    
        productInfoFigure.appendChild(productImgIcon);
    
        productInfo.appendChild(productInfoDiv);
    
        productInfo.appendChild(productInfoFigure);
    
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}
renderProducts(productList);