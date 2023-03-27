/*Activar y desactivar el submenu */
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const burgerMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const asideProduct = document.querySelector('.product-detail');
const cardsContainers = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenuIcon.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', toggleCarAside);

function toggleDesktopMenu(){
    const isAsideClosed = asideProduct.classList.contains('inactive');
    if(!isAsideClosed){
        asideProduct.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = asideProduct.classList.contains('inactive');
    if(!isAsideClosed){
        asideProduct.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    asideProduct.classList.toggle('inactive');
}


/*Lista de productos apartir de arrays */
const productList = [];

productList.push({
    name: 'Bike',
    price:120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Pantalla',
    price:220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Computador',
    price: 1420,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr) {
    for(product of arr){
        const productCard= document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg= document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo= document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText= '$' + product.price;
        const producName = document.createElement('p');
        producName.innerText=product.name;
    
        productInfoDiv.append(productPrice, producName);
    
        const productInfoFigure= document.createElement('figure');
        const productImgCart= document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        // Ingresar cada una de las etiquetas dentro de la que corresponda
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainers.appendChild(productCard);
    
    }
}

renderProducts(productList);