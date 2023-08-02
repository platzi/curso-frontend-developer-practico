const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');
const productDetailClose = document.querySelector('.product-detail-close');
//creacion de productos 
const productList = [];
productList.push({
    name: 'Xbox',
    precio: '6000',
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Play Station 5',
    precio: '8000',
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Swicth',
    precio: '8000',
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

//Al momento que la ventana de carga abra (la pagina), se cargaran todas las funciones o procesos asignados. 
window.onload = renderProducts(productList);



menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);
productDetailClose.addEventListener('click', detailClose);
function toggleDesktopMenu() {
    productDetailContainer.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');  

}

//MENU LATERAL
function toggleMobileMenu() {
    //CREAMOS UNA VARIABLE PARA UBICAR EL VALOR BOOLEANO DE SU INACTIVE 
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    console.log(isAsideClosed);
    
    //PARA ABRIR EL MENU MOBILE TAMBIEN HABRA QUE CERRAR OTRAS OPCIONES ABIERTAS COMO LOS DETALLES DEL CARRITO
    detailClose();

    //SI EL VALOR EL VALOR DEL ASIDE DEL CARRITO ES NEGATIVO 'ESTA CERRADO' SE 
    //PROCEDE A ABRIR AÑADIENDO LA CLASE INACTIVE PARA SU VISIBILIDAD
    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');    
    }
    //SI 
    mobileMenu.classList.toggle('inactive');
}


//funcion para abrir los detalles de un producto
function openProductDetailAside(){
    //antes de abrir los detalles del carrito, primero cerramos cualquier pestaña en este caso la del carrito ya que esto puede genenrar problemas al usuario
    shoppingCartContainer.classList.add('inactive');
    //Le quitamos le inactive de tal manera que permita quitar el display none y puedamos ver los detalles
    productDetailContainer.classList.remove('inactive');
    //cerrar la lista de opciones del email para escritorio
    desktopMenu.classList.add('inactive');
}
//funcion para cerrar los detalles de un producto
function detailClose(){
    productDetailContainer.classList.add('inactive');
}

//MENU CARRITO DETALLES
function toggleCarritoAside(){    
    //CREAMOS UNA VARIABLE PARA UBICAR EL VALOR BOOLEANO DE SU INACTIVE
    //SI EL MENU DEL LATERAL ESTA ABIERTO SE CERRARA CON LA SIGUIENTE VARIABLE
    //PARA QUE UNA NO ESTE ARRIBA DE LA OTRA
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    
    //SI EL VALOR EL VALOR DEL MENU MOBILE ES NEGATIVO 'ESTA CERRADO' SE PROCEDE A ABRIR 
    //AÑADIENDO LA CLASE INACTIVE PARA SU VISIBILIDAD PROCEDE A NEGAR PARA QUE SIEMPRE APLIQUE EL ESTADO INACTIVE
    if(!isMobileMenuClose){
        mobileMenu.classList.add('inactive');
    }
    //DE LO CONTRARIO SE APLICA DE IGUAL FORMA EL ESTADO INACTIVE
    shoppingCartContainer.classList.toggle('inactive');

    
    const isProductDetailClose = productDetailContainer.classList.contains('inactive');
    
    if(!isProductDetailClose){
        productDetailContainer.classList.add('inactive');
    }
    
}



function renderProducts(producto){

    //insercion
    //creacion de for para recorrer el arreglo
    for(producto of productList){
        //sintaxis y semantica 
        
    //declaracion e inializacion
    //primero se declara e inicializa una variable para asignarle el tipo de elemento el cual tendra en relacion al elemento que tiene como referencia en el html.
    
    //Despues se le asigna segun el tipo de elemento a la variable creada la informacion. La asignacion cambiara segun el tipo de elemento ya sea de tipo clase, img o texto(parrafo).
    
    
    
    //constante para la creacion del div
    const productCard = document.createElement('div');
    //metodo para añadirle un nombre a la clase
    productCard.classList.add('product-card')
    
    
    //creacion de imagen
    const productImg = document.createElement('img'); 
    //metodo para añadir una imagen
    productImg.setAttribute('src', producto.imagen);
    productImg.addEventListener('click', openProductDetailAside);
    
    
    
    //contenedor de clase
    //constante para creacion de la informacion del producto
    const productInfo = document.createElement('div');
    //metodo para añadir la informacion
    productInfo.classList.add('producto-info');
    
    
    
    const divInfo = document.createElement('div');
    divInfo.classList.add('divInfo');
    
    
    //constante para creacion del precio
    const productPrice = document.createElement('p');
    //metodo para asignarle un nombre a la constante
    productPrice.classList.add('parrafo-precio');
    //metodo para añadir precio
    productPrice.innerText = '$' + producto.precio;
    
    
    //constante para la creacion del nombre
    const productName = document.createElement('p');
    //metodo para asignarle un nombre a la constante
    productName.classList.add('parrafo-nombre');
    //metodo para la asignacion del valor que ira cambiando segun el producto
    productName.innerText = producto.name;
    
    
    
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
    
    //El usar solamente append nos permite englobar mas de una sola constante como hijo, para evitar el tener que poner mas codigo esto 
    divInfo.append(productPrice, productName);
    
    
    //contenedor de figure
    //constante para la creacion del contenedor figure
    const productFigure = document.createElement('figure');
    productFigure.classList.add = 'figure'
    //imagen agregar
    //constante para la creacion de la imagen del producto
    const productImgCard = document.createElement('img');
    //metodo para añadir la imagen con ruta
    productImgCard.src = './icons/bt_add_to_cart.svg';
    
    
    
    productInfo.appendChild(divInfo);
    productInfo.appendChild(productFigure);
    productFigure.appendChild(productImgCard);
    productCard.appendChild(productImg);
    
    
    productCard.appendChild(productInfo)
    
    //creacion del nuevo nodo el cual guardara el contenedor principal de la creacion de los productos creados
    cardsContainer.appendChild(productCard);

    //NOTA: La unica constante que no fue declarada dentro de la funcion fue 'cardsContainer' ya que esta es la unica clase que si fue declara desde el html por lo cual esta fue llamada con el query selector.
    


    //cambiando el estilo de los parrafos de los productos

}
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
   