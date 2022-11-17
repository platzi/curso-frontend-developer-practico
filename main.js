const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
     const isAsideClosed = aside.classList.contains('inactive');
     if (!isAsideClosed) {
       aside.classList.add('inactive');
     }

     desktopMenu.classList.toggle('inactive');
   }
   

function toggleMobileMenu() {
     const isAsideClosed = aside.classList.contains('inactive');
   
     if (!isAsideClosed) {
       aside.classList.add('inactive'); 
     }
     mobileMenu.classList.toggle('inactive');
   }

function toggleCarritoAside(){
     const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
     if (!isMobileMenuClosed) {
          mobileMenu.classList.add('inactive');
     }
     aside.classList.toggle('inactive');
};

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Pantalla',
  price: 1200,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Computadora',
  price: 700,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

/*Tengo esto solo para tener la referencia de lo que tengo que construir*/

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

function renderProducts (arr) {
  for (product of arr){
    /*Creamos el elemento  <div class="product-card"> */
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    /*Creamos la imagen <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""> */
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    /*Creamos el elemento  <div class="product-info"> */
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    /*Creamos el elemento <div>*/
    const productInfoDiv = document.createElement('div');
    /*Creamos <p>$120,00</p>*/
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    /*creamos  <p>Bike</p>*/
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    /*Creamos <figure>*/
    const productInfoFigure = document.createElement('figure');
     /*Creamos <img src="./icons/bt_add_to_cart.svg" alt="">*/
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }

}

renderProducts(productList);

