const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconoMenuMobil = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const myOrderMenu = document.querySelector('.product-detail');
const cardContainer = document.querySelector('.cards-container');

menuEmail.addEventListener ('click', toggleDesktopMenu);
iconoMenuMobil.addEventListener ('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleMyOrderMenu);

function toggleDesktopMenu() {
    const isMyOrderMenuClosed = myOrderMenu.classList.contains('inactive');
    if (!isMyOrderMenuClosed) {
        myOrderMenu.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
};
function toggleMobileMenu() {
    const isMyOrderMenuClosed = myOrderMenu.classList.contains('inactive');
    if (!isMyOrderMenuClosed) {
        myOrderMenu.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
    console.log('Hello')
};
function toggleMyOrderMenu() {
    const isMobileMenuClosed = mobileMenu.classList.contains ('inactive');
    
    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    myOrderMenu.classList.toggle('inactive');
};
console.log('I am working');
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

const productList = [];
productList.push(
    {
        name: 'Bike',
        price: 250,
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    });
productList.push({
    name: 'Helmet',
    price: 40,
    img: 'https://cdn.shopify.com/s/files/1/0836/6919/products/black_bike_helmet_1_003_1600x.jpg?v=1611711971'
});
productList.push({
    name: 'Bag',
    price: 50,
    img: 'https://cdn.shopify.com/s/files/1/0263/2197/7434/products/PHOTO-2022-04-14-15-34-19_300x.jpg?v=1649949033',
});

function renderProducts (array) {
for (product of array) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.img);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info')

    const productInfoDiv = document.createElement('div');
    
    const productPrice = document.createElement('p');
    productPrice.innerText ='$' + product.price;

    const productName = document.createElement('p');
    productName.innerText = product.name;

    const addToCartFigure = document.createElement('figure');
    const addToCartIcon = document.createElement ('img');
    addToCartIcon.setAttribute('src','./icons/bt_add_to_cart.svg');

    addToCartFigure.appendChild(addToCartIcon);
   
    productInfo.appendChild(productInfoDiv); 
    productInfo.appendChild(addToCartFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo); 
   
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    
    cardContainer.appendChild(productCard);
};
}
renderProducts(productList);