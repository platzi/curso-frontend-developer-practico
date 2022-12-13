const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('.shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', togglemobileMenu);
menuCarrito.addEventListener('click', toggleCarritoAside);


function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive')
  
  if(!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
}  
  console.log('Click');
  desktopMenu.classList.toggle('inactive');
}

function togglemobileMenu(){
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive')

  if (!isAsideClosed)
  {shoppingCartContainer.classList.add('inactive');
}

  mobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside() {
const mobileMenuOpen = mobileMenu.classList.contains('inactive')
const isdesktopClosed = desktopMenu.classList.contains('inactive')

if(!isdesktopClosed) {
  desktopMenu.classList.add('inactive');
}

  if(!mobileMenuOpen) {
    mobileMenu.classList.add('inactive');
}

shoppingCartContainer.classList.toggle('inactive')
}

const productList = []
productList.push({
  name: "Bike",
  price: 120,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

productList.push({
  name: "Pantalla",
  price: 120,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})

productList.push({
  name: "Laptop",
  price: 120,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
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

for (product of productList) {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card')

  const productImg = document.createElement('img');
  productImg.setAttribute('src', product.image)

  const productInfo = document.createElement('div');
  productInfo.classList.add('product-info')

  const productInfoDiv = document.createElement('div');

  const productPrice = document.createElement('p');
  productPrice.innerText = '$' + product.price;

  const productName = document.createElement('p');
  productName.innerText = product.name;

  productInfoDiv.appendChild(productPrice)
  productInfoDiv.appendChild(productName)

  const productInfoFigure = document.createElement('figure');
  const productImgCard = document.createElement('img');
  productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');

  productInfoFigure.appendChild(productImgCard);

  productInfo.appendChild(productInfoDiv);
  productInfo.appendChild(productInfoFigure);

  productCard.appendChild(productImg);
  productCard.appendChild(productInfo);

  cardsContainer.appendChild(productCard)
}

