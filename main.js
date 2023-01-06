const menuEmail = document.querySelector('.navbar-email');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const menuHamIcon = document.querySelector('.menu');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cartContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCartIcon.addEventListener('click',toggleAsideCart);

function toggleDesktopMenu(){
  const isAsideOpen = !aside.classList.contains('inactive');
  if(isAsideOpen){
    aside.classList.add('inactive');
  }
  desktopMenu.classList.toggle('inactive');

}

function toggleMobileMenu(){
  const isAsideOpen = !aside.classList.contains('inactive');
  if(isAsideOpen){
    aside.classList.add('inactive');
  }
  mobileMenu.classList.toggle('inactive');

}

function toggleAsideCart(){
  const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
  const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');

  if(isMobileMenuOpen){
    mobileMenu.classList.add('inactive');
  } else if (isDesktopMenuOpen){
    desktopMenu.classList.add('inactive');
  }
  aside.classList.toggle('inactive');

}

function renderProducts(productsArr){
  /*Generate html from js*/
  for (product of productsArr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    const productImg = document.createElement('img');
    productImg.setAttribute('src',product.image);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.innerText='$' + product.price;
    const productName = document.createElement('p');
    productName.innerText=product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
    
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    cartContainer.appendChild(productCard);
  }
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
  }
  

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Display',
  price: 500,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Laptop',
  price: 1299,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Display',
  price: 500,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Laptop',
  price: 1299,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Display',
  price: 500,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Laptop',
  price: 1299,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

renderProducts(productList);