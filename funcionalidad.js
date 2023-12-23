const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const HamburgerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const CarritoIcon = document.querySelector('.navbar-shopping-cart');
const detalleDeProductos = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
HamburgerIcon.addEventListener('click', toggleHamburgerIcon);
CarritoIcon.addEventListener('click', toggleCarritoIcon);

// toggle = intercabiar
// remove elimina y toggle es un switf de true o false
function toggleDesktopMenu() {
  // const isDetalleProducClosed = detalleDeProductos.classList.contains('inactive');
  // if (!isDetalleProducClosed) {
  //   detalleDeProductos.classList.add('inactive');
  // }
  desktopMenu.classList.toggle('inactive');
  detalleDeProductos.classList.add('inactive');
}
function toggleHamburgerIcon() {
  // const isDetalleProducClosed = detalleDeProductos.classList.contains('inactive');
  // if (!isDetalleProducClosed) {
  //   detalleDeProductos.classList.add('inactive');
  // }
  mobileMenu.classList.toggle('inactive');
  detalleDeProductos.classList.add('inactive');
}
function toggleCarritoIcon() {

  // const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  // if (!isMobileMenuClosed) {
  //   mobileMenu.classList.add('inactive');
  // }
  detalleDeProductos.classList.toggle('inactive');
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');

}

const productList = [];
function addProduct(name, price, img) {
  productList.push({
    name: name,
    price: price,
    img: img
  });
}
addProduct('Suzuki Swift', 20, 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
addProduct('Hyundai H-1', 20, 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
addProduct('Clase S', 80, 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
addProduct('Lobo Raptor', 50, 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');


renderProducts(productList);
function renderProducts(arr) {
  for (const product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    // product = {name, price, imagen} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.img);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.append(productPrice, productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);

    productInfo.append(productInfoDiv, productInfoFigure);

    productCard.append(productImg, productInfo);


    cardsContainer.appendChild(productCard);


  }
}