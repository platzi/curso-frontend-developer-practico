import getData from "./utils/getData.js";

const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuHamburger = document.querySelector('.hamburger');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const cardsContainer = document.querySelector('.cards-container');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');



const toggleDesktopMenu = () => {
  shoppingCartContainer.classList.remove('toggle-shopping-cart');

  closeProductDetail();

  desktopMenu.classList.toggle('desktop-menu-toggle');
}

const toggleMobileMenu = () => {
  shoppingCartContainer.classList.remove('toggle-shopping-cart');

  closeProductDetail();

  mobileMenu.classList.toggle('mobile-menu-toggle');
}

const toggleShoppingCart = () => {
  const isMobileMenuOpen = mobileMenu.classList.contains('mobile-menu-toggle'); 
  const isDesktopMenuOpen = desktopMenu.classList.contains('desktop-menu-toggle'); 
  
  isMobileMenuOpen && toggleMobileMenu();
  isDesktopMenuOpen && toggleDesktopMenu();

  closeProductDetail();
  
  shoppingCartContainer.classList.toggle('toggle-shopping-cart');
};


const openProductDetail = (product) => {

  shoppingCartContainer.classList.remove('toggle-shopping-cart');
  desktopMenu.classList.remove('desktop-menu-toggle');
  mobileMenu.classList.remove('mobile-menu-toggle');

  const closeDetail = document.createElement('div');
  closeDetail.classList.add('product-detail-close');
  const iconClose = document.createElement('img');
  iconClose.setAttribute('src', './icons/icon_close.png');
  closeDetail.appendChild(iconClose);

  closeDetail.addEventListener('click', () => {
    closeProductDetail()
  })

  const productImage = document.createElement('img');
  productImage.setAttribute('src', product.images[0]);

  const productDetailInfo = document.createElement('div');
  productDetailInfo.classList.add('product-detail-info');

  const productPrice = document.createElement('p');
  productPrice.innerText = `$${product.price}`;

  const productName = document.createElement('p');
  productName.innerText = product.title;

  const productDescription = document.createElement('p');
  productDescription.innerText = product.description;

  const addToCarBtn = document.createElement('button');
  addToCarBtn.classList.add('primary-button', 'add-to-cart-button');
  const addToCarImg = document.createElement('img');
  addToCarImg.setAttribute('src', './icons/bt_add_to_cart.svg');
  const btnText = document.createTextNode('Add to cart');

  addToCarBtn.appendChild(addToCarImg);
  addToCarBtn.appendChild(btnText);

  productDetailInfo.appendChild(productPrice);
  productDetailInfo.appendChild(productName);
  productDetailInfo.appendChild(productDescription);
  productDetailInfo.appendChild(addToCarBtn);

  productDetailContainer.innerHTML = ''

  productDetailContainer.appendChild(closeDetail);
  productDetailContainer.appendChild(productImage);
  productDetailContainer.appendChild(productDetailInfo);


  productDetailContainer.classList.add('toggle-product-detail');
}

const closeProductDetail = () => {
  productDetailContainer.classList.remove('toggle-product-detail');
}

navbarEmail.addEventListener('click', toggleDesktopMenu);
menuHamburger.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleShoppingCart);


function renderProducts(products, container) {
  products.map(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImage = document.createElement('img');
    productImage.setAttribute('src', product.images[0]);
    productImage.setAttribute('alt', product.title);
    productImage.addEventListener('click', () => openProductDetail(product))

    // product info
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    // Price & Name
    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = `$${product.price}`;

    const productName = document.createElement('p');
    productName.innerText = product.title;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    // Bt add to cart
    const productInfoFigure = document.createElement('figure');
    const iconCart = document.createElement('img');
    iconCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    productInfoFigure.appendChild(iconCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImage);
    productCard.appendChild(productInfo);

    container.appendChild(productCard);
  });
}

const URL_API = 'https://api.escuelajs.co/api/v1/products';

(async () => {
  const productsList = await getData(URL_API);
  console.log(productsList);

  renderProducts(productsList, cardsContainer);
})();