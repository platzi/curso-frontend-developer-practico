const menuEmail = document.querySelector('.navbar-email') ; //se crean las variables que provienen de las clases del html que vamos a trbajar 
const desktopMenu = document.querySelector('.desktop-menu') ;
const menuhamburguer = document.querySelector('.menu') ;
const mobileMenu = document.querySelector('.mobile-menu') ;
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart') ;
const shoppingCartContainer = document.querySelector('#shoppingCartContainer') ;
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');


menuEmail.addEventListener('click', toggleDesktopMenu); // utilizamos el tan amado addevent con click y la funcion que creamos 
menuhamburguer.addEventListener('click', toggleMobilemenu); // utilizamos el tan amado addevent con click y la funcion que creamos 
menuCarritoIcon.addEventListener('click', toggleCarritoAside); // utilizamos el tan amado addevent con click y la funcion que creamos 
productDetailCloseIcon.addEventListener('click', CloseProductDetailAside);


function toggleDesktopMenu() {
    const isAsideclose = shoppingCartContainer.classList.contains('inactive'); // creamos const para saber si tiene la clase activa o no
    if(!isAsideclose){   // en la funcion prefuntamos si el aside esta abierto o no, si no esta abierto lo cerramos
      shoppingCartContainer.classList.add('inactive')
       } 
    desktopMenu.classList.toggle('inactive'); //creamos la funcion que creamos con toggle que añade o quita segun este o no este 
} //inactive es una clase que creamos que basicamente es display: none

function toggleMobilemenu() {
    const isAsideclose = shoppingCartContainer.classList.contains('inactive'); // para saber si el aside el estado del aside
    if(!isAsideclose){ // preguntamos si esta abierto 
      shoppingCartContainer.classList.add('inactive') // si lo esta lo desactivamos y si no pasamos directamente al otro paso
       } 
       CloseProductDetailAside();
       mobileMenu.classList.toggle('inactive');  // y el famoso toggle abre o cierra
} 

function toggleCarritoAside() {
  const isMobileMenuClose = mobileMenu.classList.contains('inactive'); // creamos constatnte
  const isProductDetailClose = productDetailContainer.classList.contains('inactive'); // creamos constatnte

  if(!isMobileMenuClose){  // funcion para preguntar 
    mobileMenu.classList.add('inactive') // desactivamos
   } 

   if(!isProductDetailClose){  
    productDetailContainer.classList.add('inactive')
   } 
   
   shoppingCartContainer.classList.toggle('inactive');  // y el toggle
} 

function openProductDetailAside(){
 shoppingCartContainer.classList.add('inactive'); 
  productDetailContainer.classList.remove('inactive');
}

function CloseProductDetailAside(){
  productDetailContainer.classList.add('inactive');
}

const productslist = [];  // creamos un array en el cual hay objetos  
productslist.push({
    name: 'Moto de huida',
    price: 700,
    Image: 'https://images.pexels.com/photos/5235860/pexels-photo-5235860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
});

productslist.push({  // estos objetos los añadimos con puhs 
    name: 'pasa-montañas',
    price: 200,
    Image: 'https://images.pexels.com/photos/11491602/pexels-photo-11491602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
});

productslist.push({
    name: 'revolver',
    price: 500,
    Image: 'https://images.pexels.com/photos/53351/firearm-handgun-revolver-gun-53351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
});

/*<div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>renderProducts(productslist);
        </div>
      </div> */ 


function renderProducts(arr) {
  for (product of arr){ // es un atajo el cual un for recorre todo un array sin necesidad de crear la variable i 
    const productCard = document.createElement('div'); // creamos los div o elementos necesarios
    productCard.classList.add('product-card'); // ya creado el div o el objeto le asignamos su clase 

    // añadimos la imagen
    const productImg = document.createElement('img'); // creamos la imagen 
    productImg.setAttribute('src', product.Image); // como es una imagen le añadimos atributo y la imagen ya existe en el array
    productImg.addEventListener('click', openProductDetailAside);
   
   
    // creamos el otro div
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    


    const productInfoDiv = document.createElement('div'); // todo esto es basado al div de la linea 58

    const productPrice = document.createElement('p'); // creamos parrafo para el precio
    productPrice.innerText = '$' + product.price; // ya que el precio es texto lo añadimos con inner text
    const productName = document.createElement('p');// igualmente con name 
    productName.innerText = product.name;

    

    const productFigure = document.createElement('figure'); // simplemento creamos el figure como estaba en el html
    const productImgCart = document.createElement('img'); // la imagen
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg'); // y se añade la imagen la cual tenemos guardada

    productFigure.appendChild(productImgCart); //aqui encapsulamos o organisamos una dentro de otra
    productCard.appendChild(productImg); // no estan en orden peroo se hace entender
    productCard.appendChild(productInfo);// es como las muñecas rusas basicamente
    productInfo.appendChild(productInfoDiv); // para mi esto deberia ser lo ultimo para que el programe no falle
    productInfo.appendChild(productFigure);
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    cardsContainer.appendChild(productCard);
    }
};


  renderProducts(productslist);

