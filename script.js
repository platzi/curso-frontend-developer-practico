const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMenu = document.querySelector('.menu');
const iconCarrito = document.querySelector('.navbar-shopping-cart');
const movileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
iconMenu.addEventListener('click', toggleMovileMenu);
iconCarrito.addEventListener('click', toggleCarritoMenu);

function toggleDesktopMenu() {   
    const isAsideMenuClosed = aside.classList.contains('inactive');
    if(!isAsideMenuClosed) {
        aside.classList.add('inactive');
    } 
    desktopMenu.classList.toggle('inactive'); // remueve el inactive
}

function toggleMovileMenu() {    
    const isAsideMenuClosed = aside.classList.contains('inactive');
    if(!isAsideMenuClosed) {
        aside.classList.add('inactive');
    }
    movileMenu.classList.toggle('inactive'); // remueve el inactive
}

function toggleCarritoMenu() {    
    const isMobileMenuClosed = movileMenu.classList.contains('inactive');
    const isMenuEmailClosed = desktopMenu.classList.contains('inactive');
    if(!isMobileMenuClosed) {
        movileMenu.classList.add('inactive');
    }
    if(!isMenuEmailClosed) {
        desktopMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive'); // remueve el inactive
}

const productList = [];
productList.push({
    name: 'Bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla',
    price: '220',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'PC',
    price: '1020',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'PC',
    price: '1020',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr) {
    for (let p of arr) {
        const productCard = document.createElement('div');
        const img = document.createElement('img');
        const productInfo = document.createElement('div');
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$ ' + p.price;
        const productName = document.createElement('p');
        productName.innerText = p.name;
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');

        productCard.classList.add('product-card')
        img.setAttribute('src', p.image);
        productInfo.classList.add('product-info')
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);
        productInfoDiv.append(productPrice, productName);        
        productInfo.append(productInfoDiv, productInfoFigure);
        productCard.append(img, productInfo);
        cardsContainer.appendChild(productCard);

    }
}

renderProducts(productList);