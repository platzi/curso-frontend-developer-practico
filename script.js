const nav_email = document.querySelector(`.navbar-email`);
const desktopMenu = document.querySelector(`.desktop-menu`);
const menuHamIcon = document.querySelector(`.menu`);
const mobileMenu = document.querySelector(`.mobile-menu`);
const menuCarIcon = document.querySelector(`.navbar-shopping-cart`);
const aside = document.querySelector(`.product-detail`);
const cardsContainer = document.querySelector(`.cards-container`);

nav_email.addEventListener(`click`, toggleDesktopMenu);
menuHamIcon.addEventListener(`click`, toggleMobileMenu);
menuCarIcon.addEventListener(`click`, toggleCarAside);

function toggleDesktopMenu(){
  const isAsideClose = aside.classList.contains(`inactive`);

  if (!isAsideClose) {
    aside.classList.add(`inactive`);
  } 
  
  desktopMenu.classList.toggle(`inactive`);
}

function toggleMobileMenu(){
  const isAsideClose = aside.classList.contains(`inactive`);

  if (!isAsideClose) {
    aside.classList.add(`inactive`);
  }

  mobileMenu.classList.toggle(`inactive`);
}

function toggleCarAside(){
  const isMobileMenuClose = mobileMenu.classList.contains(`inactive`);
 
  if (!isMobileMenuClose) {
    mobileMenu.classList.add(`inactive`);
  }

  aside.classList.toggle(`inactive`);
}

const productList = [];
productList.push({
  name: `Bike`,
  price: 120,
  image: `https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=600`,
});
productList.push({
  name: `Monitor`,
  price: 300,
  image: `./img/monito_d4.jpg`,
});
productList.push({
  name: `Teclado`,
  price: 56,
  image: `./img/teclado_gamer.jpg`,
});
productList.push({
  name: `Audifonos`,
  price: 110,
  image: `./img/CP-LOGITECH-981-001023-1.jpg`,
});
productList.push({
  name: `Regulador`,
  price: 50,
  image: `./img/regulador_voltaje.jpg`,
});


/* <div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">--productInfo---
  <div>---productInfoDiv---
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>---productInfoFigure---
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div> */

for (product of productList){
  const productCard = document.createElement(`div`);
  productCard.classList.add(`product-card`);

  //product = {name, price, image} -> product.image, product.price,etc..
  const productImg = document.createElement(`img`);
  productImg.setAttribute(`src`, product.image);

  const productInfo = document.createElement(`div`);
  productInfo.classList.add(`product-info`);

  const productInfoDiv = document.createElement(`div`);

  const productPrice = document.createElement(`p`);
  productPrice.innerText = `$` + product.price;
  const productName = document.createElement(`p`);
  productName.innerText = product.name;
//____Contenedor Secundario_____
  productInfoDiv.append(productPrice, productName);

  const productInfoFigure = document.createElement(`figure`);
  const productImgCart = document.createElement(`figure`);
  productImgCart.setAttribute(`src`, `./icons/bt_add_to_cart.svg`);
//____Contenedor Secundario_____
  productInfoFigure.appendChild(productImgCart);
  
  //esta linea se encargan de mandar lo que ya tenemos creado hacia el padre de cada elemento
  //_____Contenedores Principales_____
  productInfo.append(productInfoDiv, productInfoFigure);

  productCard.append(productImg, productInfo);

  cardsContainer.appendChild(productCard);
}
