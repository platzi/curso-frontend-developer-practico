const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const HamburgerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const CarritoIcon = document.querySelector('.navbar-shopping-cart');
const detalleDeProductos = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const closePDSecundary = document.querySelector('.product-detail-close-secundary');
const productDetailSecundary = document.querySelector('.product-detail-secundary');

menuEmail.addEventListener('click', toggleDesktopMenu);
HamburgerIcon.addEventListener('click', toggleHamburgerIcon);
CarritoIcon.addEventListener('click', toggleCarritoIcon);
closePDSecundary.addEventListener('click', closePDSecundaryF);

// toggle = intercabiar
// remove elimina y toggle es un switf de true o false
function toggleDesktopMenu() {
  // const isDetalleProducClosed = detalleDeProductos.classList.contains('inactive');
  // if (!isDetalleProducClosed) {
  //   detalleDeProductos.classList.add('inactive');
  // }
  desktopMenu.classList.toggle('inactive');
  detalleDeProductos.classList.add('inactive');
  productDetailSecundary.classList.add('inactive');

}
function toggleHamburgerIcon() {
  // const isDetalleProducClosed = detalleDeProductos.classList.contains('inactive');
  // if (!isDetalleProducClosed) {
  //   detalleDeProductos.classList.add('inactive');
  // }
  mobileMenu.classList.toggle('inactive');
  detalleDeProductos.classList.add('inactive');
  productDetailSecundary.classList.add('inactive');

}
function toggleCarritoIcon() {

  // const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  // if (!isMobileMenuClosed) {
  //   mobileMenu.classList.add('inactive');
  // }
  detalleDeProductos.classList.toggle('inactive');
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  productDetailSecundary.classList.add('inactive');

}
function closePDSecundaryF() {
  productDetailSecundary.classList.toggle('inactive');
  // mobileMenu.classList.add('inactive');
  // desktopMenu.classList.add('inactive');

}
function openPDSecundaryF(event) {
  productDetailSecundary.classList.toggle('inactive');
  detalleDeProductos.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  renderProductSelect(event.target.src)

}

const productList = [];
function addProduct(name, price, img, description) {
  productList.push({
    name: name,
    price: price,
    img: img,
    description: description
  });
}
addProduct('Suzuki Swift', 20, 'https://previews.123rf.com/images/chudtsankov/chudtsankov1005/chudtsankov100500018/6905197-dibujos-animados-el-car%C3%A1cter-n%C3%BAmero-uno.jpg', 'Auto liviano');
addProduct('Hyundai H-1', 20, 'https://c8.alamy.com/compes/2eaht3t/divertido-sonriente-numero-dos-en-estilo-de-dibujos-animados-2eaht3t.jpg', 'Auto de mercancias');
addProduct('Clase S', 80, 'https://thumbs.dreamstime.com/z/divertido-naranja-n%C3%BAmero-tres-personaje-de-dibujos-animados-que-muestra-la-mano-ilustraci%C3%B3n-vectorial-dibujada-aislada-sobre-220165887.jpg', 'Auto de lujo');
addProduct('Lobo Raptor', 50, 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'Camioneta apta para los topes, rompemuelles y pistas de mal estado de Lima');


renderProducts(productList);
function renderProducts(arr) {
  for (const product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.addEventListener('click', openPDSecundaryF);


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
function renderProductSelect(url) {
  let numero = 0;
  for (x in productList) {
    if (productList[x].img === url) {
      numero = x;
    }
  }
  const imgPrincipal = document.querySelector('.asideImg');
  imgPrincipal.setAttribute('src', productList[numero].img);
  imgPrincipal.setAttribute('alt', productList[numero].name);

  const pricePrincipal = document.querySelector('.asidePrice');
  pricePrincipal.innerText = '$' + productList[numero].price;
  const namePrincipal = document.querySelector('.asideName');
  namePrincipal.innerText = productList[numero].name;
  const desPrincipal = document.querySelector('.asideDes');
  desPrincipal.innerText = productList[numero].description;

  // const imagen = document.createElement('img');

  // const divPadre = document.createElement('div');
  // divPadre.classList.add('product-info-secundary');

  // const price = document.createElement('p');
  // price.innerText = '$' + productList[numero].price;
  // const name = document.createElement('p');
  // name.innerText = productList[numero].name;

  // const description = document.createElement('p');
  // description.innerText = productList[numero].description;

  // const boton = document.createElement('button');
  // boton.classList.add('primary-button');
  // boton.classList.add('add-to-cart-button');
  // boton.innerText = 'Add to cart';

  // const imgboton = document.createElement('img');
  // imgboton.setAttribute('src', './icons/bt_add_to_cart.svg');
  // imgboton.setAttribute('alt', 'Add to cart');

  // boton.appendChild(imgboton);
  // divPadre.append(price, name, description, boton);
  // productDetailSecundary.append(imagen, divPadre);
}