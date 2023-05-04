const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuBurgerIcon = document.querySelector(".menu");
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');


menuEmail.addEventListener("click", toggleDesktopMenu);
menuBurgerIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){
    const isAsideClosed=shoppingCartContainer.classList.contains('inactive');
    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed=shoppingCartContainer.classList.contains('inactive');
    if(!isAsideClosed){
      shoppingCartContainer.classList.add('inactive');
    }
    closeProductDetailAside();
    mobileMenu.classList.toggle('inactive');
  }

function toggleCarritoAside(){
    const isMobileMenuClosed=mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed=desktopMenu.classList.contains('inactive');
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    } else if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
      }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
  
  if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive'); 
  }
   shoppingCartContainer.classList.toggle('inactive');
}


function openProductDetailAside() {
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive');
}


const productList = [];
productList.push({
  name: 'Juego de Mesa de Ratán',
  price: 190,
  image: "./imgs/IMG (1).jpeg",
});
productList.push({
  name: 'Juego de Mesa Contemporáneo',
  price: 220,
  image: "./imgs/IMG (2).jpg",
});
productList.push({
  name: 'Juego de mesa Vintage',
  price: 600,
  image: "./imgs/IMG (3).jpg",
});
productList.push({
  name: 'Juego de Escritorio Vintage',
  price: 370,
  image: "./imgs/IMG (4).jpg",
});
productList.push({
  name: 'Sofá Vintage',
  price: 435,
  image: "./imgs/IMG (5).jpg",
});
productList.push({
  name: 'Juego de Sillas Madera',
  price: 650,
  image: "./imgs/IMG (6).jpg",
});
productList.push({
  name: 'Isla de MDF',
  price: 385,
  image: "./imgs/IMG (7).jpg",
});
productList.push({
  name: 'Juego de sillones',
  price: 510,
  image: "./imgs/IMG (8).jpg",
});


function renderProducts(arr) {
    for (product of arr) {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
    
      // product= {name, price, image} -> product.image
      const productImg = document.createElement('img');
      productImg.setAttribute('src', product.image);
      productImg.addEventListener('click', openProductDetailAside);
    
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
  
  renderProducts(productList);