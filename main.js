const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const asideCarritoIcon = document.getElementById('shoppingCartContainer');

const productDetail = document.getElementById('productDetail')

const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoIcon);


function toggleDesktopMenu() {
// const isAsideCarritoIconClosed = asideCarritoIcon.classList.contains('inactive');
//   if (!isAsideCarritoIconClosed) {
//     asideCarritoIcon.classList.add('inactive');
//   }

  // // *** Mejor Solucion ***
  asideCarritoIcon.classList.add('inactive');
  productDetail.classList.add('inactive');
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  // const isAsideCarritoIconClosed = asideCarritoIcon.classList.contains('inactive');
  // if (!isAsideCarritoIconClosed) {
  //   asideCarritoIcon.classList.add('inactive');
  // }

  // *** Mejor Solucion ***
  asideCarritoIcon.classList.add('inactive');
  productDetail.classList.add('inactive');
  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoIcon() {
  // const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
  // const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

  // if (!isDesktopMenuClosed) {
  //   desktopMenu.classList.add('inactive');
  // }
  // if (!isMobileMenuClosed) {
  //   mobileMenu.classList.add('inactive');
  // }

  // *** Mejor Solucion ***
  desktopMenu.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  productDetail.classList.add('inactive');
  asideCarritoIcon.classList.toggle('inactive');
}

function toggleProductDetail() {
  desktopMenu.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  asideCarritoIcon.classList.add('inactive');
  productDetail.classList.toggle('inactive');
}

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Pantalla',
  price: 220,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Computadora',
  price: 620,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    // product = {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productName = document.createElement('p');
    productName.innerText = product.name;
    const productPrice = document.createElement('p');
    productPrice.innerText = '$ ' + product.price;
    
    // Cuando usamos append para ingresar varios nodos y no solo appendChild que ingresa un solo nodo
    // Mejor opcion de desarrollo
    productInfoDiv.append(productName, productPrice);
    // productInfoDiv.appendChild(productName);
    // productInfoDiv.appendChild(productPrice);
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
    
    // Mejor opcion de desarrollo
    productInfo.append(productInfoDiv, productInfoFigure);
    // productInfo.appendChild(productInfoDiv);
    // productInfo.appendChild(productInfoFigure);
  
    // Mejor opcion de desarrollo
    productCard.append(productImg, productInfo);
    // productCard.appendChild(productImg);
    // productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}

// funcion alternativa
function renderProductsAlt(arr) {
  for (product of arr) {
    const cardsProduct = `
      <div class="product-card">
        <img src=${product.image} alt="">
        <div class="product-info">
          <div>
            <p>${product.name}</p>
            <p>$${product.price}</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>`
    cardsContainer.innerHTML += cardsProduct;
  }
}

renderProducts(productList);

// renderProductsAlt(productList);

