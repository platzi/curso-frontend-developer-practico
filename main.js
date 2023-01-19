const menuEmail = document.querySelector('.navbar-email');
const DesktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const productCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#product-detail");
const cardsContainer = document.querySelector(".cards-container");


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleAsideCart);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside); 


function toggleDesktopMenu(){
  const isAsideClosed = productCartContainer.classList.contains('inactive');
  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

  if(!isAsideClosed){
    productCartContainer.classList.toggle('inactive');
  }

  if(!isProductDetailClosed){
    productDetailContainer.classList.toggle('inactive');
  }

  DesktopMenu.classList.toggle('inactive');
}


function toggleMobileMenu(){

  const isAsideClosed = productCartContainer.classList.contains('inactive');

  if(!isAsideClosed){
    productCartContainer.classList.toggle('inactive');
  }

  closeProductDetailAside();

  mobileMenu.classList.toggle('inactive');
}


function toggleAsideCart(){
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isDesktopMenuclosed = DesktopMenu.classList.contains('inactive');
  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

  if(!isDesktopMenuclosed){
    DesktopMenu.classList.toggle('inactive');
  }
  
  if(!isMobileMenuClosed){
    mobileMenu.classList.toggle('inactive');
  }

  if(!isProductDetailClosed){
    productDetailContainer.classList.toggle('inactive');
  }

  productCartContainer.classList.toggle('inactive');
}

function openProductDetailAside(){

  productCartContainer.classList.add('inactive');

  DesktopMenu.classList.add('inactive');

  productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
  productDetailContainer.classList.add('inactive');
}


const productList=[];

productList.push({
  name:'bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
  name:'pantlla',
  price: 360,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
  name:'computador',
  price: 500,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});


function renderProducts(arr){
  for(product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const ProductImg = document.createElement('img');
    ProductImg.setAttribute('src', product.image);
    ProductImg.addEventListener("click", openProductDetailAside);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv =  document.createElement('div');

    const productPrice =  document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName =  document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCard = document.createElement('img');
    productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCard);
    
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(ProductImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
};

renderProducts(productList);