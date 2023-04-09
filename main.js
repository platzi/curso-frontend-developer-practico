const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menuHam'); 
const mobileMenu = document.querySelector('.mobile-menu'); 
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppigCartContainer = document.querySelector('#shoppingCartContainer'); 
const productDetailClose = document.querySelector('.product-detail-close');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');



const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    }
);
productList.push({
    name: 'Pantala',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    }
);
productList.push({
    name: 'Compu',
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    }
);


menuEmail.addEventListener('click', toogleDesktopMenu);
menuHamIcon.addEventListener('click', toogleMobileMenu);
menuCarritoIcon.addEventListener('click', toogleCarritoAside);
productDetailClose.addEventListener('click', closeProductDetailAside)

function toogleDesktopMenu() {
    const isAsideClosed =  shoppigCartContainer.classList.contains('inactive');
    if (!isAsideClosed) {
        shoppigCartContainer.classList.add('inactive');
    } 
    desktopMenu.classList.toggle('inactive');

}
function toogleMobileMenu() {
    const isAsideClosed =  shoppigCartContainer.classList.contains('inactive');
    const isdesktopMenuClosed =  desktopMenu.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppigCartContainer.classList.add('inactive');
    } 
    if (!isdesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    } 
    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

function toogleCarritoAside() {
    const isMobileMenuClose =  mobileMenu.classList.contains('inactive');
    const isProductDetailClose = productDetailContainer.classList.contains ('inactive');
    // 
    if (!isMobileMenuClose) {
        mobileMenu.classList.add('inactive');
    } 
    if (!isProductDetailClose) {
        productDetailContainer.classList.add('inactive');
    } 
    shoppigCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
    shoppigCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}


function renderProducts(arr){ 
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
</div>  */
for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const producImg = document.createElement('img');
    producImg.setAttribute ('src', product.image);
    producImg.addEventListener ('click', openProductDetailAside);


    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const producPrice = document.createElement('p');
    producPrice.innerText = '$ ' + product.price;

    const producName= document.createElement('p');
    producName.innerText = product.name;

    productInfoDiv.appendChild(producPrice);
    productInfoDiv.appendChild(producName);

    const producInfoFigure= document.createElement('figure');
    const producImgCart = document.createElement('img');
    producImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    producInfoFigure.appendChild(producImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(producInfoFigure);

    productCard.appendChild(producImg);
    productCard.appendChild(productInfo);

   cardsContainer.appendChild(productCard);
   //cardsContainer.appendChild(1);
}
}
renderProducts();