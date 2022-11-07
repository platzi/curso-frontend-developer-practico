const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurguer = document.querySelector('.menu-burguer');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCar = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurguer.addEventListener('click', toggleBurguerMenu);
shoppingCar.addEventListener('click', toggleShoppingCar);

function toggleDesktopMenu() {
  if (productDetail.classList.contains('active')) {
    productDetail.classList.remove('active');
  }
  desktopMenu.classList.toggle('active');
}

function toggleBurguerMenu() {
  if (productDetail.classList.contains('active')) {
    productDetail.classList.remove('active');
  }
  mobileMenu.classList.toggle('active');
}

function toggleShoppingCar() {
  if (mobileMenu.classList.contains('active')) {
    mobileMenu.classList.remove('active');
  }
  if (desktopMenu.classList.contains('active')) {
    desktopMenu.classList.remove('active');
  }
  productDetail.classList.toggle('active');
}

const cardsContainer = document.querySelector('.cards-container');
const productList = [
  { name: 'Computer', price: 5000, img: 'https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750' },
  { name: 'Mac PRO', price: 4500, img: 'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750' },
  { name: 'Mac PRO 2', price: 4000, img: 'https://images.pexels.com/photos/129208/pexels-photo-129208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750' },
  { name: 'Mac PRO 3', price: 4000, img: 'https://images.pexels.com/photos/40185/mac-freelancer-macintosh-macbook-40185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750' },
  { name: 'Motorcycle', price: 14000, img: 'https://images.pexels.com/photos/104842/bmw-vehicle-ride-bike-104842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750' },
  { name: 'Picture Art', price: 6000, img: 'https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750' },
  { name: 'Bonsai', price: 7000, img: 'https://images.pexels.com/photos/2778192/pexels-photo-2778192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { name: 'Bike', price: 120, img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' }
];
function renderProducts(where, array) {
  array.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const imgProduct = document.createElement('img');
    imgProduct.setAttribute('src', product.img);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productDivInfo = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$ ' + product.price;

    const productName = document.createElement('p');
    productName.innerText = product.name;

    productDivInfo.appendChild(productPrice);
    productDivInfo.appendChild(productName);

    const productInfoFigure = document.createElement('figure');

    const productoImgCart = document.createElement('img');
    productoImgCart.setAttribute('src', './assets/icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productoImgCart);

    productInfo.appendChild(productDivInfo);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(imgProduct);
    productCard.appendChild(productInfo);

    where.appendChild(productCard);
  });
}

renderProducts(cardsContainer, productList);