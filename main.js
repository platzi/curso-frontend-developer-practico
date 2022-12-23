const navbar_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');
const menu_ham_icon = document.querySelector('.menu');
const mobile_menu = document.querySelector('.mobile-menu');
const menu_carrito_icon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cards_container = document.querySelector('.cards-container');

navbar_email.addEventListener('click', toggleDesktopMenu);
menu_ham_icon.addEventListener('click', toggleMobileMenu);
menu_carrito_icon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {

    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');

    desktop_menu.classList.toggle('inactive');
}

function toggleMobileMenu() {

    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');

    mobile_menu.classList.toggle('inactive');
}

function toggleCarritoAside() {

    mobile_menu.classList.add('inactive');
    desktop_menu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    
    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
    productDetailContainer.classList.remove('inactive');
    mobile_menu.classList.add('inactive');
    desktop_menu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: '120,00',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: '220,00',
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg'
});
productList.push({
    name: 'Computadora',
    price: '620,00',
    image: 'https://images.pexels.com/photos/7191160/pexels-photo-7191160.jpeg'
});
productList.push({
    name: 'Bike',
    price: '120,00',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: '220,00',
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg'
});
productList.push({
    name: 'Computadora',
    price: '620,00',
    image: 'https://images.pexels.com/photos/7191160/pexels-photo-7191160.jpeg'
});
productList.push({
    name: 'Bike',
    price: '120,00',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: '220,00',
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg'
});
productList.push({
    name: 'Computadora',
    price: '620,00',
    image: 'https://images.pexels.com/photos/7191160/pexels-photo-7191160.jpeg'
});
productList.push({
    name: 'Bike',
    price: '120,00',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: '220,00',
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg'
});
productList.push({
    name: 'Computadora',
    price: '620,00',
    image: 'https://images.pexels.com/photos/7191160/pexels-photo-7191160.jpeg'
});
productList.push({
    name: 'Bike',
    price: '120,00',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: '220,00',
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg'
});
productList.push({
    name: 'Computadora',
    price: '620,00',
    image: 'https://images.pexels.com/photos/7191160/pexels-photo-7191160.jpeg'
});
productList.push({
    name: 'Bike',
    price: '120,00',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: '220,00',
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg'
});
productList.push({
    name: 'Computadora',
    price: '620,00',
    image: 'https://images.pexels.com/photos/7191160/pexels-photo-7191160.jpeg'
});

function renderProducts(productArr) {
    for (product of productArr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;

        const productName = document.createElement('p');
        productName.innerText = product.name;

        const productInfoFigure = document.createElement('figure');

        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cards_container.appendChild(productCard);

    }
}

renderProducts(productList);