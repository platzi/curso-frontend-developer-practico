const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const menuHamIcon = document.querySelector(".menu-ham-icon");
const mobileMenu = document.querySelector(".mobile-menu");
const asaid = document.querySelector(".product-detail")
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAsaide);


function toggleDesktopMenu(){
   const isMenuCarritoOpen = asaid.classList.contains('inactive-car');
   if (isMenuCarritoOpen) {
      asaid.classList.remove('inactive-car');
      
   }
   desktopMenu.classList.toggle('inactive');
}

/* funcion para activar el menu en mobil*/

function toggleMobileMenu(){
   const isMenuCarritoOpen = asaid.classList.contains('inactive-car');
   if (isMenuCarritoOpen) {
      asaid.classList.toggle('inactive-car');
      
   }
    mobileMenu.classList.toggle('inactive-ham');
    console.log('activa toggle en el menu en mobil');
 }

/*funcion para el menu del carrito*/ 
 function toggleCarritoAsaide(){
   const isMobileMenuOpen = mobileMenu.classList.contains('inactive-ham');
   const isMenuDeskOpen = desktopMenu.classList.contains('inactive');
   if (isMobileMenuOpen || isMenuDeskOpen) {
      mobileMenu.classList.toggle('inactive-ham');
      desktopMenu.classList.remove('inactive');
      console.log('desactiva menu mobil');
   }
   asaid.classList.toggle('inactive-car');
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

   const productInfo = document.createElement('div');
   productInfo.classList.add('product-info');

   const productInfoDiv = document.createElement('div');

   const productPrice = document.createElement('p');
   productPrice.innerText = '$' + product.price;
   const productName = document.createElement('p');
   productName.innerText = productName;

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