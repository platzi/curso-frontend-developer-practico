// General elements
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cardsContainer = document.querySelector('.cards-container');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const myOrderContainer = document.querySelector('.my-order-content');
const productDetail = document.querySelector('#productDetail');
let shoppingCartList = [];
let shoppingCartTotal = 0;

// Show / Hide Desktop Menu
const toggleDesktopMenu = () => {
  shoppingCartContainer.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  productDetail.classList.add('inactive');
  desktopMenu.classList.toggle('inactive');
};
const menuEmail = document.querySelector('.navbar-email');
menuEmail.addEventListener('click', toggleDesktopMenu);

// Show / Hide Mobile menu
const toggleMobileMenu = () => {
  desktopMenu.classList.add('inactive');
  shoppingCartContainer.classList.add('inactive');
  productDetail.classList.add('inactive');
  mobileMenu.classList.toggle('inactive');
};
const menuHamIcon = document.querySelector('.menu');
menuHamIcon.addEventListener('click', toggleMobileMenu);

// Show / Hide Shopping cart
const toggleShoppingCart = () => {
  desktopMenu.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  productDetail.classList.add('inactive');
  shoppingCartContainer.classList.toggle('inactive');
};
const menuShoppingCart = document.querySelector('.navbar-shopping-cart');
menuShoppingCart.addEventListener('click', toggleShoppingCart);

// Show / Hide Product Detail
const showProductDetail = (product) => {
  productDetail.querySelector('#productDetail .product-detail-image').setAttribute('src', product.image);
  productDetail.querySelector('#productDetail .product-info-price').innerText = '$' + product.price;
  productDetail.querySelector('#productDetail .product-info-name').innerText = product.name;
  productDetail.querySelector('#productDetail .product-info-description').innerText = product.description;

  desktopMenu.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  shoppingCartContainer.classList.add('inactive');
  productDetail.classList.remove('inactive');
}

// Close Product Detail
document.querySelector('.product-detail-close img').addEventListener('click', () => {
  productDetail.classList.add('inactive');
});

// Add Product to Cart
const addProductCart = (product) => {
  shoppingCartList.push(product);
  document.querySelector('.navbar-shopping-cart div').innerText = shoppingCartList.length;
  shoppingCartTotal += product.price;
  document.querySelector('.my-order-content .order .order-total').innerHTML = '$' + shoppingCartTotal;
}

const renderProducts = (productList) => {
  for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    const productImage = document.createElement('img');
    productImage.setAttribute('src', product.image);
    productImage.addEventListener('click', showProductDetail.bind(this, product), false);
    
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('p');
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    const productInfoFigure = document.createElement('figure');
    const productImageCart = document.createElement('img');
    productImageCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    productImageCart.addEventListener('click', addProductCart.bind(this, product), false);

    productInfoDiv.append(productPrice, productName);

    productInfoFigure.appendChild(productImageCart);
    productInfo.append(productInfoDiv, productInfoFigure);
    productCard.append(productImage, productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);