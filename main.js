const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    
      if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive'); 
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
      shoppingCartContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');

    closeProductDetailAside();
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isProductDetailClosed) {
      productDetailContainer.classList.add('inactive');
    }
}

function openProductDetailAside() {
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
  productDetailContainer.classList.add('inactive');
}


const productList = [];
productList.push({
    name: 'Jogger',
    price: 30,
    image: 'https://m.media-amazon.com/images/I/51pvh5AKaIS._UY550_.jpg',
    });

productList.push({
        name: 'T-Shirt Oversize',
        price: 25,
        image: 'https://ae01.alicdn.com/kf/Saa1ec1fc2af241a6938fec24b120cfb55/Hip-Hop-Streetwear-Harajuku-T-Shirt-Drew-House-Fashion-Justin-Bieber-Print-TShirt-Summer-Short-Sleeve.jpg_Q90.jpg_.webp',
    });

productList.push({
        name: 'Beanie',
        price: 20,
        image: 'https://cdnx.jumpseller.com/ekol-cl/image/25441221/29.jpg?1663869112',
   });

   productList.push({
    name: 'Cap',
    price: 30,
    image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1622451266-gorra-roja-new-era-new-york-1622451207.jpg?crop=1.00xw:0.563xh;0,0.192xh&resize=480:*',
});

productList.push({
  name: 'Watch Iconic',
  price: 30,
  image: 'https://cdn.shopify.com/s/files/1/0092/0613/6868/products/p-AX7137SET-1_512x.jpg?v=1669124637',
});


function renderProducts(arr) {
for (product of arr) {
   const productCard = document.createElement('div');
   productCard.classList.add('product-card');

//    Product= {name,price,image}

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

// Aqui ya terminamos de crear los elementos html ahora hay que meterlos 
// uno dentro del otro, cada hijo dentro de su etiqueta padre.

productInfoFigure.appendChild(productImgCart);
productInfo.appendChild(productInfoDiv);
productInfo.appendChild(productInfoFigure);

productCard.appendChild(productImg);
productCard.appendChild(productInfo);

cardsContainer.appendChild(productCard);

  }
}


renderProducts(productList);