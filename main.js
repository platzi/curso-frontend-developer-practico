const navUserMenu = document.querySelector('.navbar-user');
const burgerMenuMobile = document.querySelector('.burgerMenu');
const btnShoppingCart = document.querySelector('#btn-shopping-cart');
const btnUser = document.querySelector('#btn-user');
const containerUserMenu = document.querySelector('.desktop-menu');
const containerUserMenuMobile = document.querySelector('.mobile-menu');
const containerShoppingCart = document.querySelector('.product-detail');
const activeShoppingCart = document.querySelector('.navbar-shopping-cart');
const templateShoppingCart = document.querySelector('.template-shopping-cart');
const containerCards = document.querySelector('.cards-container');
const fragment = document.createDocumentFragment();
const btnViewDetailsProduct = document.querySelector('.btn-add-to-cart');
const productModal = document.querySelector('.product-modal');

const fetchData = async () => {
    fetch('./data.json')
        .then(res => res.json())
        .then(data => {
            showCards(data);
        })
        .catch((error => {
            console.log(error);
        }));
}

document.addEventListener('DOMContentLoaded', () => {
    fetchData();
});

navUserMenu.addEventListener('click', toggleDesktopMenu);
burgerMenuMobile.addEventListener('click', toggleMobileMenu);
btnShoppingCart.addEventListener('click', toggleShoppingCart);

function toggleDesktopMenu() {
    containerShoppingCart.classList.add('inactive');
    productModal.classList.add('inactive');
    containerUserMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    productModal.classList.add('inactive');
    containerShoppingCart.classList.add('inactive');
    containerUserMenuMobile.classList.toggle('inactive');
}

function toggleShoppingCart() {
    containerUserMenuMobile.classList.add('inactive');
    containerUserMenu.classList.add('inactive');
    productModal.classList.add('inactive');
    containerShoppingCart.classList.toggle('inactive');
}

const showCards = data => {
    containerCards.innerHTML = '';
    const cards = data;
    cards.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <div>
                    <p class="productPrice">$${product.price}</p>
                    <p class="nameProduct">${product.name}</p>
                </div>
                <button class="btn-add-to-cart" onclick="openModalProduct()">
                    <i class="fa-solid fa-cart-shopping btn-cart"></i>
                </button>
            </div>
        `
        const clone = productCard.cloneNode(true);
        fragment.appendChild(clone);
    });
    containerCards.appendChild(fragment);
}

const openModalProduct = () => {
    if(productModal.classList.contains('inactive')) {
        containerUserMenu.classList.add('inactive');
        containerUserMenuMobile.classList.add('inactive');
        containerShoppingCart.classList.add('inactive');
        productModal.classList.remove('inactive');
    } 
    // else {
    //     productModal.classList.add('inactive');
    // }
}

const closeModalProduct = () => {
    if(!productModal.classList.contains('inactive')) {
        productModal.classList.add('inactive');
    }
}