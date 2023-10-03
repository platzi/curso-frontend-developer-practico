const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuMobileLogo = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const asideCarrito = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuMobileLogo.addEventListener('click', toggleMobilepMenu);
menuCarrito.addEventListener('click', toggleAsideCarrito);


function toggleDesktopMenu(){
    const isAsideCarritoClosed = asideCarrito.classList.contains('inactive');

    if (!isAsideCarritoClosed) {
        asideCarrito.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobilepMenu(){
    const isAsideCarritoClosed = asideCarrito.classList.contains('inactive');

    if (!isAsideCarritoClosed) {
        asideCarrito.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleAsideCarrito(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive'); // Devuelve True si esta cerrado o False si esta abierto
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    // Evalua si el mobileMenu esta abierto, al llegar en False, se cambia a True para que entre al condicional
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
    asideCarrito.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'PC Gammer',
    price: '500',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'iPhone 15 Pro Max',
    price: '1199',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

// Atajo para recorrer toda la lista
// Aqui se ingresan los productos desde el JS, es decir se esta ***CONSTRUYENDO*** el HTML
// Revisar HTML comentado en el index.html clase product-card
function renderProducts (arr){
    for (product of arr) {
        const productCar = document.createElement('div');
        productCar.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image); // Agrego al src el link que se encuentra dentro del elemento producto en Image
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const producInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        producInfoDiv.appendChild(productPrice); // Agrega dentro del div, el elemento p llamado productPrice
        producInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(producInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCar.appendChild(productImg);
        productCar.appendChild(productInfo);
    
        cardsContainer.appendChild(productCar);
    
    }
}

renderProducts(productList);