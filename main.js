const navbarContainerElement = document.querySelector('.nav-container');
const navbarEmailElement = document.querySelector('.navbar-email');
const desktopMenuElement =document.querySelector('.desktop-menu');

const hamburgerElement = document.querySelector('.menu');
const mobileMenuElement = document.querySelector('.mobile-menu');

const navbarCartElement = document.querySelector('.navbar-shopping-cart');
const cartMenuElement = document.querySelector('.shopping-cart-detail');

const grayOutOverlayElement = document.querySelector('.gray-out-overlay');
const productDetailElement = document.querySelector('.product-detail');
const productDetailImgElement = document.querySelector('.product-detail-img');
const productInfoNameElement = document.querySelector('.product-info p');
const productInfoPriceElement = document.querySelector('.product-info p:nth-of-type(2)');

const productDetailCloseElement = document.querySelector('.product-detail-close');

class Product {
    constructor(name, price, img) {
        this.name = name;
        this.price = price;
        this.img = img;
    } 
}

const productList = [
    new Product('Bike', 120, 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=1'),
    new Product('TV', 599, 'https://images.pexels.com/photos/7546602/pexels-photo-7546602.jpeg?auto=compress&cs=tinysrgb&dpr=1'),
    new Product('Laptop', 1799, 'https://images.pexels.com/photos/11673485/pexels-photo-11673485.jpeg?auto=compress&cs=tinysrgb&dpr=1'),
    new Product('Desktop Computer', 2700, 'https://images.pexels.com/photos/205316/pexels-photo-205316.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'),
    new Product('Smartphone', 1889, 'https://images.pexels.com/photos/11772523/pexels-photo-11772523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'),
    new Product('Chemex', 69.95, 'https://images.pexels.com/photos/5480759/pexels-photo-5480759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'),
];

// Add a product to the shopping cart
let cartItemsQuantity = document.querySelector('#cart-items-quantity');
function addProductToCart(img, name, price) {
    const orderContent = document.querySelector('.my-order-content');
    const orderTotalPrice = document.querySelector('.order-total-price');
 
    const shoppingCart = createShoppingCartItem(img, name, price);
    
    shoppingCart.querySelector('.remove-product').addEventListener('click', () => {
        orderContent.removeChild(shoppingCart);

        Number(cartItemsQuantity.innerText--) 
        //Send negative price
        updateTotalPrice(orderTotalPrice, -price);
    });

    orderContent.prepend(shoppingCart);

    Number(cartItemsQuantity.innerText++) 
    updateTotalPrice(orderTotalPrice, price);
}

   // Create the shopping cart item
function createShoppingCartItem(img, name, price) {
    const shoppingCart = document.createElement('div');
    shoppingCart.classList.add('shopping-cart');
    
    const shoppingCartProductFigure = document.createElement('figure');
    const shoppingCartProductImg = document.createElement('img');
    shoppingCartProductImg.setAttribute('src', img);
    
    const shoppingCartProductName = document.createElement('p');
    shoppingCartProductName.innerText = name;
    
    const shoppingCartProductPrice = document.createElement('p');
    shoppingCartProductPrice.innerText = price;
    
    const shoppingCartProductRemove = document.createElement('img');
    shoppingCartProductRemove.setAttribute('src', './icons/icon_close.png');
    shoppingCartProductRemove.classList.add('remove-product');

    shoppingCartProductFigure.appendChild(shoppingCartProductImg);
    shoppingCart.append(shoppingCartProductFigure, shoppingCartProductName, shoppingCartProductPrice, shoppingCartProductRemove);

    return shoppingCart;
}

// Update the total price
function updateTotalPrice(orderTotalPrice, priceChange) {
    let currentTotal = parseFloat(orderTotalPrice.innerText.replace('$', '')) || 0;
    let newTotal = currentTotal + priceChange;

    orderTotalPrice.innerText = '$' + newTotal.toFixed(2);
}


// Function to create and add a product card to the card container
function renderProducts(arr) {
    const cardContainerElement = document.querySelector('.cards-container');

    // Function to handle the click event for viewing product details
    function handleProductDetailClick(product) {
        productDetailElement.classList.remove('inactive');
        cartMenuElement.classList.add('inactive');
        desktopMenuElement.classList.add('inactive');
        mobileMenuElement.classList.add('inactive');
        grayOutOverlayElement.classList.remove('inactive');
        navbarContainerElement.classList.add('z-index1');
        productDetailImgElement.setAttribute('src', product.img);
        productInfoNameElement.innerText = product.name;
        productInfoPriceElement.innerText = product.price;
    }

    // Function to handle the click event for adding a product to the cart
    function handleAddToCartClick(product) {
        addProductToCart(product.img, product.name, product.price);
    }

    for (const product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.img);
        productImg.addEventListener('click', () => handleProductDetailClick(product));

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;

        const productName = document.createElement('p');
        productName.innerText = product.name;

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.classList.add('product-img-cart');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        productImgCart.addEventListener('click', () => handleAddToCartClick(product));

        productInfoDiv.append(productPrice, productName);
        productInfoFigure.appendChild(productImgCart);
        productInfo.append(productInfoDiv, productInfoFigure);
        productCard.append(productImg, productInfo);

        cardContainerElement.appendChild(productCard);
    }
}

// Event listeners to toggle visibility of menu and cart elements
navbarEmailElement.addEventListener('click', () => {
    desktopMenuElement.classList.toggle('inactive');
    cartMenuElement.classList.add('inactive');
})

hamburgerElement.addEventListener('click', () => {
    mobileMenuElement.classList.toggle('inactive');
    cartMenuElement.classList.add('inactive');
    productDetailElement.classList.add('inactive');
})

navbarCartElement.addEventListener('click', () => {
    cartMenuElement.classList.toggle('inactive');
    mobileMenuElement.classList.add('inactive');
    desktopMenuElement.classList.add('inactive');
})

productDetailCloseElement.addEventListener('click', () => {
    productDetailElement.classList.add('inactive');
    grayOutOverlayElement.classList.add('inactive');
    navbarContainerElement.classList.remove('z-index1');
})

renderProducts(productList);