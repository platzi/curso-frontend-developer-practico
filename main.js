const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const MENU_CARRITO_ICON = document.querySelector('.navbar-shopping-cart');
const shoppingCardContainer = document.querySelector('#shoppingCardContainer');

const productDetail = document.querySelector('#productDetail');
const buttonCloseProductDetail = document.querySelector('.product-detail-close');

/* Implementación del menú para desktop */
menuEmail.addEventListener('click', toggleDesktopMenu)

function toggleDesktopMenu() {
  //console.log(desktopMenu.classList.contains('inactive'));
  let isAsideOpen = !shoppingCardContainer.classList.contains('inactive');
  let isProductDetailOpen = !productDetail.classList.contains(('inactive'));

  if (isAsideOpen) {
    shoppingCardContainer.classList.toggle('inactive');
    desktopMenu.classList.toggle('inactive');
  } else if (isProductDetailOpen) {
    productDetail.classList.toggle('inactive');
    desktopMenu.classList.toggle('inactive');
  } else {
    desktopMenu.classList.toggle('inactive');
  }

}

/**
 * Implementación del menu para mobile.
 */
menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
  let isCarMenuOpen = !shoppingCardContainer.classList.contains('inactive');
  let isProductDetailOpen = !productDetail.classList.contains(('inactive'));

  if (isCarMenuOpen) {
    shoppingCardContainer.classList.toggle('inactive');
    mobileMenu.classList.toggle('inactive');
  } else if (isProductDetailOpen) {
    productDetail.classList.toggle('inactive');
    mobileMenu.classList.toggle('inactive');
  } else {
    mobileMenu.classList.toggle('inactive');
  }
}

/**
 * Implementación de detalles de compra - clase 13
 */
MENU_CARRITO_ICON.addEventListener('click', toggleCarritoAside);

function toggleCarritoAside() {
  let isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
  let isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
  let isProductDetailOpen = !productDetail.classList.contains(('inactive'));

  if (isMobileMenuOpen) {
    mobileMenu.classList.toggle('inactive');
    shoppingCardContainer.classList.toggle('inactive');
  } else if (isDesktopMenuOpen) {
    desktopMenu.classList.toggle('inactive')
    shoppingCardContainer.classList.toggle('inactive');
  } else if (isProductDetailOpen) {
    productDetail.classList.toggle('inactive');
    shoppingCardContainer.classList.toggle('inactive');
  } else {
    shoppingCardContainer.classList.toggle('inactive');
  }
}

/**
 * Función para abrir y cerrar el aside de los detalles del producto
 */

function openProductDetailAside() {
  let isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
  let isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
  let isCarMenuOpen = !shoppingCardContainer.classList.contains('inactive');

  if (isMobileMenuOpen || isDesktopMenuOpen || isCarMenuOpen) {
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    shoppingCardContainer.classList.add('inactive');

    productDetail.classList.remove('inactive')
  } else {
    productDetail.classList.remove('inactive')
  }
   /*
  if (isMobileMenuOpen && isDesktopMenuOpen && isCarMenuOpen) {
    mobileMenu.classList.toggle('inactive');
    desktopMenu.classList.toggle('inactive');
    shoppingCardContainer.classList.toggle('inactive');

    productDetail.classList.toggle('inactive');
  } else {
    productDetail.classList.toggle('inactive');
  }

    */
}

function closeProductDetailAside() {
  productDetail.classList.add('inactive');
}

buttonCloseProductDetail.addEventListener('click', closeProductDetailAside)


/**
 * Lista de productos - clase 6
 */

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
  name: 'Airplane',
  price: 2000,
  image: "https://images.pexels.com/photos/1089306/pexels-photo-1089306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
  name: 'Airplane',
  price: 2000,
  image: "https://images.pexels.com/photos/1089306/pexels-photo-1089306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
  name: 'Airplane',
  price: 2000,
  image: "https://images.pexels.com/photos/1089306/pexels-photo-1089306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
});

/*
 <div class="product-card">
   <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
   <div class="product-info">
     <div>
       <p>$120,00</p>
       <p>Bike</p>
     </div>
     <figure>
       <img src="./icons/bt_add_to_cart.svg" alt="">
     </figure>
   </div>
 </div>
 */

const cardsContainer = document.querySelector('.cards-container');

function renderProducts(arr) {
  let productList = [...arr];
  let product;

  for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    /* Abrir detalles del producto */
    productImg.addEventListener('click', openProductDetailAside)

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.innerText = `$${product.price}`;
    const productName = document.createElement('p');
    productName.innerText = `${product.name}`;

    const productInfoFigure = document.createElement('figure');
    const productInfoImg = document.createElement('img');
    productInfoImg.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productInfoImg);
    productInfoDiv.append(productPrice, productName);
    productInfo.append(productInfoDiv, productInfoFigure);


    productCard.append(productImg, productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);