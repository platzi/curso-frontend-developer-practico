const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menuIcon');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productCardContainer = document.querySelector('#productDetail');
const productDetailClose = document.querySelector('.product-detail-close');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', togglemobileMenu);
shoppingCart.addEventListener('click', toggleproductDetail);
productDetailClose.addEventListener('click', closeProductDeatailAside);


function toggleDesktopMenu(){
    const isAshoppingCartContainerClosed = shoppingCartContainer.classList.contains('incative');

    if(!isAshoppingCartContainerClosed){
        productDetail.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}
function togglemobileMenu(){
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('incative');

    if(!isshoppingCartContainerClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    
    closeProductDeatailAside();

    mobileMenu.classList.toggle('inactive');
}
function toggleproductDetail(){
    const isMobileMenuClosed = mobileMenu.classList.contains('incative');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    const isProductDeatailClosed = productCardContainer.classList.contains('incative');

    if(!isMobileMenuClosed){
        productCardContainer.classList.add('inactive');
    }


    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');
    productCardContainer.classList.remove('inactive');
}

function closeProductDeatailAside(){
    productCardContainer.classList.add('inactive');
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});  
productList.push({
    name: 'Coso',
    price: 11220,
    image: "https://images.pexels.com/photos/6249454/pexels-photo-6249454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
}); 
productList.push({
    name: 'Mas coso',
    price: 13440,
    image: "https://images.pexels.com/photos/2638026/pexels-photo-2638026.jpeg",
}); 

/* <div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="../icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div>  */


for (product of productList){
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
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', "../icons/bt_add_to_cart.svg" );

    productInfoFigure.appendChild(productImgCart) ;

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}
