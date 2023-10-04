const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHam = document.querySelector('.menu'); //Variable para el menu hamburguesa
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart'); //Variable para el icono de carrito de compra
const asideProductDetail = document.querySelector('.product-detail');
const productDetailSecundary = document.querySelector('.product-detail-secundary');
const btnProductDetailClose = document.querySelector('.product-detail-close');
const cardsContainer = document.querySelector('.cards-container');

navEmail.addEventListener('click', toggleDesktopMenu);
menuHam.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleShoppingCart);

function toggleDesktopMenu(){
    const isDesktopMenuClosed = asideProductDetail.classList.contains('inactive');

    if(!isDesktopMenuClosed) {
        asideProductDetail.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
const isAsideCartClosed = asideProductDetail.classList.contains('inactive');

    if(!isAsideCartClosed) {
        asideProductDetail.classList.add('inactive');
    }

    const isProductDetalSecundaryClosed = productDetailSecundary.classList.contains('inactive');

    if (!isProductDetalSecundaryClosed) {
        productDetailSecundary.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart(){
const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
        //si mobileMenu esta abierto, hay que cerrarlo
    }

    const isProductDetalSecundaryClosed = productDetailSecundary.classList.contains('inactive');

    if (!isProductDetalSecundaryClosed) {
        productDetailSecundary.classList.add('inactive');
    }

    asideProductDetail.classList.toggle('inactive');
}

function openProductDetailSecundary() {
    asideProductDetail.classList.add('inactive');
    productDetailSecundary.classList.remove('inactive');
    mobileMenu.classList.add('inactive');
}

function closeProductDetailSecundary() {
    productDetailSecundary.classList.add('inactive');
}



const productList = [];
productList.push({
    name: 'Bike',
    price: 752,
    img: 'https://www.tubici.com/wp-content/uploads/2022/03/060688-BICICLETA-GW-ALLIGATOR-MTB-29-2X11-CON-OBSEQUIOS-1.jpg'
});
productList.push({
    name: 'Basketball (ball)',
    price: 120,
    img: 'https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/221544M678000_1/bristol-studio-ssense-exclusive-black-pebbled-basketball.jpg'
});
productList.push({
    name: 'Soccer Ball',
    price: 550,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Teamgeist-STG-CRO-AUS.jpg/1200px-Teamgeist-STG-CRO-AUS.jpg'
});
productList.push({
    name: 'Bat',
    price: 45,
    img: 'https://contents.mediadecathlon.com/p1914977/k$3630550ab5e09790c62b9c36012c3c03/bate-beisbol-ba150-10-plateado.jpg?format=auto&quality=40&f=800x800'
});
productList.push({
    name: 'Computer Monitor',
    price: 245,
    img: 'https://m.media-amazon.com/images/I/71sMlD+RzbL.jpg'
});
productList.push({
    name: 'Motherboard',
    price: 99,
    img: 'https://http2.mlstatic.com/D_NQ_NP_759386-MCO53952665042_022023-O.webp'
});
productList.push({
    name: 'Graphic Card',
    price: 203,
    img: 'https://cdn.coordiutil.com/imagen-tarjeta_video_rx_570_4gb_gygabyte_gaming-1772877-0-0-0-100.jpg'
});
productList.push({
    name: 'CPU',
    price: 240,
    img: 'https://c1.neweggimages.com/ProductImageCompressAll1280/19-113-499-V01.jpg'
});

function prodcutRender(arr) {
    /* <div class="product-card">
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
      </div> */
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.addEventListener('click', openProductDetailSecundary);
        btnProductDetailClose.addEventListener('click', closeProductDetailSecundary);
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.img);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productInfoFigure.appendChild(productImgCart);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

prodcutRender(productList);