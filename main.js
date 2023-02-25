const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const cardsContainer = document.querySelector('.cards-container')

const productDetailCloseIcon = document.querySelector('.product-detail-close')
const productDetailContainer = document.querySelector('#productDetail');

menuEmail.addEventListener('click', function() {
  const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
  const productDetailContainerClosed = productDetailContainer.classList.contains('inactive');

  if(!isShoppingCartContainerClosed) {
    shoppingCartContainer.classList.add('inactive')
  }
  if(!productDetailContainerClosed) {
    productDetailContainer.classList.add('inactive')
  }

  desktopMenu.classList.toggle('inactive')
})

menuHamIcon.addEventListener('click', function() {
  const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
  const isProdcutDetailClosed = productDetailContainer.classList.contains('inactive');


  if(!isshoppingCartContainerClosed) {
    shoppingCartContainer.classList.add('inactive')
  }

  if(!isProdcutDetailClosed) {
    productDetailContainer.classList.add('inactive')
  }

  mobileMenu.classList.toggle('inactive')
})

menuCarritoIcon.addEventListener('click', function() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
  const isProdcutDetailClosed = productDetailContainer.classList.contains('inactive');

  if(!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive')
  }

  // Do it for me

  if(!isDesktopMenuClosed) {
    desktopMenu.classList.add('inactive')
  }

  if(!isProdcutDetailClosed) {
    productDetailContainer.classList.add('inactive')
  }
  

  shoppingCartContainer.classList.toggle('inactive')

})

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Pantalla',
  price: 220,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Compu',
  price: 620,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Pantalla',
  price: 220,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Compu',
  price: 620,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts(products) {
  for (product of products) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card')
  
    const productImg = document.createElement('img');
    // img.setAttribute('src', product.image)
    productImg.addEventListener('click', function () {
      const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
      const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
      const isMobileMenuClosed = mobileMenu.classList.contains('inactive')

      if(!isShoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive')
      }

      if(!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive')
      }

      if(!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
      }

      productDetailContainer.classList.remove('inactive')
    })

    productDetailCloseIcon.addEventListener('click', function() {
      productDetailContainer.classList.add('inactive')
    })

    productImg.src = product.image;
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv =  document.createElement('div');
  
    const productPrice =  document.createElement('p');
    productPrice.innerText = ` $ ${product.price}`
  
    const productName =  document.createElement('p');
    productName.innerText = `${product.name}`
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure =  document.createElement('figure');
  
  
    const productImgCart =  document.createElement('img');
    productImgCart.src = './icons/bt_add_to_cart.svg';
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList)