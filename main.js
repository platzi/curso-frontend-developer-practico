const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon=document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shopping-cart-container')
const productDetailContainer=document.querySelector('#product-detail')
const container = document.querySelector('.cards-container')
const productDetailClose= document.querySelector ('.product-detail-close')

menuEmail.addEventListener('click', toogleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleShopCart);
productDetailClose.addEventListener('click', closeProductDetail)

function toogleDesktopMenu() {
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive')
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive')
    if (!isshoppingCartContainerClosed) {
            shoppingCartContainer.classList.add('inactive')
    }
    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')
}
function toggleMobileMenu() {
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive')
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive')
    if (!isshoppingCartContainerClosed) {
            shoppingCartContainer.classList.add('inactive')
    }
    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive')
}
function toggleShopCart() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuColsed = desktopMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive')
    
    //shoppingCartContainer.classList.toggle('inactive')
    if (!isMobileMenuClosed) {
            mobileMenu.classList.add('inactive')
    }
    if (!isDesktopMenuColsed) {
            desktopMenu.classList.add('inactive')
    }
    if (!isProductDetailClosed) {
            productDetailContainer.classList.add('inactive')
        }
    shoppingCartContainer.classList.toggle('inactive')
}

function closeProductDetail() {
    productDetailContainer.classList.add('inactive')
}


// Request al Backend
const productList = [];
productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'calidad',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'pura',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'de ',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'la ',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'llanura',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
/*<div class="product-card">
                <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="">
                <div class="product-info">
                    <div>
                        <p>$120,00</p>
                        <p>Bike</p>
                    </div>
                    <figure>
                        <img src="./icons/bt_add_to_cart.svg" alt="">
                    </figure>
                </div>
            </div>*/

function openProductDetailAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuColsed = desktopMenu.classList.contains('inactive');
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive')
    if (!isMobileMenuClosed) {
            mobileMenu.classList.add('inactive')
    }
    if (!isDesktopMenuColsed) {
            desktopMenu.classList.add('inactive')
    }
    if (!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive')
    }
    productDetailContainer.classList.remove('inactive')
}

function renderProducts(productList) {
    for (let product of productList) {
        const productoCard = document.createElement('div');
        productoCard.classList.add('product-card');

        const img = document.createElement('img');
        img.setAttribute('src', product.image);
        img.addEventListener('click', openProductDetailAside);

    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

    


    

        const productInfoDiv = document.createElement('div');
        const productInfonName = document.createElement('p');
        productInfonName.innerHTML = product.name;
        const productInfoPrice = document.createElement('p');
        productInfoPrice.innerHTML = '$' + product.price;
    
        productInfoDiv.append(productInfonName, productInfoPrice);

        const productInfoFigure = document.createElement('figure');
        const imgLogo = document.createElement('img');
        imgLogo.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(imgLogo);

        productInfo.append(productInfoDiv, productInfoFigure);

        productoCard.append(img, productInfo)
        container.appendChild(productoCard)
    }
}

renderProducts(productList)