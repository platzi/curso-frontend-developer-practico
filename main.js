const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const ProductDetailCloseIcon = document.querySelector('.product-detail-close');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const ProductDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
ProductDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }
  
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {      //si esta abierto el menu se ciera el carrito y al revez
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive'); 
  }

  closeProductDetailAside();

  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive'); 
  }

  const isProductDetailClosed = ProductDetailContainer.classList.contains('inactive');
 
  if (!isProductDetailClosed) {
    ProductDetailContainer.classList.add('inactive'); 
  }
  
  shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside(){
  shoppingCartContainer.classList.add('inactive');
  ProductDetailContainer.classList.remove('inactive')
}

function closeProductDetailAside(){
  ProductDetailContainer.classList.add('inactive')
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    Image: 'https://images.immediate.co.uk/production/volatile/sites/21/2023/04/Specialized-Turbo-Levo-SL-II-S-Works-68596e8.jpg?quality=90&resize=620%2C413',
});
productList.push({
    name: 'Pantalla',
    price: 220,
    Image: 'https://i.blogs.es/19315c/mejores-monitores-gaming/1366_2000.jpeg',
});
productList.push({
    name: 'Computador',
    price: 620,
    Image: 'https://exitocol.vtexassets.com/arquivos/ids/11640371/computador-pc-de-escritorio-torre-gamer-intel-core-i5-10400-ssd-480gb-ram-16gb-led-22-nvidia-gt-710.jpg?v=637786562419330000',
});
productList.push({
  name: 'Audifonos Gamer',
  price: 50,
  Image: 'https://queimpresion3d.mx/wp-content/uploads/2021/10/Soporte-para-audifonos-Fortnite-Gamer-2.jpg',
});
productList.push({
  name: 'Consola PS5',
  price: 200,
  Image: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2023/04/ps5-3011390.jpg',
});
productList.push({
  name: 'Gafas Realidad Virtual',
  price: 300,
  Image: 'https://cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/EXF2DD2CQZH2XOYGQFYIZICPSE.jpg',
});

function renderProducts(arr){
  for(product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    //produc= {name, price, image} - produc.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.Image);
    productImg.addEventListener('click', openProductDetailAside);

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
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);

     