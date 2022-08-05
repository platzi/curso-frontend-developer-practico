const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');

const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', toggleCarAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

  !isAsideClosed ? shoppingCartContainer.classList.add('inactive') : true;
  !isProductDetailClosed ? productDetailContainer.classList.add('inactive') : true;

  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

  !isAsideClosed ? shoppingCartContainer.classList.add('inactive') : true;
  !isProductDetailClosed ? productDetailContainer.classList.add('inactive') : true;

  mobileMenu.classList.toggle('inactive');
}

function toggleCarAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

  !isMobileMenuClosed ? mobileMenu.classList.add('inactive') : true;
  !isDesktopMenuClosed ? desktopMenu.classList.add('inactive') : true;
  !isProductDetailClosed ? productDetailContainer.classList.add('inactive') : true;

  shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  !isMobileMenuClosed ? mobileMenu.classList.add('inactive') : true;
  !isDesktopMenuClosed ? desktopMenu.classList.add('inactive') : true;
  !isAsideClosed ? shoppingCartContainer.classList.add('inactive') : true;

  const characterID = this.id;

  getCharacterByID(characterID);
}

function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive');
}

getCharacters();

function getCharacters() {
  const urlAPI =
    'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=12780ff20459b276fa4be703631a0990&hash=3ddcf6c9e58150c4861c4694629fa5ea';

  fetch(urlAPI)
    .then((res) => res.json())
    .then((json) => {
      renderCharacters(json.data.results);
    });
}

function getCharacterByID (ID) {
  const urlAPI =
    `http://gateway.marvel.com/v1/public/characters/${ID}?ts=1&apikey=12780ff20459b276fa4be703631a0990&hash=3ddcf6c9e58150c4861c4694629fa5ea`;

  fetch(urlAPI)
    .then((res) => res.json())
    .then((json) => {
      renderCharacterDetail(json.data.results[0]);
    });
}

function renderCharacters (characters) {
  characters.forEach((character) => {
    const cardsContainer = document.querySelector('.cards-container');
    const productCard = document.createElement('div');
    cardsContainer.appendChild(productCard);
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute(
      'src',
      `${character.thumbnail.path}.${character.thumbnail.extension}`
    );
    productImg.setAttribute(
      'id',
      character.id
    );
    productCard.appendChild(productImg);
    productImg.addEventListener('click', openProductDetailAside)

    const productInfo = document.createElement('div');
    const contentInfo = document.createElement('div');
    const productPrice = document.createElement('p');
    const ProductName = document.createElement('p');
    productInfo.classList.add('product-info');
    productPrice.innerText = character.id;
    ProductName.innerText = character.name;
    productCard.appendChild(productInfo);
    productInfo.appendChild(contentInfo);
    contentInfo.appendChild(productPrice);
    contentInfo.appendChild(ProductName);

    const addCartFigure = document.createElement('figure');
    const addCartImg = document.createElement('img');
    addCartImg.setAttribute('src', './icons/bt_add_to_cart.svg');
    productInfo.appendChild(addCartFigure);
    addCartFigure.appendChild(addCartImg);
  });
}

function renderCharacterDetail (character) {
  const characterImg = document.querySelector('#productDetail > img');
  const characterID = document.querySelector('#productDetail .product-info p:nth-child(1)');
  const characterName = document.querySelector('#productDetail .product-info p:nth-child(2)');
  const characterDescription = document.querySelector('#productDetail .product-info p:nth-child(3)');

  characterImg.setAttribute(
    'src',
    `${character.thumbnail.path}.${character.thumbnail.extension}`
  );
  characterImg.setAttribute(
    'alt',
    character.name
  );
  characterID.innerText = character.id;
  characterName.innerText = character.name;
  characterDescription.innerText = character.description;
  productDetailContainer.classList.remove('inactive');
}