const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const shopingCartContainer = document.querySelector('#shoping-cart-container');

const productDetailContainer = document.querySelector('#productDetail')
const productDetailClose = document.querySelector('.product-detail-close');

const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleAsideCart);
productDetailClose.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
  /*Variable validar si aside esta cerrada*/
  const isAsideClosed = shopingCartContainer.classList.contains("inactive");

  /*Validación aside esta abierto, cerrarlo*/
  if (!isAsideClosed) {
    shopingCartContainer.classList.add("inactive");
  }
  /*Abrir el mobileMenu*/
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  /*Variable validar si aside esta cerrada*/
  const isAsideClosed = shopingCartContainer.classList.contains("inactive");

  /*Validación aside esta abierto, cerrarlo*/
  if (!isAsideClosed) {
    shopingCartContainer.classList.add("inactive");
  }
  /*Abrir el mobileMenu*/
  mobileMenu.classList.toggle("inactive");
}

function toggleAsideCart() {
  /*Variable validar si venta mobileMenu esta cerrada*/
  const ismobileMenuClosed = mobileMenu.classList.contains("inactive");
  /*Variable validar si venta mobileMenu esta cerrada*/
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
  /*Variable validar si productDetail esta cerrada*/
  const isProdutDetailClosed = productDetailContainer.classList.contains("inactive");

  /*Validación mobileMenu esta abierto, cerrarlo*/
  if (!ismobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  /*Validación desktopMenu esta abierto, cerrarlo*/
  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add("inactive");
  }
  
  /*Validación productDetail esta abierto, cerrarlo*/
  if (!isProdutDetailClosed) {
    productDetailContainer.classList.add("inactive");
  }
  /*Abrir el aside*/
  shopingCartContainer.classList.toggle("inactive");
}

function openProductDetailAside(){
    /*Variable validar si venta mobileMenu esta cerrada*/
    const ismobileMenuClosed = mobileMenu.classList.contains("inactive");


    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
  name: "Bike",
  price: 120,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Pantalla",
  price: 150,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
  name: "Computador",
  price: 1200,
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

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
        </div>
*/

/*Maquetación del div card-container*/
function renderProducts(arr) {
    for (product of arr) {
        /*Creación del div product-card*/
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
      
        /*Creación del img*/
        const ProductImg = document.createElement('img');
        ProductImg.setAttribute('src', product.image);
        ProductImg.addEventListener('click', openProductDetailAside)
      
        /*Creación del div product-info*/
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
      
        /*Creación del div para precio y nombre*/
        const productInfoDiv = document.createElement('div');
      
        /*Creación del p para precio*/
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
      
        /*Creación del p para nombre*/
        const productName = document.createElement('p');
        productName.innerText = product.name;
      
        /*Agregando div de precio y nombre dentro de producto-info*/
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
      
      
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
      
        /*Agregando img dentro del figure*/
        productInfoFigure.appendChild(productImgCart);
      
        /*Agregando div de precio, nombre y figure dentro del producto-info*/
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
      
        /*Agregando imagen del producto y prodcuct-info dentro de product-card*/
        productCard.appendChild(ProductImg);
        productCard.appendChild(productInfo);
      
        /*Agrgando todo product-card dentro de card-container*/
        cardsContainer.appendChild(productCard);
      }
}
renderProducts(productList);
