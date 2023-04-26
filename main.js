const menuEmail = document.querySelector ('.navbar-email');
const desktopMenu = document.querySelector ('.desktop-menu');
const categoriesMenuIcon = document.querySelector ('.menu');
const carritoMenuIcon = document.querySelector ('.navbar-shopping-cart');
const categories = document.querySelector ('.mobile-menu');
const aside = document.querySelector ('.product-detail-cart');
const cardContainer = document.querySelector ('.cards-container')

menuEmail.addEventListener ('click', toggleUserMenu);
categoriesMenuIcon.addEventListener ('click', toggleCatMenu);
carritoMenuIcon.addEventListener ('click', toggleCarritoAside);

function toggleUserMenu () {
   aside.classList.add('inactive');
   desktopMenu.classList.toggle('inactive');
}

function toggleCatMenu () {
   aside.classList.add('inactive');
   categories.classList.toggle('inactive');
}

function toggleCarritoAside () {
   desktopMenu.classList.add('inactive');
   categories.classList.add('inactive');
   aside.classList.toggle('inactive');
}


const productList = [];

productList.push({
   name: 'Bike',
   price: 120,
   img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
   name: 'Pantalla',
   price: 220,
   img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
   name: 'Compu',
   price: 620,
   img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
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

function renderProducts (arr) {
   for (product of arr) {
      const productCard = document.createElement('div');
      productCard.classList.add ('product-card');
   
      const productImg = document.createElement('img');
      productImg.setAttribute('src', product.img);
   
      const productInfo = document.createElement('div');
      productInfo.classList.add ('product-info');
   
      const productInfoDiv = document.createElement('div');
      
      const productPrice = document.createElement('p');
      productPrice.innerText = '$' + product.price;
      
      const productName = document.createElement('p');
      productName.innerText = product.name
   
      productInfoDiv.appendChild(productPrice);
      productInfoDiv.appendChild(productName);
   
   
      const productInfoFigure = document.createElement('figure');
   
      const productImgCart = document.createElement('img');
      productImgCart.setAttribute ('src', './icons/icon_shopping_cart.svg');
   
      productInfoFigure.appendChild(productImgCart);
   
      productInfo.appendChild(productInfoDiv);
      productInfo.appendChild(productInfoFigure);
   
      productCard.append(productImg, productInfo);
   
      cardContainer.appendChild(productCard);
   
   
   }
}

renderProducts(productList);