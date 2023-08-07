const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconBurgerMenu = document.querySelector('.menu');
const iconProductDetailClose = document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector('.mobile-menu');
const iconCarMenu = document.querySelector('.navbar-shopping-cart');
const myCarMenu = document.querySelector('#shopping-cart-container');
const productDetailAside = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

// const toggleDesktopMenu = () => desktopMenu.classList.toggle("inactive");

menuEmail.addEventListener('click', toggleDesktopMenu);
iconBurgerMenu.addEventListener('click', toggleMobileMenu);
iconCarMenu.addEventListener('click', toggleCarMenu);
iconProductDetailClose.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
  const isCarMenuClosed = myCarMenu.classList.contains('inactive');

  if (!isCarMenuClosed) {
    myCarMenu.classList.add('inactive');
  }

  desktopMenu.classList.toggle('inactive');

}

function toggleMobileMenu() {
  const isCarMenuClosed = myCarMenu.classList.contains('inactive');
  productDetailAside.classList.add('inactive');

  if (!isCarMenuClosed) {
    myCarMenu.classList.add('inactive');
  }

  mobileMenu.classList.toggle('inactive');
}

function toggleCarMenu() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
  const isProductDetailAsideClose = productDetailAside.classList.contains('inactive');

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }

  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add('inactive');
  }

  if (!isProductDetailAsideClose) {
    productDetailAside.classList.add('inactive');
  }

  myCarMenu.classList.toggle('inactive');
}

function openProductDetailAside() {
  myCarMenu.classList.add('inactive');
  productDetailAside.classList.remove('inactive');
}

function closeProductDetailAside() {
  productDetailAside.classList.add('inactive');
}

const productList = [];

productList.push({
  name: 'Bike',
  price: 120,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: 'Bike',
  price: 120,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: 'Bike',
  price: 120,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: 'Bike',
  price: 120,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});


// <div class="product-card">
//   <img
//     src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
//     alt="">
//   <div class="product-info">
//     <div>
//       <p>$120,00</p>
//       <p>Bike</p>
//     </div>
//     <figure>
//       <img src="./icons/bt_add_to_cart.svg" alt="">
//     </figure>
//   </div>
// </div>


function renderProducts(arr) {
  for (const product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const image = document.createElement('img');
    image.setAttribute('src', product.image);
    image.addEventListener('click', openProductDetailAside);

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
    const productFigureImage = document.createElement('img');
    productFigureImage.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productInfoFigure.appendChild(productFigureImage);

    productCard.appendChild(image);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
