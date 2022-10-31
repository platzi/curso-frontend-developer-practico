const email = document.querySelector(".navbar-email");
const menuDesktop = document.querySelector(".desktop-menu");
const mobilMenu = document.querySelector(".mobile-menu");
const menuHamlist = document.querySelector(".menu");
const Car = document.querySelector(".navbar-shopping-cart");
const ShoppingCar = document.querySelector(".product-detail");
const cardsContainer = document.querySelector('.cards-container')
const productDetailContainer = document.querySelector('#product-detail')
const IconClose = document.querySelector('#product-detail-close')

IconClose.addEventListener('click', closeShopingCar)
email.addEventListener('click', toggleDesktopMenu);
menuHamlist.addEventListener('click',toggleMobilMenu);
Car.addEventListener('click', toggleShoppingCar);

function toggleDesktopMenu(){
    const isProducDetail = productDetailContainer.classList.contains('inactive')
    const isCarClosed = ShoppingCar.classList.contains('inactive')
    if(!isCarClosed){
        ShoppingCar.classList.add('inactive')
    }
    if(!isProducDetail){
      productDetailContainer.classList.add('inactive');
    }
    menuDesktop.classList.toggle('inactive');
}

function toggleMobilMenu(){
    const isCarClosed = ShoppingCar.classList.contains('inactive');
    if(!isCarClosed){
        ShoppingCar.classList.add('inactive');
    }
    mobilMenu.classList.toggle('inactive');
    
}

function toggleShoppingCar(){
    const isProducDetail = productDetailContainer.classList.contains('inactive')
    const isMobilmMenuClosed = mobilMenu.classList.contains('inactive');
    const isDesktopMenu=menuDesktop.classList.contains('inactive');
    //ShoppingCar.classList.toggle('inactive');
    if(!isMobilmMenuClosed){
        mobilMenu.classList.add('inactive');
    }
    if(!isDesktopMenu){
        menuDesktop.classList.add('inactive');
    }
    if(!isProducDetail){
      productDetailContainer.classList.add('inactive');
    }
    ShoppingCar.classList.toggle('inactive');
}

/*Lista de productos*/
//Node.appendChild() sirve para llamr varios nodos de html

function openProductDetail(){
  const isDesktopMenu=menuDesktop.classList.contains('inactive');
  const isShopingCar =ShoppingCar.classList.contains('inactive');
  if(!isDesktopMenu){
    menuDesktop.classList.add('inactive');
  }
  if(!isShopingCar){
    ShoppingCar.classList.add('inactive');
  }

  productDetailContainer.classList.remove('inactive')
}

function closeShopingCar(){
  
  

  productDetailContainer.classList.add('inactive')
}

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Pantalla',
  price: 220,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Compu',
  price: 620,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetail);
  
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
