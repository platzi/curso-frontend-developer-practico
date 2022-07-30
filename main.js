const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburguesa = document.querySelector('.menu');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');





menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguesa.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
// shoppingCartContainer.addEventListener('click', toggleShoppingCartContainer);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);




function toggleDesktopMenu () { //Si esta abierto el shoppingCartContainer y presiono el DesktopMenu...
    shoppingCartContainer.classList.add('inactive'); //el shoppingCartContainer se va a cerrar. 
    desktopMenu.classList.toggle('inactive');
}





// function toggleShoppingCartContainer () {   
    // desktopMenu.classList.add('inactive'); 
    // shoppingCartContainer.classList.toggle('inactive'); 

//     const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

//     if (!isDesktopMenuClosed) {
//         desktopMenu.classList.add ('inactive');
//     }
    
//     shoppingCartContainer.classList.toggle('inactive');
// }



function toggleMobileMenu() {
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isShoppingCartContainerClosed) {
        shoppingCartContainer.classList.add ('inactive');
    }
    
    mobileMenu.classList.toggle('inactive');


    closeProductDetailAside(); 
    //cada vez que le demos click a ese boton (El mobileMenu/menuHambueguesa) 
    //llamamos a esta función que CIERRA el productDetailAside

}


function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');   //Abro CarritoAside, si estaba abierto mobileMmenu, se cierra.

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add ('inactive');
    }


    const isProductDetailClosed = productDetailContainer.classList.contains('inactive'); //Abro CarritoAside, si estaba abierto productDetail, se cierra.

    if (!isProductDetailClosed) {
        productDetail.classList.add ('inactive');
    }


    shoppingCartContainer.classList.toggle('inactive');

}

function openProductDetailAside() {     //Al darle click a la img de algun producto, abro el productDetailContainer
    productDetailContainer.classList.remove('inactive'); //Al sacarle (remove) la clase "inactive", dejará de estar inactivo y aparecerá/se abrirá.

    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive'); // "isShoppingCartContainerClosed" significa que esta cerrado.

    if (!isShoppingCartContainerClosed) {   //Si shoppingCartContainer estaba abierto, se cierra! ahora que abrí ProductDetailAside.
        shoppingCartContainer.classList.add ('inactive');
    }    
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}



const productList = []; //Este array es el que nos devolvería nuestro codigo JS al hacer las consultas a la BD, etc.

//De momento lo vamos a escribir manualmente:


productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});


productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});



/*
<section class="main-container">
<div class="cards-container">

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


</div>
</section> 
*/


//Construimos el HTML del producto con JS (lo ponemos arriba comentado de referencia):
//Una función tmbn me sirve para organizar. Puedo cerrarla/Encapsular para que no estorbe tanto la vista
//Con la función recibiendo un parámetro podré luego, al llamarla, decirle cual es el Array con el que quiero trabajar

function renderProducts (arr) {

    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        //product = {name, price, image} -> product.image
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div'); //creo un div
        productInfo.classList.add('product-info'); // a ese div le pongo una class
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document = document.createElement('p');    
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }    
}


//El si quiero llamar a esa función y trabajar con una lista de productos
//Tmbn de esta manera la función no necesariamente se tendrá que ejecutar acá, sino que puede pasar cuando le demos click a algun boton.

renderProducts(productList);
