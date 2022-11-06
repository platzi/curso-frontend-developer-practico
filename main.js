const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const producDetailCloseIcon = document.querySelector('.product-detail-close');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const producDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
producDetailCloseIcon.addEventListener('click' ,closeProducDetailAside);


function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.toggle('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.toggle('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    closeProducDetailAside();

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside () {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    const isProducDetailClosed = producDetailContainer.classList.contains('inactive');

    if (!isProducDetailClosed) {
        producDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside () {
    shoppingCartContainer.classList.add('inactive');
    producDetailContainer.classList.remove('inactive');
}

function closeProducDetailAside () {
    producDetailContainer.classList.add('inactive');
}



const productList = [];
productList.push({
    name: 'Car',
    price: 35000,
    Image: 'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',

});
productList.push({
    name: 'BMW',
    price: 22000,
    Image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg',

});
productList.push({
    name: 'Compu',
    price: 420,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

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
*/

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div'); 
        productCard.classList.add('product-card');
    
        // product= {name, price, image} -> product.image 
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.Image);
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
