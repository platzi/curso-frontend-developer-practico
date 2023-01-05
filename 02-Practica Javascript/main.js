const navbarClient = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
const navbarCarrito = document.querySelector('.navbar-shopping-cart');
const detalleProduct = document.querySelector('#shoppingCartContainer');
const productDetailAside = document.querySelector('#productDetail');
const productDetailClosed = document.querySelector('.product-detail-close')

const containBicicletas = document.getElementById('containBicicletas');

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



const producBicicletas = [];

producBicicletas.push({
  name: 'SLP Verde',
  price: 1500,
  image: 'https://www.heavenimagenes.com/heavencommerce/68ac9d04-8767-4aca-9951-49f2fea1383b/images/v2/SLP/2101281456372735_02_medium.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
producBicicletas.push({
  name: 'SLP Roja-amarilla',
  price: 1500,
  image: 'https://http2.mlstatic.com/D_NQ_NP_879307-MLA44935850522_022021-O.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
producBicicletas.push({
  name: 'SLP Roja',
  price: 1500,
  image: 'https://http2.mlstatic.com/D_NQ_NP_603822-MLA45015488796_022021-O.webp?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

function openContainCardBicicletas(arr) {
  for( prodBici of arr ) {
    const productoCard = document.createElement('div');
    productoCard.classList.add('product-card');
    
  
    const img = document.createElement('img');
    img.setAttribute('src', prodBici.image);
    img.addEventListener('click', openProductDetailAside);
  
    const prodInfo = document.createElement('div');
    prodInfo.classList.add('product-info');
  
    productoCard.appendChild(img);
    productoCard.appendChild(prodInfo);
    
    const prodDato = document.createElement('div');
    const dataPrice = document.createElement('p');
    dataPrice.innerHTML = '$' + prodBici.price;
    const dataName = document.createElement('p');
    dataName.innerHTML = prodBici.name;
  
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
}
containBicicletas.addEventListener('click', openContainCardBicicletas);

if(openContainCardBicicletas(producBicicletas)) {
  openContainCardBicicletas(producBicicletas)
}

// COMPORTAMIENTO DEL CARRITO CONTADOR
const agregarCarrito = document.getElementById('agregarCarrito');
let sumaCarrito = document.getElementById('carritoSuma');

agregarCarrito.addEventListener('click', sumarProducto);
function sumarProducto() {
  sumaCarrito = 0
    for(let i = 0; i <= sumaCarrito; i++){
      sumaCarrito.innerHTML = sumaCarrito[i];
    }
  }

