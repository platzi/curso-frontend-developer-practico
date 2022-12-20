const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerButton = document.querySelector('.menuMobileIcon');
const mobileMenu = document.querySelector('.mobile-menu');
const shopCart = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsConstainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail')
navbarEmail.addEventListener('click',() => toggleGeneral(desktopMenu));
burgerButton.addEventListener('click',() => toggleGeneral(mobileMenu));
shopCart.addEventListener('click',()=> toggleGeneral(shoppingCartContainer));


function toggleGeneral(item){
    switch(item){
        case mobileMenu:
            item.classList.toggle('inactive');
            shoppingCartContainer.classList.add('inactive');
            break;
        case shoppingCartContainer:
            item.classList.toggle('inactive');
            mobileMenu.classList.add('inactive');
            desktopMenu.classList.add('inactive');
            break;
        case desktopMenu:
            item.classList.toggle('inactive');
            shoppingCartContainer.classList.add('inactive');
            break;
        default:
            item.classList.toggle('inactive');
            break;
    }
}

function openProductDetailAside(){

}

const productList = [];
productList.push({
name: 'bike',
price: 120,
img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'});
productList.push({
    name: 'car',
    price: 140,
    img: 'https://images.pexels.com/photos/712618/pexels-photo-712618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'});
productList.push({
    name: 'motorbike',
    price: 240,
    img: 'https://images.pexels.com/photos/4577731/pexels-photo-4577731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'});
productList.push({
    name: 'boat',
    price: 340,
    img: 'https://images.pexels.com/photos/285937/pexels-photo-285937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'});

function renderProducts(array){
    for (product of array){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src',product.img);
        img.addEventListener('click',openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$ '+product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productInfoFigure.append(productImgCart);
        productInfoDiv.append(productPrice,productName);
        productInfo.append(productInfoDiv,productInfoFigure);
        productCard.append(img, productInfo);
        cardsConstainer.append(productCard);
    }
}
renderProducts(productList);