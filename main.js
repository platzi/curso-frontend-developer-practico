// VARIABLES QUE MANDASN ALLAMAR A LAS CLASES Y ID DEL CONTENIDO EN HTML

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const productDeatilCloseIcon = document.querySelector('.product-detail-close');


const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDeatilContainer = document.querySelector('#productDetail');
const cardContainer = document.querySelector('.cards-container');

// SECCION PARA ESCUCHAR LAS ACCIONES CLICK DE LOS BOTONES
menuEmail.addEventListener('click', toggleDestopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoMenu);
productDeatilCloseIcon.addEventListener('click', closeProductDetailAside);

// FUNCION PARA ABRIR Y CERRAR EL MENU DE USUARIO Y SI ESTA ABIERTO EL CARRITO DE COMPRAS CERRARLO
function toggleDestopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }
   desktopMenu.classList.toggle('inactive')
} 


// FUNCION PARA ABRIR Y CERRAR EL MENU DE VERSION MOBIL, CERRAR EL CARRITO DE COMPRAS SI ESTA ABIERTO Y CERRAR LOS DETALLES DE PRODUCTO
function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive'); 
  }

  closeProductDetailAside();
    mobileMenu.classList.toggle('inactive')
} 


// FUNCION PARA ABRIR Y CERRAR EL CARRITO DE COMPRAS, CERRAR EL MENU DEL USUARIO PARA EVITAR CONFLICTO
function toggleCarritoMenu(){

    const IsMobileMenuClose = mobileMenu.classList.contains('inactive');
    const IsdesktopMenuClose = desktopMenu.classList.contains('inactive');
    
    // shoppingCartContainer.classList.toggle('inactive')

    if(!IsMobileMenuClose){
        mobileMenu.classList.add('inactive');
    }
    if(!IsdesktopMenuClose){
        desktopMenu.classList.add('inactive');
    }

    const IsMProductDetailsClosed = productDeatilContainer.classList.contains('inactive');

    if(!IsMProductDetailsClosed){
        productDeatilContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
} 

// FUNCION PARA ABRIR LOS DETALLES DE PRODUCTO Y CERRAR EL CARRITO DE COMPRAS

function openProductDetailAside(){

    shoppingCartContainer.classList.add('inactive');

productDeatilContainer.classList.remove('inactive');
}

// FUNCION PARA CERRAR LOS DETALLES DE PRODUCTO
function closeProductDetailAside(){
productDeatilContainer.classList.add('inactive');

}


const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940s'
});

productList.push({
    name: 'Pantalla',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940s'
});

productList.push({
    name: 'Computadora',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940s'
});



// INSERTAR LOS PRODUCTOS MEDIANTE JS
function renderProducts(arr){
    for(product of arr){
        const productCard =  document.createElement('div');
        productCard.classList.add('product-card');
      
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click',openProductDetailAside);
      
        const productInfo =  document.createElement('div');
        productInfo.classList.add('product-info');
      
        const productInfoDivVacio =  document.createElement('div');
      
        const productPrice =  document.createElement('p');
        productPrice.innerText = '$ ' + product.price;
        const productName=  document.createElement('p');
        productName.innerText = product.name;
        
        productInfoDivVacio.appendChild(productPrice);
        productInfoDivVacio.appendChild(productName);
      
        const productInfoFigure =  document.createElement('figure');
        const productInfoImgCart =  document.createElement('img');
        productInfoImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
      
        productInfoFigure.appendChild(productInfoImgCart);
      
        productInfo.appendChild(productInfoDivVacio);
        productInfo.appendChild(productInfoFigure);
      
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
      
       cardContainer.appendChild(productCard);
      }
}

renderProducts(productList);