const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailContainerClose = document.querySelector('.product-detail-close');
const menuHamIcon = document.querySelector(".menu-ham-icon");
const mobileMenu = document.querySelector(".mobile-menu");
const shopingCartContainer = document.querySelector("#shopingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAsaide);
productDetailContainerClose.addEventListener("click", closeProductDetailAsaid);


function toggleDesktopMenu(){
   productDetailContainer.classList.add('inactive-productDetail');
   shopingCartContainer.classList.add('inactive-car');    
   desktopMenu.classList.toggle('inactive');
  
}

/* funcion para activar el menu en mobil*/

function toggleMobileMenu(){
    shopingCartContainer.classList.add('inactive-car');
    productDetailContainer.classList.add('inactive-productDetail');
    mobileMenu.classList.toggle('inactive-ham');
    
 }

/*funcion para el menu del carrito*/ 
 function toggleCarritoAsaide(){
   productDetailContainer.classList.add('inactive-productDetail');
   mobileMenu.classList.add('inactive-ham');
   desktopMenu.classList.add('inactive');
   shopingCartContainer.classList.toggle('inactive-car');
 }


 function openProducDetailAsaid(){
  productDetailContainer.classList.remove('inactive-productDetail');
  desktopMenu.classList.add('inactive');
  shopingCartContainer.classList.add('inactive-car');
 }


 function closeProductDetailAsaid(){
  productDetailContainer.classList.add('inactive-productDetail');
 }



 const productList = [];
 productList.push({
   name: 'Compu',
   price: 620,
   image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
 });

 productList.push({
   name: 'pantalla',
   price: 220,
   image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
 });

 productList.push({
   name: 'tablet',
   price: 330,
   image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
 });


    /*
    <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>
      */

 for (product of productList){
   const productCard = document.createElement('div');
   productCard.classList.add('product-card');

   const productImg = document.createElement('img');
   productImg.setAttribute('src', product.image);
   productImg.addEventListener('click', openProducDetailAsaid);

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
   const productImgCard = document.createElement('img');
   productImgCard.setAttribute('src', "./icons/bt_add_to_cart.svg" );

   productInfoFigure.appendChild(productImgCard);

   productInfo.appendChild(productInfoDiv);
   productInfo.appendChild(productInfoFigure);

   productCard.appendChild(productImg);
   productCard.appendChild(productInfo);

   cardsContainer.appendChild(productCard);

 }