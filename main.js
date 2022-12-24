
const menuEmail = document.querySelector('.navbar-email');
const buttonMenuMobile = document.querySelector('.menu')
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu')
const buttonShoppingCart = document.querySelector('.navbar-shopping-cart');
const asideOrders = document.querySelector('.cart-detail')
const mainContent = document.querySelector('.main-content')
const modals = document.querySelectorAll('.modals')


// Array con Listado de productos


const productList = [];

productList.push({
    name: 'bike',
    price: 120,
    image: "https://p.vitalmtb.com/photos/users/37957/setup_checks/30277/photos/45780/original_20151024_150427.jpg?1445696550",
});
productList.push({
    name: 'laptopte',
    price: 3200,
    image: "https://p.vitalmtb.com/photos/users/37957/setup_checks/30277/photos/45780/original_20151024_150427.jpg?1445696550",
});
productList.push({
    name: 'mobile',
    price: 760,
    image: "https://p.vitalmtb.com/photos/users/37957/setup_checks/30277/photos/45780/original_20151024_150427.jpg?1445696550",
});

function renderProducts(array){
    
    for (product of array){
        const productCard = `
        <div class="product-card">
            <img src=${product.image} alt="">
            <div class="product-info">
            <div>
                <p>${product.price}</p>
                <p>${product.name}</p>
            </div>
            <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="">
            </figure>
            </div>
        </div>
        `;

        const productsContainer = document.querySelector('.cards-container');
        productsContainer.innerHTML += productCard;
    }

    
}

function toggleMenuDesktop() {
    asideOrders.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMenuMobile() {
    asideOrders.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart(){
   
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    asideOrders.classList.toggle('inactive');
}

buttonShoppingCart.addEventListener('click', toggleShoppingCart);
menuEmail.addEventListener('click', toggleMenuDesktop);
buttonMenuMobile.addEventListener('click', toggleMenuMobile);
renderProducts(productList);
