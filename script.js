const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContinershoppingCartContiner = document.querySelector('#shoppingCartContiner');
const cardasContainer = document.querySelector('.cards-container');
const openProductDetailContainer = document.querySelector('#productDetail');
const productDeatileCloseIcon = document.querySelector('.product-detail-close');





menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleasaid);
productDeatileCloseIcon.addEventListener('click', closeProductDetailAsaide);

function toggleDesktopMenu() {

    const isAsaidClose = shoppingCartContiner.classList.contains('inactive');

    if (!isAsaidClose) {
        shoppingCartContiner.classList.add('inactive');
    
    }
    
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsaidClose = shoppingCartContiner.classList.contains('inactive');

    if (!isAsaidClose) {
        shoppingCartContiner.classList.add('inactive');
    
    }

    openProductDetailContainer.classList.add('inactive');

    mobileMenu.classList.toggle('inactive');
}

function toggleasaid() {
    const ismobileMenuclose = mobileMenu.classList.contains('inactive');

    if (!ismobileMenuclose) {
        mobileMenu.classList.add('inactive');
    
    }
    
    
    const isproducDeatileClose = openProductDetailContainer.classList.contains('inactive');
    
    if (!isproducDeatileClose) {
        openProductDetailContainer.classList.add('inactive');
        
    }
    
    shoppingCartContiner.classList.toggle('inactive');
}

const productlist = [];

productlist.push({
    name: 'Bake',
    price: 120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productlist.push({
    name: 'pantalla',
    price: 220,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productlist.push({
    name: 'compu',
    price: 620,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function openProductDetailAsaide() {
    shoppingCartContiner.classList.add('inactive');
    openProductDetailContainer.classList.remove('inactive');
}

function closeProductDetailAsaide() {
    openProductDetailContainer.classList.add('inactive');
}

function renderProducts(arr) {
    for(product of productlist){
        const productcard = document.createElement('div');
        productcard.classList.add('product-card')
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAsaide);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productFigure.appendChild(productImgCard);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productFigure);
    
        productcard.appendChild(productImg);
        productcard.appendChild(productInfo);
    
        cardasContainer.appendChild(productcard);
    
    }
}

renderProducts(productlist);