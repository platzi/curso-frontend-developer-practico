// Selecting all elements from HTML
const menuEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const iconCart = document.querySelector('.navbar-shopping-cart');
const shoppingCart = document.querySelector('#shoppingCart');
const cardsContainer = document.querySelector('.cards-container');
const productDetailClose = document.querySelector('.product-detail-close');
const productDetailAside = document.querySelector('#productDetails');




// Events Listeners
menuEmail.addEventListener('click', toggleMenuDesktop);
menuHamIcon.addEventListener('click', toggleMenuMobile);
iconCart.addEventListener('click', toggleShoppingCart);
productDetailClose.addEventListener('click', closeProductDetail);

// Interaction funtions
function toggleMenuDesktop() {
    const isAsideClosed = shoppingCart.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCart.classList.add('inactive');
    }
    closeProductDetail();

    menuDesktop.classList.toggle('inactive');
}

function toggleMenuMobile() {
    closeProductDetail();
    const isAsideClosed = shoppingCart.classList.contains('inactive');
    if (!isAsideClosed) {
        shoppingCart.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart() {
    const isMenuMobileClosed = mobileMenu.classList.contains('inactive'); 
    
    if (!isMenuMobileClosed) {
        mobileMenu.classList.add('inactive');
    } 
    menuDesktop.classList.add('inactive');
    closeProductDetail();
    
    shoppingCart.classList.toggle('inactive');
}

function closeProductDetail() {
    productDetailAside.classList.add('inactive');
}

function openProductDetail() {
    const isAsideClosed = shoppingCart.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCart.classList.add('inactive');
    }
    menuDesktop.classList.add('inactive');
    productDetailAside.classList.remove('inactive');
}

// Hardcode array
let productList = [];
let shoppingCartList = [];

productList.push({
    name: 'bike',
    price: 200,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
},
{
    name: 'bikpce',
    price: 300,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
},
{
     name: 'morral',
    price: 40,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    });

shoppingCartList.push({
    name: 'bike',
    price: 200,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
},{
    name: 'bike',
    price: 200,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

// Render of product list container build from array
function renderProducts(arr){
for (arr of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', arr.image);
    productImg.addEventListener('click', openProductDetail);
    
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const infoDiv = document.createElement('div');
    
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + arr.price;
    const productName = document.createElement('p');
    productName.innerText = arr.name; 

    infoDiv.append(productPrice, productName);

    const productInfoFigure = document.createElement('figure');
    const figureImg = document.createElement('img');
    figureImg.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(figureImg);

    productInfo.append(infoDiv, productInfoFigure);

    productCard.append(productImg, productInfo);

    cardsContainer.append(productCard);


}
}

// render of shopping cart build from array
   function renderCart(arr) { 
       for (arr of shoppingCartList) {
    const myOrderContent = document.createElement('div');
    myOrderContent.classList.add('my-order-content');

    const shoppingCartElement = document.createElement('div');
    shoppingCartElement.classList.add('shopping-cart');

    const shoppingCartFigure = document.createElement('figure');
    const shoppingCartFigureImg = document.createElement('img');
    shoppingCartFigureImg.setAttribute('src', arr.image);
    shoppingCartFigure.appendChild(shoppingCartFigureImg);

    const productName = document.createElement('p');
    productName.innerText = arr.name;
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + arr.price;

    const closeIcon = document.createElement('img');
    closeIcon.setAttribute('src', './icons/icon_close.png');

    shoppingCartElement.append(shoppingCartFigure, productName, productPrice, closeIcon);

    

    myOrderContent.appendChild(shoppingCartElement);

    shoppingCart.appendChild(myOrderContent);
    }

    const total = document.createElement('div');
    total.classList.add('order');
    const totalP = document.createElement('p');
    const totalSpan = document.createElement('span');
    totalSpan.innerText = "Total";
    const totalPrice = document.createElement('p');
    totalPrice.innerText = 'crearFunction';

    totalP.appendChild(totalSpan);
    total.append(totalP, totalPrice);

    const checkoutButton = document.createElement('button');
    checkoutButton.classList.add('primary-button');
    checkoutButton.innerText = "Checkout";
    
    shoppingCart.append(total, checkoutButton);
   }

// Render
renderProducts(productList);
renderCart(shoppingCartList);

