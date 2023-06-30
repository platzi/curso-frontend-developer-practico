/*Para seleccionar la clase con document.querySelector se utiliza el punto(.)*/
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const mobileMenu = document.querySelector('.mobile-menu');
const iconHamMenu =document.querySelector('.menu')

const aside = document.querySelector('.product-detail');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');

const cardscontainer = document.querySelector('.cards-container');

const asideIndividual = document.querySelector('.product-detail-individual');
const botonCloseAside = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', toggleDesktopMenu);
iconHamMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
botonCloseAside.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    const isAsideIndividualClosed = desktopMenu.classList.contains('inactive');
    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    // si inactive está presente la elimina, de lo contrario la añade
    desktopMenu.classList.toggle('inactive');

    if (!isAsideIndividualClosed) {
        asideIndividual.classList.add('inactive');
    }
    asideIndividual.classList.add('inactive');
}

function toggleMobileMenu () {
    const isAsideClosed = aside.classList.contains('inactive');
    const isAsideIndividualClosed = desktopMenu.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');

    if (!isAsideIndividualClosed) {
        asideIndividual.classList.add('inactive');
    }
    asideIndividual.classList.add('inactive');
}

function toggleCarritoAside () {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isMenuDesktopClosed = desktopMenu.classList.contains('inactive');
    const isAsideIndividualClosed = desktopMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');  
    }
    aside.classList.toggle('inactive');
    
    if (!isAsideIndividualClosed) {
        asideIndividual.classList.add('inactive');
    }
    asideIndividual.classList.add('inactive');

    if (!isMenuDesktopClosed) {
        desktopMenu.classList.add('inactive');
    }
}

function openProductDetailAside () {
    asideIndividual.classList.remove('inactive');
    desktopMenu.classList.add('inactive');
    aside.classList.add('inactive');
}

function closeProductDetailAside () {
    asideIndividual.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bicicleta',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: 500,
    image: 'https://images.pexels.com/photos/5202925/pexels-photo-5202925.jpeg'
});
productList.push({
    name: 'Computadora',
    price: 750,
    image: 'https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});


/*maquetacion de la lista de productos a partir de crear el html desde Javascript y la lista de objetos creada en productList*/
function renderProducts (articulo) {
    for (product of articulo) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
     
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
     
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
     
        const productInfoDiv = document.createElement('div');
     
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price
        const productName = document.createElement('p');
        productName.innerText = product.name
     
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
     
        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
     
        productInfoFigure.appendChild(productImgCard);
     
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
     
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
     
        cardscontainer.appendChild(productCard);
     }
}

renderProducts(productList);
