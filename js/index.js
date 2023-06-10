
const menuEnable = document.querySelector('.navbar-email');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardContainer = document.querySelector('.cards-container');
const openAsideO = document.querySelector('#product-detail');
const openAsideC = document.querySelector('#product-detail-close');


menuEnable.addEventListener('click',()=>{
  aside.classList.add('inactive')
  desktopMenu.classList.toggle('inactive');
  openAsideO.classList.add('inactive')
  
})

burgerMenu.addEventListener('click',()=>{
  const isAsideClose = aside.classList.contains('inactive');  
 if(!isAsideClose){
   aside.classList.add('inactive');
 }
 mobileMenu.classList.toggle('inactive');
 openAsideO.classList.add('inactive');

})

menuCarrito.addEventListener('click',()=>{
  const isMobileMenuClose = mobileMenu.classList.contains('inactive');
  
  if(!isMobileMenuClose){
    // abrir aside
    mobileMenu.classList.add('inactive')
  }
   desktopMenu.classList.add('inactive')
  aside.classList.toggle('inactive')
  openAsideO.classList.add('inactive')

})
openAsideC.addEventListener('click',()=>{
  openAsideO.classList.toggle('inactive')
})

function openAside(){
  openAsideO.classList.toggle('inactive')
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive')
}


const products = [];
products.push({
  name: 'bike',
  precio: '120',
  image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts(arr){
  for(product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click',openAside)
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.precio;
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', '../icons/bt_add_to_cart.svg');
  
    productInfoDiv.append(productPrice, productName);
    productInfoFigure.appendChild(productImgCart);
    productInfo.append(productInfoFigure, productInfoDiv);
    productCard.append(productImg,productInfo);
    cardContainer.appendChild(productCard);


  }
  
}

renderProducts(products);
renderProducts(products);
renderProducts(products);
renderProducts(products);
renderProducts(products);



