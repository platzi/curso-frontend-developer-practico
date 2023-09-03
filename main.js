const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuCarritoIcon= document.querySelector('.navbar-shopping-cart');
const menuHamIcon= document.querySelector('.menu');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartDetail = document.querySelector('#shoppingCartContainer');
const cardContainer = document.querySelector('.cards-container')
const productDetailContainer = document.querySelector('#productDetail');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);

menuCarritoIcon.addEventListener('click',toggleAsideCarrito);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);

function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartDetail.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartDetail.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu (){

    const isAsideClosed = shoppingCartDetail.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartDetail.classList.add('inactive');
    }
    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive')
}
function toggleAsideCarrito(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

    shoppingCartDetail.classList.toggle('inactive')
}
function openProductDetailAside(){
    shoppingCartDetail.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
    mobileMenu.classList.add('inactive');
}
function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

/*       <div class="product-card">
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
      </div>*/



const productList =[];
productList.push({

    name: 'TV',
    price:  1220,
    image: 'https://pixabay.com/get/g1fb55f5aba3a3f1cec1b1dcfbaf4ddea65831e0f90bb7c79cb4921f2d6519dc4b64ca523ef7a383bf162b88a1b7458f1_1280.jpg',
});
productList.push({

    name: 'Portatil',
    price:  720,
    image: 'https://pixabay.com/get/g52f379c83b97b493a89ff26255320f3bd25716ee22aea2c12c1248497c88b4bd978f431fd3571326b2d87602349485db_1280.jpg',
});

productList.push({

    name: 'Mezclador de sonido',
    price:  1500,
    image: 'https://pixabay.com/get/g77a3e6a9124ee7c5fa9ea76c2681dace510742cfacd1fb3b7642e17809caad6985261148c2a6f749efb12919d0f80924e1da3c05a4a3089b03df7eaa8a19c2f0_1280.jpg',
});
productList.push({

    name: 'PC',
    price:  920,
    image: 'https://pixabay.com/get/g4a02a9102c2f317e44516245987da848800055200b3f497df6af0963398f78aa5afdaf471c2a44f1da171c2e0e6134eaf675263d97357f5dd4b3615143b7da2f_1280.jpg',
});

productList.push({

    name: 'Celular',
    price:  620,
    image: 'https://pixabay.com/get/g4b85a8309f05d259bac0a387d617a6dcb0d635645062f749c76bd3b58dc254033f7c224bbb694f424be8a05e3bc073c41372c7f33d50bb9ca4eb7d84315c0acc_1280.jpg',
});
productList.push({

    name: 'Disco Duro',
    price:  120,
    image: 'https://pixabay.com/get/gd78f657721cb005af119873c1ec70d8322b09982600b1dc3e818a9f384326109733b5115ccff82cb30c6b33f7c80fcb0_1280.jpg',
});
function renderProducts(arr){

    for (const product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

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

        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src','./icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCard);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardContainer.appendChild(productCard);    

        
    }
}

renderProducts(productList);
