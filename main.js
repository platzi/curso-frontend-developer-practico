const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const mainMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

const productDetailContainer = document.querySelector('.product-details');
const productDetailClose = document.querySelector('.product-details-close');
const cardsContainer = document.querySelector('.cards-container');



menuEmail.addEventListener('click', toggleDesktopMenu);
mainMenu.addEventListener('click', toggleMainMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailClose.addEventListener('click', closeProductDetail)

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive')
    } 
    const isProductDetailsDlosed = productDetailContainer.classList.contains('inactive'); 
    
    if(!isProductDetailsDlosed) {
        productDetailContainer.classList.toggle('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMainMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive')
    }  
    
    const isProductDetailsDlosed = productDetailContainer.classList.contains('inactive'); 

    if (!isProductDetailsDlosed) {
        productDetailContainer.classList.toggle('inactive');
    }

    mobileMenu.classList.toggle('inactive');

}
   
function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive'); 

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    } 
    
    const isProductDetailsDlosed = productDetailContainer.classList.contains('inactive'); 

    if (!isProductDetailsDlosed) {
        productDetailContainer.classList.toggle('inactive');
    }

    aside.classList.toggle('inactive');
 
}
function openProductDetailAside() {
    aside.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetail() {
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push( {
    name: "bike",
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push( {
    name: "balon",
    price: 60,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push( {
    name: "consola",
    price: 1200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr) {
    for (product of arr) {
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


function toggleMainContainer() {
    const isMainContainerClosed = productdetail2.classList.contains('inactive');

    if (!isMainContainerClosed) {
        mobileMenu.classList.add('inactive')
        aside.classList.add('inactive')
    }
}   




















