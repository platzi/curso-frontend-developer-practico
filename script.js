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
  image: `https://www.lg.com/mx/images/monitores/md06126439/Gallery/D-4.jpg`,
});
productList.push({
  name: `Teclado`,
  price: 56,
  image: `http://cdn.shopify.com/s/files/1/2272/2505/products/1_6e7aab19-2943-4a9b-8f63-52d4337c5a44.jpg?v=1621447358`,
});
productList.push({
  name: `Audifonos`,
  price: 110,
  image: `https://www.officedepot.com.mx/medias/100021917.jpg-1200ftw?context=bWFzdGVyfHJvb3R8NDgzNjQ3fGltYWdlL2pwZWd8aDI1L2g5ZS8xMDA1MTI3ODkyOTk1MC5qcGd8MDFhOWMzODUwNzg4ZTdkMzA0NTljODZiZGU0Y2M2MmFmNmFkN2Y3NjY1NTljYjQwMzQ5OGRhZDU2NWI0N2EwNA`,
});
productList.push({
  name: `Regulador`,
  price: 50,
  image: `https://digitalconnection.com.ec/wp-content/uploads/2021/02/REGULADOR-DE-VOLTAJE-FVR-1200B-FORZA-1200VA-600W-120V-8-TOMAS-2.jpg`,
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
