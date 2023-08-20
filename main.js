const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const bntMenuMobile = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
const btnShoppingCart = document.querySelector('.navbar-shopping-cart');
const asideProductDetail = document.querySelector('.product-detail');
const cardContainer = document.querySelector('.cards-container');

navEmail.addEventListener('click', toggleDesktopMenu);
bntMenuMobile.addEventListener('click', toggleMobileMenu);
btnShoppingCart.addEventListener('click', toggleAsideProductDetail);

function toggleDesktopMenu(){
    const isAsideProductDetailClosed = asideProductDetail.classList.contains('inactive');
    if(!isAsideProductDetailClosed){
        asideProductDetail.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu(){
    const isAsideProductDetailClosed = asideProductDetail.classList.contains('inactive');
    if(!isAsideProductDetailClosed){
        asideProductDetail.classList.add('inactive');
    }
    menuMobile.classList.toggle('inactive');
}
function toggleAsideProductDetail(){
    const isMenuMobileClosed = menuMobile.classList.contains('inactive');
    const isDestopMenuClosed = desktopMenu.classList.contains('inactive')
    if(!isDestopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    if(!isMenuMobileClosed){
        menuMobile.classList.add('inactive');
    }
    asideProductDetail.classList.toggle('inactive');
}

/* Lista de productos */
const productList = [];
productList.push({
    name: 'Bicicleta',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

})
productList.push({
    name: 'Televisor antiguo',
    price: 220,
    image: 'https://images.pexels.com/photos/5211580/pexels-photo-5211580.jpeg',
    
})
productList.push({
    name: 'Computadora',
    price: 725,
    image: 'https://images.pexels.com/photos/13323672/pexels-photo-13323672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    
})

for(product of productList){
    /* Crear elementos */
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
    const productInfoFigure = document.createElement('figure');
    const productInfoFigureImg = document.createElement('img');
    productInfoFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg');

    /* Ordenar elementos */
    productInfoFigure.appendChild(productInfoFigureImg);
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure)
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    cardContainer.appendChild(productCard);
}