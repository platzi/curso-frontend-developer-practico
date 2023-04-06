const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const orderShoppingCart = document.querySelector('#shopping-cart-container');
const cardsContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('#product-detail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

const darkScreen = document.querySelector('.dark-screen');

menuEmail.addEventListener('click', toggleDesktopMenu);
hamburgerMenu.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleOrder);
productDetailCloseIcon.addEventListener('click', closeProductDetail);

function toggleDesktopMenu() {
/*     const isOrderClosed = orderShoppingCart.classList.contains('inactive')
    if (!isOrderClosed) {
        orderShoppingCart.classList.add('inactive');
    } */
    closeProductDetail();
    orderShoppingCart.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
    
    const isDesktopMenu = !desktopMenu.classList.contains("inactive")

    isDesktopMenu ? darkScreen.classList.remove('inactive') : darkScreen.classList.add('inactive');
}

function toggleMobileMenu() {
/*     const isOrderClosed = orderShoppingCart.classList.contains('inactive')

    if (!isOrderClosed) {
        orderShoppingCart.classList.add('inactive');
    } */
    closeProductDetail();
    orderShoppingCart.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');

    const isMobileMenu = !mobileMenu.classList.contains("inactive")

    isMobileMenu ? darkScreen.classList.remove('inactive') : darkScreen.classList.add('inactive');
}

function toggleOrder() {
/*     const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');  
    } */

    orderShoppingCart.classList.toggle('inactive');
    productDetail.classList.add('inactive');

    const isOrderShoppingCart = !orderShoppingCart.classList.contains("inactive")

    isOrderShoppingCart ? darkScreen.classList.remove('inactive') : darkScreen.classList.add('inactive');

}

/*  function toggleProductDetail() {
    productDetail.classList.toggle('inactive');
}  */

function openProductDetail() {
    orderShoppingCart.classList.add('inactive')
    productDetail.classList.remove('inactive');

    const isProductDetail = !productDetail.classList.contains("inactive")
    isProductDetail ? darkScreen.classList.remove('inactive') : darkScreen.classList.add('inactive');
}

function closeProductDetail() {
    orderShoppingCart.classList.add('inactive')
    productDetail.classList.add('inactive');
    darkScreen.classList.add("inactive");
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Lorem Ipsum',
});
productList.push({
    name: 'Smart TV',
    price: 300,
    image: 'https://www.sencor.com/getmedia/f58c499b-6cf0-47e3-851b-5f0ef546e565/SLE-55US800TCSB-front.jpg.aspx?width=2100&height=2100&ext=.jpg ',
    description: 'Lorem Ipsum',
});
productList.push({
    name: 'Laptop',
    price: 700,
    image: 'https://www.laserprintsoluciones.com/wp-content/uploads/2022/08/X512JA-211VBGB.png',
    description: 'Lorem Ipsum',
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Lorem Ipsum',
});
productList.push({
    name: 'Smart TV',
    price: 300,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Lorem Ipsum',
});
productList.push({
    name: 'Laptop',
    price: 700,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Lorem Ipsum',
});

function renderProducts(arr) {

    arr.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', function() {
            renderDetailsAside(product);
            openProductDetail();
        });

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
    })
}

renderProducts(productList);

function renderDetailsAside(product){
    productDetail.classList.remove("inactive");

    const productImgeDetail = document.querySelector(".product-detail-img")
    const productPrice = document.querySelector(".product-price");
    const productName = document.querySelector(".product-name");
    const productDescription = document.querySelector(".product-description");
    productPrice.innerText = "$" + product.price;
    productName.innerText = product.name;
    productImgeDetail.setAttribute('src', product.image);
    productDescription.innerText = product.description;
}

