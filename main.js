const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');
const productDetailCloseIcon = document.querySelector('.product-detail-close')

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);


function toggleDesktopMenu() {
   desktopMenu.classList.toggle('inactive');
   shoppingCartContainer.classList.add('inactive');
   productDetailContainer.classList.add('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}

function toggleCarritoAside() {
    shoppingCartContainer.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}

function openProductDetailAside() {
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    shoppingCartContainer.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}



const productList = [];
productList.push ({
    name: 'bike' ,
    price: 120 ,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' ,
});
productList.push ({
    name: 'compu' ,
    price: 620 ,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' ,
});
productList.push ({
    name: 'tv' ,
    price: 320 ,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' ,
});


function renderProducts (arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card')
     
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click',openProductDetailAside);
     
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
     
        const productInfoDiv = document.createElement('div');
     
         const productPrice = document.createElement('p');
         productPrice.innerText = '$' + product.price;
         const productName = document.createElement('p');
          productName.innerText = product.name;
    
         productInfoDiv.append(productPrice, productName);
     
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
     
        productInfoFigure.append(productImgCart);
     
        productInfo.append(productInfoDiv, productInfoFigure);
        productCard.append(productImg, productInfo);
     
       cardsContainer.append(productCard);
     }
     
}

renderProducts (productList)