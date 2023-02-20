const menuEmail = document.querySelector('.navbar-email'); /*primero: creamos una variabe para capturar el objeto que vamos a manipular en este caso el correo de la barra de menu*/
const desktopMenu = document.querySelector('.desktop-menu'); /* segundo: creamos una variable para capturar el otro objeto que vamos a afectar, en este caso el menu de registro e ingreso de usuario que se activa con el boton del correo de la barra de menu*/

const contraibleMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const carshop = document.querySelector('.navbar-shopping-cart');
const carContainer = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu); /* tercero: señalamos la propiedad con que vamos a usar en este caso click y señalamos la funcion que queremos ejecutar */
contraibleMenu.addEventListener('click', toggleMobileMenu);
carshop.addEventListener('click', toggleProductDetail);

/* cuarto: creamos la funcion que vamos a ejecutar dependiendo de la accion que realice */
function toggleDesktopMenu() {

    carContainer.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');//com el classList.toggle() se activa o se desactiva el objeto desktop-menu
}

function toggleMobileMenu(){

    carContainer.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleProductDetail() {

    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    carContainer.classList.toggle('inactive');

}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla',
    price: 350,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Tv',
    price: 420,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr){

  for(producto of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', producto.image);

    

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    

    const productInfoDiv = document.createElement('div');

    

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + producto.price;

    const productName = document.createElement('p');
    productName.innerText = producto.name;

    

    const productInfoFigure = document.createElement('figure');
    const productImgCard = document.createElement('img');
    productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCard);

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    

    cardsContainer.appendChild(productCard);

  }

}

renderProducts(productList);



