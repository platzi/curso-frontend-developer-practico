const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
  const isAsideClosed = aside.classList.contains('inactive');

  if (!isAsideClosed) {
    aside.classList.add('inactive');
  }
  
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains('inactive');

  if (!isAsideClosed) {
    aside.classList.add('inactive'); 
  }
  
  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive'); 
  }
  
  aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Moto Pulsar ns 200',
  price: 2000,
  image: 'https://i.pinimg.com/564x/83/c3/52/83c3524a55a489dc9b835e48b6ce38ed.jpg',
});
productList.push({
  name: 'Computador Acer Aspire 3',
  price: 230,
  image: 'https://i.pinimg.com/564x/4f/e7/f3/4fe7f30dcdf636357962e64f1fd85422.jpg',
});productList.push({
  name: 'Mesa Escritorio',
  price: 180,
  image: 'https://i.pinimg.com/564x/e7/43/f8/e743f826506e8f7e0342e850fc403fad.jpg',
});
productList.push({
  name: 'Silla Gamer',
  price: 2000,
  image: 'https://i.pinimg.com/564x/f6/c9/8e/f6c98ec922bc609e2dce3ac17fd1e7b8.jpg',
});
productList.push({
  name: 'Computador gamer',
  price: 1000,
  image: 'https://i.pinimg.com/564x/8f/de/72/8fde7299be48a98579b9d9e1156a307d.jpg',
});
productList.push({
  name: 'Pantalla para pc gamer',
  price: 800,
  image: 'https://i.pinimg.com/564x/40/00/86/4000862fbcbe3b65b48ab4fd25e5de35.jpg',
});productList.push({
  name: 'Xbox one x',
  price: 120,
  image: 'https://i.pinimg.com/564x/cd/ef/37/cdef37d49df388a45bb1137297b087e0.jpg',
});
productList.push({
  name: 'Moto Dominar 250',
  price: 2500,
  image: 'https://i.pinimg.com/736x/52/19/c9/5219c9a176af6ecbb3bc5ef87a1bfb73.jpg',
});
productList.push({
  name: 'Ponque de cumpleaños',
  price: 10,
  image: 'https://i.pinimg.com/564x/00/1d/d9/001dd9d9f5c835f735360624a2efb116.jpg',
});
function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
  
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