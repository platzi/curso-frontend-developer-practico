const menuEmail = document.querySelector('.navbar-email');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const burgerMenu = document.querySelector('.menu');
const desktopMenu = document.querySelector('.desktop-menu');
const categories = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailAside = document.querySelector('#productDetail');
const productDetailAsideCloseIcon = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleShoppingCart);
productDetailAsideCloseIcon.addEventListener('click', closeDetailAside);

function toggleDesktopMenu() {
  shoppingCartContainer.classList.add('inactive');
  productDetailAside.classList.add('inactive');
  desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu() {
  shoppingCartContainer.classList.add('inactive');
  productDetailAside.classList.add('inactive');
  categories.classList.toggle('inactive');
}
function toggleShoppingCart() {
    desktopMenu.classList.add('inactive');
    categories.classList.add('inactive');
    productDetailAside.classList.add('inactive');
    shoppingCartContainer.classList.toggle('inactive');
}
function closeDetailAside() {
  productDetailAside.classList.add('inactive');
}
function renderDetail() {
  desktopMenu.classList.add('inactive');
  categories.classList.add('inactive');
  shoppingCartContainer.classList.add('inactive');
  productDetailAside.classList.remove('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
}) 
productList.push({
    name: 'Pantalla',
    price: 220,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
}) 
productList.push({
    name: 'Compu',
    price: 620,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
}) 

/* <div class="product-card">
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
      </div> */

      
function renderProductCards(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
          
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.img);
    productImg.addEventListener('click', renderDetail);
          
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
    const cardIconCart = document.createElement('img');
    cardIconCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
    productInfoFigure.appendChild(cardIconCart);
    
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    
    cardsContainer.appendChild(productCard);
  }
}
 renderProductCards(productList);