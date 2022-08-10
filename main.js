const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobilepMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)

function toggleDesktopMenu (){
  const isAsideClose = aside.classList.contains('inactive');

  if(!isAsideClose){
    aside.classList.add('inactive');
  }
  desktopMenu.classList.toggle('inactive');
}

function toggleMobilepMenu (){
  const isAsideClose = aside.classList.contains('inactive');

  if(!isAsideClose){
    aside.classList.add('inactive');
  }
  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside (){
  const isMobileMenuClose = mobileMenu.classList.contains('inactive');
  const isDesktopMenuClose = desktopMenu.classList.contains('inactive');
  
  if (!isMobileMenuClose){
    mobileMenu.classList.add('inactive');
  }

  if(!isDesktopMenuClose){
    desktopMenu.classList.add('inactive');
  }
  aside.classList.toggle('inactive');
}

//Lista de productos hecho manualmente que se deberian traer de una base de datos.
const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Pantalla',
  price: 140,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Compu',
  price: 250,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

// Creación de productos en html
function renderProducts(arr){
  for (product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);//*Modifica el src de la imagen con la llave product.image de cada objeto dentro del array.
    
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');
    
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price; //*Agrega un valor que proviene del array y la key price.

    const productName = document.createElement('p');
    productName.innerText = product.name; //*Agrega un nombre que proviene del array y la key name.

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoDiv);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);