const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const orderShoppingCart = document.querySelector('#shopping-cart-container');
const cardsContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('#product-detail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', toggleDesktopMenu);
hamburgerMenu.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleOrder);
productDetailCloseIcon.addEventListener('click', closeProductDetail);

function toggleDesktopMenu() {
/*     const isOrderClosed = orderShoppingCart.classList.contains('inactive')
    if (!isOrderClosed) {
        orderShoppingCart.classList.add('inactive');
    } */
    orderShoppingCart.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
/*     const isOrderClosed = orderShoppingCart.classList.contains('inactive')

    if (!isOrderClosed) {
        orderShoppingCart.classList.add('inactive');
    } */
    closeProductDetail();
    orderShoppingCart.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleOrder() {
/*     const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');  
    } */
    mobileMenu.classList.add('inactive');
    productDetail.classList.add('inactive');  
    orderShoppingCart.classList.toggle('inactive');

}

/*  function toggleProductDetail() {
    productDetail.classList.toggle('inactive');
}  */

function openProductDetail() {
    orderShoppingCart.classList.add('inactive')
    productDetail.classList.remove('inactive');
}

function closeProductDetail() {
    orderShoppingCart.classList.add('inactive')
    productDetail.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Smart TV',
    price: 300,
    image: 'https://www.sencor.com/getmedia/f58c499b-6cf0-47e3-851b-5f0ef546e565/SLE-55US800TCSB-front.jpg.aspx?width=2100&height=2100&ext=.jpg ',
});
productList.push({
    name: 'Laptop',
    price: 700,
    image: 'https://www.laserprintsoluciones.com/wp-content/uploads/2022/08/X512JA-211VBGB.png',
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Smart TV',
    price: 300,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Laptop',
    price: 700,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});


function renderProducts(arr) {

    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetail);

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
        const figureImg = document.createElement('img');
        figureImg.setAttribute('src', './icons/bt_add_to_cart.svg');
        productInfoFigure.appendChild(figureImg);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }

}

renderProducts(productList);