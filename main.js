// Variables
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const imagenMenu = document.querySelector('.menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

// Eventos
menuEmail.addEventListener('click', toggleDesktopMenu);
imagenMenu.addEventListener('click', toggleMobileMenu);
menuCarrito.addEventListener('click', toggleMenuCarrito);

// Funciones
function toggleDesktopMenu() {
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('INACTIVE');
    if (!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('INACTIVE')
    }
    desktopMenu.classList.toggle('INACTIVE')
}

function toggleMobileMenu() {
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('INACTIVE');
    if (!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('INACTIVE')
    }
    mobileMenu.classList.toggle('INACTIVE')
}

function toggleMenuCarrito() {
    const isMobileMenuClosed = mobileMenu.classList.contains('INACTIVE');
    const isDesktopMenuClosed = desktopMenu.classList.contains('INACTIVE');
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('INACTIVE')
    } if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('INACTIVE')
    }
    shoppingCartContainer.classList.toggle('INACTIVE')
}

const productList=[];
productList.push({
    name: 'Bike',
    price: 120,
    Image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'pantalla',
    price: 400,
    Image:'https://images.pexels.com/photos/6186813/pexels-photo-6186813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'computador',
    price: 620,
    Image:'https://images.pexels.com/photos/461064/pexels-photo-461064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

function renderProducts() {
    for(product of productList){
        const productCart = document.createElement('div');
        productCart.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.Image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText='$' + product.price;
    
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
    
        productCart.appendChild(productImg);
        productCart.appendChild(productInfo);
    
        cardsContainer.appendChild(productCart);
     }
}
renderProducts();






