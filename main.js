const menuEmail = document.querySelector('.navbar-email');
const DesktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleAsideCart);


function toggleDesktopMenu(){
  const isAsideClosed = aside.classList.contains('inactive');

  if(!isAsideClosed){
    aside.classList.toggle('inactive');
  }

  DesktopMenu.classList.toggle('inactive');
}


function toggleMobileMenu(){

  const isAsideClosed = aside.classList.contains('inactive');

  if(!isAsideClosed){
    aside.classList.toggle('inactive');
  }

  mobileMenu.classList.toggle('inactive');
}


function toggleAsideCart(){
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isDesktopMenuclosed = DesktopMenu.classList.contains('inactive');

  if(!isDesktopMenuclosed){
    DesktopMenu.classList.toggle('inactive');
  }
  
  if(!isMobileMenuClosed){
    mobileMenu.classList.toggle('inactive');
  }

  aside.classList.toggle('inactive');
}

const productList=[];

productList.push({
  name:'bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
  name:'pantlla',
  price: 360,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
  name:'computador',
  price: 500,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});


{/* <div class="product-card">
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
      </div> */}


function renderProducts(arr){
  for(product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const ProductImg = document.createElement('img');
    ProductImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv =  document.createElement('div');

    const productPrice =  document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName =  document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCard = document.createElement('img');
    productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCard);
    
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(ProductImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
};

// function renderProducts(arr) {
//   for (product of arr) {
    // const productCard = document.createElement('div');
    // productCard.classList.add('product-card');
  
    // // product= {name, price, image} -> product.image
    
    // const productImg = document.createElement('img');
    // productImg.setAttribute('src', product.image);
  
    // const productInfo = document.createElement('div');
    // productInfo.classList.add('product-info');
  
    // const productInfoDiv = document.createElement('div');
  
    // const productPrice = document.createElement('p');
    // productPrice.innerText = '$' + product.price;
    // const productName = document.createElement('p');
    // productName.innerText = product.name;
  
    // productInfoDiv.appendChild(productPrice);
    // productInfoDiv.appendChild(productName);
  
//     const productInfoFigure = document.createElement('figure');
//     const productImgCart = document.createElement('img');
//     productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
//     productInfoFigure.appendChild(productImgCart);
  
//     productInfo.appendChild(productInfoDiv);
//     productInfo.appendChild(productInfoFigure);
  
//     productCard.appendChild(productImg);
//     productCard.appendChild(productInfo);
  
//     cardsContainer.appendChild(productCard);
//   }
// }

renderProducts(productList);