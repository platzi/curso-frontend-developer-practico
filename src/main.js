const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarrito = document.querySelector('.shopping-cart-icon');
const shoppingCardContainer = document.querySelector('.shopping-card-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseItem = document.querySelector('.product-detail-close');
const cardsContainer = document.querySelector('.cards-container');
const API = 'https://api.escuelajs.co/api/v1';

menuEmail.addEventListener('click', () => toggleMenu(desktopMenu));
burguerMenu.addEventListener('click', () => toggleMenu(mobileMenu));
menuCarrito.addEventListener('click', () => toggleMenu(shoppingCardContainer));

function toggleMenu(elemento) {
  elemento.classList.toggle('inactive');
  productDetailContainer.classList.add('inactive');
  if (elemento.classList.contains('desktop-menu')) {
    shoppingCardContainer.classList.add('inactive');
  }
  if (elemento.classList.contains('shopping-card-container')) {
    mobileMenu.classList.add('inactive');
  }
  if (elemento.classList.contains('mobile-menu')) {
    shoppingCardContainer.classList.add('inactive');
  }
}

// ========== OTRA SOLUCIÓN =============
// menuEmail.addEventListener('click', toggleMenu);
// burguerMenu.addEventListener('click',toggleMenu);
// menuCarrito.addEventListener('click', toggleMenu);

// function toggleMenu(event) {
//   switch (event.target.className) {
//     case 'navbar-email':
//       desktopMenu.classList.toggle('inactive');
//       aside.classList.add('inactive');
//       break;
//     case 'menu':
//       mobileMenu.classList.toggle('inactive');
//       aside.classList.add('inactive');
//       break;
//     case 'shopping-cart-icon':
//       aside.classList.toggle('inactive');
//       mobileMenu.classList.add('inactive');
//       desktopMenu.classList.add('inactive');
//       break;
//     default:
//       break;
//   }
// }

function openProductDetailAside() {
  productDetailContainer.classList.remove('inactive');
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  shoppingCardContainer.classList.add('inactive');
}

productDetailCloseItem.addEventListener('click', () => {
  productDetailContainer.classList.add('inactive');
})


async function fetchData(urlApi) {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
}

async function loadProducts() {
  const productList = await fetchData(`${API}/products?offset=0&limit=10`);

  for (let product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.images[0]);
    productImg.addEventListener('click', openProductDetailAside);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    const productName = document.createElement('p');
    productName.innerText = product.title;

    const productInfoFigure = document.createElement('figure');
    const productImgCard = document.createElement('img');
    productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCard);
    productInfoDiv.append(productPrice, productName);
    productInfo.append(productInfoDiv, productInfoFigure);
    productCard.append(productImg, productInfo);

    cardsContainer.appendChild(productCard);
  }
}

//****************** Cards
{/* 
<div class="product-card">
  <img
    src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    alt="">
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
*/}

loadProducts();