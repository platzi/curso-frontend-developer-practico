                // ABRIR Y CERRAR MENUS
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
// Desktopmenu es el correo
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
//Para cerrar la vista rápida del producto
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
// Aside es el carrito
const productDetailContainer = document.querySelector('#productDetail');
//Es la vista rápida de producto
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
    //Función para cerrar el carrito cuando se abre el menú del correo
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
// !isAsideClosed = si no esta cerrado entonces esta abierto y se debe de cerrar 
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    //Función para la vista rápida del producto al abrir el menú del correo
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
// !isMobileMenuClosed = si no esta cerrado entonces esta abierto y se debe de cerrar 
    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    //Función para cerrar el carrito cuando se abre el menú mobile
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
// !isAsideClosed = si no esta cerrado entonces esta abierto y se debe de cerrar 
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    //Función para cerrar la vista rápida del producto al abrir el menú mobile
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
// !isMobileMenuClosed = si no esta cerrado entonces esta abierto y se debe de cerrar 
    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    //Función para cerrar el menú mobile al abrir el carrito
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
// !isMobileMenuClosed = si no esta cerrado entonces esta abierto y se debe de cerrar 
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    //Función para cerrar la vista rápida del producto al abrir el carrito
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
// !isMobileMenuClosed = si no esta cerrado entonces esta abierto y se debe de cerrar 
    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }

    // Función para cerrar el menú de correo al abrir el carrito
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
// isProductDetailClosed = si no esta cerrado entonces esta abierto y se debe de cerrar    
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
    // Función para cerrar el menú de correo al abrir la vista rápida del producto
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
// isProductDetailClosed = si no esta cerrado entonces esta abierto y se debe de cerrar    
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    //Función para cerrar el carrito al abrir la vista rápida del producto
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
// !isAsideClosed = si no esta cerrado entonces esta abierto y se debe de cerrar 
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    
    //Función para cerrar el menú mobile al abrir el carrito
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
// !isMobileMenuClosed = si no esta cerrado entonces esta abierto y se debe de cerrar 
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

                // LISTA DE PRODUCTOS
const productList = [];
productList.push(
    {
        name: 'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
        name: 'Celular',
        price: 220,
        image: 'https://images.pexels.com/photos/301718/pexels-photo-301718.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
        name: 'iMac',
        price: 652,
        image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
        name: 'Xbox One S',
        price: 299,
        image: 'https://images.pexels.com/photos/5626726/pexels-photo-5626726.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
        name: 'MacBook Air',
        price: 525,
        image: 'https://images.pexels.com/photos/129205/pexels-photo-129205.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
        name: 'Silla',
        price: 99,
        image: 'https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
        name: 'Reloj',
        price: 35,
        image: 'https://images.pexels.com/photos/3283142/pexels-photo-3283142.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
        name: 'Mouse Gamer',
        price: 49,
        image: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
);
// productList.push(
//     {
//         name: 'Celular',
//         price: 220,
//         image: 'https://images.pexels.com/photos/301718/pexels-photo-301718.jpeg',
//     }
// )
// productList.push(
//     {
//         name: 'iMac',
//         price: 652,
//         image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     }
// )

// Función para maquetar la lista de productos (objetos) en el HTML
function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        // product = {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
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
}

renderProducts(productList);