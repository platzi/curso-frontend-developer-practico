'use strict'

const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

//Añadiendo los menús para dispositivos móviles
const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

//Añadiendo el carrito de compras y los detalles de los productos.

const carrito = document.querySelector(".navbar-shopping-cart");
const productDetails = document.querySelector(".product-detail");

navEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);

//Añadiendo el addEventListener al carrito para mandar a llamar a los detalles de los productos.
carrito.addEventListener('click', toggleProductDetail);

//Solución del profesor

/* function toggleDesktopMenu(){

    //.classList.toggle('x') nos permite añadir o quitar una clase
    //a un elemento dependiendo si éste la tiene o no
    desktopMenu.classList.toggle('inactive');
} */


//Mi solución
function toggleDesktopMenu(){
    if(desktopMenu.classList.contains('inactive') == false){
        desktopMenu.classList.add('inactive');

    }else{
        desktopMenu.classList.remove('inactive');
    }

    productDetails.classList.add('inactive')
}

//Función que nos permite hacer que desaparezcan o aparezcan los menús.

function toggleMobileMenu(){
    //Manda a agregar la clase "inactive" a los detalles de los productos para que desaparezcan cada vez que se abre el menú de móvil.
    productDetails.classList.add("inactive")
    mobileMenu.classList.toggle('inactive');
}

//Función que nos permite que aparezcan o desaparezcan los detalles de los productos.

function toggleProductDetail(){
    productDetails.classList.toggle("inactive");

    //Le añade la clase 'inactive' al menú de teléfono y al menú de pc cada vez que se abran los detalles de los productos.
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
}


//Creación del array que se usará para poner los elementos HTML con información variada.
const productList = [];


//Agregando objetos como elementos del array.
productList.push({

    //name es como una variable dentro del objeto que hace referencia a 'bike'.
    //Es importante que todos los objetos que sean añadidos al array contengan la misma cantidad de variables, que se llamen igual, pero que tengan diferente información.
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'computadora',
    price: 550,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'computadora',
    price: 550,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


const cardsContainer = document.querySelector('.cards-container');

function renderArrray(arr){
    for(let product of arr){

        //Creación de cada uno de los elementos


        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        
    
        const img = document.createElement('img');
        img.setAttribute('src', product.image);

    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

    
        const productInfoDiv = document.createElement('div');

    
        const productPrice = document.createElement('p');
        productPrice.innerText = "$" + product.price;

    
        const productName = document.createElement('p');
        productName.innerText = product.name;

    
        const productFigure = document.createElement('figure');


        const imgFigure = document.createElement('img');
        imgFigure.setAttribute('src', './icons/bt_add_to_cart.svg');

        //Termina la creación de cada uno de los elementos HTML


        //Se empiezan a organizar los elementos hijos dentro de los elementos padres.

        productFigure.append(imgFigure);

        productInfoDiv.append(productPrice, productName);

        productInfo.append(productInfoDiv, productFigure);
    
        productCard.append(img, productInfo);
    
        cardsContainer.append(productCard);
        
    }
}

renderArrray(productList);



