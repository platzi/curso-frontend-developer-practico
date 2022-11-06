const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('#productDetail');
const productDetailClose = document.querySelector('.product-detail-close');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailClose.addEventListener('click',closeProductDetailAside )

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isAsideClose = shoppingCartContainer.classList.contains('inactive');
  const isproductDetailClose = productDetail.classList.contains('inactive');

  if(!isAsideClose) { shoppingCartContainer.classList.add('inactive') }
  if(!isproductDetailClose) { productDetail.classList.add('inactive') }

  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
  const isMobileMenuClose = mobileMenu.classList.contains('inactive');
  const isproductDetailClose = productDetail.classList.contains('inactive');
  
  if(!isMobileMenuClose) { mobileMenu.classList.add('inactive') }
  if(!isproductDetailClose) { productDetail.classList.add('inactive') }

  shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
  const isAsideClose = shoppingCartContainer.classList.contains('inactive');
  const isproductDetailClose = productDetail.classList.contains('inactive');

  if(!isAsideClose) { shoppingCartContainer.classList.add('inactive') }
  if(!isproductDetailClose) { productDetail.classList.add('inactive') }
  productDetail.classList.remove('inactive');
}

function closeProductDetailAside() {
  productDetail.classList.add('inactive');
}

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
  name: 'Pantalla',
  price: 220,
  imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
  name: 'Computador',
  price: 320,
  imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
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

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    // item 1
    const ProductImg = document.createElement('img');
    ProductImg.setAttribute('src', product.imagen);
    // ProductImg.src = productCard.image;
    ProductImg.addEventListener('click', openProductDetailAside)

  
    // item 2
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    const productInfoDiv = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.innerText = `$${product.price}`
    const productName = document.createElement('p');
    productName.innerText = `${product.name}`;
    
    productInfoDiv.append(productPrice, productName);
    
    // item 3
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    productInfoFigure.appendChild(productImgCart);
    productInfo.append(productInfoDiv, productInfoFigure);
    productCard.append(ProductImg, productInfo);
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);