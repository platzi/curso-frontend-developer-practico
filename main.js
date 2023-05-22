const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCardContainer = document.querySelector('#shoppingCardContainer');
const cardsContainer = document.querySelector('.cards-container');



menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobilepMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCardContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCardContainer.classList.add('inactive');  
      }

    desktopMenu.classList.toggle('inactive');      
}

function toggleMobilepMenu() {
    const isAsideClosed = shoppingCardContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCardContainer.classList.add('inactive');  
      }

    mobileMenu.classList.toggle('inactive');    
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

   if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');  
  }
   
  shoppingCardContainer.classList.toggle('inactive');

}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    Image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: 258,
    Image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'COMPU',
    price: 750,
    Image:'https://www.shutterstock.com/image-vector/realistic-laptop-on-transparent-background-600w-1721982661.jpg'
});

/* 
<div class="product-card">
<productImg src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <productImg src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div>
*/

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
       
        // product = {name, price, image} ---> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.Image);
       
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
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
       
        productInfoFigure.appendChild(productImgCard);
       
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
       
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
       
        cardsContainer.appendChild(productCard);
       }
}

renderProducts(productList)