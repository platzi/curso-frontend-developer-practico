const navEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamburguesa = document.querySelector('.menu')
const closeIcon = document.querySelector('.product-detail-close')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarrito = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const cardsContainer = document.querySelector('.cards-container')
const productDetailCard = document.querySelector('#productDetail')

navEmail.addEventListener('click', toggleDesktopMenu)
menuHamburguesa.addEventListener('click', toggleMobileMenu)
menuCarrito.addEventListener('click', toggleMenuCarrito)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive')
    productDetailCard.classList.add('inactive')
}
function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive')
    shoppingCartContainer.classList.add('inactive')
    productDetailCard.classList.add('inactive')
}
function toggleMenuCarrito() {
    shoppingCartContainer.classList.toggle('inactive')
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
    productDetailCard.classList.add('inactive')
}
const productList = [];
productList.push({
    name: 'Bicicleta',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Computadora',
    price: 280,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla',
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla',
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla',
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla',
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr) {
    for (product of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productCard.addEventListener('click', openproductDetail);
function openproductDetail() {
    productDetailCard.classList.remove('inactive')
    shoppingCartContainer.classList.add('inactive')
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
}
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
       
        const productInfodiv = document.createElement('div');
       
        const productPrice = document.createElement('p');
        const productNAme = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        productNAme.innerText = product.name;
       
        const productInfoFigure = document.createElement('figure');
       
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', '/recursos/icons/bt_add_to_cart.svg');
        productInfoFigure.appendChild(productImgCart);
    
        productInfodiv.append(productNAme, productPrice);
    
        productInfo.append(productInfodiv, productInfoFigure);
        productCard.append(productImg, productInfo)
        cardsContainer.appendChild(productCard)
    }
}
renderProducts(productList)
closeIcon.addEventListener('click', closeproductDetail);
function closeproductDetail() {
    productDetailCard.classList.add('inactive')
}