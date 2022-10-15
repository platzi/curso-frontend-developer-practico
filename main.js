const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close')

menuEmail.addEventListener('click', toggleDesktopMenu);
iconMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    
    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
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

function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive');

    productDetailContainer.classList.remove('inactive');
}
function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

const productList = [];

productList.push({
    name: 'Maskking High Pro',
    flavour: 'Mixed Berry Ice',
    price: 80,
    image: "https://gorillazvape.com/wp-content/uploads/2022/02/1080-18-150x150.png",

});
productList.push({
    name: 'Maskking High Pro',
    flavour: 'Banana',
    price: 80,
    image: "https://gorillazvape.com/wp-content/uploads/2022/02/1080-18-150x150.png",

});
productList.push({
    name: 'Maskking High Pro',
    flavour: 'Grape',
    price: 80,
    image: "https://gorillazvape.com/wp-content/uploads/2022/02/1080-18-150x150.png",

});
productList.push({
    name: 'Maskking High Pro',
    flavour: 'Watermelon',
    price: 80,
    image: "https://gorillazvape.com/wp-content/uploads/2022/02/1080-18-150x150.png",

});
productList.push({
    name: 'Maskking High Pro',
    flavour: 'Mango',
    price: 80,
    image: "https://gorillazvape.com/wp-content/uploads/2022/02/1080-18-150x150.png",

});

/* <div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
        <div>
        <p>$120,00</p>
        <p>Bike</p>
        <p>Mixed Berry Ice</p>
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
        // product = {name,price,image} -> product.image
        productImg.setAttribute('src', product.image);
        // Eventos
        productImg.addEventListener('click', openProductDetailAside)
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        const productFlavour = document.createElement('p');
        productFlavour.innerText = product.flavour;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        productInfoDiv.appendChild(productFlavour);
    
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