const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burggerMenu =  document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.order-detail-car');


menuEmail.addEventListener("click", toggleDesktopMenu);
burggerMenu.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritosAside);

function toggleDesktopMenu(){
  const isAsideClosed = aside.classList.contains('inactive')

  if(!isAsideClosed){
    aside.classList.add('inactive')
  }

  desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu(){
  const isAsideClosed = aside.classList.contains('inactive')
  
  if(!isAsideClosed){
    aside.classList.add('inactive')
  }

  mobileMenu.classList.toggle('inactive')
}

function toggleCarritosAside(){
    //pregunatamos si la const mobilemenu tien la clase inactive
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    //preguntamos si la clase ismobilemenu no esta cerrado le agregue la clase inactive
    if(!isMobileMenuClosed){
      mobileMenu.classList.add('inactive');
    }
  aside.classList.toggle('inactive');
}

//creamos un array que almacenara unos objetos y apartir de esos objetos creamos los productos
const productList = [];
productList.push({
  name: 'bike',
  price: 120,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push({
  name: 'PC',
  price: 120,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push({
  name: 'TV',
  price: 120,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})


const cartContainer = document.querySelector('.cards-container');

//recorrer el array productList
function renderProducts(arr) {
  for (const product of arr) {
    //crear los elementos
    const productCart = document.createElement('div');
    productCart.classList.add('product-card');
  
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
  
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
  
    //meter las etiquetas dentro de sus contenedores
  
    productInfoFigure.appendChild(productImgCart);
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    productCart.appendChild(productImg);
    productCart.appendChild(productInfo);
  
    cartContainer.appendChild(productCart);
  
  
  }
}

renderProducts(productList);
