const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const backDark=document.querySelector('.darken');


/* Aqui se ponen los escuchadores de eventos para que escuche si determinado evento ocurre este invoque a determinada 
funcion para que esa funcion corra su algorito y ejecute sus intrucciones por ejemplo abrir menus desplegables al dar click */

menuEmail.addEventListener('click', showDesktopMenu);
menuHamIcon.addEventListener('click', showMobileMenu);
menuCarritoIcon.addEventListener('click', showCarritoAside);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);


function showDesktopMenu() { /* Funcion para verificar si otros menus estan abiertos para cerrarlos(inactivarlos si es que estan abiertos) */
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    
    if (!isAsideClosed) {  /* isAsideClosed lo opuesto a True osea abierto activo el menu */
        
        shoppingCartContainer.classList.add('inactive'); /* Si la condicion es verdadera inactivar shopingCartContainer osea cerrarlo */
    }
    desktopMenu.classList.toggle('inactive');   /* Alternador para mostrar u ocultar el menu del correo */
}
function showMobileMenu() {  /* Funcion para verificar si otros menus estan abiertos para cerrarlos(inactivarlos si es que estan abiertos) */
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {

        shoppingCartContainer.classList.add('inactive');
    }

      closeProductDetailAside()
    
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

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    

    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }
    


    shoppingCartContainer.classList.toggle('inactive');
}

/* Esta funcion es especial ya que se crea despues de buscar la solucion para que al dar click en cualquiera de las
imagenes de los productos esta abra la ventana de Detalle del Producto por medio de un click y ese evento se convierte 
en una funcion para ser invocada al dar click por edio de un addEventListener */

function openProductDetailAside() {

  /*Se agrega esta linea para que el aside de detalle de producto pueda convivir y cerrarse cuando damos click en el icono*/
  const ismobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
  

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    

    if (!ismobileMenuClosed) {
        
        mobileMenu.classList.add('inactive');
    }
    
    if (!isAsideClosed) {  /* isAsideClosed lo opuesto a True osea abierto activo el menu */
        
        shoppingCartContainer.classList.add('inactive'); /* Si la condicion es verdadera inactivar shopingCartContainer osea cerrarlo */
    }

   
    backDark.classList.remove('inactive');
 
  productDetailContainer.classList.remove('inactive');

}

function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive');
  backDark.classList.add('inactive');
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
        productImg.addEventListener('click', openProductDetailAside);
    
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
    
        /*La propiedad .appendChild adjunta un elemento html a un contenedor padre*/ 
    
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