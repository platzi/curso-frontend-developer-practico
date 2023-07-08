const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    const isMenuEmailClosed = menuHamIcon.classList.contains('inactive');
    
    if (!isAsideClosed){
        //Cerrar aside
        aside.classList.toggle('inactive');
    } 
    if (!isMenuEmailClosed){
        //Cerrar menu
        menuHamIcon.classList.toggle('inactive');
    } 

    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed){
        //Cerrar aside
        aside.classList.toggle('inactive');
    } 
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed){
        //cerrar el menu mobile
        mobileMenu.classList.toggle('inactive');
    }
    if (!isDesktopMenuClosed){
        //cerrar el menu desktop
        desktopMenu.classList.toggle('inactive');
    }
    aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "Superbike",
    price: 100,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "Mountain bike",
    price: 1000,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

function renderProducts(productList){
    for (product of productList) {
        // Crea el elemento de la tarjeta de producto
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        // Crea el elemento de la imagen del producto
        const productImg = document.createElement('img');
        productImg.src = product.image;
        productImg.alt = product.name;
    
        // Crea el contenedor de información del producto
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        // Crea el div de información del producto
        const productInfoDiv = document.createElement('div');
        
        // Crea el elemento de precio del producto
        const productPrice = document.createElement('p');
        productPrice.innerText = `$${product.price}`;
    
        // Crea el elemento de nombre del producto
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        // Agrega el precio y el nombre al div de información
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        // Crea la figura de información del producto
        const productInfoFigure = document.createElement('figure');

        // Crea la imagen del carrito de compra
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        // Agrega la imagen del carrito a la figura de información
        productInfoFigure.appendChild(productImgCart);
    
        // Agrega el div de información y la figura de información a la información del producto
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        // Agrega la imagen y la información a la tarjeta de producto
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        // Agrega la tarjeta de producto al contenedor de tarjetas
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);
