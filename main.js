const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDestopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDestopMenu(){
    //mirem si menu carrito o aside està obert o no. 
    //Si està obert l'hem de tancar per evitar solapaments
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    //mirem si tenim obert el menu carrito o ASIDE pq no es solapin els menus
    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    //activem o desactivem el menu destop
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    //mirem si menu carrito o aside està obert o no. 
    //Si està obert l'hem de tancar per evitar solapaments
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    //mirem si tenim obert el menu carrito o ASIDE pq no es solapin els menus
    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();

    //activem o desactivem el menu mobile
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    //variables per veure si menus mobile  estan oberts o no
    //tractem la variable inactive, per això la variable es diu Closed
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    //mirem si tenim obert el menu mobile pq no es solapin els menus
    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    //mirem si tenim obert el menu mobile pq no es solapin els menus
    if (!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }

    //activem o desactivem el menu aside o menu carrito
    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside(){
    //tanquem qualsevol cosa que tinguem oberta
    shoppingCartContainer.classList.add('inactive');

    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}


const productList = [];
productList.push({
    name: 'Bike',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla',
    price:220,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Mobil',
    price:320,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr)
{
    for (product of arr){
        const productCard=document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg=document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo=document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv=document.createElement('div');
    
        const productPrice=document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName=document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure=document.createElement('figure');
        const productImgCart=document.createElement('img');
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

