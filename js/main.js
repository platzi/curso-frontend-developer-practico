const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCarIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.shopping-cart-container');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('.product-detail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', toggleDesktopMenu);
hamIcon.addEventListener('click', toggleMobileMenu);
shoppingCarIcon.addEventListener('click', toggleAside);
productDetailCloseIcon.addEventListener('click', closeProductDetail)

function toggleDesktopMenu() {
    const isAsideOpen = !aside.classList.contains('inactive');

    if (isAsideOpen) {
        aside.classList.add('inactive');
    }

    closeProductDetail()
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideOpen = !aside.classList.contains('inactive');

    if (isAsideOpen) {
        aside.classList.add('inactive');
    }

    closeProductDetail()

    mobileMenu.classList.toggle('inactive');
}

function toggleAside() {
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    
    if (isMobileMenuOpen) {
        mobileMenu.classList.add('inactive');
    }

    if (isDesktopMenuOpen) {
        desktopMenu.classList.add('inactive');
    }

    closeProductDetail();
    
    aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Screen',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/4105K8zLeWL._AC_SY580_.jpg'
});
productList.push({
    name: 'Computer',
    price: 200,
    image: 'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg'
});
productList.push({
    name: 'Cellphone',
    price: 100,
    image: 'https://media.karousell.com/media/photos/products/2021/3/25/apple_iphone_11_1616634106_2ad9f115_progressive'
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Screen',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/4105K8zLeWL._AC_SY580_.jpg'
});
productList.push({
    name: 'Computer',
    price: 200,
    image: 'https://cdn.britannica.com/77/170477-050-1C747EE3/Laptop-computer.jpg'
});
productList.push({
    name: 'Cellphone',
    price: 100,
    image: 'https://media.karousell.com/media/photos/products/2021/3/25/apple_iphone_11_1616634106_2ad9f115_progressive'
});

function renderProducts(productList) {
    for (product of productList) {
        const productCard = document.createElement('DIV');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('IMG');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetail)
        
        const productInfo = document.createElement('DIV');
        productInfo.classList.add('product-info');
        
        const productInfoDiv = document.createElement('DIV');
    
        const productPrice = document.createElement('P');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('P');
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement('FIGURE');
        const productImgCard = document.createElement('IMG');
        productImgCard.setAttribute('src', '../icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCard);
        productInfoDiv.append(productPrice, productName);
        productInfo.append(productInfoDiv, productInfoFigure);
        productCard.append(productImg, productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);

function openProductDetail() {
    productDetailContainer.classList.remove('inactive');

    aside.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}

function closeProductDetail() {
    productDetailContainer.classList.add('inactive');
}