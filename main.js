
const menuEmail = document.querySelector('.navbar-email'); /*Seleccion de elementos html por su clase(es clase por eso el . punto) */
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close'); /* Selector de cierre detalle de producto */
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

const productDetailContainer = document.querySelector('#productDetail');// selecciona por id del elemento */

const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);/*Escuchar su evento de click */
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){//si el carrito esta abierto
        shoppingCartContainer.classList.add('inactive'); //cierra el carrito
    }

    closeProductDetailAside(); // si esta abierto product detail llama la funcion para cerrarlo
     
    //abreo o cierra el DesktopMenu.   //Nota: toggle: al dar clic al elemento abre o lo cierra
    desktopMenu.classList.toggle('inactive'); /*Quita o pone la clase independiente si ya la tiene o no */

    /*Otra posible solucion para todos: agregar inactivos todo y añadir toggle solo a 1*/ 
    /*
    mobileMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
 */

 
}

function toggleMobileMenu(){ //si abrimos el menu -- cerramos el carrito si estaba abierto
    const isAsideClosed=shoppingCartContainer.classList.contains('inactive');
    
    if(!isAsideClosed){//si el carrito esta abierto
        shoppingCartContainer.classList.add('inactive'); //cierra el carrito
    }

    closeProductDetailAside(); // si esta abierto product detail llama la funcion para cerrarlo
     
    //abreo o cierra el mobileMenu
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const  isdesktopMenuClosed =  desktopMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    //shoppingCartContainer.classList.toggle('inactive');
    if(!isMobileMenuClosed){ //si el mobileMenu esta abierto
        mobileMenu.classList.add('inactive'); //cierra el mobileMenu
    }else if(!isdesktopMenuClosed){ //si el desktopMenu esta abierto
        desktopMenu.classList.add('inactive');
    }else if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }
     //abreo o cierra el carrito
    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside(){ //que tengamos abierto nuestro product detail vamos a cerrar los demas(carrito)
    shoppingCartContainer.classList.add('inactive');
    desktopMenu.classList.add('inactive'); /*Quita la ventana de desktopMenu */

    productDetailContainer.classList.remove('inactive'); //remove para elimine la clase inactive
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive'); //agrega la clase inactive para que desaparezca "cierre".
}

//Craeacion de array
const productList =[];
productList.push({
    name:'Bike',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name:'Pantalla',
    price:220,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name:'Compu',
    price:620,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});



//Maqueta HTML en Javascript Se necesita la referencia de los elementos
{/*

<div class="product-card">
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
</div>  */}


//Maqueta HTML en Javascript
//Insercion de arrays de productos en nuestro HTML: necesario tener la referencia HTML
//Si creamos un "elemento" desde JavaScript a ese elemento tambien le podemos dar eventos "evenlistener-escuche el evento de click" 
function renderProducts(arr){
for(product of arr){ //da automaticamente el elemento del array. //for(product in productList){ //da el indice del elemento del arrays
  const productCard =  document.createElement('div');
  productCard.classList.add('product-card');

  //product= {name,price,image} -> product.image
  const productImg=document.createElement('img');
  productImg.setAttribute('src',product.image);
  productImg.addEventListener('click', openProductDetailAside); /*escuche clic y ejecute la funcion openProductDetailAside, cada vez que lo llame */

  const productInfo =  document.createElement('div');
  productInfo.classList.add('product-info')


  const productInfoDiv = document.createElement('div');

  const productPrice =  document.createElement('p');
  productPrice.innerText = '$'+ product.price;

  const productName = document.createElement('p');
  productName.innerText=product.name;
 
  productInfoDiv.appendChild(productPrice);
  productInfoDiv.appendChild(productName);

  const productInfoFigure = document.createElement('figure');
  const productImgCart = document.createElement('img');
  productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg')

  productInfoFigure.appendChild(productImgCart);

  productInfo.appendChild(productInfoDiv);
  productInfo.appendChild(productInfoFigure);

  productCard.appendChild(productImg);
  productCard.appendChild(productInfo);

  cardsContainer.appendChild(productCard);
}
}
renderProducts(productList);