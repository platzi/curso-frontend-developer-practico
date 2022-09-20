const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const productDetailImg = document.querySelector('#productDetail > img')
const productDetailPrice = document.querySelector('.product-info p:nth-child(1)')
const productDetailName = document.querySelector('.product-info p:nth-child(2)')
const productDetailDescription = document.querySelector('.product-info p:nth-child(3)')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetail)

function toggleDesktopMenu() {
  shoppingCartContainer.classList.add('inactive');
  productDetail.classList.add('inactive');
  desktopMenu.classList.toggle('inactive');
};
function toggleMobileMenu() {
  shoppingCartContainer.classList.add('inactive');
  productDetail.classList.add('inactive');
  mobileMenu.classList.toggle('inactive');
  // if (!shoppingCartContainer.classList.contains('inactive')) {
  //   shoppingCartContainer.classList.add('inactive')
  // }
};
function toggleCarritoAside() {
  // const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  // if (!isMobileMenuClosed) {
  //   mobileMenu.classList.add('inactive')
  // }
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  productDetail.classList.add('inactive');
  shoppingCartContainer.classList.toggle('inactive');
};

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'
});
productList.push({
  name: 'Pantalla',
  price: 220,
  image: 'https://static.vecteezy.com/system/resources/previews/002/073/807/large_2x/red-retro-tv-isolated-on-a-white-background-free-photo.jpg',
  description: 'Rare space age vintage television, collectible tv raritiy. Made in Hungary, Europe in the late 1970s.  Very neat, unique space-age design piece.'
});
productList.push({
  name: 'Mirror',
  price: 150,
  image: 'https://ripleype.imgix.net/https%3A%2F%2Fs3.amazonaws.com%2Fimagenes-sellers-mercado-ripley%2F2021%2F08%2F29201253%2F1-14.jpg?w=750&h=555&ch=Width&auto=format&cs=strip&bg=FFFFFF&q=60&trimcolor=FFFFFF&trim=color&fit=fillmax&ixlib=js-1.1.0&s=ac896d5c69d42958506df9e07b2ab316',
  description: 'A handcrafted mirror of art inspired by the sun where they shines radiantly, illuminating the home with rays of light. Spectacular mirror in hand-carved mohena wood with small mirrors incrustations, covered in silver leaf. '
});

function buildProductDetail(product) {
  productDetailImg.setAttribute('src', product.image)
  productDetailPrice.innerText = '$'+product.price
  productDetailName.innerText = product.name
  productDetailDescription.innerText = product.description
}

function renderProducts(array) {
  for (const product of array) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.innerText = '$'+product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.append(productPrice, productName);
  
    const productInfoFigure = document.createElement('figure');
    const productImgCard = document.createElement('img');
    productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCard);
  
    productInfo.append(productInfoDiv, productInfoFigure)
    productCard.append(productImg, productInfo);
    cardsContainer.appendChild(productCard);

    productImg.addEventListener('click', function(){
      buildProductDetail(product);
      showProductDetail();
    });
  }
}

function showProductDetail() {
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  productDetail.classList.add('inactive');
  shoppingCartContainer.classList.add('inactive');
  productDetail.classList.remove('inactive')
}

function closeProductDetail() {
  productDetail.classList.add('inactive')
}

renderProducts(productList)