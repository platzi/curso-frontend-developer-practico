// const $ = (selector) => document.querySelector(selector);

// const menuEmail = $('.navbar-email');
// const desktopMenu = $('.desktop-menu');

const menuEmail = document.querySelector('.navbar-email')
const menuHamIcon = document.querySelector('.menu')
const menuCarIcon = document.querySelector('.navbar-shopping-cart')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const aside = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')


menuEmail.addEventListener('click', toogleDesktopMenu)
menuHamIcon.addEventListener('click', toogleMobileMenu)
menuCarIcon.addEventListener('click', toogleCarAside)

function toogleDesktopMenu() {
  const isAsideClosed = aside.classList.contains('inactive')

  if (!isAsideClosed) {
    aside.classList.add('inactive')
  }
  console.log('click')
  desktopMenu.classList.toggle('inactive')
  // desktopMenu.classList.toogle('inactive');
}

function toogleMobileMenu() {
  const isAsideClosed = aside.classList.contains('inactive');

  if (!isAsideClosed) {
    aside.classList.add('inactive');
  }
  mobileMenu.classList.toggle('inactive');
}

function toogleCarAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

  if (!isMobileMenuClosed) {
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
  }
  aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'bike',
    price: 120,
    image: 'ttps://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

})

productList.push({
    name: 'Disco Solido 480 GB',
    price: 210,
    image: 'https://www.istockphoto.com/es/foto/juego-de-ssd-gm485849810-73266059',
    
})

productList.push({
    name: 'Computador Portatil',
    price: 810,
    image: 'https://www.istockphoto.com/es/foto/pantalla-en-blanco-port%C3%A1til-en-la-mesa-con-fondo-de-la-sala-de-estar-borrosa-por-la-gm1297540300-390648049?phrase=computador%20portatil',
    
})
// <div class="product-card">
// <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
// <div class="product-info">
//   <div>
//     <p>$120,00</p>
//     <p>Bike</p>
//   </div>
//   <figure>
//     <img src="./icons/bt_add_to_cart.svg" alt="">
//   </figure>
// </div>
// </div> 
//maquetar html dentro de javascript
function renderProducts(){
    for (product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        //product  = {name, price, image}-> product.image
    
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
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard); 
    }
}

renderProducts();