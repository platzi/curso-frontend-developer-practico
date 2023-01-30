const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const iconCarMenu = document.querySelector('.navbar-shopping-cart');
const productDetailIcon = document.querySelector('.product-detail-close');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');

menuEmail.addEventListener('click', toggleDesktopMenu);
iconMenu.addEventListener('click', toggleMobileMenu);
iconCarMenu.addEventListener('click', toggleCarShoppingCartContainer);
productDetailContainer.addEventListener('click',closeProductDetailAsaid);


function toggleDesktopMenu (){
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
   
    if(!isShoppingCartContainerClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu (){
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
   
    if(!isShoppingCartContainerClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAsaid();
    mobileMenu.classList.toggle('inactive');
}

function toggleCarShoppingCartContainer (){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
   
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
  
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
   
    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
    
}

function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');
  
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAsaid(){
    productDetailContainer.classList.add('inactive');
}

const productList= [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Computer',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Phone',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

function rederProducts(productList){
    for (const product of productList) {

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside)

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
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }
}

rederProducts(productList);