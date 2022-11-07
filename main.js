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
shoppingCartContainer.addEventListener('click', toggleMobileMenu);
productDetailCloseIcon.addEventListener ('click', CloseProductDetailAside)


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
    CloseProductDetailAside();
    mobileMenu.classList.toggle('inactive');
}
  
function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isMobileMenuDesktop = desktopMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {
      mobileMenu.classList.add('inactive'); 
    }
    if (!isMobileMenuDesktop){
        desktopMenu.classList.toggle('inactive');
    }
    if (!isProductDetailClosed){
      productDetailContainer.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');    
}

function openProductDetailAside(){
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');
}

function CloseProductDetailAside(){
  productDetailContainer.classList.add('inactive');  
}

const productList = [];
productList.push({
  name: 'Bike',
  price: 120.000,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
  name: 'Pantalla',
  price: 200.000,
  image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
})
productList.push({
  name: 'Tablet',
  price: 320.000,
  image: 'https://images.pexels.com/photos/2070069/pexels-photo-2070069.jpeg?cs=srgb&dl=pexels-stefan-coders-2070069.jpg&fm=jpg&_gl=1*1xjg7l7*_ga*MTY1NTk1MDc2Mi4xNjY3ODMxODkz*_ga_8JE65Q40S6*MTY2NzgzMTg5My4xLjEuMTY2NzgzMTk3NC4wLjAuMA'
})
productList.push({
  name: 'Maleta',
  price: 100.000,
  image: 'https://images.pexels.com/photos/2646521/pexels-photo-2646521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
})
productList.push({
  name: 'Casco',
  price: 800.000,
  image: 'https://images.pexels.com/photos/3302039/pexels-photo-3302039.jpeg?auto=compress&cs=tinysrgb&w=600'
})


function RenderProducts (arr){
  
  for (product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    const productImg = document.createElement('img');
    productImg.setAttribute('src',product.image);
    productImg.addEventListener('click',openProductDetailAside)
    
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
    const productImgCart = document.createElement('img')
    productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.append(productImg,productInfo )
  
    cardsContainer.appendChild(productCard)
  
  }

}

RenderProducts(productList);