// Toggle Desktop Menu

const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navEmail.addEventListener('click', toggleMenu);

function toggleMenu() {
    const isAsideOpen = !aside.classList.contains('inactive');

    if (isAsideOpen) {
        aside.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive')
}


// Toggle Mobile Menu

const desplegableMovil = document.querySelector('.menu');
const mobilMenu = document.querySelector('.mobile-menu');

desplegableMovil.addEventListener('click', toggleMobile);

function toggleMobile() {
    const isAsideOpen = !aside.classList.contains('inactive');

    if (isAsideOpen) {
        aside.classList.add('inactive')
    }

    mobilMenu.classList.toggle('inactive');
}


// Toggle carrito

const iconoCarrito = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

iconoCarrito.addEventListener('click', toggleCarrito);

function toggleCarrito() {
    const isMobileMenuOpen = !mobilMenu.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');

    if (isMobileMenuOpen) {
        mobilMenu.classList.add('inactive')
    }
    if (isDesktopMenuOpen) {
        desktopMenu.classList.add('inactive')
    }
    aside.classList.toggle('inactive')
}


// Listado de productos

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    img: './logos/pexels-taryn-elliott-4198566.jpg'
});
productList.push({
    name: 'Bike',
    price: 120,
    img: "./logos/pexels-taryn-elliott-4198566.jpg",
});
productList.push({
    name: 'Bike',
    price: 120,
    img: "./logos/pexels-taryn-elliott-4198566.jpg",
});
productList.push({
    name: 'Bike',
    price: 120,
    img: "./logos/pexels-taryn-elliott-4198566.jpg",
});
productList.push({
    name: 'Bike',
    price: 120,
    img: "./logos/pexels-taryn-elliott-4198566.jpg",
});
productList.push({
    name: 'Bike',
    price: 120,
    img: "./logos/pexels-taryn-elliott-4198566.jpg",
});

function desgloseArray(array) {
    for (product of array) {
        const cardsContainer = document.querySelector('.cards-container')
    
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.img);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = product.price + '€';
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
    
    
        const productInfoFigure = document.createElement('figure');
    
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCard)
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}
desgloseArray(productList);