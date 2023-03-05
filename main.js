
const menuEmail = document.querySelector('.navbar-email'); /*Seleccion de elementos html por su clase(es clase por eso el . punto) */
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);/*Escuchar su evento de click */
menuCarritoIcon.addEventListener('click', toggleCarritoshoppingCartContainer);

function toggleDesktopMenu(){
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isshoppingCartContainerClosed){//si el carrito esta abierto
        shoppingCartContainer.classList.add('inactive'); //cierra el carrito
    }
    //abreo o cierra el DesktopMenu
    desktopMenu.classList.toggle('inactive'); /*Quita o pone la clase independiente si ya la tiene o no */

    /*Otra posible solucion para todos: agregar inactivos todo y añadir toggle solo a 1*/ 
    /*
    mobileMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
 */

}

function toggleMobileMenu(){ //si abrimos el menu -- cerramos el carrito si estaba abierto
    const isshoppingCartContainerClosed=shoppingCartContainer.classList.contains('inactive');
    if(!isshoppingCartContainerClosed){//si el carrito esta abierto
        shoppingCartContainer.classList.add('inactive'); //cierra el carrito
    }
     //abreo o cierra el mobileMenu
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoshoppingCartContainer(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const  isdesktopMenuClosed =  desktopMenu.classList.contains('inactive');

    //shoppingCartContainer.classList.toggle('inactive');
    if(!isMobileMenuClosed){ //si el mobileMenu esta abierto
        mobileMenu.classList.add('inactive'); //cierra el mobileMenu
    }else if(!isdesktopMenuClosed){ //si el desktopMenu esta abierto
        desktopMenu.classList.add('inactive');
    }
     //abreo o cierra el carrito
    shoppingCartContainer.classList.toggle('inactive');
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
function renderProducts(arr){
for(product of arr){ //da automaticamente el elemento del array. //for(product in productList){ //da el indice del elemento del arrays
  const productCard =  document.createElement('div');
  productCard.classList.add('product-card');

  //product= {name,price,image} -> product.image
  const productImg=document.createElement('img');
  productImg.setAttribute('src',product.image);
  
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