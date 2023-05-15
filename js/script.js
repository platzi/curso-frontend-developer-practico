const menuEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');

const iconHambur = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const detalleProductos = document.querySelector('.product-detail');

//Mando a llamar el contenedor de las card, para pasarles mis
//elementos con appendchild
const cardsContainer = document.querySelector('.cards-container');

function toggleMenu(){
    //El detalle de carrito esta cerrado cuando tiene la clase inactive
    const isdetallecarrito = detalleProductos.classList.contains('inactive');
    //si el detalle carrito NO esta cerrado(esta abierto)
    if(!isdetallecarrito){
        detalleProductos.classList.add('inactive');
    }
    menuDesktop.classList.toggle('inactive');

}
function toggleMobileMenu(){
    //El detalle de carrito esta cerrado cuando tiene la clase inactive
    const isdetallecarrito = detalleProductos.classList.contains('inactive');
    //si el detalle carrito NO esta cerrado
    if(!isdetallecarrito){
        detalleProductos.classList.add('inactive');
    }
    menuMobile.classList.toggle('inactive');
}
function toggleDetallesProductos(){    
    //El menu mobile esta cerrado cuando tiene la clase inactive
    const isMobileMenuClosed = menuMobile.classList.contains('inactive');
    //si el menu NO esta cerrado
    if(!isMobileMenuClosed){
        menuMobile.classList.add('inactive');
    }

    detalleProductos.classList.toggle('inactive');
}

menuEmail.addEventListener('click', toggleMenu);
iconHambur.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleDetallesProductos);

/////////////////////////////////////////////////////
// nuestro array
const productList = [];
//push para agregar un nuevo elemento, y ese elemento dentro del array sera un objeto.
productList.push({
    name:'bike',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name:'Audifonos',
    price:50,
    image:'https://images.pexels.com/photos/783243/pexels-photo-783243.jpeg'
});
productList.push({
    name:'Computer',
    price:950,
    image:'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

//  <div class="product-card">
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
// </div> 
/* 
    Con el array listo anteriormente, Ahora hay que insertearlos al html, y para eso hay que recorrer el arraw.
*/

//for...of
//Nos da el elemento directo del array y no el indice
//Aca creamos nuestra referencia html, elemento por elemento.
for(productos of productList){
    //creando el div con la clase
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    //creando la imagen, la imagen tiene atributo src
    //y ese src debe ser la propiedad image de cada objeto
    const  productImg = document.createElement('img');
    productImg.setAttribute('src', productos.image);

    //creando el div con la clase product-info
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    //creando el div siguiente
    const productInfoDiv = document.createElement('div');

    //creando el parrrafo precio y pasando el inner
    const productPrice = document.createElement('div');
    productPrice.innerText = '$'+ productos.price;
    //creando el parrrafo nombre
    const productName = document.createElement('div');
    productName.innerText = productos.name;

    //creando el figure siguiente
    const productFigure = document.createElement('figure');

    //creando el img siguiente
    const productImgCarrito = document.createElement('img');
    productImgCarrito.setAttribute('src', './icons/bt_add_to_cart.svg');
    /*
        Hasta aca tenemos creados todos nuestros elementos y a continuacion se
        debe ingresar cada elemento a su elemento que lo contiene    
    */

    productFigure.appendChild(productImgCarrito);

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productFigure);
    
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}