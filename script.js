const productsContainer = document.querySelector('.cards-container');

const userAccountLink = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const mobileMenuBtn = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const shoppingCartBtn = document.querySelector('.navbar-shopping-cart');
const shoppingCartMenu = document.querySelector('#shopping-cart');

const closeProductDetailBtn = document.querySelector('.product-detail-close');
closeProductDetailBtn.addEventListener('click', closeProductDetail);

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
productsArray.push({
  name: 'Fishing Kit',
  price: 100.99,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productsArray.push({
  name: 'Hunting Kit',
  price: 500,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productsArray.push({
  name: 'Camping Supplies',
  price: 420,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productsArray.push({
  name: 'P**n',
  price: 69.99,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProductsList(productsArray) {
  for (const product of productsArray) {
    const { name, price, image } = product;

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const imgProduct = document.createElement('img');
    imgProduct.setAttribute('src', `${image}`);

    const divProductInfo = document.createElement('div');
    divProductInfo.classList.add('product-info');

    const divChildProductInfo = document.createElement('div');
    const productName = document.createElement('p');
    productName.textContent = `${name}`;
    const productPrice = document.createElement('p');
    productPrice.textContent = `$${price}`;

    const fig = document.createElement('figure');
    const addBtnIcon = document.createElement('img');
    addBtnIcon.setAttribute('src', './icons/bt_add_to_cart.svg');

    fig.appendChild(addBtnIcon);
    divChildProductInfo.appendChild(productName);
    divChildProductInfo.appendChild(productPrice);
    divProductInfo.appendChild(divChildProductInfo);
    divProductInfo.appendChild(fig);
    productCard.appendChild(imgProduct);
    productCard.appendChild(divProductInfo);

    //   productCard.innerHTML = `
    //     <img src= ${image}>
    //     <div class="product-info">
    //       <div>
    //         <p>$${price}</p>
    //         <p>${name}</p>
    //       </div>
    //       <figure>
    //         <img src="./icons/bt_add_to_cart.svg" alt="">
    //       </figure>
    //     </div>
    // `;
    //Arreglar esto. Cada elemento debe ser creado individualmente para q funcionen los botones y enlaces

    productsContainer.appendChild(productCard);
  }
}

renderProductsList(productsArray);

const productImage = document.querySelectorAll('.product-card > img');
productImage.forEach((image, index) => {
  //anonymous function capsulating the event handler to pass parameters to an event listener
  image.addEventListener('click', () => {
    showProductDetail(index);
  });
});

function showProductDetail(index) {
  const productDetailComponent = document.querySelector('#product-detail');
  productDetailComponent.classList.toggle('inactive');

  // const imgSelected = productsArray[index];
  // console.log(imgSelected);
  const { image, name, price } = productsArray[index];

  const productDetailImage = document.querySelector('#product-detail > img');
  productDetailImage.setAttribute('src', `${image}`);

  const porductDetailPrice = document.querySelector('.product-info p:nth-child(1)');
  porductDetailPrice.textContent = `$${price}`;

  const porductDetailName = document.querySelector('.product-info p:nth-child(2)');
  porductDetailName.textContent = `$${name}`;
}

function closeProductDetail() {
  const productDetailPopup = document.querySelector('#product-detail');
  productDetailPopup.classList.add('inactive');
}
