// My navDesktop desplegable
const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navbarEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    aside.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

// My burgerMenu desplegable
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

burgerMenu.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    aside.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

// My car desplegable
const carritoMenu = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('#shoppingCartContainer');

carritoMenu.addEventListener('click', toogleCarritoAside);

function toogleCarritoAside() {
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    aside.classList.toggle('inactive');
}

// Product List

const productList = [];

productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Pantalla',
    price: 250,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Computer',
    price: 640,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});


// ciclo for dentro de una función para ESCALABILIDAD
function renderProducts(arr) {
    for (product of productList){
        const cardContainer = document.querySelector('.cards-container');

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');


        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;

        const productName = document.createElement('p');
        productName.innerText = product.name;


        const productInfoFigure = document.createElement('figure');

        const icon = document.createElement('img');
        icon.setAttribute('src', './icons/bt_add_to_cart.svg')


        // append.() and appendChild()
        productInfoDiv.append(productPrice, productName);

        productInfo.append(productInfoDiv, productInfoFigure);

        productCard.append(productImg,productInfo);

        productInfoFigure.appendChild(icon);

        cardContainer.appendChild(productCard);
    }
}

renderProducts(productList);