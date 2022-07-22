const menuDesktop = document.querySelector('.desktop-menu');
const menuMobile = document.querySelector('.mobile-menu');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const navEmail = document.querySelector('.navbar-email');
const hamMenu = document.querySelector('.menu');
const productDetailOrder = document.querySelector('.product-detail');
const cards = document.querySelector('.cards-container');

navEmail.addEventListener('click', () => {
    menuDesktop.classList.toggle('inactive');
    menuMobile.classList.add('inactive');
    productDetailOrder.classList.add('inactive')
});
hamMenu.addEventListener('click', () => {
    menuMobile.classList.toggle('inactive');
    menuDesktop.classList.add('inactive');
    productDetailOrder.classList.add('inactive')

});
cartIcon.addEventListener('click', () => {
    productDetailOrder.classList.toggle('inactive');
    menuMobile.classList.add('inactive');
    menuDesktop.classList.add('inactive');
});

// PRODUCT LIST

const productList = [];
productList.push({
    name: 'Bike',
    price: "120.000",
    img: 'https://picsum.photos/600',
    "add-to-cart": './icons/bt_add_to_cart.svg',
});
productList.push({
    name: 'Pantalla',
    price: "220.000",
    img: 'https://picsum.photos/500',
    "add-to-cart": './icons/bt_add_to_cart.svg',
});
productList.push({
    name: 'TV',
    price: "620.000",
    img: 'https://picsum.photos/550',
    "add-to-cart": './icons/bt_add_to_cart.svg',
});

function renderProduct(array) {
    for (const item of array) {
        // DIV - PRODUCT CARD
        let productCard = document.createElement('div');
        productCard.classList.add('product-card');
        let img = document.createElement('img');
        img.setAttribute('src', item.img)
        productCard.appendChild(img);

        // DIV - PRODUCT INFO
        let productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        productCard.appendChild(productInfo);

        // DIV - NAME AND PRICE
        let div = document.createElement('div');
        let p0 = document.createElement('p');
        p0.innerText = '$' + item.price;
        div.appendChild(p0);

        let p1 = document.createElement('p');
        p1.innerText = item.name;
        div.appendChild(p1);

        productInfo.appendChild(div);

        // FIGURE - ADD TO CART
        let figure = document.createElement('figure');
        let cartIcon = document.createElement('img');
        cartIcon.setAttribute('src', item["add-to-cart"]);
        figure.appendChild(cartIcon);
        productInfo.appendChild(figure);

        cards.appendChild(productCard);
    }
}
renderProduct(productList);