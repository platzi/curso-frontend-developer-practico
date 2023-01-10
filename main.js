const navMail = document.querySelector('li.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const asideBar = document.querySelector('.product-detail')
const cartIcon = document.querySelector('.navbar-shopping-cart')
const productContainer = document.querySelector('.cards-container')


navMail.addEventListener('click', toggleDesktopMenu);
menuIcon.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleAsideBar);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle ('inactive')
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive')
    if (!asideBar.classList.contains('inactive')) {
        asideBar.classList.add('inactive')
    } else {
        return;
    }
}

function toggleAsideBar(){
    asideBar.classList.toggle('inactive')
    if (!mobileMenu.classList.contains('inactive')) {
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