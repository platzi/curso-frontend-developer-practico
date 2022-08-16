const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

// EVENTOS---------------------------------------------------------------------------------
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobilepMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

//FUNCIONES--------------------------------------------------------------------------------
function toggleDesktopMenu(){
  desktopMenu.classList.toggle('inactive');
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.add('inactive');
}

function toggleMobilepMenu (){
  mobileMenu.classList.toggle('inactive');
  shoppingCartContainer.classList.add('inactive');
  }

function toggleCarritoAside (){
  shoppingCartContainer.classList.toggle('inactive');
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  productDetailContainer.classList.add('inactive');
  }

function openProductDetailAside(){
  productDetailContainer.classList.remove('inactive');
  shoppingCartContainer.classList.add('inactive');
}

function closeProductDetailAside(){
  productDetailContainer.classList.add('inactive');
}

//Lista de productos hecho manualmente que se deberian traer de una base de datos.----------
const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Compu',
  price: 250,
  image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
  name: 'Pantalla',
  price: 140,
  image: 'https://images.pexels.com/photos/6316063/pexels-photo-6316063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

// Creación de productos en html------------------------------------------------------------
function renderProducts(arr){
  for (product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);//Modifica el src de la imagen con la llave product.image de cada objeto dentro del array.
    productImg.addEventListener('click', openProductDetailAside);
    
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');
    
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price; //Agrega un valor que proviene del array y la key price.

    const productName = document.createElement('p');
    productName.innerText = product.name; //Agrega un nombre que proviene del array y la key name.

    productInfoDiv.append(productPrice,productName);
    //*productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);

    productInfo.append(productInfoDiv,productInfoFigure); // Con este método se puede agregar mas elementos en una sola línea.
    //*productInfo.appendChild(productInfoDiv);

    productCard.append(productImg,productInfo);
    //*productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}

//LLamado de la funcion para creación de productos.----------------------------------------
renderProducts(productList);