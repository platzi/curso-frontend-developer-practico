// Menu desktop
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    
    mobileMenu.classList.add('inactive');
    carritoMenu.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

// Menu mobile
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuHamIcon.addEventListener('click', showMobileMenu);

function showMobileMenu() {
    
    desktopMenu.classList.add('inactive');
    carritoMenu.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

// Menu carrito de compras
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const carritoMenu = document.querySelector('.product-detail');

menuCarrito.addEventListener('click', showCarritoAside);

function showCarritoAside() {
    
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    carritoMenu.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'bike',
    price: '1.200.000',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'pantalla',
    price: '2.000.000',
    image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'laptop',
    price: '3.000.000',
    image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'moto',
    price: '12.000.000',
    image: 'https://images.pexels.com/photos/2607554/pexels-photo-2607554.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'bike',
    price: '1.200.000',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'pantalla',
    price: '2.000.000',
    image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'laptop',
    price: '3.000.000',
    image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'moto',
    price: '12.000.000',
    image: 'https://images.pexels.com/photos/2607554/pexels-photo-2607554.jpeg?auto=compress&cs=tinysrgb&w=600',
});

const cardsContainer = document.querySelector('.cards-container');

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', product.image);
    
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productInfoPrice = document.createElement('p');
        productInfoPrice.innerText = '$' + product.price;
    
        const productInfoName = document.createElement('p');
        productInfoName.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure');
    
        const figureImg = document.createElement('img');
        figureImg.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(figureImg);
        productInfoDiv.appendChild(productInfoPrice);
        productInfoDiv.appendChild(productInfoName);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImgCard);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);


