const menuEmail = document.querySelector('.navbar-email'); 
const desktopMenu = document.querySelector('.desktop-menu'); 
const menuHamIcon = document.querySelector('.menu'); 
const menuCartIcon = document.querySelector('.navbar-shopping-cart'); 
const productCloseIcon = document.querySelector('.product-close')
const mobileMenu = document.querySelector('.mobile-menu'); 
const aside = document.querySelector('.product-detail');
const productContainer = document.querySelector('.product')
const cardsContainer = document.querySelector('.cards-container');
const productAside = document.querySelector('aside.product');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCarAside);
productCloseIcon.addEventListener('click', closeProductAside)


function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    const isProductAsideClosed = productAside.classList.contains('inactive');
    if (!isAsideClosed) aside.classList.add('inactive');
    if (!isProductAsideClosed) productAside.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    const isProductAsideClosed = productAside.classList.contains('inactive');
    // aside.classList.toggle('inactive');
    if (!isAsideClosed) aside.classList.add('inactive');
    if (!isProductAsideClosed) productAside.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleCarAside(){
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isProductAsideClosed = productAside.classList.contains('inactive');
    if (!isDesktopMenuClosed) desktopMenu.classList.add('inactive');
    // aside.classList.toggle('inactive');
    if (!isMobileMenuClosed) mobileMenu.classList.add('inactive');
    if (!isProductAsideClosed) productAside.classList.add('inactive');
    aside.classList.toggle('inactive');
    // console.log ('sd')
}


function openProductAside() {
    productContainer.classList.remove('inactive');
    aside.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}

function closeProductAside() {
    productContainer.classList.add('inactive');
    // aside.classList.remove('inactive');
    // mobileMenu.classList.remove('inactive');
}

function toggleProductAside() {
    const isAsideClosed = aside.classList.contains.apply('inactive');
    const isMobileMenuClosed = mobileMenu.classList.contains.apply('inactive');
    if (!isAsideClosed) aside.classList.add('inactive');
    if (!isMobileMenuClosed) mobileMenu.classList.add('inactive');
    productAside.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name:'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name:'Roller Skates',
    price: 20,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name:'Sneakers',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name:'Dumbbells',
    price: 280,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
/*
<div class="product-card">
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
</div>
*/
function renderProducts (arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        //product = {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductAside)
        
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
    
        cardsContainer.appendChild(productCard)
    }    
}

renderProducts(productList)