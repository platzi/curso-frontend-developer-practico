const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMobileMenu = document.querySelector('.mobile-menu');
const burgerMenuIcon = document.querySelector('.menu');
const carritoMenuIcon = document.querySelector('.navbar-shopping-cart');
const carritoMenu = document.querySelector('#compra-detail');
const cardContainer = document.querySelector('.cards-container');

// *Escuchamos los eventos de click de Icon

emailMenu.addEventListener('click', toggleDesktopMenu);
burgerMenuIcon.addEventListener('click', toggleBurgerMobileMenu);
carritoMenuIcon.addEventListener('click', toggleCarritoMenu);

function toggleDesktopMenu() {

    const isCarritoMenuClosed = carritoMenu.classList.contains('inactive');

    if (!isCarritoMenuClosed) {
        carritoMenu.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}


function toggleBurgerMobileMenu() {

    // Captas en una variable (declaras) el estado en el que se encuentra el elemento carritoMenu

    const isCarritoMenuClosed = carritoMenu.classList.contains('inactive');

    // Lo condicionas con !isMobileMenuClosed a lo inverso del estado declarado en la variable anterior
    if (!isCarritoMenuClosed) {
        carritoMenu.classList.add('inactive');
    }

    burgerMobileMenu.classList.toggle('inactive');
}


function toggleCarritoMenu() {

    const isMobileMenuClosed = burgerMobileMenu.classList.contains('inactive');
    const isdesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        burgerMobileMenu.classList.add('inactive');
    }

    if (!isdesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    carritoMenu.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Pantalla',
    price: 540,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Computador',
    price: 300,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

// TODO averiguar cual es la diferencia entre toggle y add, para que sirven los if else
// toggle quiere decir que desactive una clase y add que se le añada, se trabaja a la inversa porque lo primero que haces es declarar las clases y sus propiedades y luego asignarle su comportamiento en el archivo 

//Creación de elementos en el DOM con JS

// <div class="product-card">
//         <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
//             alt="">
//         <div class="product-info">
//             <div>
//                 <p>$120,00</p>
//                 <p>Bike</p>
//             </div>
//             <figure>
//                 <img src="./icons/bt_add_to_cart.svg" alt="">
//             </figure>
//         </div>
//     </div>

// ?Ya tenemos la codificación para mostrar información del backend

function renderProducts(arr) {

    for (product of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        // *product = {name, price, image} --> product.image;
        const productImage = document.createElement('img');
        productImage.setAttribute('src', product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoContenedor = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = `$${product.price}`;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoContenedor.appendChild(productPrice);
        productInfoContenedor.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgFigure = document.createElement('img');
        productImgFigure.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgFigure);

        productInfo.appendChild(productInfoContenedor);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImage);
        productCard.appendChild(productInfo);

        cardContainer.appendChild(productCard);
    }
}

// ?Podemos activar la función renderProducts() para que se ejecute al undir un botón 
renderProducts(productList);



