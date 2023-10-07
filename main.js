const menuEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.icon-menu');
const menuMobile = document.querySelector('.mobile-menu');
const shoppingCartMenu = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

/* Function for Desktop Menu */
menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
   menuDesktop.classList.toggle('inactive')

   const isAsideClosed = aside.classList.contains('inactive');
   if(!isAsideClosed){
      aside.classList.add('inactive');
   }

}

/* Function for mobile Menu */

menuHamIcon.addEventListener('click', toggleMobileMenu);
function toggleMobileMenu(){
   const isAsideClosed = aside.classList.contains('inactive');
   if(!isAsideClosed){
      aside.classList.add('inactive');
   }

   menuMobile.classList.toggle('inactive');
}

/* Function for Aside */

shoppingCartMenu.addEventListener('click', toggleShoppingCart);

function toggleShoppingCart(){
   const isMenuMobileClosed = menuMobile.classList.contains('inactive');
   if(!isMenuMobileClosed){
      menuMobile.classList.add('inactive');
   }
   aside.classList.toggle('inactive')
}

const productList = [];
productList.push({
   name: 'bike',
   price: 120,
   img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
   name: 'Pantalla',
   price: 420,
   img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
   name: 'Teclado',
   price: 80,
   img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})


function renderCards(arr){
   for(product of arr){
      /* Container */
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
      /* img */
      const productImg = document.createElement('img')
      productImg.setAttribute('src', product.img)
   
      const productInfo = document.createElement('div');
      productInfo.classList.add('product-info');
   
      const productInfoDiv = document.createElement('div');
   
      const productPrice = document.createElement('p');
      productPrice.innerText = '$' + product.price;
   
      const productName = document.createElement('p');
      productName.innerText = product.name;
   
      productInfoDiv.appendChild(productPrice)
      productInfoDiv.appendChild(productName)
   
      const productInfoFigure = document.createElement('figure');
      const productImageCart = document.createElement('img');
      productImageCart.setAttribute('src', './icons/bt_add_to_cart.svg');
   
      productInfoFigure.appendChild(productImageCart);
   
      productInfo.appendChild(productInfoDiv);
      productInfo.appendChild(productInfoFigure);
   
      productCard.appendChild(productImg);
      productCard.appendChild(productInfo);
   
      cardsContainer.appendChild(productCard);
   }
}

renderCards(productList);