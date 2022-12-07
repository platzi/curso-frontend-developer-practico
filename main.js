const d = document;
const menuEmail = d.querySelector('.navbar-email');
const desktopMenu = d.querySelector('.desktop-menu');

const hamMenuIcon = d.querySelector('.menu');
const mobileMenu = d.querySelector('.mobile-menu');

const menuCarIcon = d.querySelector('.navbar-shopping-cart');
const aside = d.querySelector('.product-detail');
const cardContainer = d.querySelector('.cards-container');



menuEmail.addEventListener('click', toggleDesktopMenu);
hamMenuIcon.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', toggleCarrito);

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive')
}

function toggleCarrito(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isMenuEmailClosed = desktopMenu.classList.contains('inactive');

    if(!isMenuEmailClosed){
        desktopMenu.classList.add('inactive');
    }
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}


const productList = [];
productList.push({
    name: 'Bike',
    price: 1232,
    image: 'https://picsum.photos/900/900'
});

productList.push({
    name: 'Car',
    price: 23254,
    image: 'https://picsum.photos/900/900'
});

productList.push({
    name: 'Airplane',
    price: 1233456,
    image: 'https://picsum.photos/900/900'
});

productList.push({
    name: 'Bus',
    price: 652148,
    image: 'https://picsum.photos/900/900'
});

function renderProducts(arr){
    for(product of arr) {
        const productoCard = d.createElement('div');
        productoCard.classList.add('product-card');
        const producImg = d.createElement('img');
        producImg.setAttribute('src', product.image);
        const productInfo = d.createElement('div');
        productInfo.classList.add('product-info');
        const productInfoDiv = d.createElement('div');
        const productPrice = d.createElement('p')
        productPrice.innerText = `$ ${product.price}`;
        const productName = d.createElement('p');
        productName.innerText = product.name;
        const productInfoFigure = d.createElement('figure');
        const icon = d.createElement('img');
        icon.setAttribute('src', './icons/bt_add_to_cart.svg');
        // productInfoDiv.appendChild(productPrice);
        // productInfoDiv.appendChild(productName);
        // productInfoFigure.appendChild(icon);
        // productInfo.appendChild(productInfoFigure);
        // productInfo.appendChild(productInfoDiv);
        // productoCard.appendChild(producImg);
        // productoCard.appendChild(productInfo);
        // cardContainer.appendChild(productoCard);
    
        productInfoDiv.append(productPrice, productName);
        productInfoFigure.appendChild(icon);
        productInfo.append(productInfoFigure, productInfoDiv);
        productoCard.append(producImg,productInfo);
        cardContainer.appendChild(productoCard);
    }
}

renderProducts(productList);