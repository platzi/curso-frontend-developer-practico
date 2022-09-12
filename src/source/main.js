const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurguer = document.querySelector('.menu');
const menuCart = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const productDetailContainer = document.querySelector('#productDetail');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cartContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurguer.addEventListener('click', toggleMobileMenu);
menuCart.addEventListener('click', toggleCartMenu);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
    const isAsideMenuClosed = shoppingCartContainer.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isAsideMenuClosed) {
        shoppingCartContainer.classList.add('inactive');
    } else if (!isProductDetailClosed) {
        closeProductDetailAside();
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideMenuClosed = shoppingCartContainer.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isAsideMenuClosed) {
        shoppingCartContainer.classList.add('inactive');
    } else if (!isProductDetailClosed) {
        closeProductDetailAside();
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCartMenu() {
    const isMenuEmailClosed = desktopMenu.classList.contains('inactive');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    } else if (!isMenuEmailClosed) {
        desktopMenu.classList.add('inactive');
    } else if (!isProductDetailClosed) {
        closeProductDetailAside();
    }

    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside(event) {
    const isMenuEmailClosed = desktopMenu.classList.contains('inactive');
    const isAsideMenuClosed = shoppingCartContainer.classList.contains('inactive');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isAsideMenuClosed) {
        shoppingCartContainer.classList.add('inactive');
    } else if (!isMenuEmailClosed) {
        desktopMenu.classList.add('inactive');
    } else if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    let idProductDetail = Number(this.getAttribute("id"));
    renderValidating(idProductDetail);
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120.00,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Guitar',
    price: 1200.00,
    image: 'https://images.pexels.com/photos/165971/pexels-photo-165971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
});
productList.push({
    name: 'Desk',
    price: 500.00,
    image: 'https://images.pexels.com/photos/1422286/pexels-photo-1422286.jpeg',
});

function renderProducts(arr) {
    for (product in arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.classList.add('product-number-' + product);

        const productImg = document.createElement('img');
        productImg.setAttribute('src', arr[product].image);
        productImg.setAttribute('id', product);
        productImg.addEventListener('click', openProductDetailAside);
        // productImg.id = product;

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + arr[product].price;
        const productName = document.createElement('p');
        productName.innerText = arr[product].name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImageCart = document.createElement('img');
        productImageCart.setAttribute('src', '../../icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImageCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cartContainer.appendChild(productCard);
    }
}

function renderDetailsProducts(arr, id) {
    console.log('desde renderDetails' + ' ' + id);
    // for (detailsProduct in arr) {
        const detailProductCloseIcon = document.createElement('img');
        detailProductCloseIcon.setAttribute('src', '../../icons/icon_close.png');
        detailProductCloseIcon.setAttribute('alt', 'close');

        const detailProductImage = document.createElement('img');
        detailProductImage.setAttribute('src', arr[id].image); //detailsProduct.image
        detailProductImage.setAttribute('alt', 'detailsProduct.name'); //detailsProduct.image

        const productInfoDetail = document.createElement('div');
        productInfoDetail.classList.add('product-info');

        const productDetailPrice = document.createElement('p');
        productDetailPrice.innerText = '$' + 'detailsProduct.price'; //aqui
        const productDetailName = document.createElement('p');
        productDetailName.innerText = 'detailsProduct.name'; //aqui
        const productDetailDescription = document.createElement('p');
        productDetailDescription.innerText = 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.';

        const buttonDetailProduct = document.createElement('button');
        buttonDetailProduct.classList.add('primary-button');
        buttonDetailProduct.classList.add('add-to-cart-button');
        
        const addToCartIcon = document.createElement('img');
        addToCartIcon.setAttribute('alt', 'Add-to-card');
        addToCartIcon.setAttribute('src', '../../icons/bt_add_to_cart.svg');
        
        const textButton = buttonDetailProduct.appendChild(document.createTextNode('Add to Card'));
        buttonDetailProduct.insertBefore(addToCartIcon, textButton);
        
        productInfoDetail.appendChild(productDetailPrice);
        productInfoDetail.appendChild(productDetailName);
        productInfoDetail.appendChild(productDetailDescription);
        productInfoDetail.appendChild(buttonDetailProduct);

        productDetailCloseIcon.appendChild(detailProductCloseIcon);
        productDetailContainer.appendChild(detailProductImage);
        productDetailContainer.appendChild(productInfoDetail);
    //}
}
function renderValidating(id){
    console.log('desde el validating' + ' ' + id);
    if (id <= productList.length){
        renderDetailsProducts(productList, id);
    }
}

renderProducts(productList);