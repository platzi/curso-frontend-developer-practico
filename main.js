const menuEmail = document.getElementsByClassName('navbar-email');
const desktopMenu = document.getElementsByClassName('desktop-menu');
const menuCarIcon = document.getElementsByClassName('navbar-shopping-cart');
const mbl = document.getElementsByClassName('menu');
const menuMbl = document.getElementsByClassName('mobile-menu');
const aside = document.getElementsByClassName('product-detail');
const cardsContainer = document.getElementsByClassName('cards-container');

menuEmail[0].addEventListener('click', toggleDesktopMenu);
mbl[0].addEventListener('click', toggleMenuMobil);
menuCarIcon[0].addEventListener('click', toggleCarAside);

function toggleDesktopMenu() {
  const isAsideClosed = aside[0].classList.contains('inactive');

  if (!isAsideClosed) {
    aside[0].classList.add('inactive')
  }

  desktopMenu[0].classList.toggle('inactive')
}

function toggleMenuMobil() {
  const isAsideClosed = aside[0].classList.contains('inactive');

  if (!isAsideClosed) {
    aside[0].classList.add('inactive')
  }

  menuMbl[0].classList.toggle('inactive')
}

function toggleCarAside() {
  const isMobileMenuClosed = menuMbl[0].classList.contains('inactive');
  const isDesktopMenuClosed = desktopMenu[0].classList.contains('inactive');

  if (!isMobileMenuClosed) {
    menuMbl[0].classList.add('inactive')
  }

  if (!isDesktopMenuClosed) {
    desktopMenu[0].classList.add('inactive')
  }

  aside[0].classList.toggle('inactive')
}

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

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info')

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice, productName);

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