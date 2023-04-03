const $menuEmail = document.querySelector('.navbar-email');
const $desktopMenu = document.querySelector('.desktop-menu');
const $cartShopping = document.querySelector('.navbar-shopping-cart');
const $aside = document.querySelector('.product-detail');
const $iconMenu = document.querySelector('.iconMenu');
const $mobileMenu = document.querySelector('.mobile-menu');
const $cardContainer = document.querySelector('.cards-container');





$menuEmail.addEventListener('click', toggleDesktopMenu);
$iconMenu.addEventListener('click', toggleMobileMenu);
$cartShopping.addEventListener('click', toggleCartShopping);

function toggleDesktopMenu(){

  const isAsideClosed = $aside.classList.contains('inactive');
  if(!isAsideClosed){
    $aside.classList.add('inactive');
  }
  $desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
  const isAsideClosed = $aside.classList.contains('inactive');
  if(!isAsideClosed){
    $aside.classList.add('inactive');
  }
  $mobileMenu.classList.toggle('inactive');
}

function toggleCartShopping(){
  const isMobileMenuClosed = $mobileMenu.classList.contains('inactive');
  
  if(!isMobileMenuClosed){
    $mobileMenu.classList.add('inactive');
  }

  $aside.classList.toggle('inactive');
  
}


const productList = [];
productList.push({
  name: 'Cicla',
  price: '400.000',
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Cicla mas barata',
  price: '200.000',
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Cicla mas cara',
  price: '900.000',
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


function renderProduct(){
  for (product of productList){
    const fragment = document.createDocumentFragment();
  
    const $productCard = document.createElement('div');
    $productCard.classList.add('product-card');
  
    const $productImg = document.createElement('img');
    $productImg.setAttribute('src',product.image);
    $productImg.setAttribute('alt', product.name);
    $productCard.appendChild($productImg);
  
    const $productInfo = document.createElement('div');
    $productInfo.classList.add('product-info');
  
    const $div = document.createElement('div');
    const $price = document.createElement('p');
    $price.textContent = '$'+product.price;
    const $name = document.createElement('p');
    $name.textContent = product.name;
  
    $div.append($price, $name);
    $productInfo.appendChild($div)
  
    const $figure = document.createElement('figure');
    const $iconCart = document.createElement('img');
    $iconCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    $iconCart.setAttribute('alt', 'Icono carrito compra');
  
    $figure.appendChild($iconCart);
    $productInfo.appendChild($figure);
    $productCard.appendChild($productInfo);
    fragment.appendChild($productCard);
  
    $cardContainer.appendChild(fragment)
  }
}

renderProduct()
