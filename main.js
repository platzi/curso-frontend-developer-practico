const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuLogo = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const minicartNav = document.querySelector('.navbar-shopping-cart');
const minicart = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const producdetailCloseIcon = document.querySelector('.product-detail-close');


/* ---------- desplegable cuenta  --------  */ 
menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    const isMinicartClosed = minicart.classList.contains('inactive');
    const isprdoducDetailAsideClosed = productDetailContainer.classList.contains('inactive'); 
    if(!isMinicartClosed){
        minicart.classList.add('inactive');
    }
    if(!isprdoducDetailAsideClosed){
        productDetailContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}
/* ---------- fin desplegable cuenta  --------  */ 

/* ---------- desplegable menú  --------  */ 

menuLogo.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){
    const isMinicartClosed = minicart.classList.contains('inactive');
    const isprdoducDetailAsideClosed = productDetailContainer.classList.contains('inactive'); 

    if(!isMinicartClosed){
        minicart.classList.add('inactive');
    }

    if(!isprdoducDetailAsideClosed){
        productDetailContainer.classList.add('inactive');
    }
   
    mobileMenu.classList.toggle('inactive');
}
/* ---------- fin desplegable menu  --------  */ 

/* ---------- desplegable carrito  --------  */ 

minicartNav.addEventListener('click', toggleMinicart );

function toggleMinicart(){
    const isMenuMobileClosed = mobileMenu.classList.contains('inactive');
    const isDeskMenuClosed = desktopMenu.classList.contains('inactive');
    const isprdoducDetailAsideClosed = productDetailContainer.classList.contains('inactive'); 

    if(!isMenuMobileClosed){
        mobileMenu.classList.add('inactive')
    }
    if(!isDeskMenuClosed){
        desktopMenu.classList.add('inactive')
    }
    if(!isprdoducDetailAsideClosed){
        productDetailContainer.classList.add('inactive');
    }

    minicart.classList.toggle('inactive');
}

/* ---------- fin desplegable carrito  --------  */ 

/* ----- inicio detalle de producto ------------ */
producdetailCloseIcon.addEventListener('click', closeProductDetailAside);


function closeProductDetailAside(){
    
    const isMinicartClosed = minicart.classList.contains('inactive');
    const isDeskMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isMinicartClosed){
        minicart.classList.add('inactive');
    }
    if(!isDeskMenuClosed){
        desktopMenu.classList.add('inactive')
    }

    productDetailContainer.classList.add('inactive');
}

/* -------Fin detalle de produciot close */ 

/* ---------- Lista de productos ----------*/

const productList = [];
productList.push({
    name: 'Bike',
    precio: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Foo Album',
    precio: 120,
    image: 'https://w0.peakpx.com/wallpaper/839/853/HD-wallpaper-foo-fighters-logo-rock.jpg'
});
productList.push({
    name: 'Helmet',
    precio: 117,
    image: 'https://www.nemesisnow.com/media/catalog/product/cache/7c3262bc18147ce5dc018ae87bc5e673/b/5/b5846u1-1.jpg'
});


/*--------- Fin lista de prouctos ---------*/

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

/* Función para cerrar aside producdetail */
function openPrductDetailAside(){
menuLogo.classList.add('inactive');
minicart.classList.add('inactive'); 
productDetailContainer.classList.remove('inactive');
}
/* Función para cerrar aside producdetail */



for(product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openPrductDetailAside);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.precio;
    const productName = document.createElement('p');
    productName.innerText =  product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImageCart = document.createElement('img');
    productImageCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    

    productInfoFigure.appendChild(productImageCart);

    cardsContainer.appendChild(productCard);
}