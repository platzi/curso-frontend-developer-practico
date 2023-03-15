const menu = document.querySelector('.menu');

const navbarEmail = document.querySelector('.navbar-email');

const deskTopMenu = document.querySelector('.desktop-menu');

const mobileMenu = document.querySelector('.mobile-menu');

const iconCart = document.querySelector('.navbar-shopping-cart');

const cartProducts = document.querySelector('.cart-product-detail');

const cardContainer = document.querySelector('.cards-container');

const imgProductCart = document.querySelector('.product-card img');

iconCart.addEventListener('click', showCartProducts);
navbarEmail.addEventListener('click', toggleDeskTopMenu);
menu.addEventListener('click', showMobileMenu);

/* imgProductCart.addEventListener('click', proof);

function proof () {
  console.log('click');
} */

function toggleDeskTopMenu() {
  const isShowCartProductsClosed = cartProducts.classList.contains('inactive');

  if (!isShowCartProductsClosed) {
    cartProducts.classList.add('inactive');
  }

  deskTopMenu.classList.toggle('inactive');
}

function showMobileMenu() {
  const isShowCartProductsClosed = cartProducts.classList.contains('inactive');

  if (!isShowCartProductsClosed) {
    cartProducts.classList.add('inactive');
  }

  mobileMenu.classList.toggle('inactive');
}

function showCartProducts() {
  const isToggleDeskTopMenuClosed = deskTopMenu.classList.contains('inactive');
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

  if (!isToggleDeskTopMenuClosed) {
    deskTopMenu.classList.add('inactive');
  }

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }

  cartProducts.classList.toggle('inactive');
}

const productList = [];

productList.push({
  name: 'Bike',
  price: 120,
  img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Bike',
  price: 120,
  img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Bike',
  price: 120,
  img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr) {
  for (const product of arr) {
    const productCart = document.createElement('div');
    productCart.classList.add('product-card');

    const imgProduct = document.createElement('img');
    imgProduct.setAttribute('src', product.img);

    const productInf = document.createElement('div');
    productInf.classList.add('product-info');

    const productInfDiv = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.innerText = `$ ${product.price},00`;
    const productName = document.createElement('p');
    productName.innerText = `${product.name}`;

    productInfDiv.appendChild(productPrice);
    productInfDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');

    const iconCart = document.createElement('img');
    iconCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(iconCart);

    productInf.appendChild(productInfDiv);
    productInf.appendChild(productInfoFigure);

    productCart.appendChild(imgProduct);
    productCart.appendChild(productInf);

    cardContainer.appendChild(productCart);
  }
}

renderProducts(productList);
