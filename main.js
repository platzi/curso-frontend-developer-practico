const menuEmail = document.querySelector('.navbar-email'); //seleccionamos la clase, y al hacer click en esa clase queremos que aparezca el menu email.
const menuHamburgerMobile = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');


// Eventos
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburgerMobile.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);


// Funciones
function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    
    if(!isAsideClosed){ 
        shoppingCartContainer.classList.add('inactive');
    }
    
    const isProductDetailClose = productDetailContainer.classList.contains('inactive');

    if(!isProductDetailClose){
        productDetailContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    
    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
    
    // otra posibilidad es llamar a otra función que ejecute lo mismo que tenemos que ejecutar como el ejemplo de abajo. (closeProductDailAside()). Es más simplificado y evitamos más lineas de código! 

    const isProductDetailClose = productDetailContainer.classList.contains('inactive');
    
    if(!isProductDetailClose){
       
        productDetailContainer.classList.add('inactive');
    }

}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        //preguntamos si el mobileMenu está open, hay que cerrarlo. 
        mobileMenu.classList.add('inactive');
    }
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');
    
    const isProductDetailClose = productDetailContainer.classList.contains('inactive');
    
    if(!isProductDetailClose){
       
        productDetailContainer.classList.add('inactive');
    }
    
}

function openProductDetailAside(){
    productDetailContainer.classList.remove('inactive');

    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    
    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

/* <div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div> */

const productList = [];

productList.push({
    name: 'Bike',
    price: 200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Bike',
    price: 500,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Bike',
    price: 850,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts (arr){

    for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

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
    productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    productInfoFigure.appendChild(productImgCart);

    cardsContainer.appendChild(productCard);
}
}

renderProducts(productList);