const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuBurger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuShoppingCart = document.querySelector('.navbar-shopping-cart');
const  aside = document.querySelector('.product-detail');

const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurger.addEventListener('click', toggleMobileMenu);
menuShoppingCart.addEventListener('click', toggleShoppingCart);


function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}


const productList = [];

productList.push({
    name: 'Caffe Latte',
    price: 6,
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800'
});

productList.push({
    name: 'Americano',
    price: 3,
    image: 'https://images.pexels.com/photos/4195612/pexels-photo-4195612.jpeg?auto=compress&cs=tinysrgb&w=800'
});

productList.push({
    name: 'Moka',
    price: 8,
    image: 'https://images.pexels.com/photos/2910874/pexels-photo-2910874.jpeg?auto=compress&cs=tinysrgb&w=800'
});

productList.push({
    name: 'Drip Café',
    price: 10,
    image: 'https://images.pexels.com/photos/11573546/pexels-photo-11573546.jpeg?auto=compress&cs=tinysrgb&w=800'
});

productList.push({
    name: 'Cream Coffee',
    price: 12,
    image: 'https://images.pexels.com/photos/8105093/pexels-photo-8105093.jpeg?auto=compress&cs=tinysrgb&w=800'
});

productList.push({
    name: 'Specialty Café',
    price: 18,
    image: 'https://images.pexels.com/photos/9167545/pexels-photo-9167545.jpeg?auto=compress&cs=tinysrgb&w=800'
});


for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productinfo = document.createElement('div');
    productinfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');
    
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);


    const productInfoFigure = document.createElement('figure');
    const productImageCart = document.createElement('img');
    productImageCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImageCart);
    
    productinfo.appendChild(productInfoDiv);
    productinfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productinfo);

    cardsContainer.appendChild(productCard);
}

