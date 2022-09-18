//email que se oprime para desplegar el menu
const menuEmail = document.querySelector('.navbar-email');
//menu que se despliega al oprimir el email
const desktopMenu = document.querySelector('.desktop-menu');
//icono hamburguesa que se oprime en el menu mobil
const menuHamIcon = document.querySelector('.menu');
//menu que se despliega al oprimir el icono en menu mobil
const mobileMenu = document.querySelector('.mobile-menu');
//icono del carrito que se oprime para desplegar un menu
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
//menu que se despliega al oprimir el boton del carrito
const cartIconMenu = document.querySelector('.product-detail')
//contenedor de los productos de la parte principal de la pagina web
const cardsContainer = document.querySelector('.cards-container');
//contenedor de la informacion especifica del producto que se despliega al oprimir una imagen de un producto
const productDetailContainer = document.querySelector('.product-specific');
//boton para cerrar el menu de la informacion especifica del producto
const productDetailClose = document.querySelector('.product-specific-close');

//abre y cierra el menu desktop cuando se hace click
menuEmail.addEventListener('click', toggleDesktopMenu);
//abre y cierra el menu mobile cuando se hace click
menuHamIcon.addEventListener('click', toggleMobileMenu);
//abre y cierra el menu del carrito de compras cuando se hace click
menuCartIcon.addEventListener('click', toggleCartMenu);
//cierra el menu de detalle especifico de producto cuando se hace click en la X
productDetailClose.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){
//Se puede solucionar el cerrar el menu contrario cuando se abre el otro de dos maneras
    //De esta forma verificamos que el menu contrario contiene la clase inactive
    const isCartIconMenuClosed = cartIconMenu.classList.contains('inactive');
    
    //Miramos si el menu mobile esta abierto ((! = diferente)
    if(!isCartIconMenuClosed) {
        //Si es diferente a closed, es decir, esta abierto, agregamos la clase inactive
        cartIconMenu.classList.add('inactive');
    }
    productDetailContainer.classList.add('inactive');

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isCartIconMenuClosed = cartIconMenu.classList.contains('inactive');
    
    if(!isCartIconMenuClosed) {
        cartIconMenu.classList.add('inactive');
    }
    productDetailContainer.classList.add('inactive');

    mobileMenu.classList.toggle('inactive');
}

function toggleCartMenu() {
    //De esta forma activo la clase inactive en los otros dos menus asi se cierran en el momento de hacer click y el menu deseado se abre
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');

    cartIconMenu.classList.toggle('inactive');
}

function openProductDetailAside() {
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    cartIconMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike', price: '120', image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Pantalla', price: '220', image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Balon', price: '60', image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

//Maquetacion de productos en la lista del contenedor principal de la pagina
function renderProducts(product) {
    for (product of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
        img.addEventListener('click', openProductDetailAside)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        const productInfoDiv = document.createElement('div');
    
        const productInfoPrice = document.createElement('p');
        productInfoPrice.innerText = '$' + product.price;
        const productInfoName = document.createElement('p');
        productInfoName.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure');
        const productInfoFigureImg = document.createElement('img');
        productInfoFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg');
        
        productInfoFigure.append(productInfoFigureImg);
        productInfoDiv.append(productInfoPrice, productInfoName);
        productInfo.append(productInfoDiv, productInfoFigure);
        productCard.append(img, productInfo);
        cardsContainer.append(productCard);
    }
}

renderProducts(productList);