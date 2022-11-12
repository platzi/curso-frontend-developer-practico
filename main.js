const emailmenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const mobileMenu = document.querySelector('.mobile-menu');
const btn_burgerMenu = document.querySelector('.menu');

const shopingCart = document.querySelector('.shopingCart');
const btn_shoppingCart = document.querySelector('.navbar-shopping-cart');

const productcardContainer = document.querySelector('.cards-container');

const productDetailContainer = document.querySelector('.product-detailS');
const btn_productDetailClose = document.querySelector('.product-detailS-close');

function toggleDesktopMenu() {
    
    if (shopingCart.classList.contains('inactive')){
        
        desktopMenu.classList.toggle('inactive');
        
    } else { 
        toggleShoppingCart();
        desktopMenu.classList.toggle('inactive'); }
    
        closeProductDetailAside();

    }
    
        
function toggleShoppingCart() {
        
    desktopMenu.classList.add('inactive');


    if (mobileMenu.classList.contains('inactive')){
    
        shopingCart.classList.toggle('inactive');

    } else { 
        toggleMobileMenu();
        shopingCart.classList.toggle('inactive'); }
    
    closeProductDetailAside();
}

function toggleMobileMenu() {
    if (shopingCart.classList.contains('inactive')){
    
        mobileMenu.classList.toggle('inactive');

    } else { 
        toggleShoppingCart();
        mobileMenu.classList.toggle('inactive'); }

    closeProductDetailAside();
}

function openProductDetailAside() {
    productDetailContainer.classList.remove('inactive');
}
function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

emailmenu.addEventListener('click', toggleDesktopMenu );
btn_burgerMenu.addEventListener('click', toggleMobileMenu );
btn_shoppingCart.addEventListener('click', toggleShoppingCart );
btn_productDetailClose.addEventListener('click', closeProductDetailAside);

// Adding PRODUCTOS to the array called productList

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Pantalla',
    price: 12000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Computadora',
    price: 37000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

// Website Layout HTML written by JavaScript

function renderProducts(productsArray){
    
    for (const product of productsArray) {
        
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const productImage = document.createElement('img');
        productImage.setAttribute('src', product.image);
        productImage.addEventListener('click', openProductDetailAside);
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        const productPriceAndName = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        
        const productName = document.createElement('p');
        productName.innerText = product.name;
        
        const shopCartButton = document.createElement('figure');
        const shopCartIcon = document.createElement('img');
        shopCartIcon.setAttribute('src', './icons/bt_add_to_cart.svg');
        
        productPriceAndName.append(productPrice, productName);
        shopCartButton.appendChild(shopCartIcon);
    
        productInfo.append(productPriceAndName, shopCartButton);
    
        productCard.append(productImage, productInfo);
    
        productcardContainer.appendChild(productCard);
    
    }

}

renderProducts(productList);


