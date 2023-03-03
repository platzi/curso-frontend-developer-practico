const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const menuShoppingCart = document.querySelector('.navbar-shopping-cart');
const shoopingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuShoppingCart.addEventListener('click', toggleProductDetail);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
  const isShoopingCartContainerClosed =
    shoopingCartContainer.classList.contains('inactive');
  const isProductDetailClosed =
    productDetailContainer.classList.contains('inactive');

  if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive');
  }
  if (!isShoopingCartContainerClosed) {
    //si el Menu del carrito esta open, hay que cerrarlo
    shoopingCartContainer.classList.add('inactive');
  }
  closeProductDetailAside();

  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isShoopingCartContainerClosed =
    shoopingCartContainer.classList.contains('inactive');

  if (!isShoopingCartContainerClosed) {
    //si el Menu del carrito esta open, hay que cerrarlo
    shoopingCartContainer.classList.add('inactive');
  }

  closeProductDetailAside();

  mobileMenu.classList.toggle('inactive');
}

function toggleProductDetail() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
  const isProductDetailClosed =
    productDetailContainer.classList.contains('inactive');
  if (!isMobileMenuClosed) {
    //si el mobileMenu esta open, hay que cerrarlo
    mobileMenu.classList.add('inactive');
  }
  if (!isDesktopMenuClosed) {
    //si el mobileMenu esta open, hay que cerrarlo
    desktopMenu.classList.add('inactive');
  }
  if (!isProductDetailClosed) {
    //si el mobileMenu esta open, hay que cerrarlo
    productDetailContainer.classList.add('inactive');
  }

  shoopingCartContainer.classList.toggle('inactive');
}
function openProductDetailAside() {
  productDetailContainer.classList.remove('inactive');
  desktopMenu.classList.add('inactive');
}
function closeProductDetailAside() {
  shoopingCartContainer.classList.add('inactive');
  productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
  name: 'bike',
  price: 120,
  image:
    'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'pantalla',
  price: 220,
  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGDhhzJLgTv8GNbnjOIWiVhmLJiVRqX1LeBw&usqp=CAU',
});
productList.push({
  name: 'soccer shoes',
  price: 150,
  image: 'https://pbs.twimg.com/media/FSCc048XIAMVIzW?format=jpg&name=large',
});
productList.push({
  name: 'box',
  price: 90,
  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGY8p4DpYzDYcCYkaaXfJvSarff4LgnQRuAg&usqp=CAU',
});
productList.push({
  name: 'T-shirt',
  price: 160,
  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR_SUaGM6va1P_9ewjER3Na-4tpzRoOgR2dA&usqp=CAU',
});
productList.push({
  name: 'soccer',
  price: 100,
  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpJxiUb-lpMi6yNbUZHX1LQJ4JsKK5HCqcq6uE41S_Dscet-QVYEpxJ-lLk3TOTHaIdWI&usqp=CAU',
});
/*<div class="product-card">
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
        </div>*/
function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const img = document.createElement('img');
    img.setAttribute('src', product.image);
    img.addEventListener('click', openProductDetailAside);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    productCard.appendChild(img);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}
renderProducts(productList);
