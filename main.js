
const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const cartsContainer = document.querySelector('.cards-container')



menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)



function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive')

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }
  desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive')

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }

  mobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside() {
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive')

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }
  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add('inactive');
  }

  shoppingCartContainer.classList.toggle('inactive')
}

//Agregando HTML desde JavaScript

const productList = [];

productList.push({
  name: 'Bicicleta',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
  name: 'Pantalla',
  price: 200,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
  name: 'Laptop',
  price: 500,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr) {
  for (product of arr) {
  
const productCart = document.createElement('div');
productCart.classList.add('product-card');



  //product = {name, price, image} --> product.image
const imgProductCart = document.createElement('img');
imgProductCart.setAttribute('src', product.image);

const productInfo = document.createElement('div');
  productInfo.classList.add('product-info');
  
  
  const productInfoDiv = document.createElement('div');
  
  
  const productPrice = document.createElement('p');
  productPrice.innerText = '$' + product.price;
  
  const productName = document.createElement('p');
  productName.innerText = product.name;
  
  
  const productInfoFigure = document.createElement('figure');
  
  const productImgCart = document.createElement('img');
  productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
  productInfoDiv.appendChild(productPrice);
  productInfoDiv.appendChild(productName);
  productCart.appendChild(imgProductCart);
  productCart.appendChild(productInfo);
  
  productInfo.appendChild(productInfoDiv);
  productInfo.appendChild(productInfoFigure);
  
  productInfoFigure.appendChild(productImgCart);
  
  cartsContainer.appendChild(productCart);
}
}
renderProducts(productList)





       
  //  <div class="product-card">
  //       <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
  //       <div class="product-info">
  //         <div>
  //           <p>$120,00</p>
  //           <p>Bike</p>
  //         </div>
  //         <figure>
  //           <img src="./icons/bt_add_to_cart.svg" alt="">
  //         </figure>
  //       </div>
  //     </div>
      