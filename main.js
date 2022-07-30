// menu flotante del correo
const navBarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const hamburgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const shoppingCar = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');

const cardsContainer = document.querySelector('.cards-container');



navBarEmail.addEventListener("click", toggleDesktopMenu);

hamburgerMenu.addEventListener("click", toggleMobileMenu);

shoppingCar.addEventListener("click", toggleProductDetail);



function toggleDesktopMenu() {
    const isProductDetailClosed = productDetail.classList.contains('inactive') ;

    if (!isProductDetailClosed){
        productDetail.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isProductDetailClosed = productDetail.classList.contains('inactive') ;

    if (!isProductDetailClosed){
        productDetail.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleProductDetail() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive') ;
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    };

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    productDetail.classList.toggle('inactive');
}

const productList = [];

productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'tote',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Hangbag',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'ShoulderBag',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

for (product of productList) {

    const productCard = document.createElement('div');
    productCard.classList.add('product-card'); 
    
    const img = document.createElement('img');
    img.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const nonNameDiv = document.createElement('div');

    const productInfo_price = document.createElement('p');
    productInfo_price.innerText = '$' + product.price;

    const productInfo_name = document.createElement('p');
    productInfo_name.innerText = product.name;

    const productInfo_figure = document.createElement('figure');


    const productInfo_figureImg = document.createElement('img');
    productInfo_figureImg.setAttribute('src', './icons/bt_add_to_cart.svg');

    cardsContainer.appendChild(productCard);

    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    productInfo.appendChild(nonNameDiv);
    productInfo.appendChild(productInfo_figure);


    nonNameDiv.appendChild(productInfo_price);
    nonNameDiv.appendChild(productInfo_name);

    productInfo_figure.appendChild(productInfo_figureImg);
    
}
