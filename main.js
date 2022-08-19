// Selector de elementos HTML
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCarIcon = document.querySelector('.navbar-shopping-cart');
const asideShoppingCart = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('.product-detail-dos');
const productDetailCloseIcon = document.querySelector('.product-detail-close');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurger.addEventListener('click', toggleMobilepMenu);
shoppingCarIcon.addEventListener('click', toggleShoppingCart);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
    const isAsideShoppingCartClosed = asideShoppingCart.classList.contains('inactive');

    if (!isAsideShoppingCartClosed) {
        asideShoppingCart.classList.add('inactive');
     }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobilepMenu() {
    const isAsideShoppingCartClosed = asideShoppingCart.classList.contains('inactive');

    if (!isAsideShoppingCartClosed) {
       asideShoppingCart.classList.add('inactive');
    }
    
    mobileMenu.classList.toggle('inactive');
    closeProductDetailAside();
}

function toggleShoppingCart() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');


    if (!isMobileMenuClosed) {
       mobileMenu.classList.add('inactive');
    }
    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
     }

    desktopMenu.classList.add('inactive');
    asideShoppingCart.classList.toggle('inactive');
}

function openProductDetailAside() {    
    asideShoppingCart.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

const productList = [];

productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'   
});
productList.push({
    name: 'Phone Nokia',
    price: 250,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Mouse Logitech',
    price: 25,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const ProductImg = document.createElement('img');
        ProductImg.setAttribute('src', product.image);
        ProductImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productinfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        
        cardsContainer.appendChild(productCard);
        productCard.appendChild(ProductImg);
        productCard.appendChild(productInfo);
        productInfo.appendChild(productinfoDiv);
        productinfoDiv.appendChild(productPrice);
        productinfoDiv.appendChild(productName);
        productInfo.appendChild(productInfoFigure);
        productInfoFigure.appendChild(productImgCart);
    }
}

renderProducts(productList);