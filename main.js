const navMail = document.querySelector('li.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('#shopping-cart-menu');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const productContainer = document.querySelector('.cards-container');
const productDetailCloseBtn = document.querySelector('.product-detail-close');
const productDetail = document.querySelector('#product-detail');
// const productImg = document.querySelector('.product-card img');

navMail.addEventListener('click', toggleDesktopMenu);
menuIcon.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleShoppingCart);
productDetailCloseBtn.addEventListener('click', toggleProductDetail);
productImg.addEventListener('click', toggleProductDetail)


function toggleDesktopMenu(){
    desktopMenu.classList.toggle ('inactive')
    if (!shoppingCart.classList.contains('inactive')) {
        shoppingCart.classList.add('inactive')
    }  else if (!productDetail.classList.contains('inactive')) {
        productDetail.classList.add('inactive')
    } else {
        return;
    }
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive')
    if (!shoppingCart.classList.contains('inactive')) {
        shoppingCart.classList.add('inactive')
    }  else if (!productDetail.classList.contains('inactive')) {
        productDetail.classList.add('inactive')
    } else {
        return;
    }
}

function toggleShoppingCart(){
    shoppingCart.classList.toggle('inactive')
    if (!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.add('inactive')
    } else if (!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.add('inactive')
    } else if (!productDetail.classList.contains('inactive')) {
        productDetail.classList.add('inactive')
    } else {
        return;
    }
}

function toggleProductDetail(){
    productDetail.classList.toggle ('inactive')
    if (!shoppingCart.classList.contains('inactive')) {
        shoppingCart.classList.add('inactive')
    } else if (!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.add('inactive')
    } else if (!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.add('inactive')
    } else {
        return;
    }
}

const products = [];

for(i=0; i < 20; i++) {
    products.push({
        name: `Bike Modelo ${[i] + 1}`,
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    })
}

for (product of products) {
    productContainer.innerHTML += 
        `
        <div class="product-card">
                    <img src=${product.image} alt="">
                    <div class="product-info">
                        <div>
                            <p>${product.price}</p>
                            <p>${product.name}</p>
                        </div>
                        <figure><img src="./icons/bt_add_to_cart.svg" alt=""></figure>
                    </div>
        </div>`
}