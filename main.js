const  menuEmail = document.querySelector(".navbar-email");
const  desktopMenu = document.querySelector(".desktop-menu");
const  hamburger = document.querySelector(".hamburger");
const  menuMobile = document.querySelector(".mobile-menu");
const  menuCarrito = document.querySelector(".navbar-shopping-cart");
const  aside = document.querySelector(".product-detail");

const cardsContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('.product-detail2');

const productDetailClose = document.querySelector('.product-detail-close');

//  chiquito
menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    productDetail.classList.add("inactive")
    aside.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}
// ham
hamburger.addEventListener('click', toggleMovileMenu)

function toggleMovileMenu() {
    productDetail.classList.add("inactive")
    aside.classList.add('inactive');
    menuMobile.classList.toggle('inactive');
}
// carrito
menuCarrito.addEventListener('click', toggleMovileCarrito)

function toggleMovileCarrito() {
    productDetail.classList.add("inactive")
    menuMobile.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    aside.classList.toggle('inactive');
}
// click producto abrir
function openProductdetail() {
    desktopMenu.classList.add('inactive');
    aside.classList.add('inactive');
    productDetail.classList.remove("inactive")
}
// click producto cerrar
productDetailClose.addEventListener('click', cerrar);
function cerrar() {
    productDetail.classList.add("inactive")
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
    productImg.addEventListener("click", openProductdetail)
  
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
