const navEmail = document.querySelector('.navbar-email'); 
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const burguerMenu = document.querySelector('.menu');
const menuShoppingIcon = document.querySelector('.navbar-shopping-cart');
const menuShopping = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('.product-detail-aside');
const asideClose = document.querySelector('.product-detail-aside-close');


navEmail.addEventListener('click',toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuShoppingIcon.addEventListener('click', toggleShoppingMenu);
asideClose.addEventListener('click', closeProductDetailAside);


function toggleDesktopMenu(){
    isAsideMenuClosed = menuShopping.classList.contains('inactive'); 
    isProductDetailClosed = productDetail.classList.contains('inactive');

    if(!isAsideMenuClosed || !isProductDetailClosed){
        menuShopping.classList.add('inactive'); 
        productDetail.classList.add('inactive');
        desktopMenu.classList.remove('inactive');
    }
    else{
        desktopMenu.classList.toggle('inactive');
    }
};

function toggleMobileMenu(){
    isAsideMenuClosed = menuShopping.classList.contains('inactive'); 
    isProductDetailClosed = productDetail.classList.contains('inactive');

    if(!isAsideMenuClosed || !isProductDetailClosed){
        menuShopping.classList.add('inactive');
        productDetail.classList.add('inactive');
    };

    mobileMenu.classList.toggle('inactive');
};

function toggleShoppingMenu(){
    isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    isProductDetailClosed = productDetail.classList.contains('inactive');

    if(!isMobileMenuClosed || !isProductDetailClosed){
        mobileMenu.classList.add('inactive');
        productDetail.classList.add('inactive');
    }

    menuShopping.classList.toggle('inactive');
};

function openProductDetailAside(){
    productDetail.classList.remove('inactive');
    menuShopping.classList.add('inactive');
};

function closeProductDetailAside(){
    productDetail.classList.add('inactive');
};



const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},
{
    name: 'TV',
    price: 220,
    image: 'https://images.pexels.com/photos/704555/pexels-photo-704555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
},
{
    name: 'Computadora',
    price: 420,
    image: 'https://images.pexels.com/photos/1181216/pexels-photo-1181216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
}
);

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
    
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
        img.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure');
    
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', "./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(img);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    
    
    };
};

renderProducts(productList);