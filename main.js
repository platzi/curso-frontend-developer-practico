const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCarContainer = document.querySelector('#shoppingCarContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');



menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);


function toggleDesktopMenu() {
  const isAsideClosed = shoppingCarContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCarContainer.classList.add('inactive');
  }
  
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  shoppingCarContainer.classList.add('inactive')
  const isAsideClosed = shoppingCarContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCarContainer.classList.add('inactive'); 
  }
  
  closeProductDetailAside()

  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
  
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive'); 
  }

  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add('inactive'); 
  }

  if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive'); 
  }
  
  shoppingCarContainer.classList.toggle('inactive');
}

function openProductDetailAside(id){
  productDetailContainer.innerHTML = ''
  shoppingCarContainer.classList.add('inactive')
  productDetailContainer.classList.remove('inactive')
  const productSearch = productList.find(product => product.id == id);

  const productDetailAs = document.createElement('div');
  productDetailAs.classList.add('product-detail-close');

  if (productDetailAs){
    productDetailAs.addEventListener('click', closeProductDetailAside)
  }

  const productInfoFigure2 = document.createElement('figure');
  const productImgCart2 = document.createElement('img');
  productImgCart2.setAttribute('src', './icons/icon_close.png');

  productInfoFigure2.appendChild(productImgCart2);
  productDetailAs.appendChild(productInfoFigure2);

  /*second part*/
  const productImg = document.createElement('img');
  productImg.setAttribute('src', productSearch.image);

  /*third part */
  const productInfo = document.createElement('div');
  productInfo.classList.add('product-info');

  const productPrice = document.createElement('p');
  productPrice.innerText = '$' + productSearch.price;
  const productName = document.createElement('p');
  productName.innerText = productSearch.name;
  const productDescription = document.createElement('p');
  productDescription.innerText = productSearch.description;

  productInfo.append(productPrice,productName,productDescription)

  /*button */
  const productButton = document.createElement('button');
  productButton.classList.add('primary-button');
  productButton.classList.add('add-to-cart-button');
  const productBtnFigure = document.createElement('figure');
  const productImgCartBtn = document.createElement('img');
  productImgCartBtn.setAttribute('src', './icons/bt_add_to_cart.svg');
  const textBtn = document.createElement('p')
  textBtn.innerText = 'Add to cart';


  productButton.append(productImgCartBtn,textBtn)


  productDetailContainer.append(productDetailAs,productImg,productInfo,productButton);
  // 

}

function closeProductDetailAside(){
  productDetailContainer.classList.add('inactive')
}

const productList = [];
productList.push({
  id: 1,
  name: 'Bike',
  price: 120,
  description : 'This is a description of Bike',
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  id: 2,
  name: 'Pantalla',
  price: 220,
  description : 'This is a description of Screen',
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  id: 3,
  name: 'Compu',
  price: 620,
  description : 'This is a description of Compu',
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    const id = product.id;
    productImg.addEventListener('click', () => openProductDetailAside(id));
    console.log(id)
  
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

