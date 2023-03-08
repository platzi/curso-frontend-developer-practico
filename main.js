const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuMobIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const productsDetail = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuMobIcon.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleProductsDetail);

function toggleDesktopMenu () {
    const isProductsDetailOpen = !productsDetail.classList.contains('inactive');

    if(isProductsDetailOpen) {
        productsDetail.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu () {
    const isProductsDetailOpen = !productsDetail.classList.contains('inactive');

    if(isProductsDetailOpen) {
        productsDetail.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleProductsDetail () {
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');

    if(isMobileMenuOpen) {
        mobileMenu.classList.add('inactive');
    }

    productsDetail.classList.toggle('inactive');
}

const productList =[];
productList.push({
    name: 'Bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name: 'Headphones',
    price: '220',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&w=1000&q=80'
})
productList.push({
    name: 'Mouse',
    price: '75',
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'
})
productList.push({
    name: 'Keyboard',
    price: '110',
    image: 'https://www.cnet.com/a/img/resize/19450244d75b42469f56dfbfdb0b7b39ddad50b6/hub/2021/08/20/453e37bf-61cb-4e16-ad90-fd822bdc390a/keychron-k3-mechanical-keyboard.jpg?auto=webp&fit=crop&height=1200&width=1200'
})

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCard);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);

