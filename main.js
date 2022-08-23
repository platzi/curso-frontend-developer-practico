const email_navbar = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const linemenu = document.querySelector('.menu');
const shopingMenu = document.querySelector('.navbar-shopping-cart');
const orderDetail = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

email_navbar.addEventListener('click', toggleNavMenu);
linemenu.addEventListener('click', toggleMobMenu);
shopingMenu.addEventListener('click', toggleOrders);

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'TV',
    price: 1120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Graphics Card',
    price: 3500,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Book',
    price: 50,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pen',
    price: 99999,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

fillProducts(productList);

function fillProducts(list) {
    for(n of list) {
        //create elements 
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', n.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + n.price + ',00';
        const productName = document.createElement('p');
        productName.innerText = n.name;
    
        const cartIconFigure = document.createElement('figure');
    
        const cartIcon = document.createElement('img');
        cartIcon.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        //fill elements
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        productInfo.appendChild(productInfoDiv);
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        productInfo.appendChild(cartIconFigure);
        cartIconFigure.appendChild(cartIcon);
    
        cardsContainer.appendChild(productCard);
    }
}



function toggleNavMenu() {
    let isOrderDetailOpen = !orderDetail.classList.contains('inactive');

    if(isOrderDetailOpen) {
        orderDetail.classList.add('inactive');
        desktopMenu.classList.remove('inactive');
    }else {
        desktopMenu.classList.toggle('inactive');
    }    
}

function toggleMobMenu() {
    let isOrderDetailOpen = !orderDetail.classList.contains('inactive');

    if(isOrderDetailOpen) {
        orderDetail.classList.add('inactive');
        mobileMenu.classList.remove('inactive');
    }else {
        mobileMenu.classList.toggle('inactive');
    }
}

function toggleOrders() {
    let isMobileOpen = !mobileMenu.classList.contains('inactive');
    let isEmailNavOpen = !desktopMenu.classList.contains('inactive');


    if (isMobileOpen) {
        mobileMenu.classList.add('inactive');
        orderDetail.classList.remove('inactive');
    }else if (isEmailNavOpen){
        desktopMenu.classList.add('inactive');
        orderDetail.classList.remove('inactive');
    }else {
        orderDetail.classList.toggle('inactive');
    }
}



