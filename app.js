const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const MenuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer= document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
MenuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);

function toggleDesktopMenu(){

    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){

    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){

    const IsMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!IsMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    const IsProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!IsProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside(){

    shoppingCartContainer.classList.add('inactive');

    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

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
*/

const productList = [];
productList.push({  
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
}) 

productList.push({  
    name: 'Balon',
    price: 320,
    image: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/edf69e93a0624f4f972aae680086e3f1_9366/al-rihla-competition-ball.jpg',
}) 

productList.push({  
    name: 'Computador',
    price: 620,
    image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6504/6504566_sd.jpg;maxHeight=640;maxWidth=550',
}) 

productList.push({  
    name: 'Teclado Mecanico',
    price: 60,
    image: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/ba46d704-e254-4c21-859f-c2ebb5d011e3.__CR0,0,970,600_PT0_SX970_V1___.png',
}) 

productList.push({  
    name: 'Mouse Gaming',
    price: 70,
    image: 'https://resource.logitechg.com/w_692,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/g502-hero-kda/g502-hero-kda-gallery-01.png?v=1',
}) 

productList.push({  
    name: 'Mochila Dell',
    price: 13,
    image: 'https://732166-2448411-raikfcquaxqncofqfm.stackpathdns.com/pub/media/mf_webp/png/media/catalog/product/cache/0d911eba3dcfc918870446451461cd49/0/6/06601-899.webp',
}) 

function renderProduct(array){
    for (product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        //product = {name,price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
       
        //
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = 's' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCard);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProduct(productList);