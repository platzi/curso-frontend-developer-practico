const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }
  
  desktopMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }

  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
  
  if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive'); 
  }
  
  shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive'); 
    }
    closeProductDetailAside();
    mobileMenu.classList.toggle('inactive');
}

const productList = [];
productList.push({
  name: 'Computadora',
  price: 200.000,
  image: 'https://img.freepik.com/foto-gratis/vista-balanceo-productos-electronicos-podio_23-2150141319.jpg?w=360&t=st=1699230988~exp=1699231588~hmac=dfd23728e98f15a58a4672ee0e02d6608764f43643b22ea112d5be3fc5e71cff',
});
productList.push({
  name: 'Toca discos',
  price: 300.000,
  image: 'https://img.freepik.com/foto-gratis/vista-balanceo-productos-electronicos-podio_23-2150141320.jpg?w=360&t=st=1699231063~exp=1699231663~hmac=29db89f2522628628119f5a77443d0fbcd7ba2ad69e5ebf17d750defce66f2ee',
});
productList.push({
  name: 'Licuadora',
  price: 330.000,
  image: 'https://img.freepik.com/foto-gratis/vista-balanceo-productos-electronicos-podio_23-2150141324.jpg?w=360&t=st=1699231095~exp=1699231695~hmac=751c41d9eebd2a3711421e5743bf800d0abd4f0e13e4985783701f208ccbfa3a',
});
productList.push({
    name: 'Combo tecaldo mause',
    price: 230.000,
    image: 'https://img.freepik.com/foto-gratis/vista-balanceo-productos-electronicos-podio_23-2150141330.jpg?w=360&t=st=1699231104~exp=1699231704~hmac=0a7262b0826482d0a7435e58297a373ae9eb821e798ff37bd3d586b662dc599c',
});
productList.push({
  name: 'Licuadora',
  price: 330.000,
  image: 'https://img.freepik.com/foto-gratis/vista-balanceo-productos-electronicos-podio_23-2150141324.jpg?w=360&t=st=1699231095~exp=1699231695~hmac=751c41d9eebd2a3711421e5743bf800d0abd4f0e13e4985783701f208ccbfa3a',
});
productList.push({
    name: 'Ipad',
    price: 330,
    image: 'https://img.freepik.com/fotos-premium/vista-balanceo-productos-electronicos-podio_23-2150141342.jpg?w=360',
});
productList.push({
  name: 'Placha',
  price: 510.000,
  image: 'https://img.freepik.com/fotos-premium/vista-balanceo-productos-electronicos-podio_23-2150141341.jpg?w=360',
});
productList.push({
    name: 'Impresora',
    price: 890.000,
    image: 'https://img.freepik.com/foto-gratis/vista-balanceo-productos-electronicos-podio_23-2150141334.jpg?w=360&t=st=1699231132~exp=1699231732~hmac=458fe5339784b7f78de300399b3c96ff15a12c149192eb0b1aefeeb4ad243c99',
});
productList.push({
  name: 'Radio',
  price: 640.000,
  image: 'https://img.freepik.com/foto-gratis/vista-balanceo-productos-electronicos-podio_23-2150141339.jpg?w=360&t=st=1699231136~exp=1699231736~hmac=b50aed4b7f872619c8995c53160bf85fce608808e0f2c2e7ea36bce84d9cf916',
});
productList.push({
    name: 'Telefono',
    price: 551,
    image: 'https://img.freepik.com/foto-gratis/vista-balanceo-productos-electronicos-podio_23-2150141321.jpg?w=360&t=st=1699231071~exp=1699231671~hmac=364ad3b63279ae7d1e91eff09c0a80c6793ae13ab47c2387ea968b99ebaefe4c',
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
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