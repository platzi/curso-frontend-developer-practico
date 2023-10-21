const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')


menuEmail.addEventListener('click', showDesktopMenu);
menuHamIcon.addEventListener('click', showMobileMenu);
menuCarritoIcon.addEventListener('click', showCarritoAside);


function showDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed) {
        
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');   
}
function showMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed) {
        
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
 
}

function showCarritoAside() {
    const ismobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    

    if (!ismobileMenuClosed) {
        
        mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}
/* Aqui crea un arreglo por medio de una variable de nombre productList y le inserta 3 objetos al arreglo por medio de 
 el metodo .push*/
const productList = [];
productList.push({

  name: 'Bike',
  price: 120,
  image:  'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productList.push({

    name: 'Pantalla',
    price: 220,
    image:  'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  })

  productList.push({

    name: 'Computadora',
    price: 856,
    image:  'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  })

 
  /*<div class="product-card">
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
 
 /*Aqui se crea un ciclo for of el cual recorre desde el primer elemento del arreglo hasta el ultimo como variable contenedora
 se le pone de nombre "product" y el segundo elemento de ciclo for es el nombre del arreglo productList*/
 
 function mostrarProductos(arreglo){

    for(product of arreglo){

        /*Dentro de este ciclo for el primer paso es ir creando los elementos html desde javascript de entrada se crea una variable
        con el nombre similar al de una clase contenedora productCard y lo hace manipulando el DOM con el metodo .createElement,
        en este caso crea un div y a la variable le asigna por medio de la propiedad .classlist y el metodo .add el nombre de esa clase */ 
    
        const productCard = document.createElement('div'); 
        productCard.classList.add('product-card');
    
        /* Aqui se crea el elemento img del html por medio del manipulacion del DOM y el metodo .createElement y la asigna a una variable
         productImg y se le agrega el source de ubicacion del archivo mediante el atributo .setAttribute y se le agrega la bandera del for
         a la propiedad image de los objetos que se crearon*/
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        /*Nuevamente se crea primero un div por medio de una variable y un metodo, esto se repite constantemente hasta lograr la estructura 
        deseada, lo mismo en la segunda linea se asigna una clase al div por medio de un metodo add, y se repite y se repite con toda la 
        estructura*/
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
    
        /* En esta parte se observa que crea una variable arriba para insertar un parrafo y con la ayuda de la propiedad .innerText de 
        manipulacion de DOM inserta texto y concatena a la bandera del for la propiedad price del objeto que contiene el precion */
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        /*La propiedad .appendChild adjunta un eleento html a un contenedor padre*/ 
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        /*Aqui nuevamente previamente crean elementos html por medio de variables y metodos y despues asignan esos elementos hijos a
        un contenedor padre*/
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
      } 
 }

    mostrarProductos(productList);