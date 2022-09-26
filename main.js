/* Seleccionador de etiquetas */
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoICon = document.querySelector('.navbar-shopping-cart');
const menuHamIcon = document.querySelector('.menu');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardContainer = document.querySelector('.cards-container');

/* Escuchador de eventos */
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoICon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);


/* Funciones */
function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
  //Pregunta si el aside esta cerrado lo cual esta guardado en la variable isAsideClosed
  if (!isAsideClosed) {
    aside.classList.add('inactive');
  }
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
  //Pregunta si el aside esta cerrado lo cual esta guardado en la variable isAsideClosed
  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }
  mobileMenu.classList.toggle('inactive');
  closeProductDetailAside();
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  //Pregunta si el menu mobile esta cerrado lo cual esta guardado en la variable isAsideClosed
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }
  shoppingCartContainer.classList.toggle('inactive');

  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
  if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive');
  }
}

function openProductDetailAside () {
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside () {
  productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
  name: 'Pantalla',
  price: 220,
  image: 'https://images.pexels.com/photos/400678/pexels-photo-400678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})
productList.push({
  name: 'Sofa',
  price: 250,
  image: 'https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&w=600'
})
productList.push({
  name: 'Celular',
  price: 500,
  image: 'https://images.pexels.com/photos/13709185/pexels-photo-13709185.jpeg?auto=compress&cs=tinysrgb&w=600'
})

/* <div class="product-card">
  <img
    src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    alt="">
  <div class="product-info">
    <div>
      <p>$120,00</p>
      <p>Bike</p>
    </div>
    <figure>
      <img src="./icons/bt_add_to_cart.svg" alt="">
    </figure>
  </div>
</div> */

//Una manera mas facil de hacerlo pero no recomendada
/* function renderProducts(arr) {
  cardContainer.innerHTML = '';
  arr.forEach((product) => {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
    <img
      src="${product.image}"
      alt="">
    <div class="product-info">
      <div>
        <p>$${product.price},00</p>
        <p>${product.name}</p>
      </div>
      <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
      </figure>
    </div>
    `;
    cardContainer.appendChild(card);
  })
}

renderProducts(productList); */

for (product of productList) {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

  const productImg = document.createElement('img');
  productImg.setAttribute('src', product.image);
  productImg.addEventListener('click', openProductDetailAside);

  const productInfo = document.createElement('div');
  productInfo.classList.add('product-info');

  const productInfoDiv = document.createElement('div');

  const productPrice = document.createElement('p');
  productPrice.innerText = '$' + product.price + ',00';

  const productName = document.createElement('p');
  productName.innerText = product.name;
  
  productInfoDiv.appendChild(productPrice);
  productInfoDiv.appendChild(productName);

  const productInfoFigure = document.createElement('figure');
  const productImgCart = document.createElement('img');
  productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

  productInfoFigure.appendChild(productImgCart);

  productInfo.appendChild(productInfoDiv);
  productInfo.appendChild(productInfoFigure);

  productCard.appendChild(productImg);
  productCard.appendChild(productInfo);

  cardContainer.appendChild(productCard);
}