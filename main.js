/*+++++++++++++++++++++Setup Desktop++++++++++++++++++++++++++*/
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

/*+++++++++++++++++++++Setup Mobile++++++++++++++++++++++++++*/
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

/*+++++++++++++++++++++Setuo Ambos++++++++++++++++++++++++++*/
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

/*+++++++++++++++++++++addEventListener++++++++++++++++++++++++++*/
menuEmail.addEventListener('click', toggleDesktopMenu);     /* Desktop menu */
menuHamIcon.addEventListener('click', toggleMobileMenu);    /* Mobile menu */
menuCarritoIcon.addEventListener('click', toggleCarritoShoppingCartContainer);    /* Carrito menu */
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

/*+++++++++++++++++++++Funciones++++++++++++++++++++++++++*/
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}
function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}
function toggleCarritoShoppingCartContainer() {
    shoppingCartContainer.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}
/* Product Detail */
function openProductDetailAside(){
    productDetailContainer.classList.remove('inactive');
}
function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

/*+++++++++++++++++++++Productos++++++++++++++++++++++++++*/
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla',
    price: 1200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Computador',
    price: 230,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr) {
    /* 
    <div class="product-card">
        img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
            <div>
                <p>$120,00</p>
                <p>Bike</p>
            </div>
            <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="">
            </figure>
        </div>
    </div>
    */
    for (product of arr) {
        //  Div of all with image
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
        
            const productImg = document.createElement('img');
            productImg.setAttribute('src', product.image);
            // product = {name, price, img} -> product.img
            productImg.addEventListener('click', openProductDetailAside);
        
        //  Div of all info
            const productInfo = document.createElement('div');
            productInfo.classList.add('product-info');
        
        //  Price and name
            const productInfoDiv = document.createElement('div');
        
            const productPrice = document.createElement('p');
            productPrice.innerText = '$' + product.price;
        
            const productName = document.createElement('p');
            productName.innerText = product.name;
        
        //  Figure and icon
            const productInfoFigure = document.createElement('figure');
        
            const productInfoIcon = document.createElement('img');
            productInfoIcon.setAttribute('src', './icons/bt_add_to_cart.svg');
        
        // Appends
            productInfoFigure.appendChild(productInfoIcon);
            productInfoDiv.append(productPrice,productName);
            productInfo.append(productInfoDiv,productInfoFigure);
            productCard.append(productImg,productInfo);
            cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);