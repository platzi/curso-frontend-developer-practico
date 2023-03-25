const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);


console.log(menuEmail.addEventListener('click', toggleDesktopMenu))

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

//MENU LATERAL
function toggleMobileMenu() {
    //CREAMOS UNA VARIABLE PARA UBICAR EL VALOR BOOLEANO DE SU INACTIVE 
    const isAsideClosed = aside.classList.contains('inactive');
    console.log(isAsideClosed);
    
    //SI EL VALOR EL VALOR DEL ASIDE DEL CARRITO ES NEGATIVO 'ESTA CERRADO' SE 
    //PROCEDE A ABRIR AÑADIENDO LA CLASE INACTIVE PARA SU VISIBILIDAD
    if(!isAsideClosed){
        aside.classList.add('inactive');    
    }
    //SI 
    mobileMenu.classList.toggle('inactive');
}

//MENU CARRITO DETALLES
function toggleCarritoAside(){    
    //CREAMOS UNA VARIABLE PARA UBICAR EL VALOR BOOLEANO DE SU INACTIVE
    //SI EL MENU DEL LATERAL ESTA ABIERTO SE CERRARA CON LA SIGUIENTE VARIABLE
    //PARA QUE UNA NO ESTE ARRIBA DE LA OTRA
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    
    //SI EL VALOR EL VALOR DEL MENU MOBILE ES NEGATIVO 'ESTA CERRADO' SE PROCEDE A ABRIR 
    //AÑADIENDO LA CLASE INACTIVE PARA SU VISIBILIDAD
    if(!isMobileMenuClose){
        mobileMenu.classList.add('inactive');
    }
    
    
    aside.classList.toggle('inactive');
    
}



const productList = [];
productList.push({
    name: 'Xbox',
    precio: 6000,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Play Station 5',
    precio: 8000,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Swicth',
    precio: 8000,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});


// <!--0 <div class="product-card">
// <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
// <div class="product-info">
//   <div>
//     <p>$120,00</p>
//     <p>Bike</p>
//   </div>
//   <figure>
//     <img src="./icons/bt_add_to_cart.svg" alt="">
//   </figure>
// </div>
// </div> -->

//insercion
//creacion de for para recorrer el arreglo
for(producto of productList){
    //sintaxis y semantica 
    
    //declaracion e inializacion
    //primero se declara e inicializa una variable para asignarle el tipo de elemento el cual tendra en relacion al elemento que tiene como referencia en el html.
    
    //Despues se le asigna segun el tipo de elemento a la variable creada la informacion. La asignacion cambiara segun el tipo de elemento ya sea de tipo clase, img o texto(parrafo).
    
    
    
    //constante para la creacion del div
    const productCard = document.createElement('div');
    //metodo para añadir
    productCard.classList.add('product-card')
    
    
    
    
    //constante para la creacion del nombre
    const productName = document.createElement('p');
    //metodo para la asignacion del nombre
    productName.innerText = producto.name;
    
    
    
    //constante para creacion del precio
    const productPrice = document.createElement('p');
    //metodo para añadir precio
    productPrice.innerText = '$' + producto.precio;
    
    
    
    //creacion de imagen
    const productImg = document.createElement('img'); 
    //metodo para añadir una imagen
    productImg.setAttribute('src', producto.imagen);
    
    //contenedor de clase
    //constante para creacion de la informacion del producto
    const productInfo = document.createElement('div');
    //metodo para añadir la informacion
    productInfo.classList.add = ('producto-info');
    

    const divInfo = document.createElement('div');
    


    //contenedor de figure
    //constante para la creacion del contenedor figure
    const productFigure = document.createElement('figure');
    
    //imagen agregar
    //constante para la creacion de la imagen del producto
    const productImgCard = document.createElement('img');
    //metodo para añadir la imagen con ruta
    productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
    
    


    //PENDIENTE SOLO FALTA ESTRUCTURAR BIEN LOS NODOS

    
    //creacion del nuevo nodo (hijo)
    productCard.appendChild(productImg)
    
    
    productInfo.appendChild(divInfo)

    divInfo.appendChild(productPrice,productName);
    
    
    productCard.appendChild(productFigure);


    productFigure.appendChild(productImgCard);

    
    //creacion del nuevo nodo el cual guardara el contenedor principal de la creacion de los productos creados
    cardsContainer.appendChild(productCard);
    
}


// document.addEventListener('click', clickeo)

//Funcion de eventos
// function clickeo(click){
    //     console.log(click)
    //     return console.log('adasd');
    
    // }
    
    
    
    /*
    const emailcarrito = () => {
        const [estado, cambio] = false;
        if (menuEmail == false ){

    }
    
    //menu del carrito
    menuEmail
    //menuCarritoIcon
     

    //menudeordencarro
    mobileMenu
}
*/
