//VARIABLES PARA SELECCIONAR LOS ELEMENTOS DEL HTML
const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const shoppingCardContainer = document.querySelector('#shoppingCartContainer')
const cardsContainer = document.querySelector('.cards-container')

// EVENT LISTENERS PARA MENUS Y LISTA DE COMPRAS
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

// MOSTRAR Y OCULTAR MENU DESKTOP
function toggleDesktopMenu() {
  shoppingCardContainer.classList.add('inactive')
  desktopMenu.classList.toggle('inactive');
}

//MOSTRAR Y OCULTAR MENU MOBILE
function toggleMobileMenu() {
  shoppingCardContainer.classList.add('inactive')
  mobileMenu.classList.toggle('inactive')
}

//MOSTRAR Y OCULTAR ASIDE DE LISTA DE COMPRAS
function toggleCarritoAside() {
  desktopMenu.classList.add('inactive')
  mobileMenu.classList.add('inactive')
  shoppingCardContainer.classList.toggle('inactive')
}

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
  icon: './icons/bt_add_to_cart.svg',
})
productList.push({
  name: 'TV Screen',
  price: 220,
  image: 'https://images.pexels.com/photos/5202925/pexels-photo-5202925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
  icon: './icons/bt_add_to_cart.svg',
})
productList.push({
  name: 'Laptop',
  price: 620,
  image: 'https://images.pexels.com/photos/12753820/pexels-photo-12753820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
})
productList.push({
  name: 'Boat',
  price: 2620,
  image: 'https://images.pexels.com/photos/1295036/pexels-photo-1295036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 
})

/* <div class="product-card">
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
      </div> */

//AÑADIR PRODUCTOS AL CARD CONTAINER      
function renderProducts(arr) {
  for (const product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    const productName = document.createElement('p')
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv)
    productInfo.appendChild(productInfoFigure)

    productCard.appendChild(productImg)
    productCard.appendChild(productInfo)

    cardsContainer.appendChild(productCard)
  }
}

renderProducts(productList)

