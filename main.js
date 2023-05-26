const menuEmail = document.querySelector('.navbar-email');
const hamIconMenu = document.querySelector('.menu');
const desktopMenu = document.querySelector('.desktop-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart')
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const cardContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
hamIconMenu.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleCarritoshoppingCartContainer);

function toggleDesktopMenu(){
    if(document.querySelector('#productDetail')){
      document.querySelector('#productDetail').remove()
    }
  shoppingCartContainer.classList.add('inactive')

  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
  if(document.querySelector('#productDetail')){
    document.querySelector('#productDetail').remove()
  }
  shoppingCartContainer.classList.add('inactive')
  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoshoppingCartContainer(){
  if(document.querySelector('#productDetail')){
    document.querySelector('#productDetail').remove()
  }
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
  shoppingCartContainer.classList.toggle('inactive')
}

function openProductDetail(evento){

  if(!document.querySelector('#productDetail')){
    renderProductDetail(evento.target.parentNode);
    shoppingCartContainer.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive')
  }
}

function closeProductDetail(){
  productDetail.remove()
}

const productList = [];

productList.push({
  name: "Bike",
  price: 120,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
  name: "Pantalla",
  price: 220,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
  name: "Desktop",
  price: 1020,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});


function renderProducts(arr){
  for(product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetail)

    const productInfo= document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    const productInfoFigure = document.createElement('figure');
  
    const productInfoFigureImg = document.createElement('img');
    productInfoFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg')
  
  
    productCard.append(productImg , productInfo);
    productInfo.append(productInfoDiv, productInfoFigure);
    productInfoDiv.append(productPrice, productName);
  
    productInfoFigure.appendChild(productInfoFigureImg);
  
    cardContainer.appendChild(productCard)
  }
}

function renderProductDetail(producto){
  const ProductImg = producto.children[0].getAttribute('src')
  const ProductPrice = producto.children[1].children[0].children[0].textContent;
  const ProductName = producto.children[1].children[0].children[1].textContent;

  const productDetail = document.createElement('aside');
  productDetail.setAttribute("id", "productDetail");
  
  const productDetailClose = document.createElement('div');
  productDetailClose.classList.add('product-detail-close')
  productDetailClose.addEventListener('click', closeProductDetail)

  const productDetailCloseImg = document.createElement('img');
  productDetailCloseImg.setAttribute('src', './icons/icon_close.png');
  productDetailCloseImg.setAttribute('alt', 'close');

  const productDetailImg = document.createElement('img');
  productDetailImg.setAttribute('src', ProductImg);
  productDetailImg.setAttribute('alt', ProductName);

  const productInfo = document.createElement('div');
  productInfo.classList.add('product-info');

  const productPrice = document.createElement('p')
  productPrice.innerText = ProductPrice;
  
  const productName = document.createElement('p')
  productName.innerText = ProductName;

  const productAddButton = document.createElement('button');
  productAddButton.innerText = 'Add to cart';
  productAddButton.classList.add('primary-button')
  productAddButton.classList.add('add-to-cart-button')

  const productAddImg = document.createElement('img');
  productAddImg.setAttribute('src', './icons/bt_add_to_cart.svg')
  productAddImg.setAttribute('alt', 'add to cart')


  productDetail.append(productDetailClose, productDetailImg  ,productInfo);
  productDetailClose.append(productDetailCloseImg);
  productInfo.append(productPrice, productName, productAddButton);
  productAddButton.append(productAddImg)


  document.querySelector('.main-container').before(productDetail)

}

renderProducts(productList)