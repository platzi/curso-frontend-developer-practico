const desktopMenu = document.querySelector('.desktop-menu');
const navbarEmail = document.querySelector('.navbar-email');
const iconBurguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const asideOrder = document.querySelector('.order-detail');
const asideProduct = document.querySelector('.product-detail');
const iconShoppingCart = document.querySelector('.navbar-shopping-cart');
const iconProductDetail = document.querySelector('.logo');
const productCardsContainer = document.querySelector('.cards-container');
const iconProductDetailClose = document.querySelector('.product-detail-close');

navbarEmail.addEventListener('click', toggleDesktopMenu);
iconBurguerMenu.addEventListener('click', toggleMobileMenu);
iconShoppingCart.addEventListener('click', toggleAsideOrder);
iconProductDetailClose.addEventListener('click', closeAsideProduct);


function toggleDesktopMenu() {
    const isAsideOrderClosed = asideOrder.classList.contains('inactive');
    const isAsideProductClosed = asideProduct.classList.contains('inactive');

    if (!isAsideOrderClosed) {
        asideOrder.classList.toggle('inactive');
    }
    if (!isAsideProductClosed) {
        asideProduct.classList.toggle('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu() {
    const isAsideOrderClosed = asideOrder.classList.contains('inactive');
    const isAsideProductClosed = asideProduct.classList.contains('inactive');

    if (!isAsideOrderClosed) {
        asideOrder.classList.toggle('inactive');
    }
    if (!isAsideProductClosed) {
        asideProduct.classList.toggle('inactive');
    }
    
    mobileMenu.classList.toggle('inactive');
}
function toggleAsideOrder() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isAsideProductClosed = asideProduct.classList.contains('inactive');

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.toggle('inactive');
    }

    if (!isMobileMenuClosed) {
        mobileMenu.classList.toggle('inactive');
    }

    if (!isAsideProductClosed) {
        asideProduct.classList.toggle('inactive');
    }

    asideOrder.classList.toggle('inactive');
}
function openAsideProduct() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isAsideOrderClosed = asideOrder.classList.contains('inactive');
    const isAsideProductClosed = asideOrder.classList.contains('inactive');

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.toggle('inactive');
    }

    if (!isMobileMenuClosed) {
        mobileMenu.classList.toggle('inactive');
    }

    if (!isAsideOrderClosed) {
        asideOrder.classList.toggle('inactive');
    }
    
    if (!isAsideProductClosed) {
        asideProduct.classList.add('inactive');
    }

    asideProduct.classList.remove('inactive');
}

function closeAsideProduct() {
    asideProduct.classList.add('inactive');
}

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

// product card array

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Display',
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Notebook',
    price: 420,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Ipad',
    price: 180,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        const productImage = document.createElement('img');
        productImage.setAttribute('src', product.image);
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        const productFigure = document.createElement('figure');
        const productFigureImage = document.createElement('img');
        productFigureImage.setAttribute('src','./icons/bt_add_to_cart.svg')

        productCardsContainer.appendChild(productCard);
        productCard.appendChild(productImage);
        productCard.appendChild(productInfo);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productFigure);
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        productFigure.appendChild(productFigureImage);

        productCard.addEventListener('click', openAsideProduct);

    }
} 
renderProducts(productList);