const menuEmail= document.querySelector('.navbar-email');
const desktopMenu= document.querySelector('.desktop-menu');
const menuCarritoIcon= document.querySelector('.navbar-shopping-cart');
productDetailCloseIcon= document.querySelector('.product-detail-close')
const burguerMenu= document.querySelector('.menu');
const mobileMenu= document.querySelector('.mobile-menu');
const shoppingCartContainer= document.querySelector('#shoppingCartContainer');
const productDetailContainer= document.querySelector('#productDetail')
const cardsContainer= document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
burguerMenu.addEventListener('click', toggleMobileMenu);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);


function toggleDesktopMenu(){

    const isAsideClosed= shoppingCartContainer.classList.contains('inactive');
 
    //  si aside no esta cerrado, lo cerramos
    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive'); 
    } 
    // si estaba abierto, cerramos el menumobile y luego activamos el toggle para que se active al dar click   


    desktopMenu.classList.toggle('inactive');

}

function toggleMobileMenu() {
    const isAsideClosed= shoppingCartContainer.classList.contains('inactive');
    closeProductDetailAside();
 
    //  si aside no esta cerrado, lo cerramos
    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive'); 
    } 
    // si estaba abierto, cerramos el menumobile y luego activamos el toggle para que se active al dar click   



    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed= mobileMenu.classList.contains('inactive');
    
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    } 
    // si estaba abierto, cerramos el menumobile y luego activamos el toggle para que se active al dar click
    
    const isProductDetailClosed=productDetailContainer.classList.contains('inactive');

    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }  

    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive')
    productDetailContainer.classList.remove('inactive')

}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive')

}

const productList= []; /*Array que nos devolvería nuestro
propio código JS cuando hicieramos las consultas a la API REST,
al backend, la bbdd, etc; pero mientras tanto vamos a escribirla
nosotros manualmente */

productList.push({
    name: 'Bike',
    price: '120',
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

}); //Para agregar un nuevo elemento

productList.push({
    name: 'Computer',
    price: '230',
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

}); //Para agregar un nuevo elemento

productList.push({
    name: 'Car',
    price: '150',
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

}); //Para agregar un nuevo elemento


/*
<div class="product-card">
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
</div>*/



//Haciendo una iteración por cada producto que tengamos en nuestro array de productos
//Y por cada producto estamos maquetando nuestra estructura HTML que debemos 
//insertar en nuestro documento HTML para que los usuarios vean los productos 


//recibirá el productList como parámetro
function renderProducts(arr){
    for (product of arr){
        const productCard= document.createElement('div');
        productCard.classList.add('product-card');
     
        const productImg= document.createElement('img');
        productImg.setAttribute('src', product.image);
        //product= {name, price, image} -> product.image
        productImg.addEventListener('click', openProductDetailAside)
     
     
        const productInfo= document.createElement('div');
        productInfo.classList.add('product-info');
     
        const productInfoDiv= document.createElement('div');
     
        const productPrice= document.createElement('p');
        productPrice.innerText= '$' + product.price;
     
        const productName= document.createElement('p');
        productName.innerText= product.name;
     
        productInfoDiv.appendChild(productPrice); //metiendo el price dentro del div
        productInfoDiv.appendChild(productName); //metiendo el name dentro del div
     
        const productInfoFigure= document.createElement('figure');
        const productImgCart= document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
     
        productInfoFigure.appendChild(productImgCart); //metiendo el img dentro del figure
     
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
     
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
     
        //ahora insertamos todo nuestro productCard en nuestro CARDS-CONTAINER
     
        cardsContainer.appendChild(productCard);
     
     
     }
}

renderProducts(productList);

