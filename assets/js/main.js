const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const iconMenuMobile = document.querySelector('.menu');
const asideCarMenu = document.querySelector('.product-detail__car');
const iconCar = document.querySelector('.navbar-shopping-cart');
const cardContainer = document.querySelector('.cards-container');
const productDetailAside = document.querySelector('#product-detail__view');
const productDetailAsideClosed = document.querySelector('.product-detail-close')
const mainContainerBody = document.querySelector('.mask');

emailMenu.addEventListener('click', toggleMenuDesktop);
iconMenuMobile.addEventListener('click',toggleMenuMobile );
iconCar.addEventListener('click', toggleMenuCar);
productDetailAsideClosed.addEventListener('click', closedProductDetail);

function toggleMenuDesktop(){
  const isAsideCarMenuClosed = asideCarMenu.classList.contains('inactive')
  const isProductDetail = productDetailAside.classList.contains('inactive');
  desktopMenu.classList.toggle('inactive');
  if(!isAsideCarMenuClosed){
    asideCarMenu.classList.add('inactive')
  }
  
  const isBg = !desktopMenu.classList.contains('inactive')
  if(isBg){
    mainContainerBody.classList.remove('inactive')
  }else{
    mainContainerBody.classList.add('inactive')
  }
  
  if(!isProductDetail){
    productDetailAside.classList.add('inactive')
  }

 
}

function toggleMenuMobile(){
  const isAsideCarMenuClosed = asideCarMenu.classList.contains('inactive');
  mobileMenu.classList.toggle('inactive');
  closedProductDetail();
  if(!isAsideCarMenuClosed){
    asideCarMenu.classList.add('inactive')
  }
  const isBg = !mobileMenu.classList.contains('inactive')
  if(isBg){
    mainContainerBody.classList.remove('inactive')
  }else{
    mainContainerBody.classList.add('inactive')
  }

  
}
function toggleMenuCar(){
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
  const isProductDetail = productDetailAside.classList.contains('inactive');
  asideCarMenu.classList.toggle('inactive');
  
  if(!isMobileMenuClosed){
    mobileMenu.classList.add('inactive')
  }
  if(!isDesktopMenuClosed){
    desktopMenu.classList.add('inactive')
  }
  if(!isProductDetail){
    productDetailAside.classList.add('inactive')
  }
  const isBg = !asideCarMenu.classList.contains('inactive')
  if(isBg){
    mainContainerBody.classList.remove('inactive')
  }else{
    mainContainerBody.classList.add('inactive')
  }
  
}

function openProductDetail(){
  productDetailAside.classList.remove('inactive');
  desktopMenu.classList.add('inactive');
  asideCarMenu.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  mainContainerBody.classList.remove('inactive')
}

function closedProductDetail (){
  productDetailAside.classList.remove('inactive');
  mainContainerBody.classList.add('inactive')
}

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
  name: 'Phone',
  price: 200,
  image: 'https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1719&q=80'
})
productList.push({
  name: 'Computer',
  price: 540,
  image: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80'
})


function renderProduct(arr){
  for(product of arr){
    const productCard = document.createElement('div');
    productCard.setAttribute('class', 'product-card');
    const productImage = document.createElement('img');
    productImage.setAttribute('src',product.image);

    productImage.addEventListener('click', openProductDetail);

    const productCardInfo = document.createElement('div');
    productCardInfo.setAttribute('class', 'product-info');
    const productCardInfoDiv = document.createElement('div');
    const productCardInfoPrice = document.createElement('p');
    productCardInfoPrice.innerText = `$ ${product.price}`;
    const productCardInfoName = document.createElement('p');
    productCardInfoName.innerText = product.name;
    const productCardInfoFigure = document.createElement('figure');
    const productCardInfoIcon = document.createElement('img');
    productCardInfoIcon.setAttribute('src','./icons/bt_add_to_cart.svg');
  
    productCardInfoFigure.append(productCardInfoIcon);
    productCardInfoDiv.append(productCardInfoPrice, productCardInfoName);
    productCardInfo.append(productCardInfoDiv, productCardInfoFigure)
    productCard.append(productImage,productCardInfo);
  
    cardContainer.append(productCard)
  }
}
renderProduct(productList);