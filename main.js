

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

function toggleMobileMenu() {
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

  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
  
  if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive'); 
  }
  
  shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside(event) {
  displayInfoInProductDetail(event);
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');
};

function displayInfoInProductDetail(event){

  const new_img_product_detail = event.path[0].src;
  const product_info = event.path[1].childNodes[1];

  const price = product_info.querySelector('div p:first-child');
  const name = product_info.querySelector('div p:nth-child(2)');

  const product_detail_img = productDetailContainer.querySelector('img:nth-child(2)');
  product_detail_img.setAttribute('src', new_img_product_detail);
  product_detail_img.setAttribute('alt', name.textContent); //textcontent?

  const product_detail_price = productDetailContainer.querySelector('.product-info p:nth-child(1)');
  product_detail_price.innerText =price.textContent;

  const product_detail_name = productDetailContainer.querySelector('.product-info p:nth-child(2)');
  product_detail_name.innerText = name.textContent;



  //este es el famoso evento donde podemos ver las propiedades de path
  console.log(event)
}
function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive');
}

// const productList = [];
// productList.push({
//   name: 'Bike',
//   price: 120,
//   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
// });
// productList.push({
//   name: 'Pantalla',
//   price: 220,
//   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
// });
// productList.push({
//   name: 'Compu',
//   price: 620,
//   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
// });

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
