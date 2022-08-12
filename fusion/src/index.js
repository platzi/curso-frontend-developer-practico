import getData from "./utils/getData.js";

const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuHamburger = document.querySelector('.hamburger');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCart = document.querySelector('.shopping-cart-container');


const toggleDesktopMenu = () => {
  const isCartOpen = shoppingCart.classList.contains('toggle-shopping-cart');
  if(isCartOpen) {
    shoppingCart.classList.remove('toggle-shopping-cart');
  }

  desktopMenu.classList.toggle('desktop-menu-toggle');
}

const toggleMobileMenu = () => {
  const isCartOpen = shoppingCart.classList.contains('toggle-shopping-cart');
  if(isCartOpen) {
    shoppingCart.classList.remove('toggle-shopping-cart');
  }

  mobileMenu.classList.toggle('mobile-menu-toggle');
}

const toggleShoppingCart = () => {
  const isMobileMenuOpen = mobileMenu.classList.contains('mobile-menu-toggle'); 
  const isDesktopMenuOpen = desktopMenu.classList.contains('desktop-menu-toggle'); 
  
  isMobileMenuOpen && toggleMobileMenu();
  isDesktopMenuOpen && toggleDesktopMenu();
  
  shoppingCart.classList.toggle('toggle-shopping-cart');
};

navbarEmail.addEventListener('click', toggleDesktopMenu);
menuHamburger.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleShoppingCart);


/* 
<div class="product-card">
<img src='https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt=""/>
<div class="product-info">
<div>
<p>$120,00</p>
<p>Bike</p>
</div>
<figure>
<img src="./icons/bt_add_to_cart.svg" alt=""/>
</figure>
</div>
</div> 
*/


function renderProducts(products, container) {
  products.map(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImage = document.createElement('img');
    productImage.setAttribute('src', product.images[0]);
    productImage.setAttribute('alt', product.title);

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
const cardsContainer = document.querySelector('.cards-container');

(async () => {
  const productsList = await getData(URL_API);
  console.log(productsList);

  renderProducts(productsList, cardsContainer);
})();