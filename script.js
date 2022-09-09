const nav_email = document.querySelector(`.navbar-email`);
const desktopMenu = document.querySelector(`.desktop-menu`);
const menuHamIcon = document.querySelector(`.menu`);
const menuCarIcon = document.querySelector(`.navbar-shopping-cart`);
const productDetailCloseIcon = document.querySelector(`.product-detail-close`);
const mobileMenu = document.querySelector(`.mobile-menu`);
const shoppingCartContainer = document.querySelector(`#shoppingCartContainer`);
const cardsContainer = document.querySelector(`.cards-container`);
const productDetailContainer = document.querySelector(`#productDetail`);
const myOrderContent = document.querySelector(`.my-order-content`);



nav_email.addEventListener(`click`, toggleDesktopMenu);
menuHamIcon.addEventListener(`click`, toggleMobileMenu);
menuCarIcon.addEventListener(`click`, toggleCarAside);
productDetailCloseIcon.addEventListener(`click`,closeProductDetailAside);

function toggleDesktopMenu(){
  const isAsideClose = shoppingCartContainer.classList.contains(`inactive`);

  if (!isAsideClose) {
    shoppingCartContainer.classList.add(`inactive`);
  } 
  
  desktopMenu.classList.toggle(`inactive`);

  const isProductDetailContainer = productDetailContainer.classList.add(`inactive`);
  
}

function toggleMobileMenu(){
  const isAsideClose = shoppingCartContainer.classList.contains(`inactive`);

  if (!isAsideClose) {
    shoppingCartContainer.classList.add(`inactive`);
  }

  closeProductDetailAside();

  mobileMenu.classList.toggle(`inactive`);
}

function toggleCarAside(){
  const isMobileMenuClosed = mobileMenu.classList.contains(`inactive`);
 
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add(`inactive`);
  }

  const isProductDetailClosed = productDetailContainer.classList.contains(`inactive`);
 
  if (!isProductDetailClosed) {
    productDetailContainer.classList.add(`inactive`);
  }

  shoppingCartContainer.classList.toggle(`inactive`);

}

function openProductDetailAside(){
  shoppingCartContainer.classList.add(`inactive`);
  productDetailContainer.classList.remove(`inactive`);

  desktopMenu.classList.add(`inactive`);

}

function closeProductDetailAside() {
  productDetailContainer.classList.add(`inactive`);
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
function renderProducts(arr){
  for (product of arr){
  const productCard = document.createElement(`div`);
  productCard.classList.add(`product-card`);

  //product = {name, price, image} -> product.image, product.price,etc..
  const productImg = document.createElement(`img`);
  productImg.setAttribute(`src`, product.image);
  productImg.addEventListener(`click`, openProductDetailAside);

  const productInfo = document.createElement(`div`);
  productInfo.classList.add(`product-info`);

  const productInfoDiv = document.createElement(`div`);

  const productPrice = document.createElement(`p`);
  productPrice.innerText = `$` + product.price;
  const productName = document.createElement(`p`);
  productName.innerText = product.name;
//____Contenedor Secundario(mandar a llamar los elementos dentro del contenedor)_____
  productInfoDiv.append(productPrice, productName);

  const productInfoFigure = document.createElement(`figure`);
  const productImgCart = document.createElement(`img`);

  productImgCart.setAttribute(`src`, `./icons/bt_add_to_cart.svg`);
//____Contenedor Secundario(mandar a llamar los elementos dentro del contenedor)_____
  productInfoFigure.appendChild(productImgCart);
  
  //esta linea se encargan de mandar lo que ya tenemos creado hacia el padre de cada elemento
  //_____Contenedores Principales_____
  productInfo.append(productInfoDiv, productInfoFigure);

  productCard.append(productImg, productInfo);

  cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);

   /*<div class="my-order-content">
      <div class="shopping-cart">
        <figure>
          <img src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=600" alt="bike">
        </figure>
        <p>Bike</p>
        <p>$30,00</p>
        <img src="./icons/icon_close.png" alt="close">
      </div>
      */
  
function addToCart(add){
  for(product of add){
    const orderContainer = document.createElement(`div`);
    orderContainer.classList.add(`my-order-content`);

    const shoppingCart = document.createElement(`div`);
    shoppingCart.classList.add(`shopping-cart`);

    const figureContainerCart = document.createElement(`figure`);
    const imgFigureCart = document.createElement(`img`);
    imgFigureCart.setAttribute(`src`, product.image);
    imgFigureCart.addEventListener(`click`, toggleCarAside);

    figureContainerCart.appendChild(imgFigureCart);

    const nameProductCart = document.createElement(`p`);
    nameProductCart.innerText = product.name;
    const priceProductCard = document.createElement(`p`);
    priceProductCard.innerText = `$` + product.price;
    
    const productImgCart =  document.createElement(`img`);
    productImgCart.setAttribute(`src`, `./icons/bt_add_to_cart.svg`);
    
    
    shoppingCart.append(figureContainerCart, nameProductCart, priceProductCard, productImgCart);
    
    orderContainer.append(shoppingCart);

    myOrderContent.appendChild(orderContainer);

  }
}
addToCart(productList);

/*<div class="order-container">
<div class="order">
<p>
  <span>Total</span>
</p>
<p>$560.00</p>
</div>

<button class="primary-button">
Checkout
</button>
</div>*/
/*function orderCheckout(add){
for(product of add){
    const containerOrderList = document.createElement(`div`);
    containerOrderList.classList.add(`order-container`);
    //---ORDER---
    const cartOrder = document.createElement(`div`);
    cartOrder.classList.add(`order`);

    const containerTotal = document.createElement(`p`);
    containerTotal.innerText = `Total`;
    const spanTotal = document.createElement(`span`);
    spanTotal.innerText = `$` +`550`;

    //---button---
    const primaryButton = document.createElement(`button`);
    primaryButton.innerText = `Checkout`;
    primaryButton.classList.add(`primary-button`);

    cartOrder.append(containerTotal, spanTotal);

    containerOrderList.append(cartOrder, primaryButton);

    shoppingCartContainer.appendChild(containerOrderList);
  }
}*/



