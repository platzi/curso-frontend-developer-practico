const menuEmail = document.querySelector ('.navbar-email');
const desktopMenu = document.querySelector ('.desktop-menu');
const menuHamIcon = document.querySelector ('.menu');
const mobileMenu = document.querySelector ('.mobile-menu');
const carrito = document.querySelector ('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector ('#shoppingCartContainer');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
carrito.addEventListener('click', togglecarrito);

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    } 
    desktopMenu.classList.toggle('inactive');
};
function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
    
};

function togglecarrito() {
    const isMenuMobileClosed = mobileMenu.classList.contains('inactive');
    const isMenuDesktopClosed = desktopMenu.classList.contains('inactive');
if (!isMenuMobileClosed) {
    mobileMenu.classList.add('inactive');
} if (!isMenuDesktopClosed) {
    desktopMenu.classList.add('inactive');
}
shoppingCartContainer.classList.toggle('inactive');
}

const cardsContainer = document.querySelector('.cards-container');

const productList = []
productList.push({
    name: "Bike",
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: "Tv",
    price: 300,
    image: 'https://images.samsung.com/is/image/samsung/p6pim/ar/un43t5300agczb/gallery/ar-fhd-t5300-un43t5300agczb-356627272?$650_519_PNG$',
});
productList.push({
    name: "Laptop",
    price: 660,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_673199-MLA43826498738_102020-F.webp',
});

function renderProduct(arr) {
    for (product of arr) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        const productImg = document.createElement("img");
        productImg.setAttribute('src', product.image);
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
        const productInfoDiv = document.createElement("div");
        const productPrice = document.createElement("p");
        productPrice.innerHTML = '$' + product.price;
        const productName = document.createElement("p");
        productName.innerHTML = product.name;
        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfo.appendChild(productInfoDiv);
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        productInfoFigure.appendChild(productImgCart);
        productInfo.appendChild(productInfoFigure);
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        cardsContainer.appendChild(productCard);
    }
}

renderProduct(productList);

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