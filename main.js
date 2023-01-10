//Aparece y desaparece el menu del email
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    //Está el aside cerrado?
    const isasideclosed = aside.classList.contains('inactive');

    //Si el aside no está cerrado, hágalo
    if (!isasideclosed){
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

//Aparece y desaparece el menu de la izquierda
const HamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

HamIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    //Esta constante me dice cuándo el aside está abierto, y cuándo está cerrado (true=cerrado, false=abierto)
    const isasideclosed = aside.classList.contains('inactive');

    //Si el aside no está cerrado, hágalo
    if (!isasideclosed) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive')
}

//Aparece y desaparece el carro de compras
const CarroIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

CarroIcon.addEventListener('click', toggleCarro);

function toggleCarro() {
    //Esta constante me dice cuándo el mobileMenu está abierto, y cuándo está cerrado
    const ismobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isdesktopclosed = desktopMenu.classList.contains('inactive');

    //Si el menu mobile o el desktopmenu no ésta cerrado, hágalo
    if (!ismobileMenuClosed || !isdesktopclosed)  {
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla',
    price: 420,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'PC',
    price: 1000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});


const cardsContainer = document.querySelector('.cards-container')

for (product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image)
    // product ={name, price, image} -> product.image

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

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}