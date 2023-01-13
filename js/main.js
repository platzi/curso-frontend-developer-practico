const emailMenu = document.querySelector('.navbar__email');
const desktopMenu = document.querySelector('.desktop__menu');

const burguerMenu = document.querySelector('.navbar__menu');
const mobileMenu = document.querySelector('.mobile__menu');

const menuCarritoIcon = document.querySelector('.navbar__shopping__cart');
const aside = document.querySelector('.product__detail');

emailMenu.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toogleCarritoAside);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
  aside.classList.add('inactive');
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle('inactive');
  aside.classList.add('inactive');
}

function toogleCarritoAside() {
  desktopMenu.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  aside.classList.toggle('inactive');
}


const productList = [];
productList.push({
  name: 'Bike',
  price: 220,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
  name: 'Bike',
  price: 220,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
  name: 'Bike',
  price: 220,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
  name: 'Bike',
  price: 220,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
  name: 'Bike',
  price: 220,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
  name: 'Bike',
  price: 220,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts(arr) {
  for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product__card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.classList.add('product__card__img');

    const productInfo = document.createElement('div');
    productInfo.classList.add('product__info');

    const productInfoContainer = document.createElement('div');
    productInfoContainer.classList.add('product__info--container');

    const productInfoPrice = document.createElement('p');
    productInfoPrice.innerText = '$' + product.price;
    productInfoPrice.classList.add('product__info__price');

    const productInfoName = document.createElement('p');
    productInfoName.innerText = product.name;
    productInfoName.classList.add('product__info__name');

    productInfoContainer.append(productInfoPrice, productInfoName);

    const productInfoIconContainer = document.createElement('figure');
    productInfoIconContainer.classList.add('product__info__icon--container');

    const productInfoIcon = document.createElement('img');
    productInfoIcon.setAttribute('src', './icons/bt_add_to_cart.svg');
    productInfoIcon.classList.add('product__info__icon');

    productInfoIconContainer.appendChild(productInfoIcon);

    productInfo.append(productInfoContainer, productInfoIconContainer);

    productCard.append(productImg, productInfo);

    const productContainer = document.querySelector('.product__container');
    productContainer.appendChild(productCard);
  }
}

renderProducts(productList);