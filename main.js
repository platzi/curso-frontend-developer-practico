const navBarEmail = document.querySelector('.navbar-email');
const emailDesktopMenu = document.querySelector('.desktop-menu');
const burguerMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartMenuIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartAside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const productDetailAside = document.querySelector('.product-detail-secondary');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

navBarEmail.addEventListener('click', toggleEmailDesktopMenu);
burguerMenuIcon.addEventListener('click', toggleMobileMenu);
cartMenuIcon.addEventListener('click', toggleShoppingCartMenu);
cardsContainer.addEventListener('click', openProductDetailAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleEmailDesktopMenu() {
   emailDesktopMenu.classList.toggle('inactive');
   shoppingCartAside.classList.add('inactive');
}

function toggleMobileMenu() {
   mobileMenu.classList.toggle('inactive');
   shoppingCartAside.classList.add('inactive');
   productDetailAside.classList.add('inactive');
}

function toggleShoppingCartMenu() {
   shoppingCartAside.classList.toggle('inactive');
   emailDesktopMenu.classList.add('inactive');
   mobileMenu.classList.add('inactive');
   productDetailAside.classList.add('inactive');
}

function openProductDetailAside() {
   productDetailAside.classList.remove('inactive');
   shoppingCartAside.classList.add('inactive');
   mobileMenu.classList.add('inactive');
}

function closeProductDetailAside() {
   productDetailAside.classList.add('inactive');
}

const productList = [];
productList.push({
   name: 'Bike',
   price: 120,
   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
   name: 'Scooter',
   price: 220,
   image: 'https://images.pexels.com/photos/3671151/pexels-photo-3671151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
});
productList.push({
   name: 'Monitor Apple',
   price: 50,
   image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
});
productList.push({
   name: 'Bike',
   price: 120,
   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
   name: 'Scooter',
   price: 220,
   image: 'https://images.pexels.com/photos/3671151/pexels-photo-3671151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
});
productList.push({
   name: 'Monitor Apple',
   price: 50,
   image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
});
productList.push({
   name: 'Bike',
   price: 120,
   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
   name: 'Scooter',
   price: 220,
   image: 'https://images.pexels.com/photos/3671151/pexels-photo-3671151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
});
productList.push({
   name: 'Monitor Apple',
   price: 50,
   image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
});

function renderProducts(arr) {
   for (product of productList) {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');

      const productCardImg = document.createElement('img');
      productCardImg.setAttribute('src', product.image);

      const productCardInfo = document.createElement('div');
      productCardInfo.classList.add('product-info');

      const productCardDiv = document.createElement('div');
      const productCardPrice = document.createElement('p');
      productCardPrice.innerText = `$${product.price}`;
      const productCardName = document.createElement('p');
      productCardName.innerText = `${product.name}`;

      const productCardFigure = document.createElement('figure');

      const productCardIconCart = document.createElement('img');
      productCardIconCart.setAttribute('src', './icons/bt_add_to_cart.svg');

      productCardFigure.append(productCardIconCart);
      productCardDiv.append(productCardName, productCardPrice);
      productCardInfo.append(productCardDiv, productCardFigure);
      productCard.append(productCardImg, productCardInfo);
      cardsContainer.append(productCard);
   }
}

renderProducts(productList);
