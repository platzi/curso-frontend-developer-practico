const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const navbarShoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');
// Product list
const cardsContainer = document.querySelector('.cards-container');
// Product Description
const productDescription = document.querySelector('.product-description');
const productDescriptionClose = document.querySelector('.product-description-close')


function fnToggleDesktopMenu() {
    const isProductDetailClosed = productDetail.classList.contains('inactive');
    const isProductDescriptionClosed = productDescription.classList.contains('inactive');

    if (!isProductDetailClosed) {
        productDetail.classList.add('inactive');
    }
    if (!isProductDescriptionClosed) {
        productDescription.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}
function fnToggleMobileMenu() {
    const isProductDetailClosed = productDetail.classList.contains('inactive');
    const isProductDescriptionClosed = productDescription.classList.contains('inactive');

    if (!isProductDetailClosed) {
        productDetail.classList.add('inactive');
    }
    if (!isProductDescriptionClosed) {
        productDescription.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}
function fnToggleProductDetail() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDescriptionClosed = productDescription.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
    if (!isProductDescriptionClosed) {
        productDescription.classList.add('inactive');
    }

    productDetail.classList.toggle('inactive');
}

// Product List
function fnRenderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const imgProduct = document.createElement('img');
        imgProduct.setAttribute('src', product.image);
        imgProduct.addEventListener('click', fnOpenProductDescription);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const divProductContent = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const figureProductCartIcon = document.createElement('figure');
    
        const iconProductCart = document.createElement('img');
        iconProductCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        figureProductCartIcon.appendChild(iconProductCart);
    
        divProductContent.appendChild(productPrice);
        divProductContent.appendChild(productName);
    
        productInfo.appendChild(divProductContent);
        productInfo.appendChild(figureProductCartIcon);
    
        productCard.appendChild(imgProduct);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

// Product description
function fnOpenProductDescription() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetail.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
    if (!isProductDetailClosed) {
        productDetail.classList.add('inactive');
    }

    productDescription.classList.remove('inactive')
}
function fnCloseProductDescription() {
    productDescription.classList.add('inactive')
}


// function fnCloseMenu() {
//     if (innerWidth == 640) {
//         desktopMenu.classList.add('inactive');
//         mobileMenu.classList.add('inactive');
//     }
// }
// addEventListener('resize', fnCloseMenu);

navbarEmail.addEventListener('click', fnToggleDesktopMenu);
mobileMenuIcon.addEventListener('click', fnToggleMobileMenu);
navbarShoppingCart.addEventListener('click', fnToggleProductDetail);
// Product description
productDescriptionClose.addEventListener('click', fnCloseProductDescription)

// Product list
const arrProductList = [];
arrProductList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
arrProductList.push({
    name: 'TV',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
arrProductList.push({
    name: 'Laptop',
    price: 650,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

fnRenderProducts(arrProductList);