const menuEmail = document.querySelector (".navbar-email");
const menuHamIcon = document.querySelector (".menu");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector (".navbar-shopping-cart");
const  productDetailCloseIcon = document.querySelector ('.product-detail-close')
const shoppingCartContainer = document.querySelector ("#shoppingCartContainer");
const productDetailContainer = document.querySelector ("#productDetail");

menuEmail.addEventListener ("click", toggleDesktopMenu);
menuHamIcon.addEventListener ("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click",toggleCarritoAside);
productDetailCloseIcon.addEventListener("click",closeProductDetailAside);

function  toggleDesktopMenu(){

   
   isAsideClosed = shoppingCartContainer.classList.contains('inactive');
   

   if (!isAsideClosed ){
       shoppingCartContainer.classList.add ('inactive');
   }

   desktopMenu.classList.toggle("inactive");
   
}
function  toggleMobileMenu(){

   isAsideClosed = shoppingCartContainer.classList.contains('inactive');
   

   if (!isAsideClosed ){
       shoppingCartContainer.classList.add ('inactive');
   }
   closeProductDetailAside();

   mobileMenu.classList.toggle("inactive");
   
}
function  toggleCarritoAside(){

   isMobileMenuClosed = mobileMenu.classList.contains('inactive');
   

   if (!isMobileMenuClosed ){
       mobileMenu.classList.add ('inactive');
   }

   isProductDetailClosed = productDetailContainer.classList.contains('inactive');
   

   if (!isProductDetailClosed ){
       productDetailContainer.classList.add ('inactive');
   }


   shoppingCartContainer.classList.toggle ('inactive');

   
}

function openProductDetailAside(){

  shoppingCartContainer.classList.add ('inactive');
  
  productDetailContainer.classList.remove ('inactive');
     
}
function closeProductDetailAside(){

  
  productDetailContainer.classList.add ('inactive');
   
}

const productList = [];
productList.push({
    name:'Bike',
    precio: 120,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name:'Pantalla',
    precio: 220,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name:'Ordenador',
    precio: 620,
    imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

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

function renderProducts (arr){
  for ( product of arr){

    const productCard = document.createElement ('div');
    productCard.classList.add ('product-card');
    const productImg = document.createElement('img');
    productImg.setAttribute ('src',product.imagen);
    productImg.addEventListener ('click',openProductDetailAside);
    
    const productInfo = document.createElement ('div');
    productInfo.classList.add ('product-info');
    
    const productInfoDiv = document.createElement ('div');
    const productPrice = document.createElement ('p');
    productPrice.innerText = '$' + product.precio;
    const productName = document.createElement ('p');
    productName.innerText = product.name;
    productInfoDiv.appendChild (productPrice);
    productInfoDiv.appendChild (productName);
    



    const productInfoFigure = document.createElement ('figure');
    const productImgButton = document.createElement('img');
    productImgButton.setAttribute ('src','./icons/bt_add_to_cart.svg');
    productInfoFigure.appendChild (productImgButton);

    productInfo.appendChild (productInfoDiv);
    productInfo.appendChild (productInfoFigure);

    productCard.appendChild (productImg);
    productCard.appendChild (productInfo);

    const cardsContainer = document.querySelector ('.cards-container');
    cardsContainer.appendChild (productCard);
    
  }
}

renderProducts ( productList);