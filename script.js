const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carritoMenuIcon = document.querySelector('.navbar-shopping-cart')
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const shoppingCartContainer = document.getElementById('shoppingCartContainer')
const cardsContainer = document.querySelector('.cards-container')
const productDetailContainer = document.querySelector('#productDetail')

menuEmail.addEventListener('click', toggleDesktopMenu);

burgerMenu.addEventListener('click', toggleMobileMenu);

carritoMenuIcon.addEventListener('click', toggleCarritoAside)

productDetailCloseIcon.addEventListener('click', closeProductDetail);

function toggleDesktopMenu () {
    const isAsideClose = shoppingCartContainer.classList.contains('inactive');
    

    if(!isAsideClose && !isDesktopMenuClose){
        //Si esta abierto agregar clase "inactive"(para cerrarlo).
        shoppingCartContainer.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClose = shoppingCartContainer.classList.contains('inactive');
    if(!isAsideClose){
        //Si esta abierto agregar clase "inactive"(para cerrarlo).
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetail();

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive');
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClose){
        //Si esta abierto agregar clase "inactive"(para cerrarlo).
        mobileMenu.classList.add('inactive');
    }
    if(!isDesktopMenuClose){
        desktopMenu.classList.add('inactive')
    }

    const isProductDetailClose = productDetailContainer.classList.contains('inactive');

    if(!isProductDetailClose){
        //Si esta abierto agregar clase "inactive"(para cerrarlo).
        productDetailContainer.classList.add('inactive');
    }


    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetail(){
    shoppingCartContainer.classList.add('inactive')

    productDetailContainer.classList.remove('inactive');
}

function closeProductDetail(){
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla',
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Computadora',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
function renderProducts (arr){
    for(product of arr){
        const productCard =document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetail);
    
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
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCard);//appendChild inserta un elemento dentro de otro.
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }
}

renderProducts(productList);


