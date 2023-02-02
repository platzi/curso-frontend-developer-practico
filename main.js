//declaracion de constantes

    //selectores del menu email en desktop
    const menuEmail = document.querySelector(".navbar-email");
    const desktopMenu = document.querySelector('.desktop-menu');

    //selectores para el menu mobile
    const MobileMenuIcon = document.querySelector('.menu');
    const mobileMenu = document.querySelector('.mobile-menu');

    //Selectores para el carrito
    const menuCarritoICon = document.querySelector('.navbar-shopping-cart');
    const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

    //selector del Card Container
    const cardContainer = document.querySelector('.cards-container');

    //selectores del product detail
    const productDetailContainer = document.querySelector('#productDetail');
    const productDetailCloseIcon = document.querySelector('.product-detail-close'); 

//event listeners

    //escuchando el evento click en el menu desktop
    menuEmail.addEventListener('click', toggleDesktopMenu);

    //escuchando el evento click en el menu mobile
    MobileMenuIcon.addEventListener('click', toggleMobileMenu);

    //escuchando el evento click en el carrito
    menuCarritoICon.addEventListener('click', toggleCarritoAside);

    //escuchando evento del close icon product detail
    productDetailCloseIcon.addEventListener('click',closeProductDetailAside);

//funcion toggle para el menu en desktop

function toggleDesktopMenu() {

    //Cerrando el Menu del carrito
    const isAsideClosed = shoppingCartContainer.classList.contains('incavtive');

    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle('inactive');
}

//funcion toggle para el menu en mobile
function toggleMobileMenu(){

    //Cerrando el Menu del carrito
    const isAsideClosed = shoppingCartContainer.classList.contains('incavtive');

    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    //cerrando el product detail
    closeProductDetailAside();

    //Abriendo el menu mobile
    mobileMenu.classList.toggle('inactive');
}

//funcion toggle para el menu del carrito
function toggleCarritoAside(){

    //Cerrando el mobile menu
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    //cerrando el menu en desktop
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

    //cerrando el product detail aside
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive')
    }

    //Abriendo el menu del carrito
    shoppingCartContainer.classList.toggle('inactive');

}

//funcion open del aside product detail
function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

//funcion close del aside product detail
function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

//Creando la lista de productos de forma manual
const productList = [];
productList.push({
    name: 'Bike', 
    price: 120, 
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Screen', 
    price: 220, 
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Computer', 
    price: 520, 
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

//Crando lista de productos dinamicamente
function renderProducts(array){
    for (product of array) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImage = document.createElement('img');
        productImage.setAttribute('src', product.image)
        productImage.addEventListener('click', openProductDetailAside)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price; 
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
        
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
        productImgCart.setAttribute('alt','icono de agregar al carrito de compras');
        
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImage);
        productCard.appendChild(productInfo);
    
    
        cardContainer.appendChild(productCard);
    
    }
}

//llamando la funcion para renderizar la lista de productos
renderProducts(productList);

