const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuDelCarrito = document.querySelector('.navbar-shopping-cart');
const menuShowMobile = document.querySelector('.menu-show-mobile');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCardContainer = document.querySelector('#shoppingCardContainer');
const cardsContainer = document.querySelector('.cards-container');



navEmail.addEventListener('click', intercambioMenuEscritorio);
menuShowMobile.addEventListener('click', toggleMobileMenu);
menuDelCarrito.addEventListener('click', toggleCarritoAside);


function intercambioMenuEscritorio(){
    const isAsideClosed = shoppingCardContainer.classList.contains('inactiv')

    if(!isAsideClosed){
        shoppingCardContainer.classList.add('inactiv');
    }

    desktopMenu.classList.toggle('inactiv')
    // classList accede a las clases de nuestro html
    // el (.toggle) añade o elimina las clases del html
}

function toggleMobileMenu(){
    const isAsideClosed = shoppingCardContainer.classList.contains('inactiv')

    if(!isAsideClosed){
        shoppingCardContainer.classList.add('inactiv');
    }

    mobileMenu.classList.toggle('inactiv');
}

function toggleCarritoAside(){
    const mobileMenuClosed = mobileMenu.classList.contains('inactiv');
    const menuDesktopClosed = desktopMenu.classList.contains('inactiv');

    if(!mobileMenuClosed){
        mobileMenu.classList.add('inactiv');
    };

    if(!menuDesktopClosed){
        desktopMenu.classList.add('inactiv');
    };

    shoppingCardContainer.classList.toggle('inactiv');
}

const productList = [];
productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'pantalla',
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'cpu',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});


function renderProducts(array){
for (product of array){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    // product = {name, price, image} -> product.image
    const img = document.createElement('img');
    img.setAttribute('src', product.image);

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
    const productImgCard = document.createElement('img');
    productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCard);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}
}

renderProducts(productList)