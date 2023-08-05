const menuEmail  = document.querySelector('.navbar-email');
const desktopMenu  = document.querySelector('.desktop-menu');

const menuHamButon  = document.querySelector('.menu');
const mobileMenu  = document.querySelector('.mobile-menu');

const carMenuButon  = document.querySelector('.navbar-shopping-cart');
const carMenuContainer  = document.querySelector('.product-detail');

const cardsContainer = document.querySelector('.cards-container');

const productDetailSecondary = document.querySelector('.gray-background');
const productDetailSecondaryButomClose = document.querySelector('.product-detail-secondary-close');




menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamButon.addEventListener('click', toggleMobileMenu);
carMenuButon.addEventListener('click', togglecarMenuContainer);
productDetailSecondaryButomClose.addEventListener('click', closeProductDetailSecondary)

function toggleDesktopMenu() {
    const carMenuContainerClosed = carMenuContainer.classList.contains('inactive');

    if (!carMenuContainerClosed) {
        carMenuContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const carMenuContainerClosed = carMenuContainer.classList.contains('inactive');
    const productDetailSecondaryClosed = productDetailSecondary.classList.contains('inactive');

    if (!carMenuContainerClosed) {
        carMenuContainer.classList.add('inactive');
    }
    else if (!productDetailSecondaryClosed) {
        productDetailSecondary.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function togglecarMenuContainer() {
    const mobileMenuClosed = mobileMenu.classList.contains('inactive');
    const desktopMenuClosed = desktopMenu.classList.contains('inactive');
    const productDetailSecondaryClosed = productDetailSecondary.classList.contains('inactive');

    if (!mobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    else if (!desktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
    else if (!productDetailSecondaryClosed) {
        productDetailSecondary.classList.add('inactive');
    }

    carMenuContainer.classList.toggle('inactive');
}

function openProductDetailSecondary() {
    const mobileMenuClosed = mobileMenu.classList.contains('inactive');
    const carMenuContainerClosed = carMenuContainer.classList.contains('inactive');

    if (!mobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    if (!carMenuContainerClosed) {
        carMenuContainer.classList.add('inactive');
    }

    productDetailSecondary.classList.remove('inactive');
}

function closeProductDetailSecondary() {
    productDetailSecondary.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Zapatilla Nike roja',
    price: 220,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',

});
productList.push({
    name: 'Zapatilla Nike Blanca',
    price: 300,
    image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',

});
productList.push({
    name: 'Zapatilla Nike Azul',
    price: 300,
    image: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',

});
productList.push({
    name: 'Zapatilla Nike Ploma',
    price: 5000,
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80',

});
productList.push({
    name: 'Zapatilla Nike Verde',
    price: 280,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',

});
productList.push({
    name: 'Zapatilla Nike Negra',
    price: 400,
    image: 'https://images.unsplash.com/photo-1605408499391-6368c628ef42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',

});
productList.push({
    name: 'Zapatilla Nike Vintage',
    price: 100,
    image: 'https://images.unsplash.com/photo-1558004282-e2b2587e3e47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1625&q=80',

});
productList.push({
    name: 'Zapatilla Nike Gris',
    price: 250,
    image: 'https://images.unsplash.com/photo-1562183241-840b8af0721e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1065&q=80',

});
productList.push({
    name: 'Zapatilla Nike Blanca',
    price: 400,
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',

});

function renderProducts (arr) {
    for (product of productList) {

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailSecondary);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText ='$' + product.price;
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

        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);





