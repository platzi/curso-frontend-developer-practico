const navEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');
const menuBurguerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartDetail = document.querySelector('#shoppingCartContainer');
const shoppingIcon = document.querySelector('.navbar-shopping-cart');
const productDetailContainer = document.querySelector('#productDetail');
const buttonProductDetailClosed = document.querySelector('.product-detail-close');
const cardsContainer = document.querySelector('.cards-container');


navEmail.addEventListener('click', toggleDesktopMenu);
menuBurguerIcon.addEventListener('click', toggleMobileMenu);
shoppingIcon.addEventListener('click', toggleAsideShoppingCart);
buttonProductDetailClosed.addEventListener('click', hideProductDetailContainer);

function hideProductDetailContainer(){
    productDetailContainer.classList.toggle('inactive');
}

function toggleProductDetail(){
    const isShoppingCartDetailOpen = !shoppingCartDetail.classList.contains('inactive');
    const isMenuDesktopOpen = !menuDesktop.classList.contains('inactive');
    const isProductDetailHiden = productDetailContainer.classList.contains('inactive');

    if(isMenuDesktopOpen){
        menuDesktop.classList.toggle('inactive');
    }

    if(isShoppingCartDetailOpen){
        shoppingCartDetail.classList.toggle('inactive');
    }

    if(isProductDetailHiden){
        productDetailContainer.classList.toggle('inactive');  
    }
}

function toggleMobileMenu(){
    const isAsideOpen = !shoppingCartDetail.classList.contains('inactive');
    if(isAsideOpen){
        shoppingCartDetail.classList.toggle('inactive');
    }
    mobileMenu.classList.toggle('inactive');   
    
}
 
function toggleDesktopMenu(){
    const isAsideOpen = !shoppingCartDetail.classList.contains('inactive');
    const isProductDetailOpen = !productDetailContainer.classList.contains('inactive');

    if(isAsideOpen){
        shoppingCartDetail.classList.toggle('inactive');
    }
    
    if(isProductDetailOpen){
        productDetailContainer.classList.toggle('inactive');   
    }

    menuDesktop.classList.toggle('inactive');   
}

function toggleAsideShoppingCart(){
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen = !menuDesktop.classList.contains('inactive');
    const isProductDetailOpen = !productDetailContainer.classList.contains('inactive');
    
    if(isMobileMenuOpen){
        mobileMenu.classList.toggle('inactive');
    }

    if(isDesktopMenuOpen){
        menuDesktop.classList.toggle('inactive');
    }

    if(isProductDetailOpen){
        productDetailContainer.classList.toggle('inactive');   
    }
    shoppingCartDetail.classList.toggle('inactive');

}

const productList = [];
addProducts();
addHtmlProducts(productList);

function addProducts(){
    for(let i= 0; i < 36; i++){
        productList.push({
            name : 'Bike',
            price: 120.00,
            img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        });
    }
}

function addHtmlProducts(products){

    for(product of products){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const img = document.createElement('img');
        img.setAttribute('src', product.img);
        img.addEventListener('click', toggleProductDetail);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productName);
        productInfoDiv.appendChild(productPrice);


        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(img);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);

    }
}


