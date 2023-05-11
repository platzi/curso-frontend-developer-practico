const menuEmailIcon = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const cardsContainer = document.querySelector('.cards-container');
const btnClose = document.querySelector('.product-secundary-close');
//apariciones
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const productSecundary = document.querySelector('.product-secundary');

//MENU DESKTOP
menuEmailIcon.addEventListener('click', showDesktopMenu);

function showDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
  aside.classList.add('inactive')
}
//MOBILE MENU
menuHamIcon.addEventListener('click', showMobileMenu);

function showMobileMenu() {
  mobileMenu.classList.toggle('inactive');
  aside.classList.add('inactive')
  productSecundary.classList.add('inactive')
}
//ASIDE CARRITO
menuCarritoIcon.addEventListener('click', showCarritoAside);

function showCarritoAside() {
  aside.classList.toggle('inactive')
  desktopMenu.classList.add('inactive')
  mobileMenu.classList.add('inactive')
  productSecundary.classList.add('inactive')
}

//ASIDE SECUNDARY
cardsContainer.addEventListener('click', showAsideSecundary);

function showAsideSecundary(){
  productSecundary.classList.remove('inactive')
  aside.classList.add('inactive')
  mobileMenu.classList.add('inactive')
}

//BTN CLOSE SECUNDARY
btnClose.addEventListener( 'click',closeAsideSecundary );

function closeAsideSecundary(){
  productSecundary.classList.add('inactive')
}

const productList = [];
productList.push({
  name: "Bike",
  price: "120",
  img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})
productList.push({
  name: "Pantalla",
  price: "220",
  img: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})
productList.push({
  name: "auto",
  price: "1020",
  img: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
})

function renderProdcuts(arr){
  for(product of arr){
  const productCard = document.createElement( 'div' );
  productCard.classList.add( 'product-card' )
  const productImage = document.createElement( 'img' );
  productImage.setAttribute( 'src' , product.img );

  const productInfo = document.createElement( 'div' );
  productInfo.classList.add( 'product-info' );
  
  const divProductInfo = document.createElement( 'div' );
  
  const parrafoPrice = document.createElement('p');
  parrafoPrice.innerText = '$' + product.price 
  const parrafoName = document.createElement( 'p' );
  

  const figure = document.createElement( 'figure' );
  const imgFigure = document.createElement( 'img' )
  imgFigure.setAttribute('src','./icons/bt_add_to_cart.svg')

  parrafoName.innerText = product.name ;
  
  divProductInfo.append( parrafoName, parrafoPrice )

  figure.append(imgFigure);

  productInfo.append(divProductInfo, figure);

  productCard.append( productImage , productInfo );

  cardsContainer.append(productCard);
}

}

renderProdcuts(productList)
