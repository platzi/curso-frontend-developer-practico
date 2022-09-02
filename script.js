const displayMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburguerMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const productDetailMenu = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

displayMenu.addEventListener('click', toggleDesktopMenu);
hamburguerMenuIcon.addEventListener('click', toggleMobileMenu);
shoppingCartIcon.addEventListener('click', toggleproductDetailMenu);

function toggleDesktopMenu() {
  const isproductDetailMenu = productDetailMenu.classList.contains('inactive');
  if (!isproductDetailMenu) {
    productDetailMenu.classList.add('inactive');
  }
  desktopMenu.classList.toggle('inactive');
};

function toggleMobileMenu(event) {
  const isproductDetailMenu = productDetailMenu.classList.contains('inactive');
  if (!isproductDetailMenu) {
    productDetailMenu.classList.add('inactive');
  }
  mobileMenu.classList.toggle('inactive');
};

function toggleproductDetailMenu() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }
  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add('inactive');
  }

  productDetailMenu.classList.toggle('inactive');
};

const productList = [];
productList.push({
  name: 'bike',
  price: 9999,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
  name: 'laptop',
  price: 12000,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
  name: 'cellphone',
  price: 7850,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});


function renderProducts(arr){
  for (product of arr) {
    const productCard = document.createElement('div');
  productCard.classList.add('product-card');

  const img = document.createElement('img')
  img.setAttribute('src', product.image); // product = {name, price, image} => product.image

  const productInfo = document.createElement('div');
  productInfo.classList.add('product-info');

  const productInfoDiv = document.createElement('div');

  const productPrice = document.createElement('p')
  productPrice.innerText = '$' + product.price

  const productName = document.createElement('p')
  productName.innerText = product.name

  const productInfoFigure = document.createElement('figure');
  const productCartImg = document.createElement('img');
  productCartImg.setAttribute('src','./icons/bt_add_to_cart.svg');

  productInfoFigure.appendChild(productCartImg);
  productInfoDiv.append(productPrice, productName);
  productInfo.append(productInfoDiv, productInfoFigure);
  productCard.append(img, productInfo);
  cardsContainer.appendChild(productCard);
}
}
renderProducts(productList); //mandamos llamar la función y le pasamos como argumento el productsList
