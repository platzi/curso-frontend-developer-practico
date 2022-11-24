const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoshoppingCartContainer);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isshoppingCartContainerClosed) {
      shoppingCartContainer.classList.add('inactive');
    }
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
    if (!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive'); 
      }
      const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoshoppingCartContainer() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside () {
    shoppingCartContainer.classList.add('inactive')
    productDetailContainer.classList.remove('inactive');
}
function closeProductDetailAside () {
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push ({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push ({
    name: 'Screen',
    price: 300,
    image: 'https://images.pexels.com/photos/1999463/pexels-photo-1999463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push ({
    name: 'Car',
    price: 2000,
    image: 'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push ({
    name: 'Xbox',
    price: 150,
    image: 'https://images.pexels.com/photos/5626726/pexels-photo-5626726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push ({
    name: 'Laptop',
    price: 250,
    image: 'https://images.pexels.com/photos/40185/mac-freelancer-macintosh-macbook-40185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push ({
    name: 'Tent',
    price: 100,
    image: 'https://images.pexels.com/photos/2422265/pexels-photo-2422265.jpeg?auto=compress&cs=tinysrgb&w=600'
});

function renderProducts(arr) {for(product of arr) {
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
    
    productInfoDiv.append(productPrice, productName);   
    
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv, productInfoFigure);
        
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    cardsContainer.appendChild(productCard);}}

renderProducts(productList);