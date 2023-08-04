const menuEmail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');
const menuhamburguer = document.querySelector('.menu');
const mobilemenu = document.querySelector('.mobile-menu');
const menucarrito = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#product-detail');
const cardsContainer = document.querySelector('.cards-container');
const overlay = document.querySelector('.overlay');





menuEmail.addEventListener('click', toggleDesktopMenu);
/*
menuEmail.addEventListener('click', toggleDesktopMenu);: 
Con esta línea, se agrega un evento click al elemento
 menuEmail. Cuando se hace clic en el elemento, 
 se llama a la función toggleDesktopMenu,
  lo que activa el código dentro de ella, 
  mostrando u ocultando el menú en la parte derecha 
  de la barra de navegación.
*/

function toggleDesktopMenu() {
    console.log('Click');
    desktopmenu.classList.toggle('inactive');

    /*
    Esto permite alternar la clase inactive en el elemento 
    desktopmenu. Si el elemento tiene la clase inactive, 
    la elimina; si no la tiene, la agrega. Esto se utiliza
     para mostrar u ocultar el menú en la parte derecha de
      la barra de navegación cuando se hace clic en el elemento 
      con la clase navbar-email.
    */
}
menuhamburguer.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    const isNavegacionComprasClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isNavegacionComprasClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    mobilemenu.classList.toggle('inactive');

    closeProductDetailAside();

}

menucarrito.addEventListener('click', toggleNavegacionCompras);

productDetailCloseIcon.addEventListener('click',closeProductDetailAside);

function toggleNavegacionCompras() {
    const isMobileMenuClosed = mobilemenu.classList.contains('inactive');


    if (!isMobileMenuClosed) {
        mobilemenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');


    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');


}

//creando un array de objetos
const productList = [];

productList.push({
    name: 'Bicicleta',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});

productList.push({
    name: 'Pantalla',
    price: 180,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});

productList.push({
    name: 'Computadora',
    price: 210,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});

productList.push({
    name: 'Mueble',
    price: 345,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});

productList.push({
    name: 'Pantalla',
    price: 180,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});

productList.push({
    name: 'Computadora',
    price: 210,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});

productList.push({
    name: 'Mueble',
    price: 345,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});
/*
    <div class="product-card">
        <img
          src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bicicleta</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
    </div>
*/

function openProductDetailAside() {
    productDetailContainer.classList.add('product-detail-open');
    productDetailContainer.classList.remove('inactive');
    overlay.classList.add('active'); // Cambia 'overlay-active' por 'active'
  }
  
  function closeProductDetailAside() {
    shoppingCartContainer.classList.remove('product-detail-open');
    productDetailContainer.classList.add('inactive');
    overlay.classList.remove('active'); // Cambia 'overlay-active' por 'no active'
  }
  
function renderProduct(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        // product = {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);
        
        // para abrir el aside
        productImg.addEventListener('click',openProductDetailAside);
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const  productInfoDiv = document.createElement('div');
    
        const  productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const  productName = document.createElement('p');
        productName.innerText =  product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const  productInfoFigure = document.createElement('figure');
        const  productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProduct(productList);

/*

FORMA LARGA DE CREAR LA LISTA DE STOCK DE COMPRA

for (product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    // product = {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src',product.image);
    
    
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const  productInfoDiv = document.createElement('div');

    const  productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const  productName = document.createElement('p');
    productName.innerText =  product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const  productInfoFigure = document.createElement('figure');
    const  productImgCart = document.createElement('img');
    productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}
*/


  












