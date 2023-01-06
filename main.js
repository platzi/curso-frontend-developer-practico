//se crean constantes y variables que nos permiten seleccionar los elementos del DOM//
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurguer = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuShopping = document.querySelector('.navbar-shopping-cart');
const ordenMenu = document.querySelector('.my-order ');
const cardsContainer = document.querySelector('.cards-container');
const productDetailShopping = document.querySelector('.product-detail__shopping');
const productDetailClose =document.querySelector('.product-detail-close');
const addImages = document.querySelector('.images');
const cardContainer =document.querySelector('.cards-container');
let addImage ;
let productImg;

//escuchadores de evento click//

menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurguer.addEventListener('click', toggleMobileMenu);
menuShopping.addEventListener('click', toggleShoppingMenu);
productDetailClose.addEventListener("click", closeProductDetail);


 //Funciones para ejecutar acción de click de los elementos y agregar el método .add  el cual agrega automaticamente la clase "inactive", ocultando los menus conforme se van abriendo otros//

 function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    ordenMenu.classList.add('inactive');
  };

  function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    ordenMenu.classList.add('inactive');
  };

  function toggleShoppingMenu(){
    desktopMenu.classList.add('inactive');
    ordenMenu.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
  };

 //se crea array con la lista de productos y se agregan sus elementos con el método push, nos permite crear un array de objetos que luego se integrarán al html ya diseñado en css grid//

const productList = [];
productList.push({
  name:'Burro',
  price:120,
  image: 'https://media.istockphoto.com/id/1396924232/es/foto/burro-negro-aislado-sobre-fondo-blanco.jpg?b=1&s=170667a&w=0&k=20&c=9HbxH-pKBePng9Qt-LVqlwZKHLuddDTGY_TFf1uDlVc=',
});
productList.push({
  name:'Gato',
  price:320,
  image: 'https://img.freepik.com/fotos-premium/hermoso-gato-ojos-azules_58409-14525.jpg?w=2000',
});
productList.push({
  name:'Perro',
  price:120,
  image: 'https://i.pinimg.com/originals/ec/fc/56/ecfc56bd9cab7b907b650f19dea0c72d.jpg',
});
productList.push({
  name:'Conejo',
  price:120,
  image: 'https://media.istockphoto.com/id/186094060/es/foto/young-rojo-conejo-aislado-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=gAy7PaHS6X7nQYjGrx7Lsh_5gHhlqzQeYG2wrzUm0eA=',
});

/*función para recorrer la lista de productos y crear los elementos HTML correspondientes para cada uno de ellos*/


function renderProducts(){
 
  for(product of productList){
    //crea los container principales y le agrega la respectiva clase para dar estilos en CSS //
      const productCard= document.createElement('div');
      productCard.classList.add('product-card');
    
    /*crea las imagenes que iran dentro del contenedor anterior, agrega el atributo "src" por cada imagen del ciclo, dependiendo de lo que se genera indicualmente en ciclo for y las anexa a dicho HTML*/
      productImg = document.createElement('img');
      productImg.setAttribute('src', product.image);
      productImg.classList.add("product-image");
      productCard.appendChild(productImg);
        
    /*Crea el contenedor de la información del producto  */
      const productInfo = document.createElement('div');
      productInfo.classList.add('product-info');
   
    /*Crea  precio y nombre del producto  y los agrega al HTML*/
      const productInfoDiv = document.createElement('div');
      const productPrice = document.createElement('p');
      productPrice.innerText = '$' + product.price;
      const productName = document.createElement('p');
      productName.innerText =product.name;
   
      productInfoDiv.appendChild(productPrice);
      productInfoDiv.appendChild(productName);
   
    // crea la imagen del carrito de compras, cambia su atributo "src" Y lo agrega al HTML//

      const productInfoFigure = document.createElement('figure');
      const productImgCard = document.createElement('img');
      productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
      productInfoFigure.appendChild(productImgCard);

      productInfo.appendChild(productInfoDiv);
      productInfo.appendChild(productInfoFigure);
   
    //agrega la informacion al contenedor product card//

      productCard.appendChild(productInfo);

    //agrega la tarjeta completa product card al contenedor principal cards container//

      cardsContainer.appendChild(productCard);

  };
   
};
  
renderProducts();

//función para cerrar el detalle de producto, con la imagen de X que se genera en HTML//

function closeProductDetail(){
  productDetailShopping.classList.add("inactive");
};

/*Lo siguiente nos pérmite que al dar click sobre la imagen correspondiente en el main, esta misma imagen se establezca en el detalle de producto.

El código selecciona todos los elementos img que son hijos del elemento con la clase .cards-container, y agrega un escuchador de eventos de clic a cada imagen. Cuando se hace clic en una imagen, se obtiene el atributo src de la imagen utilizando image.getAttribute("src"), y se establece el atributo src de un elemento con la clase addImages al valor del atributo src de la imagen clickeada. Luego, se elimina la clase inactive del elemento productDetailShopping.

1. Seleccionar el elemento con la clase .main-container usando document.querySelector(".main-container").
2.Obtener todos los elementos img que son hijos del elemento seleccionado en el paso anterior usando cardsContainer.querySelectorAll('img').
3.Iterar sobre cada imagen utilizando un bucle for...of.
4.Agregar un escuchador de eventos de clic a cada imagen utilizando image.addEventListener('click', function() { ... }).
5.Dentro de la función del escuchador de eventos, obtener el atributo src de la imagen clickeada utilizando image.getAttribute("src").
6.Establecer el atributo src de un elemento con la clase addImages al valor del atributo src de la imagen clickeada.
*/

   const images = cardsContainer.querySelectorAll('img');
   
    for ( const image of images) {
      image.addEventListener('click', function() {
        const srcImage= image.getAttribute("src");
        addImages.setAttribute("src", srcImage);
        const index = images;
        productDetailShopping.classList.remove("inactive");
      });

    }