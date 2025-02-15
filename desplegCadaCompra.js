/* aqui fusionaremos todos los.html del proyecto de desarrollador frontend para luego trabajarlo en java script y hacerlo un solo proyecto
 */


const menuEmail = document.querySelector('.navbar-email');
const DesktopMenuEmail = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenuIHam = document.querySelector('.mobile-menu');
const menuCarritoIcon  = document.querySelector('.navbar-shopping-cart');
const menuCarritoCompras = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container'); // lo traemos para meter el div que contiene el template de nuestro objeto productos
const menuDetalleCadaCompra = document.querySelector('#productDetail');
const productDetailCloseIcono = document.querySelector('.product-detail-close') // lo creamos para cerrar el aside 2 que tiene la descripcion de cada compra




menuEmail.addEventListener('click', toggleDesktopMenuEmail);

menuHamIcon.addEventListener('click', ToggleMobilMenu);

menuCarritoIcon.addEventListener('click', ToggleCarritoCompras);

productDetailCloseIcono.addEventListener('click', closeDesplegableCompra)



function toggleDesktopMenuEmail() {

     const ismMenuCarritoComprasClosed = menuCarritoCompras.classList.contains('inactive');//Si contiene esa clase, entonces esta el menu cerrado
    if (!ismMenuCarritoComprasClosed) {
        menuCarritoCompras.classList.add('inactive');
    }
   
    DesktopMenuEmail.classList.toggle('inactive');//quiere decir que el toggle lo activa e inactiva
}


function ToggleMobilMenu() {
    //en una variable almacenamos 
    const ismMenuCarritoComprasClosed = menuCarritoCompras.classList.contains('inactive');//Si contiene esa clase, entonces esta el menu cerrado
    if (!ismMenuCarritoComprasClosed) {
        menuCarritoCompras.classList.add('inactive');
    }

    closeDesplegableCompra()
    
        mobileMenuIHam.classList.toggle('inactive');//quiere decir que el toggle lo activa e inactiva
    
}


function ToggleCarritoCompras() {
    //menuCarritoCompras.classList.toggle('inactive');
    //para que cuando est en modo movil con el menu del movil desplegado y le demos en el menu de tus ordenes y no se superpongan, entonces tenemos que preguntar si estan activos o inactivos, para que aparezca uno o el otro
    const ismobileMenuIHamClosed = mobileMenuIHam.classList.contains('inactive');
   // const ismMenuCarritoComprasClosed = menuCarritoCompras.classList.contains('inactive');
    if (!ismobileMenuIHamClosed) {
        mobileMenuIHam.classList.add('inactive');
    }

    const ismenuDetalleCadaCompraClosed = menuDetalleCadaCompra.classList.contains('inactive');

    if (!ismenuDetalleCadaCompraClosed) {
        menuDetalleCadaCompra.classList.add('inactive');
    }
    menuCarritoCompras.classList.toggle('inactive');

}


function openDesplegableCompra() {

    // const ismMenuCarritoComprasClosed = menuCarritoCompras.classList.contains('inactive');//Si contiene esa clase, entonces esta el menu cerrado
    // if (!ismMenuCarritoComprasClosed) {
    //     menuCarritoCompras.classList.add('inactive');
    // }
    // menuCarritoCompras.classList.toggle('inactive');

    //👇👇👇👇👇El uso de classList.contains('inactive') seguido de classList.add('inactive') dentro de una condición if se refiere a verificar primero si el elemento ya tiene la clase inactive antes de añadirla. Esto se utiliza para asegurarse de que la clase inactive solo se añada si el elemento no está ya oculto. En el caso específico de la función openDesplegableCompra(), se utiliza classList.add('inactive') directamente porque el objetivo es cerrar el elemento de todos modos, independientemente de su estado actual.

    menuCarritoCompras.classList.add('inactive');

    //aqui no hubo necesidad de poner condicionales y todo eso, por que no se 

    menuDetalleCadaCompra.classList.remove('inactive');// no add, por que queremos quiotarle la clase inactive que ya tiene y asi aparezca el menu detalles de esa compra. no le pusimos add o toggle, por que la idea es que se pueda cerrar la imagen desde el icono o imagen  "X" que tiene cada imagen.
}

function closeDesplegableCompra() {
    menuDetalleCadaCompra.classList.add('inactive');
}

const productList = [];// este vendria siendo la abase de datos que estaria en el backend, pero vbamos a hacer uno similar aqui, para organizar el forntend
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});//ya creamos un array de elemmentos y con este podemos crear todos los productos que sean

productList.push({
    name: 'moto',
    price: 220,
    image: "https://media.vandal.net/ivandal/12/63/1200x630/9/9-2019/201992518555536_1.jpg"
});

productList.push({
    name: 'carro',
    price: 320,
    image: "https://www.mundodeportivo.com/alfabeta/hero/2022/05/Baby-Vegeta-fue-el-primer-gran-villano-de-Dragon-Ball-GT.jpg?width=768&aspect_ratio=16:9&format=nowebp"
});

productList.push({
    name: 'barco',
    price: 820,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrRt5nFMxfiuexVSjAI3suwN_2TeYEH8vD9A&usqp=CAU"
});
// ahora debemos correr nuestro arreglo. esta es una form afacil de for:

 

function renderObjetosHTML(arrElements){
for (product of arrElements) {
//console.log(product.image);
    //lo que haremos aqui es ir creando cada etiqueta o elemento de la plantilla que tenemos para cada producto en html:

/* 
    <div class="product-card">
                <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="">
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
    
    //y a medida que los creamos, les iremos agregando su clase ... :

    const productCard = document.createElement('div'); // creamos un elemnto tipo Div, para poder despues introducir cada elememento creado con nuestro template sobre pdoductos.
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    // product = {name, price, image} --> product.image
    productImg.setAttribute('src', product.image);

    productImg.addEventListener('click', openDesplegableCompra);// que me habra una funcion para desplegar el aside que contiene el menu con el detalle de cada compra. Le pusimos open y no toggle, por que solo queremos que lo habra, no que lo aparezca y desaparezca.
    
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');
    

    const pValor = document.createElement('p');
    pValor.innerText = '$' + product.price;

    const pNombreProduct = document.createElement('p');
    pNombreProduct.innerText = product.name;

    const productInfoIcono = document.createElement('figure');
    
    const productImgCart = document.createElement('img');
    
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    //y por ultimo debemos meter cada elemento hijo dentro de su padre con appendChild...:
    
    productInfoIcono.appendChild(productImgCart);

    //productInfoDiv.appendChild(pValor, pNombreProduct)
    productInfoDiv.appendChild(pValor);
    productInfoDiv.appendChild(pNombreProduct);

     //productInfo.appendChild(productInfoDiv, productInfoIcono)
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoIcono);
    
   // productImg.appendChild();

     //productCard.appendChild(productImg, productInfo)
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    //Ahora ya tenemos todas las etiquetas hijo dentro de su etiqueta padre. lo que haremos ahora es meter la etiqueta mas grande que trajimos desde nuestro html, en la etiqueta "<div class="cards-container">" que esta ya en html, para eso la traemos desde html con un queryselector y lo introducimos con un appendchild
    
    cardsContainer.appendChild(productCard);
    }; // este for esta bien yy completo, pèro no es buena practica que este ahi tirado. lo mejor meterlo en una funcion y llamarlo, enviandole c0mo parametro  un array y de ese array se hace el for (product of array)
    

    }

//ahora si la llamamos:

renderObjetosHTML(productList) 

// De esta forma tambien se podrian eviar los arreglos desde el backend y usarlos automaticamente con esta funcion. o que tambie se puede ejcutar cuando le demos click a un boton o lo que sea. como funcion es mucho mas util que dejar el for ahi tirado.
