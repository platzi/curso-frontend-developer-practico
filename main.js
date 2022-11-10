const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const productDetailItem = document.querySelector('.product-detail-item');
const productDetailCloseIcon = document.querySelector('.product-detail-close-icon');


menuEmail.addEventListener('click', toogleDesktopMenu);

menu.addEventListener('click', toogleMobileMenu);

menuCarritoIcon.addEventListener('click', toogleCarritoMenu);

cardsContainer.addEventListener('click', openProductDetailItem);

productDetailCloseIcon.addEventListener('click', closeProductDetailItem);



//Así lo escribió juandc
function toogleDesktopMenu(){
    const menuDetailItemClosed = productDetailItem.classList.contains('inactive');
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    if(!menuDetailItemClosed){
        productDetailItem.classList.add('inactive');
    };
    desktopMenu.classList.toggle('inactive');
};

//Así lo había escrito 
/* function toogleDesktopMenu(){
   if (desktopMenu.classList.contains('inactive')){
    desktopMenu.classList.remove('inactive')
    } else {
    desktopMenu.classList.add('inactive');
   }     
}; */

function toogleMobileMenu(){
    const menuDetailItemClosed = productDetailItem.classList.contains('inactive');
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed){
        aside.classList.add('inactive');
    };
    if(!menuDetailItemClosed){
        productDetailItem.classList.add('inactive');
    };
    mobileMenu.classList.toggle('inactive');
};

function toogleCarritoMenu(){
    const menuDetailItemClosed = productDetailItem.classList.contains('inactive');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive'); 
    const desktopMenuClosed = desktopMenu.classList.contains('inactive');
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    };
    if(!desktopMenuClosed){
        desktopMenu.classList.add('inactive');
    };
    if(!menuDetailItemClosed){
        productDetailItem.classList.add('inactive');
    };
    aside.classList.toggle('inactive');
};

function openProductDetailItem(){
    productDetailItem.classList.remove('inactive');
};
function closeProductDetailItem(){
    productDetailItem.classList.add('inactive');
};

//Para optimizar el html insertaremos los productos desde js

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Guitar',
    price: 499,
    image: 'https://m.media-amazon.com/images/I/81iFA1sBZoL.jpg'
});
productList.push({
    name: 'MinilabIV',
    price: 99,
    image: 'https://files.soniccdn.com/images/articles/original/42422.jpg'
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Guitar',
    price: 499,
    image: 'https://m.media-amazon.com/images/I/81iFA1sBZoL.jpg'
});
productList.push({
    name: 'MinilabIV',
    price: 99,
    image: 'https://files.soniccdn.com/images/articles/original/42422.jpg'
});


/*<div class="product-card">
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

// Escribiendo la etiqutea de productos para insertarla desde JS



function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
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
};

renderProducts(productList);