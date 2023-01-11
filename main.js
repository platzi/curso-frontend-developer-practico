const menuEmail = document.getElementsByClassName('navbar-email');
const desktopMenu = document.getElementsByClassName('desktop-menu');
const menuCarIcon = document.getElementsByClassName('navbar-shopping-cart');
const mbl = document.getElementsByClassName('menu');
const menuMbl = document.getElementsByClassName('mobile-menu');
const shoppingCartContainer = document.getElementById('shoppingCartContainer');
const cardsContainer = document.getElementsByClassName('cards-container');
const productDetailContainer = document.getElementById('productDetail')
const productDetailClose = document.getElementsByClassName('product-detail-close')

menuEmail[0].addEventListener('click', toggleDesktopMenu);
mbl[0].addEventListener('click', toggleMenuMobil);
menuCarIcon[0].addEventListener('click', toggleCarAside);
productDetailClose[0].addEventListener('click', closeProductDetail);
//shoppingCartContainer.addEventListener('click', toggleShoppingCartContainer)

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
  const isProductDetailClosed = productDetailContainer.classList.contains('inactive')

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive')
  }

  if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive')
  }

  desktopMenu[0].classList.toggle('inactive')
}

function toggleMenuMobil() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
  const isProductDetailClosed = productDetailContainer.classList.contains('inactive')

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive')
  }
  
  if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive')
  }

  menuMbl[0].classList.toggle('inactive')
}

function toggleCarAside() {
  const isMobileMenuClosed = menuMbl[0].classList.contains('inactive');
  const isDesktopMenuClosed = desktopMenu[0].classList.contains('inactive');
  const isProductDetailClosed = productDetailContainer.classList.contains('inactive')

  if (!isMobileMenuClosed) {
    menuMbl[0].classList.add('inactive')
  }

  if (!isDesktopMenuClosed) {
    desktopMenu[0].classList.add('inactive')
  }
  
  if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive')
  }

  shoppingCartContainer.classList.toggle('inactive')
}

function openProductDetailAside() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
  const isDesktopMenuClosed = desktopMenu[0].classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive')
  }

  if (!isDesktopMenuClosed) {
    desktopMenu[0].classList.add('inactive')
  }

  productDetailContainer.classList.remove('inactive')
}

function closeProductDetail() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive')
  }

  productDetailContainer.classList.add('inactive')
}

// function toggleShoppingCartContainer() {
//   productDetailContainer.classList.add('inactive')
// }

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Pc',
  price: 720,
  imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Car',
  price: 1020,
  imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Telefono',
  price: 120,
  imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Laptop',
  price: 1290,
  imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Teclado',
  price: 20,
  imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.imagen);
    productImg.addEventListener('click', openProductDetailAside);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info')

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.append(productPrice, productName);

    const productInfoFigure = document.createElement('figure');

    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.append(productImgCart);

    productInfo.append(productInfoDiv, productInfoFigure);

    productCard.append(productImg, productInfo);

    cardsContainer[0].append(productCard);
  }
}

renderProducts(productList);