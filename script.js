const productsContainer = document.querySelector('.cards-container');

const userAccountLink = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const mobileMenuBtn = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const shoppingCartBtn = document.querySelector('.navbar-shopping-cart');
const shoppingCartMenu = document.querySelector('.product-detail');

userAccountLink.addEventListener('click', toggleDesktopMenu);
mobileMenuBtn.addEventListener('click', toggleMobileMenu);
shoppingCartBtn.addEventListener('click', toggleShoppingCart);

function toggleDesktopMenu() {
  const isShoppingCartMenuOpen = !shoppingCartMenu.classList.contains('inactive');

  if (isShoppingCartMenuOpen) {
    shoppingCartMenu.classList.add('inactive');
  }
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isShoppingCartMenuOpen = !shoppingCartMenu.classList.contains('inactive');

  if (isShoppingCartMenuOpen) {
    shoppingCartMenu.classList.add('inactive');
  }
  mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart() {
  const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
  const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');

  if (isMobileMenuOpen) {
    mobileMenu.classList.add('inactive');
  } else if (isDesktopMenuOpen) {
    desktopMenu.classList.add('inactive');
  }
  shoppingCartMenu.classList.toggle('inactive');
}

/*Para simular la entrada de datos desde una DB en el backend*/
const productsArray = [];
productsArray.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productsArray.push({
  name: 'Tent',
  price: 60.99,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productsArray.push({
  name: 'Hiking Kit',
  price: 85.99,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProductsList(productsArray) {
  for (const product of productsArray) {
    const { name, price, image } = product;

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    productCard.innerHTML = `
      <img src= ${image}>
      <div class="product-info">
        <div>
          <p>$${price}</p>
          <p>${name}</p>
        </div>
        <figure>
          <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
      </div>
  `;

    productsContainer.appendChild(productCard);
  }
}

renderProductsList(productsArray);
