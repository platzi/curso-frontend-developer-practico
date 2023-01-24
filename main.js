/* aca todo el codigo js para lograr combinar los elementos de los archivos html */
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const productDetailIcon = document.querySelector('.product-detail-close');
const shoppingCartContainer = document.querySelector('#shoppingCart');
const productDetailContainer = document.querySelector('#productDetail');
const cardContainer = document.querySelector('.cards-container'); //este container, contiene el listado de productos


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', togglecarMenu);
productDetailIcon.addEventListener('click', closeProductDetailAside);


function toggleDesktopMenu(){
 const isShoppingCartClosed =  shoppingCartContainer.classList.contains('inactive');

 if(!isShoppingCartClosed){
 shoppingCartContainer.classList.add('inactive');
 }
desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu (){
    const isShoppingCartClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isShoppingCartClosed){
     shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside()
    mobileMenu.classList.toggle('inactive');


}

function togglecarMenu (){
    const isMobileClosed = !mobileMenu.classList.contains('inactive');
    const isdesktopClosed = !desktopMenu.classList.contains('inactive');

    if(isMobileClosed || isdesktopClosed){
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    }

    const isProducDetailClosed = productDetailContainer.classList.contains('inactive');
    if (!isProducDetailClosed){
        productDetailContainer.classList.add('inactive');
    }

 shoppingCartContainer.classList.toggle('inactive');
    
}


function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}


/* Creando tarjetas de productos */
//metodo util para cuando traemos desde una api o backend y contiene multiples productos / objetos

//creamos array con objetos
const productList = [];
//le cargamos objetos al array
productList.push({
    name: '>Bike',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: '>Phone',
    price: 750,
    img: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: '>Computer',
    price: 920,
    img: 'https://images.pexels.com/photos/792199/pexels-photo-792199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});


//creamos e inyectamos las etiquetas HTML recorriendo el array de productos
/*
for (product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.img);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productDiv = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    const productname = document.createElement('p');
    productname.innerText = product.name;

    const cartFigure = document.createElement('figure');
    const figureIcon = document.createElement('img');
    figureIcon.setAttribute('src', './icons/bt_add_to_cart.svg');
    
    /* Listas de appends */
/*
    cartFigure.appendChild(figureIcon);
    productDiv.append(productPrice, productname);
    productInfo.append(productDiv, cartFigure);
    productCard.append(productImg, productInfo);
    cardContainer.appendChild(productCard); //emparejando la estructura en este container
    
}
*/


 function renderList(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.img);

        //escuchando un evento cuando se crea un el producto desde js
        productImg.addEventListener('click', openProductDetailAside)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productname = document.createElement('p');
        productname.innerText = product.name;
    
        const cartFigure = document.createElement('figure');
        const figureIcon = document.createElement('img');
        figureIcon.setAttribute('src', './icons/bt_add_to_cart.svg');
        
        /* Listas de appends */
        
        cartFigure.appendChild(figureIcon);
        productDiv.append(productPrice, productname);
        productInfo.append(productDiv, cartFigure);
        productCard.append(productImg, productInfo);
        cardContainer.appendChild(productCard); //emparejando la estructura en este container
 }
}

renderList(productList);








/* la lista de append sigue este patron de enlace
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
</div>
*/

