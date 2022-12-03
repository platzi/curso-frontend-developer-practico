const navbarClient = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
const navbarCarrito = document.querySelector('.navbar-shopping-cart');
const detalleProduct = document.querySelector('#shoppingCartContainer');
const productDetailAside = document.querySelector('#productDetail');
const productDetailClosed = document.querySelector('.product-detail-close')

const containerCards = document.querySelector('.cards-container');

navbarClient.addEventListener('click', mostrarMenu);
function mostrarMenu() {
  const isMenuPerfilClosed = detalleProduct.classList.contains('inactive');

  if(!isMenuPerfilClosed) {
    detalleProduct.classList.add('inactive');
  }
  desktopMenu.classList.toggle('inactive');
}


burgerMenu.addEventListener('click', toggleMenuMobile);
function toggleMenuMobile(){
  const isCarritoClosed = detalleProduct.classList.contains('inactive');
  if(!isCarritoClosed) {
    detalleProduct.classList.add('inactive');
  }
  menuMobile.classList.toggle('inactive');
}


navbarCarrito.addEventListener('click', toggleMenuCarrito);
function toggleMenuCarrito(){
  const isMenuBurgerClosed = menuMobile.classList.contains('inactive');
  const isProductDetailClosed = productDetailAside.classList.contains('inactive');

  if(!isMenuBurgerClosed) {
    menuMobile.classList.add('inactive')
  }
  detalleProduct.classList.toggle('inactive');

  if(!isProductDetailClosed) {
    productDetailAside.classList.add('inactive');
  }
}

productDetailClosed.addEventListener('click', closeProductDetail);
function closeProductDetail() {
  productDetailAside.classList.add('inactive');
}

function openProductDetailAside() {
  productDetailAside.classList.remove('inactive');
}

const productList = [];

productList.push({
  name: 'Bicicleta',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Monopatin',
  price: 320,
  image: 'https://i0.wp.com/mundobike.com.ar/wp-content/uploads/2021/07/1005958-2-.jpg?fit=1400%2C927&ssl=1?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Skate',
  price: 185,
  image: 'https://i0.wp.com/www.additudemag.com/wp-content/uploads/2020/08/GettyImages-1183539628-e1597698840479.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProduct(arr) {

  for( products of arr ) {
  
    const productoCard = document.createElement('div');
    productoCard.classList.add('product-card');
    
  
    const img = document.createElement('img');
    img.setAttribute('src', products.image);
    img.addEventListener('click', openProductDetailAside);
  
    const prodInfo = document.createElement('div');
    prodInfo.classList.add('product-info');
  
    productoCard.appendChild(img);
    productoCard.appendChild(prodInfo);
    
    const prodDato = document.createElement('div');
    const dataPrice = document.createElement('p');
    dataPrice.innerHTML = '$' + products.price;
    const dataName = document.createElement('p');
    dataName.innerHTML = products.name;
  
    prodInfo.appendChild(prodDato);
    prodDato.appendChild(dataPrice);
    prodDato.appendChild(dataName);
  
    const prodFigure = document.createElement('figure');
    const prodImgCart = document.createElement('img');
    prodImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    prodInfo.appendChild(prodFigure);
    prodFigure.appendChild(prodImgCart);
  
    containerCards.appendChild(productoCard);
  
  }

};

renderProduct(productList);
