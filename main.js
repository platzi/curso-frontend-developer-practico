const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const cartMenuIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartDetail = document.querySelector('.shopping-cart-detail');
const productDetail = document.querySelector('.product-detail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const cardsContainer = document.querySelector('.cards-container');
const productDetailImage = document.querySelector('.product-detail > img');
const productDetailPrice = document.querySelector('#product-detail-price');
const productDetailName = document.querySelector('#product-detail-name');


menuEmail.addEventListener('click', toggleDesktopMenu);
mobileMenuIcon.addEventListener('click', toggleMobileMenu);
cartMenuIcon.addEventListener('click', toggleCartMenu);
productDetailCloseIcon.addEventListener('click', closeProductDetail);

function toggleDesktopMenu() {
    shoppingCartDetail.classList.add('inactive');
    shoppingCartDetail.classList.remove('menu-animation');
    productDetail.classList.add('inactive');
    productDetail.classList.remove('menu-animation');
    desktopMenu.classList.toggle('inactive');
    desktopMenu.classList.toggle('menu-animation');
}

function toggleMobileMenu() {
    shoppingCartDetail.classList.add('inactive');
    shoppingCartDetail.classList.remove('menu-animation');
    productDetail.classList.add('inactive');
    productDetail.classList.remove('menu-animation');
    mobileMenu.classList.toggle('inactive');
    mobileMenu.classList.toggle('menu-animation');
}

function toggleCartMenu() {
    mobileMenu.classList.add('inactive');
    mobileMenu.classList.remove('menu-animation');
    desktopMenu.classList.add('inactive');
    desktopMenu.classList.remove('menu-animation');
    productDetail.classList.add('inactive');
    productDetail.classList.remove('menu-animation');
    shoppingCartDetail.classList.toggle('inactive');  
    shoppingCartDetail.classList.toggle('menu-animation');
}

function openProductDetailAside(event) {
    shoppingCartDetail.classList.add('inactive');
    shoppingCartDetail.classList.remove('menu-animation');
    desktopMenu.classList.add('inactive');
    desktopMenu.classList.remove('menu-animation');
    mobileMenu.classList.add('inactive');
    mobileMenu.classList.remove('menu-animation');
    productDetail.classList.remove('inactive');
    setProductInfo(event);
}

function setProductInfo(data) {
    const product = data.path.find(element => element.className === 'product-card');
    const productImage = product.querySelector('img');
    const productName = product.querySelector('.product-info div p:nth-child(2)');
    const productPrice = product.querySelector('.product-info div p:nth-child(1)');
    productDetailImage.setAttribute('src', productImage.getAttribute('src'));
    productDetailPrice.innerText = productName.innerText;
    productDetailName.innerText = productPrice.innerText;
}

function closeProductDetail() {
    productDetail.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Plane',
    price: 300000,
    image: 'https://images.pexels.com/photos/5590465/pexels-photo-5590465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Car',
    price: 15000,
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

/* <div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div> */

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
        productPrice.innerText = `$${product.price}`;
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