const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
mobileMenu.addEventListener("mouseout", outMobil);
desktopMenu.addEventListener("mouseout", outDesktop);
aside.addEventListener("mouseout", outAside);

function toggleDesktopMenu() {
    //desktopMenu.classList.toggle('inactive');
    if (mobileMenu.classList.contains('inactive') || aside.classList.contains('inactive')) {
        mobileMenu.classList.add('inactive');
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    // mobileMenu.classList.toggle('inactive');
    if (desktopMenu.classList.contains('inactive') || aside.classList.contains('inactive')) {
        desktopMenu.classList.add('inactive');
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    if (desktopMenu.classList.contains('inactive') || mobileMenu.classList.contains('inactive')) {
        desktopMenu.classList.add('inactive');
        mobileMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
}

function outMobil() {
    mobileMenu.classList.toggle('inactive');
}
function outDesktop() {
    desktopMenu.classList.toggle('inactive');
}
function outAside() {
    aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');


        productCard.innerHTML = `
        <img src="${product.image}" alt="Product Image">
        <div class="product-info">
            <div>
                <p>$${product.price}</p>
                <p>${product.name}</p>
            </div>
            <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="Add to Cart">
            </figure>
        </div>
    `;
    cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);