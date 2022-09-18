const buttonCorreo = document.querySelector('#navbar_email');
const btnMobileMenu = document.querySelector('#img_mobile_menu');
const btnCompra = document.querySelector('#navbar_shopping_cart');

buttonCorreo.addEventListener('click', toggleDesktopMenu);
btnMobileMenu.addEventListener('click',showMobileMenu);
btnCompra.addEventListener('click',showCarritoMenu);

const desktopMenu = document.querySelector('#desktop_menu');
const mobileMenu = document.querySelector('#mobile_menu');
const carritoMenu = document.querySelector('#aside_product_detail');

const productsCardsContainer = document.querySelector('.cards-container');

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    carritoMenu.classList.add('inactive');
}

function showMobileMenu(){
    carritoMenu.classList.add('inactive'); //Ocultar el menu de escritorio
    mobileMenu.classList.toggle('inactive'); //Intercambiar clases
}

function showCarritoMenu(){
    carritoMenu.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}

const productsArrays = [];
productsArrays.push({
    name: 'Producto1',
    price: 100,
    image: 'https://picsum.photos/200/300'
})
productsArrays.push({
    name: 'Producto2',
    price: 50,
    image: 'https://picsum.photos/300/200'
})
productsArrays.push({
    name: 'Producto3',
    price: 80,
    image: 'https://picsum.photos/300/400'
})
productsArrays.push({
    name: 'Producto4',
    price: 120,
    image: 'https://picsum.photos/200/500'
})


function renderProducts(listaProductos){
    for (product of productsArrays) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const img = document.createElement('img');
        img.setAttribute('src', product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        const productFigure = document.createElement('figure');
        const productFigureImg = document.createElement('img');
        productFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg');

        productFigure.appendChild(productFigureImg);
        productInfoDiv.append(productPrice, productName);
        productInfo.append(productInfoDiv, productFigure);
        productCard.append(img, productInfo);

        productsCardsContainer.appendChild(productCard);
    }
}

renderProducts(productsArrays);

