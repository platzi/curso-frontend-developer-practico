const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon= document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon= document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

//Cada vez que le den click al correo de arriba a la derecha,
//esta funcion hara un toggle
function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed) {
        //Si esta abierto el aside, cerrarlo
        aside.classList.add('inactive')
    };

    desktopMenu.classList.toggle('inactive');
};

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed) {
        //Si esta abierto el aside, cerrarlo
        aside.classList.add('inactive')
    };

    mobileMenu.classList.toggle('inactive');
};

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isMobileMenuClosed) {
        //Si esta abierto el mobileMenu, cerrarlo
        mobileMenu.classList.add('inactive')
    };

    if(!isDesktopMenuClosed) {
        //Si esta abierto el aside, cerrarlo
        desktopMenu.classList.add('inactive')
    };

    aside.classList.toggle('inactive');
};

const productList = [];
productList.push({
    name: 'Bicicleta',
    price: 2000,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Mueble TV',
    price: 3999,
    image: 'https://www.ikea.com/mx/en/images/products/lack-tv-bench-black-brown__0955265_pe803705_s5.jpg?f=s'
});
productList.push({
    name: 'Cuadro',
    price: 1200,
    image: "https://m.media-amazon.com/images/I/51edUAatM4L.jpg"
});


function renderProducts(arr){
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productDescription = document.createElement('div');
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productPrice = document.createElement('p');
        productName.innerText = '$' + product.price;
    
        productDescription.append(productName, productPrice);
    
        const productFigure = document.createElement('figure');
        const addToCart = document.createElement('img');
        addToCart.setAttribute('src', "./icons/bt_add_to_cart.svg")
    
        productFigure.append(addToCart);
    
        productInfo.append(productDescription, productFigure);
    
        productCard.append(productImg, productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList)