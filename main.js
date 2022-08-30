/*Selector JS/HTML*/
const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuBurger = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const cardsContainer = document.querySelector('.cards-container')
const productDetailContainer = document.querySelector('#productDetail')
const productDetailCloseIcon = document.querySelector('.product-detail-close')

/*Eventos*/ 
/*'Toogle significa intercambiar.' */
/*Recuerda que "toggleDesktopMenu" y otros son funciones */
menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurger.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)


/* Funciones */
/* Recuerda que 'inactive' es un elemento llamado en Css con display none */
/*Recuerda que el 'inactive' debemos colocarlo en el elemento HTMl correspondiente */
function toggleDesktopMenu(){
      
      /*Condicional */
      const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
      if(!isAsideClosed){
            shoppingCartContainer.classList.add('inactive');
      }
      /*Condicional */

      desktopMenu.classList.toggle('inactive'); /*La funcion toogle, pone o quita el elemento inactive */
}

function toggleMobileMenu(){
      const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

      if(!isAsideClosed){
            shoppingCartContainer.classList.add('inactive');
      }
      mobileMenu.classList.toggle('inactive');

      closeProductDetailAside();

}

function toggleCarritoAside(){
      /* isMobileMenuClose, es una pregunta */
      /*Cada vez que demos click al carrito, el mobile menu se cierra */
      const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
      if(!isMobileMenuClosed){
            mobileMenu.classList.add('inactive')
      }

      const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
      if(!isDesktopMenuClosed){
            desktopMenu.classList.add('inactive')
      }

      const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

      if(!isProductDetailClosed){
            productDetailContainer.classList.add('inactive')
      }

      shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside(){

      shoppingCartContainer.classList.add('inactive')
      
      productDetailContainer.classList.remove('inactive')

}

function closeProductDetailAside(){
      productDetailContainer.classList.add('inactive')
}

// Clase 21: Vamos a crear la lista de productos desde JS 

// Aqui estamos creando un array. Este array es el que nos traeria todo el codigo JS, de la API's, backend o base de datos.

const productList = [];
// Cuando agregamos llaves dentro de corchetes, estamos llamando objetos
productList.push({
      name:'Bike',
      price: 120 ,
      image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
      
});
productList.push({
      name:'Pantalla',
      price: 220 ,
      image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
      
});
productList.push({
      name:'Computadora',
      price: 550 ,
      image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
      
});


//2 Recuerda que una de los usos de las funciones es reutilizar codigo, sin embargo hay otro, que es la organizacion. POr ejemplo, podriamos utilizar el "for" para:

// function renderProducts(arr /*parametro */) {
//       for (product of arr /*Sobre esta parametro se comienza a realizar la iteracion. Se crea un producto por cada elemento de la lista arr */ )

for (product of productList){
      // Crear elementos en HTML
   const productCard = document.createElement('div');
   // Agregamos una clase    
   productCard.classList.add('product-card');

   const productImg = document.createElement('img');
   //product = {name, price, image} --> product.image
   productImg.setAttribute('src', product.image);
   productImg.addEventListener('click', openProductDetailAside)

   const productInfo = document.createElement('div');   
   productInfo.classList.add('product-info');

   const productInfoDiv = document.createElement('div');

   const productPrice = document.createElement('p');
   productPrice.innerText = '$' + product.price

   const productName = document.createElement('p');    
   productName.innerText = product.name;

   const productInfoFigure = document.createElement('figure');
   
   const productImgCart = document.createElement('img');
   productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')

//    Ingresando cada uno de estos elementos individuales dentro de sus correspondientes casillas <div>

productInfoFigure.appendChild(productImgCart)

productInfoDiv.appendChild(productPrice)
productInfoDiv.appendChild(productName)

productInfo.appendChild(productInfoDiv)
productInfo.appendChild(productInfoFigure)

productCard.appendChild(productImg)
productCard.appendChild(productInfo)

cardsContainer.appendChild(productCard)
}



//1
/* Ahora debemos insertar todos estos elementos en nuestro html y para eso debemos recorrer nuestro array. Una atajo es utilizar "for" y seria en consola como: 

"product" es el nombre que le colocariamos a cada uno de los objetos de lista en general.
for (product of productList){
      console.log(product.name)
}
Esto mandaria a llamar cada objeto en lista por la propiedad name.

for(product in productList){
      console.log(product)
}
Esto nos llamaria cada objeto por su indice/numero.

*/

