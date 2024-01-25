//Aquí definim les diferents variables, en aquest cas constants que no canviaran
const menuEmail = document.querySelector('.navbar-email');
// Variable menú hamburguesa / selector / classe menú 
const menuHamIcon = document.querySelector('.menu');
// variable amb referència al carret de la compra del navbar
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

// Aquí escoltem els diferents click's
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

/* Aquest conjunt de funcions gestiona l'estat i la visibilitat dels elements (desktopMenu, mobileMenu, shoppingCartContainer i productDetailContainer).  
*/
function toggleDesktopMenu() {
  // Comprova si el carro de la compra està tancat (conté la classe 'inactive')
  const isCarritoAsideClosed = shoppingCartContainer.classList.contains('inactive');

  // Si el carro de la compra no està tancat, afegir la classe 'inactive' per tancar-lo
  if (!isCarritoAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }

  // Alterna la classe 'inactive' al menú d'escriptori per mostrar-lo o amagar-lo
  desktopMenu.classList.toggle('inactive');
}


function toggleMobileMenu() {
  const isCarritoAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isCarritoAsideClosed) {
    shoppingCartContainer.classList.add('inactive'); 
  }

  closeProductDetailAside();
  
  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }

  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
  
  if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive'); 
  }
  
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add('inactive')
  }

  shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive')
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/65689/bike-bicycle-two-wheel-65689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
});
productList.push({
  name: 'Pantalla',
  price: 220,
  image: 'https://images.pexels.com/photos/333984/pexels-photo-333984.jpeg',
});
productList.push({
  name: 'Compu',
  price: 620,
  image: 'https://images.pexels.com/photos/257881/pexels-photo-257881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
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
  
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);