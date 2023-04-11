const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const compressedMenu = document.querySelector('.compressedMobileMenu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const asideShoppingCart = document.querySelector('.product-detail-cart');
const productsContainer = document.querySelector('.cards-container');


// NAVBAR

navEmail.addEventListener('click', toggleDesktopMenu);
compressedMenu.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleAside);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
    const isAsideClosed = asideShoppingCart.classList.contains('inactive')
    if(!isAsideClosed){
        asideShoppingCart.classList.add('inactive')
    };
};
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive')
    const isAsideClosed = asideShoppingCart.classList.contains('inactive')
    if(!isAsideClosed){
        asideShoppingCart.classList.add('inactive')
    };
};
function toggleAside(){
    asideShoppingCart.classList.toggle('inactive')
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
    };
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive')
    };
};

//PRODUCTS  
const products = [];

function addProduct(id, cost, url){
    products.push({
        name: id,
        price: cost,
        img: url
    })
};

addProduct('Bike', '120,00', 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
addProduct('Bike', '120,00', 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
addProduct('Bike', '120,00', 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
addProduct('Bike', '120,00', 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
addProduct('Bike', '120,00', 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
addProduct('Bike', '120,00', 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
addProduct('Bike', '120,00', 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
addProduct('Bike', '120,00', 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
addProduct('Bike', '120,00', 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
addProduct('Bike', '120,00', 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
addProduct('Bike', '120,00', 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
addProduct('Bike', '120,00', 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
addProduct('Bike', '120,00', 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
addProduct('Bike', '120,00', 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
addProduct('Bike', '120,00', 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');

for(product of products){
    const productCart = document.createElement('div');
    productCart.classList.add('product-card');

    const img = document.createElement('img');
    img.setAttribute('src', product.img);
    img.classList.add('product-img')
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const p = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    const figure = document.createElement('figure');
    const addToCart = document.createElement('img');
    addToCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    figure.appendChild(addToCart);
    p.appendChild(productPrice);
    p.appendChild(productName);
    productInfo.appendChild(p);
    productInfo.appendChild(figure);
    productCart.appendChild(img);
    productCart.appendChild(productInfo);

    productsContainer.appendChild(productCart);
}

// MORE INFO PRODUCTS

const productImg = document.querySelector('.product-img');
const productMoreInfo = document.querySelector('.product-detail');
const closeAside = document.querySelector('.product-detail-close')

productImg.addEventListener('click', toggleMoreInfo);
closeAside.addEventListener('click', toggleMoreInfo)

function toggleMoreInfo(){
    productMoreInfo.classList.toggle('inactive')
};
