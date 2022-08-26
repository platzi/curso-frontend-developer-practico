const menuEmail = document.querySelector(".navbar-email");
const burgerMenu = document.querySelector(".menu");
const iconCardtMenu = document.querySelector(".navbar-shopping-cart");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
burgerMenu.addEventListener("click", toggleMobileMenu);
iconCardtMenu.addEventListener("click", toggleIconCartMenu);

function toggleDesktopMenu() {
    const isIconCardtMenuClosed = aside.classList.contains("inactive");

  if (!isIconCardtMenuClosed) {
    aside.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    const isIconCardtMenuClosed = aside.classList.contains("inactive");

  if (!isIconCardtMenuClosed) {
    aside.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}

function toggleIconCartMenu() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }
  aside.classList.toggle("inactive");
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 
});

productList.push({
    name: 'TV',
    price: 420,
    image:'https://www.ikea.com/cl/es/images/products/lack-rack-de-tv-negro__0955265_pe803705_s5.jpg?f=xxs',
});

productList.push({
    name: 'Mac',
    price: 700,
    image:'https://d500.epimg.net/cincodias/imagenes/2022/02/21/gadgets/1645453218_839118_1645453324_noticia_normal.jpg',
});

function renderProducts(arr) {

    for(product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
     
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
     
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
     
        const productInfoDiv = document.createElement('div');
     
        const productPrice = document.createElement('p');
        productPrice.innerText = `'$' ${product.price}`
        const productName = document.createElement('p');
        productName.innerText = product.name;
     
     
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
     
        const productInfoFigure = document.createElement('figure');;
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

renderProducts(productList);