const menuEmail = document.querySelector('.navbar-email');
const emailMenu = document.querySelector('.desktop-menu');

const burgerMenuIcon = document.querySelector('.menu');
const burguerMenu = document.querySelector('.mobile-menu');

const cartMenuIcon = document.querySelector('.navbar-shopping-cart');
const asideCartMenu = document.querySelector('.shopping-cart-detail');

// Funcion anonima y de flecha para llamar una funcion con la posibilidad de poder enviar
// argumentos para asi reutilizar la funcion y no crear una diferente para cada elemento
menuEmail.addEventListener('click', () => toggleElement(emailMenu));
burgerMenuIcon.addEventListener('click', () => toggleElement(burguerMenu));
cartMenuIcon.addEventListener('click', () => toggleElement(asideCartMenu));

function toggleElement(element) {
    element.classList.toggle('inactive');
    closeOtherMenus(element);
}

function closeOtherMenus(activeMenu) {
    // if menu doesnt has inactive class is bc it's open
    const isEmailMenuOpen = !emailMenu.classList.contains('inactive');
    const isBurguerMenuOpen = !burguerMenu.classList.contains('inactive');
    const isAsideCartMenuOpen = !asideCartMenu.classList.contains('inactive');

    if (activeMenu != emailMenu && isEmailMenuOpen) { emailMenu.classList.add('inactive') };
    if (activeMenu != burguerMenu && isBurguerMenuOpen) { burguerMenu.classList.add('inactive') };
    if (activeMenu != asideCartMenu && isAsideCartMenuOpen) { asideCartMenu.classList.add('inactive') };
}


const productList = [];
productList.push({
    nombre: 'Bici',
    precio: 1500,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    nombre: 'Moto',
    precio: 25000,
    imagen: 'https://m.media-amazon.com/images/I/71iqabw1iXL._AC_SL1500_.jpg',
});
productList.push({
    nombre: 'Carro',
    precio: 340000,
    imagen: 'https://cdn.pixabay.com/photo/2021/09/20/23/03/car-6642036_1280.jpg',
});

const cardsContainer = document.querySelector('.cards-container');

for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    const productImage = document.createElement('img');
    productImage.setAttribute('src', product.imagen);
    //productImage.src = product.imagen;

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productName = document.createElement('p');
    productName.innerText = product.nombre;
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.precio;
    
    const productFigure = document.createElement('figure');
    
    const productCartIcon = document.createElement('img');
    productCartIcon.setAttribute('src', './icons/bt_add_to_cart.svg');

    productFigure.appendChild(productCartIcon);
    productInfoDiv.append(productPrice, productName);
    productInfo.append(productInfoDiv, productFigure);
    // productImage.appendChild(productInfo);
    productCard.append(productImage, productInfo);
    cardsContainer.appendChild(productCard);
}