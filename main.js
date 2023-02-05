const navbarEmail = document.querySelector('.navbar-email');
const hamburguerIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

const cardsContainer = document.querySelector('.cards-container')

navbarEmail.addEventListener('click', toogleDesktopMenu);
hamburguerIcon.addEventListener('click', toogleMobileMenu);
menuCarritoIcon.addEventListener('click', toogleCarritoAside);

function toogleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    const isAsideClose = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClose){
        shoppingCartContainer.classList.add('inactive');
    }
}

function toogleMobileMenu(){
    const isAsideClose = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClose){
        shoppingCartContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toogleCarritoAside(){
    const isMobilemenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isMobilemenuClosed){
        mobileMenu.classList.add('inactive');
    }else if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive')
    }

    shoppingCartContainer.classList.toggle('inactive')
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: './src/img/moto.jpg'
});

productList.push({
    name: 'Bike BMW',
    price: 180,
    image: './src/img/moto2.jpg'
});

productList.push({
    name: 'Bike NLK',
    price: 190,
    image: './src/img/moto3.jpg'
});

productList.push({
    name: 'Bike Rush',
    price: 110,
    image: './src/img/moto4.jpg'
});
productList.push({
    name: 'Bike Flame',
    price: 208,
    image: './src/img/moto5.jpg'
});

function renderProducts(arr){

for (let product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card')

    const img = document.createElement('img');
    img.setAttribute('src', product.image)

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info')

    const contentDiv = document.createElement('div');
    const  productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price
    const  productName = document.createElement('p');
    productName.innerText = product.name

    contentDiv.append(productPrice, productName)

    const productInfoFigure = document.createElement('figure');
    const productImageCart =document.createElement('img');
    productImageCart.setAttribute('src', './icons/bt_add_to_cart.svg')

    productInfoFigure.appendChild(productImageCart)

    productInfo.append(contentDiv, productInfoFigure)

    productCard.append(img, productInfo)

    cardsContainer.appendChild(productCard)
}
}

renderProducts(productList);