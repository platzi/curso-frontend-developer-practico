const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuMobile = document.querySelector('.mobile-menu');
const hamburgerMenuIcon = document.querySelector('.hamburger-icon');
const menuCarritoComprasIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardContainer = document.querySelector('.cards-container');

hamburgerMenuIcon.addEventListener('click', toggleMenuMobile);
navbarEmail.addEventListener('click', toggleDesktopMenu);
menuCarritoComprasIcon.addEventListener('click', toggleCarritoCompras);

function toggleDesktopMenu(){

    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive'); //Avoid desktop-menu crash with carritoCompras
    }
    
    desktopMenu.classList.toggle('inactive');

}
function toggleMenuMobile(){

    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed){
        aside.classList.add('inactive'); //Avoid menuMobile crash with carritoCompras
    }

    menuMobile.classList.toggle('inactive');
}
function toggleCarritoCompras(){
   
    const isMenuMobileClosed = menuMobile.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMenuMobileClosed){
        menuMobile.classList.add('inactive'); //Avoid menuMobile crash with carritoCompras
    }
    else if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive'); //Avoid desktop-menu crash with carritoCompras
    }
    
    aside.classList.toggle('inactive');
}

const productList = [];
productList.push(
    {
        name: 'Bike',
        price: 150,
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
);
productList.push(
    {
        name: 'Monitor',
        price: 300,
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
);
productList.push(
    {
        name: 'Laptop',
        price: 1500,
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
);
productList.push(
    {
        name: 'Headphones',
        price: 200,
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
);
productList.push(
    {
        name: 'PSP5',
        price: 1500,
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
);
productList.push(
    {
        name: 'Bike',
        price: 150,
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
);
productList.push(
    {
        name: 'Monitor',
        price: 300,
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
);
productList.push(
    {
        name: 'Laptop',
        price: 1500,
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
);
productList.push(
    {
        name: 'Headphones',
        price: 200,
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
);
productList.push(
    {
        name: 'PSP5',
        price: 1500,
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
);

for (product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const imgProduct = document.createElement('img');
    imgProduct.setAttribute('src', product.img);

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

    productCard.appendChild(imgProduct);
    productCard.appendChild(productInfo);

    cardContainer.appendChild(productCard);
}