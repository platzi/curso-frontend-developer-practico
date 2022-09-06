//desktop
const nav_email = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
//mobile
const menuHam = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
//ordenes de compra
const navShoping = document.querySelector('.navbar-shopping-cart')
const shoppingCardContainer = document.querySelector('#shoppingCardContainer')

const cardsContainer = document.querySelector('.cards-container');

const productDetailContainer = document.querySelector('#productDetail');
const productDetailClose = document.querySelector('.product-detail-close');
nav_email.addEventListener('click', toggleDesktopMenu)
menuHam.addEventListener('click', toogleMobileMenu)
navShoping.addEventListener('click', toogleCarAside)
productDetailClose.addEventListener('click', closeProductAside)

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCardContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCardContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');


}

function toogleMobileMenu() {
 const isAsideClosed = shoppingCardContainer.classList.contains('inactive');

 if (!isAsideClosed) {
    shoppingCardContainer.classList.add('inactive');
 }

    closeProductAside();
    mobileMenu.classList.toggle('inactive');
}

function toogleCarAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive'); 
    
    if (!isProductDetailClosed) {
       closeProductAside();
    }

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    shoppingCardContainer.classList.toggle('inactive');

}

//simulando consulta de API-REST
const productlist = [];

productlist.push({
    name: 'Camera',
    price: 120,
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg',
});

productlist.push({
    name: 'Phone',
    price: 520,
    image: 'https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?cs=srgb&dl=pexels-gabriel-freytez-341523.jpg&fm=jpg',
});

productlist.push({
    name: 'Headset',
    price: 120,
    image: 'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?cs=srgb&dl=pexels-wallace-chuck-3587478.jpg&fm=jpg',
});


function openProductDetail() {
    shoppingCardContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');

}

function closeProductAside() {

    productDetailContainer.classList.add('inactive');
}

function rederListproducts(arr) {
    
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        // product= {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);

        productImg.addEventListener('click', openProductDetail)
    
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
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }    
}



rederListproducts(productlist)