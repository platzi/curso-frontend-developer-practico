const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobMenu = document.querySelector('.mobile-menu');
const shcar = document.querySelector('.navbar-shopping-cart');
const detailP = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const productList = [];

//LISTA DE PRODUCTO A PARTIR DE UN ARRAY
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});
productList.push({
    name: 'Computador',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

});


for(product of productList){
    const productCard = document.createElement('div'); //Se crea el div padre
    productCard.classList.add('product-card') // Se le agrega la clase al div padre
    const productImg = document.createElement('img'); //Se crea un etiqueta de img
    productImg.setAttribute('src', product.image);//se integra la direccion de la img que proviene del objeto

    const productInfo = document.createElement('div'); //Se crea el div segundo padre
    productInfo.classList.add('product-info'); //se crea una clase al div segundo padre

    const productInfoDiv = document.createElement('div');  //Se crea el elemento Div solo

    const productPrice = document.createElement('p'); //se crea el parrafo que contiene el precio
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p'); //se crea el parrafo que contiene el nombre
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice); //Se integra el precio al div que esta solo
    productInfoDiv.appendChild(productName);  //Se integra el nombre al div que esta solo

    const productInfoFigure = document.createElement('figure'); //Se crea la etiqueta figure

    const productImgCart = document.createElement('img'); //Se crea la etiqueta img
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg'); //Se integra la direccion de la imagen

    productInfoFigure.appendChild(productImgCart); //Se integra la imagen a la etiqueta figure
    
    productInfo.append(productInfoDiv, productInfoFigure);//Se integra el div dos parrafos al segundo padre //Se integra la etiqueta figure al segundo padre 

    productCard.append(productImg, productInfo);//Se integra la imagen y div segundo padre, al primer padre

    cardsContainer.appendChild(productCard); //Se integra dentro de HTML el div primer padre contenedor de todo.
}
   

//INTEGRACION DE FUNCION DESKTOP MENU AL CLICK DEL CORREO

navEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    const isdetailOpen = detailP.classList.contains('inactive');
    if(!isdetailOpen){
        detailP.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}


//INTEGRACION DEL DESPLIEGUE DE BOTON HAMBURGUESA MOBILE

burguerMenu.addEventListener('click', toggleMobMenu);

function toggleMobMenu(){
    const isdetailOpen = detailP.classList.contains('inactive');
    //Cuando esta abierto es False y cuando esta cerrado es True
    if(!isdetailOpen){
        detailP.classList.add('inactive');
    }

    mobMenu.classList.toggle('none'); 
}


// INTEGRACION DEL DESPLIEGUE MENU AL CLICK DEL CARRO DE COMPRAS

shcar.addEventListener('click', segnal);

function segnal(){
    /*cuando esta abierto False y cuando esta cerrado True*/
    const ismobileMenuOpen = mobMenu.classList.contains('none');
    const isDeksMenuOpen = desktopMenu.classList.contains('inactive');

    if(!isDeksMenuOpen){
        desktopMenu.classList.add('inactive');
    }

    if(!ismobileMenuOpen){         //Se cambia de False a True para ejecutar
        mobMenu.classList.add('none'); //Se agrega la clase nuevamente.
    }

    detailP.classList.toggle('inactive'); // y como consecuencia se abre la nueva pestaña
}