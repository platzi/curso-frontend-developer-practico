const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurguer = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuShopping = document.querySelector('.navbar-shopping-cart');
const ordenMenu = document.querySelector('.my-order-general');
const cardsContainer = document.querySelector('.cards-container');
let clickProduct;
let productDetail;
let productClose;
let productDetailImg = document.querySelector(".product-detail-img");
   productDetailImg.append(imag=document.createElement("img"));

menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurguer.addEventListener('click', toggleMobileMenu);
menuShopping.addEventListener('click', toggleShoppingMenu);

  

  /*nos permite crear un array de objetos que luego se integrarán al html ya diseñado en css grid*/
const productList = [];
productList.push(burro ={
  name:'Burro',
  price:120,
  image: 'https://media.istockphoto.com/id/1396924232/es/foto/burro-negro-aislado-sobre-fondo-blanco.jpg?b=1&s=170667a&w=0&k=20&c=9HbxH-pKBePng9Qt-LVqlwZKHLuddDTGY_TFf1uDlVc=',
});
productList.push({
  name:'Gato',
  price:120,
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

/*nos permite recorrer el array con el fin de agregar la imagen correspondiente para cada objeto*/
function renderProducts(arr){
  for(product of arr){
    const productCard= document.createElement('div');
    productCard.classList.add('product-card');
   const productImg = document.createElement('img');
   productImg.setAttribute('src', product.image);
   productImg.classList.add('product-img');
/*empieza creación de productos*/
   const productInfo = document.createElement('div');
   productInfo.classList.add('product-info');
   
   const productInfoDiv = document.createElement('div');
   const productPrice = document.createElement('p');
   productPrice.innerText = '$' + product.price;
   const productName = document.createElement('p');
   productName.innerText =product.name;
   
   productInfoDiv.appendChild(productPrice);
   productInfoDiv.appendChild(productName);
   
   const productInfoFigure = document.createElement('figure');
   const productImgCard = document.createElement('img');
   productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
   
   productInfoFigure.appendChild(productImgCard);
   productInfo.appendChild(productInfoDiv);
   productInfo.appendChild(productInfoFigure);
   
   
   productCard.appendChild(productImg);
   productCard.appendChild(productInfo);
   
   cardsContainer.appendChild(productCard);
    ////empieza funcion para boton de productos, abre product detail

   clickProduct = document.querySelector('.product-img');
   productCard.addEventListener('click', toggleProductDetail);
   productDetail = document.querySelector('.product-detail');
   productClose = document.querySelector('.product-detail-close');
   productClose.addEventListener('click', closeButonProduct);

     
    function toggleProductDetail(){
        productDetail.classList.remove('inactive');      
        ordenMenu.classList.add('inactive');
        mobileMenu.classList.add('inactive');
       };
    function closeButonProduct(){
        productDetail.classList.add('inactive');
      };  
  };   
};

renderProducts(productList);

/*hay que arreglar para que cada que se de click en la imagen correspondiente se cambie la imagen*/

function addNewImage(){
let nuevoArray= productList.filter(function resolverImagen(hola){
  imag.setAttribute("src", hola.image);
  console.log(hola.image);
});
};

addNewImage();

/*empiezan funciones para abrir y cerrar botones*/

//el método .add agrega automaticamente la clase "inactive", ocultando los menus conforme se van abriendo otros//

function toggleDesktopMenu(){
  desktopMenu.classList.toggle('inactive');
  ordenMenu.classList.add('inactive');
  productDetail.classList.add('inactive');
  };
  
  
  function toggleMobileMenu(){
  mobileMenu.classList.toggle('inactive')
  ordenMenu.classList.add('inactive');
  productDetail.classList.add('inactive');
  };
  
  
  function toggleShoppingMenu(){
    desktopMenu.classList.add('inactive');
    ordenMenu.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    productDetail.classList.add('inactive');
    };