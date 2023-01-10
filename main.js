const navMail = document.querySelector('li.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('#shopping-cart-menu');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const productContainer = document.querySelector('.cards-container');
const productDetailCloseBtn = document.querySelector('.product-detail-close');
const productDetail = document.querySelector('#product-detail');
const closeCartIcon = document.querySelector('#shopping-cart-menu .title-container img');

navMail.addEventListener('click', toggleDesktopMenu);
menuIcon.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleShoppingCart);
productDetailCloseBtn.addEventListener('click', closeProductDetail);
closeCartIcon.addEventListener('click', closeShoppingCart);

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

function closeShoppingCart() {
    shoppingCart.classList.add('inactive')
}

function openProductDetail(){
    productDetail.classList.remove ('inactive')
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

function closeProductDetail(){
    productDetail.classList.add ('inactive')
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

function addToCart(){
    const items = document.querySelector('#items-on-cart');
    const orderContent = document.querySelector('#cart-items');
    orderContent.innerHTML += `
        <div class="shopping-cart">
                <figure><img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike"></figure>
                <p>Bike</p>
                <p>$120</p>
                <img src="./icons/icon_close.png" alt="close" onclick="removeFromCart()">
        </div>
    `
    new_quantity = Number(items.textContent) + 1;
    items.innerText = new_quantity;

    var totalAmount = document.querySelector('.order p:nth-child(2)')
    totalAmount.innerText = `$ ${new_quantity * 120}`
}

function removeFromCart() {
    const items = document.querySelector('#items-on-cart');
    const orderContent = document.querySelector('#cart-items');
    const lastItem = orderContent.lastChild
    orderContent.removeChild(lastItem)
    const totalAmount = document.querySelector('.order p:nth-child(2)')
    if ((Number(items.textContent) - 1) < 0) {
        new_quantity = 0;
        new_amount = 0;
    } else {
        new_quantity =  (Number(items.textContent) - 1)
        new_amount = new_quantity * 120
    }
        items.innerText = new_quantity;
        
        totalAmount.textContent = `$ ${new_amount}`
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
                    <img src=${product.image} alt="" onclick="openProductDetail()">
                    <div class="product-info">
                        <div>
                            <p>$ ${product.price}</p>
                            <p>${product.name}</p>
                        </div>
                        <figure onclick="addToCart()"><img src="./icons/bt_add_to_cart.svg" alt=""></figure>
                    </div>
        </div>`
}