const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuImg = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuShoppingCart= document.querySelector('.navbar-shopping-cart');
const shoppingCartMenu = document.querySelector('.product-detail');

const cardsContainer = document.querySelector('.cards-container');

const productDetailAside = document.querySelector('.product-detail-aside');
const productDetailAsideClose = document.querySelector('.product-detail-aside-close');



menuEmail.addEventListener('click', toggleDesktopMenu)
menuImg.addEventListener('click', toggleMobileMenu)
menuShoppingCart.addEventListener('click', toggleShoppingCartMenu)

productDetailAsideClose.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    //mobileMenu.classList.toggle('inactive');
    const isShoppingCartMenuClosed = shoppingCartMenu.classList.contains('inactive');
    if (!isShoppingCartMenuClosed){
       shoppingCartMenu.classList.add('inactive');       
    }            
    mobileMenu.classList.toggle('inactive');

    productDetailAside.classList.add('inactive');


}

function toggleShoppingCartMenu(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    if (!isMobileMenuClosed){
       mobileMenu.classList.add('inactive');       
    }            
    shoppingCartMenu.classList.toggle('inactive');


    const isProductDetailAsideClosed = productDetailAside.classList.contains('inactive');
    if (!isProductDetailAsideClosed){
        productDetailAside.classList.add('inactive');       
    }            
    //shoppingCartMenu.classList.toggle('inactive');


}



const productList =[];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'TV',
    price: 1200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Compu',
    price: 5200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});



function renderProducts(arr){

    for (product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        // product= {name, price, image} -> product.image
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
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

function openProductDetailAside(){
    productDetailAside.classList.remove('inactive');
    shoppingCartMenu.classList.add('inactive');


}

function closeProductDetailAside(){
    productDetailAside.classList.add('inactive');

}


renderProducts(productList);