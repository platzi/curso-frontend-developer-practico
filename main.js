const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurgerIcon = document.querySelector('.menu');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarrito = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail-em');
const productCart = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('.product-detail')

navEmail.addEventListener('click', toggleDesktopMenu);
menuBurgerIcon.addEventListener('click', toggleBurgerIcon);
menuCarrito.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {

    desktopMenu.classList.toggle('inactive');
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    productDetailContainer.classList.add('inactive');
}

function toggleBurgerIcon () {
    mobileMenu.classList.toggle('inactive')
    const isAsideClosed = aside.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    if(!isAsideClosed){
        aside.classList.add('inactive')
    }
    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }
}

function toggleCarritoAside () {
    aside.classList.toggle('inactive')

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    if (!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }
    

}

function openProductDetailAside(){
    productDetailContainer.classList.remove("inactive");
    aside.classList.add('inactive');
    desktopMenu.classList.add('inactive');

}
function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Pantalla',
    price: 220,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'toy',
    price: 20,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

for(product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const img = document.createElement('img');
    img.setAttribute('src', product.image)
    img.addEventListener('click', openProductDetailAside )

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info-em');

    const productInfoDiv = document.createElement('div');
    const productPrice = document.createElement('p');

    productPrice.innerText = '$ ' + product.price;

    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.append(productPrice, productName)

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');

    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);
    
    productInfo.append(productInfoDiv, productInfoFigure);

    productCard.append(img, productInfo);
    productCart.append(productCard);
}
