/*Declaracion de iconos para ser escuchados*/
const menuBurgerIcon = document.querySelector('.menu');
const menuUserIcon = document.querySelector('.navbar-email');
const asideShopIcon = document.querySelector('.navbar-shopping-cart');
const closeProductDetailIcon = document.querySelector('.closeIcon');

/*Declaracion de menues que se abren y cierran*/
const userMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.mobile-menu');
const shopAside = document.querySelector('.order-detail');
const asideProductDetail = document.querySelector('.product-detail');

const cardsContainer = document.querySelector('.cards-container');

/*Declaracion de la funcion que escucha los iconos o elementos*/
menuBurgerIcon.addEventListener('click', toggleBurgerMenu);
menuUserIcon.addEventListener('click', toggleUserMenu);
asideShopIcon.addEventListener('click', toggleShopAside);
closeProductDetailIcon.addEventListener('click', toggleProductDetail);


function toggleBurgerMenu(event) {
    event.preventDefault();
    if (burgerMenu.style.display === 'none') {
        burgerMenu.style.display = 'flex';
    } else {
        burgerMenu.style.display = 'none';
}};
function toggleUserMenu(event) {
    event.preventDefault();
    if (userMenu.style.display === 'none') {
        userMenu.style.display = 'flex';
    } else {
        userMenu.style.display = 'none';
}};
function toggleShopAside(event) {
    event.preventDefault();
    if (shopAside.style.display === 'none') {
        shopAside.style.display = 'flex';
        asideProductDetail.style.display = 'none';
    } else {
        shopAside.style.display = 'none';
}};
function toggleAsideProductDetail(event) {
    event.preventDefault();
    if (asideProductDetail.style.display === 'none') {
        asideProductDetail.style.display = 'flex';
    }
    if (asideProductDetail.style.display === 'flex') {
        shopAside.style.display = 'none';
    } else {
        asideProductDetail.style.display = 'none';
}};
function toggleProductDetail(event) {
    event.preventDefault();
    asideProductDetail.style.display = 'none';
};

const productList = [];
productList.push({
    name: 'Venzo Carbono Bike',
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Apple MacBook Air M2',
    price: 999,
    image: 'https://th.bing.com/th/id/OIP.XGMD3bnsJ_Xu3cSN1V5AQwAAAA?pid=ImgDet&rs=1'
});
productList.push({
    name: 'Samsung S23 Ultra',
    price: 1199,
    image: 'https://th.bing.com/th/id/OIP.QO4j0JDr3vnPWOTA3I9MegHaEK?pid=ImgDet&rs=1'
});
productList.push({
    name: 'Apple iPhone 14 Pro',
    price: 999,
    image: 'https://th.bing.com/th/id/OIP.xhnvEObwHYLOpJdwH5iIaAHaHa?w=203&h=203&c=7&r=0&o=5&pid=1.7'
});
productList.push({
    name: 'Apple iPhone 14 Pro max',
    price: 1099,
    image: 'https://th.bing.com/th/id/OIP.xhnvEObwHYLOpJdwH5iIaAHaHa?w=203&h=203&c=7&r=0&o=5&pid=1.7'
});
productList.push({
    name: 'Apple MacMini M2',
    price: 699,
    image: 'https://th.bing.com/th/id/R.c9e3ebd80ad3337441b9071bee8d2712?rik=LQDvMn03etj%2fvA&pid=ImgRaw&r=0'
});
productList.push({
    name: 'Apple MacBook Air M2 15',
    price: 1199,
    image: 'https://th.bing.com/th/id/OIP.QO4j0JDr3vnPWOTA3I9MegHaEK?pid=ImgDet&rs=1'
});
productList.push({
    name: 'Apple Vision Pro',
    price: 3499,
    image: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/06/apple-vision-pro-gaming.jpg'
});

for (product of productList) {
    var productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productCard.addEventListener('click', toggleAsideProductDetail);

    cardsContainer.appendChild(productCard);
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    productInfoFigure.appendChild(productImgCart);
};