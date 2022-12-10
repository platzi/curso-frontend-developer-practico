const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const asideShopingCart = document.querySelector('#shoppingCart');
const asideProductDetail = document.querySelector('#productDetail');
const shoppingCartIcon = document.querySelector('.shoppingCart');
const cardsContainer = document.querySelector('.cards-container');
const productDetailClosedIcon = document.querySelector('.closed');


navEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
shoppingCartIcon.addEventListener('click', toggleAside);
productDetailClosedIcon.addEventListener('click', closeProductDetailAside);


function toggleDesktopMenu(){
    const isAsideInactive = asideShopingCart.classList.contains('inactive')
    const isProductDetailAside = asideProductDetail.classList.contains('inactive');
    if (!isAsideInactive){
        asideShopingCart.classList.add('inactive')
    }if (!isProductDetailAside){
        asideProductDetail.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');

}
function toggleMobileMenu(){
    const isAsideInactive = asideShopingCart.classList.contains('inactive')
    const isProductDetailAside = asideProductDetail.classList.contains('inactive');
    if (!isAsideInactive){
        asideShopingCart.classList.add('inactive')
    }if (!isProductDetailAside){
        asideProductDetail.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive');

}
function toggleAside() {
    const isMobileMenuInactive = mobileMenu.classList.contains('inactive')
    const isDesktopmenuInactive = desktopMenu.classList.contains('inactive')
    const isProductDetailAside = asideProductDetail.classList.contains('inactive');

    if (!isMobileMenuInactive){
        mobileMenu.classList.add('inactive')
    } if (!isDesktopmenuInactive){
        desktopMenu.classList.add('inactive')
    }if (!isProductDetailAside){
        asideProductDetail.classList.add('inactive')
    }
    asideShopingCart.classList.toggle('inactive');
    
}

function openProductDetailAside () {
    const isMobileMenuInactive = mobileMenu.classList.contains('inactive')
    const isDesktopmenuInactive = desktopMenu.classList.contains('inactive')
    const isAsideInactive = asideShopingCart.classList.contains('inactive')
    if (!isMobileMenuInactive){
        mobileMenu.classList.add('inactive')
    } if (!isDesktopmenuInactive){
        desktopMenu.classList.add('inactive')
    }if (!isAsideInactive){
        asideShopingCart.classList.add('inactive')
    }
    asideProductDetail.classList.remove('inactive')

}

function closeProductDetailAside(){
    asideProductDetail.classList.add('inactive');
}

const productList = [];

productList.push({
    name: 'bike',
    price: 120.00,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'computer',
    price: 1200.00,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'phone',
    price: 520.00,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});



function renderProducts (arr){
for (product of productList) {
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

renderProducts(productList);