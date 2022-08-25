/*Selector JS/HTML*/
const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuBurger = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')

/*Eventos*/ 
/*'Toogle significa intercambiar.' */
/*Recuerda que "toggleDesktopMenu" y otros son funciones */
menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurger.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);


/* Funciones */
/* Recuerda que 'inactive' es un elemento llamado en Css con display none */
/*Recuerda que el 'inactive' debemos colocarlo en el elemento HTMl correspondiente */
function toggleDesktopMenu(){
      
      /*Condicional */
      const isAsideClosed = aside.classList.contains('inactive');
      if(!isAsideClosed){
            aside.classList.add('inactive');
      }
      /*Condicional */

      desktopMenu.classList.toggle('inactive'); /*La funcion toogle, pone o quita el elemento inactive */
}

function toggleMobileMenu(){
      const isAsideClosed = aside.classList.contains('inactive');

      if(!isAsideClosed){
            aside.classList.add('inactive');
      }
      mobileMenu.classList.toggle('inactive');

}

function toggleCarritoAside(){
      /* isMobileMenuClose, es una pregunta */
      /*Cada vez que demos click al carrito, el mobile menu se cierra */
      const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
      const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

      if(!isMobileMenuClosed){
            mobileMenu.classList.add('inactive')
      }

      if(!isDesktopMenuClosed){
            desktopMenu.classList.add('inactive')
      }

      aside.classList.toggle('inactive');
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

for (product of productList){
      // Crear elementos en HTML
   const productCard = document.createElement('div');   
   productCard.classList.add('product-card');

   const img = document.createElement('img');
   //product = {name, price, image} --> product.image
   img.setAttribute('src', product.image);

   const productInfo = document.createElement('div');   
   productInfo.classList.add('product-info');
}

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

