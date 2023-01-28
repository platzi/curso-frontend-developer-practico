const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){
  const isAsideCarritoClosed = shoppingCartContainer.classList.contains('inactive'); //asideCarrito esta cerrado
  if(!isAsideCarritoClosed){ //si el asideCarrito esta abierto, hay que cerrarlo
    shoppingCartContainer.classList.add('inactive');
  }

  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
  const isAsideCarritoClosed = shoppingCartContainer.classList.contains('inactive');
  if(!isAsideCarritoClosed){ //si el asideCarrito esta abierto, hay que cerrarlo
    shoppingCartContainer.classList.add('inactive');
  }

  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

  if(!isDesktopMenuClosed){ //si el desktopMenu esta abierto, hay que cerrarlo
    desktopMenu.classList.add('inactive');
  }

  if(!isMobileMenuClosed){ //si el mobileMenu esta abierto, hay que cerrarlo
    mobileMenu.classList.add('inactive');
  }

  shoppingCartContainer.classList.toggle('inactive');

}


const productList = [];
productList.push({
  name: 'Bike',
  price: '120',
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Pantalla',
  price: '220',
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Compu',
  price: '620',
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});


function renderProducts(arr){
  for (product of arr) {
    //Creamos los elementos del bloque de codigo HTML que tenemos como referencia de product-card y con appendChild metemos cada elemento creado en su lugar correspondiente
    const productCard = document.createElement('div'); //Creamos el div principal
    productCard.classList.add('product-card'); //Le anadimos la clase product-card
  
    const productImg = document.createElement('img'); //Creamos una imagen
    // product = {name, price, image} -> product.image
    productImg.setAttribute('src', product.image); //Modificamos el atributo src de la imagen recien creada y le mandamos el .image del objeto que se encuentra en el arreglo
  
    const productInfo = document.createElement('div'); //Creamos el siguiente div
    productInfo.classList.add('product-info'); //Le anadimos la clase product-info
  
    const productInfoDiv = document.createElement('div'); //Creamos el div que no tiene clase
    //Creamos los dos p que se encuentran dentro del div
    const productPrice = document.createElement('p');
    productPrice.innerHTML = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerHTML = product.name;
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement('figure'); //Creamos la etiqueta figure
    const productImgCart = document.createElement('img'); //Creamos la etiqueta img
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg') //Le modificamos los atributos a la img
    productInfoFigure.appendChild(productImgCart);
  
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);