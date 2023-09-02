const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurger = document.querySelector('.menu-burger');
const mobileMenu = document.querySelector('.mobile-menu');
const iconCarrito = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);//Evento de click en el menu de usuario de desktop

menuBurger.addEventListener('click', toggleMobileMenu);//Evento de click en el menu hamburgesa de mobile

iconCarrito.addEventListener('click', toggleshoppingCartContainer);//Evento de click en el detalle del producto

function toggleMobileMenu() {
    //Constante que contiene Booleano de si esta inactivo el shoppingCartContainer
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
    
    // Si el Detalle del carrito esta abierto lo cerramos
    if (!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleDesktopMenu(){
    //Constante que contiene Booleano de si esta inactivo el shoppingCartContainer
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
    
    // Si el Detalle del carrito esta abierto lo cerramos
    if (!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleshoppingCartContainer(){
    //Constante que contiene Booleano de si esta inactivo el menu del Celular
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    //Constante que contiene Booleano de si esta inactivo el menu de usario de desktop
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    //Si el menu de usuario de desktop esta activo lo cerramos
    if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

    // Si el meunu Mobile esta abierto se cierra
    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Montain Bike',
    price: 190,
    image: 'https://biciurbana.com.ar/14268-large_default/mountain-bike-fire-bird-r29.jpg'
});
productList.push({
    name: 'Racing Bike',
    price: 220,
    image: 'https://images.immediate.co.uk/production/volatile/sites/21/2021/03/20210317_SB_5DSR_MG_4042-4cbecec.jpg?webp=true&quality=90&resize=620%2C413'
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Montain Bike',
    price: 190,
    image: 'https://biciurbana.com.ar/14268-large_default/mountain-bike-fire-bird-r29.jpg'
});
productList.push({
    name: 'Racing Bike',
    price: 220,
    image: 'https://images.immediate.co.uk/production/volatile/sites/21/2021/03/20210317_SB_5DSR_MG_4042-4cbecec.jpg?webp=true&quality=90&resize=620%2C413'
});

function RenderProduct (arr){
    for (product of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const ProductImg = document.createElement('img');
        ProductImg.setAttribute('src', product.image);
    
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
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', product.image);
    
        productInfoFigure.appendChild(productImgCard);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(ProductImg, productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

RenderProduct(productList);
