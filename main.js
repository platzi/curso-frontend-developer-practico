// Elementos HTML
const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carMenuIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shopping-cart-container');
const cardsContainer = document.querySelector('.cards-container');

// Escuchar eventos
emailMenu.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
carMenuIcon.addEventListener('click', toggleCarAside);

// Funciones tras los eventos
function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    
    // alternar clase inactive
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');

}

function toggleCarAside() {
    // verificar si los menús están cerrados
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    // si no están cerrados, los cierra
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}

// Funciones para organizar código
function renderProducts(arr) {
    // Recorrer array de productos
    for (let product of arr) {
        // Crear elementos HTML
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.img);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = `$${product.price}`;
        const productName = document.createElement('p');
        productName.innerText = `${product.name}`;

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        // Anidar elementos
        productInfoFigure.appendChild(productImgCart);
        productInfoDiv.append(productPrice, productName);
        productInfo.append(productInfoDiv, productInfoFigure);
        productCard.append(productImg, productInfo);

        cardsContainer.appendChild(productCard);
    }
}

// Lista de productos
const productList = [];
// Agregar poductos (en formato objeto) al array
productList.push({
    name: 'Bike',
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    price: 200
});
productList.push({
    name: 'Computer',
    price: 750,
    img: 'https://images.pexels.com/photos/930530/pexels-photo-930530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Headphones',
    price: 150,
    img: 'https://images.pexels.com/photos/610945/pexels-photo-610945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Phone',
    price: 500,
    img: 'https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Watch',
    price: 150,
    img: 'https://images.pexels.com/photos/2078268/pexels-photo-2078268.jpeg'
});
productList.push({
    name: 'Production Kit',
    price: 850,
    img: 'https://images.pexels.com/photos/1447264/pexels-photo-1447264.jpeg'
});
productList.push({
    name: 'Setup',
    price: 1380,
    img: 'https://images.pexels.com/photos/4930018/pexels-photo-4930018.jpeg'
});
productList.push({
    name: 'Microphone',
    price: 180,
    img: 'https://images.pexels.com/photos/3962990/pexels-photo-3962990.jpeg'
});
productList.push({
    name: 'Citizen Watch',
    price: 450,
    img: 'https://images.pexels.com/photos/592815/pexels-photo-592815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Cap',
    price: 99,
    img: 'https://images.pexels.com/photos/1878821/pexels-photo-1878821.jpeg'
});
productList.push({
    name: 'Tablet',
    price: 390,
    img: 'https://images.pexels.com/photos/2647376/pexels-photo-2647376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Agenda',
    price: 30,
    img: 'https://images.pexels.com/photos/163187/coffee-tablet-headphones-work-163187.jpeg'
});
productList.push({
    name: 'Notes book',
    price: 25,
    img: 'https://images.pexels.com/photos/5712452/pexels-photo-5712452.jpeg'
});
productList.push({
    name: 'Book kit',
    price: 120,
    img: 'https://images.pexels.com/photos/4153146/pexels-photo-4153146.jpeg'
});
productList.push({
    name: 'Glasses',
    price: 110,
    img: 'https://images.pexels.com/photos/39716/pexels-photo-39716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Wallet',
    price: 85,
    img: 'https://images.pexels.com/photos/12495665/pexels-photo-12495665.jpeg'
});

// Llamado a funciones
renderProducts(productList);