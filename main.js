const menuEmail = document.querySelector('.navbar-email');
const desktopMEnu = document.querySelector('.desktop-menu');
const mobileMenu =document.querySelector('.mobile-menu');
const navMovile = document.querySelector('.menu');
const navbarShoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('#product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu);
navMovile.addEventListener('click', toggleMobileMenu);
navbarShoppingCart.addEventListener('click', toggleshoCard);
productDetailCloseIcon.addEventListener('click', productDetailClose);

function productDetailClose(){

    productDetail.classList.add('inactive');
}

function toggleDesktopMenu(){
    const isshoppingCartContainerClose = shoppingCartContainer.classList.contains('inactive'); 
    const isproductDetailClose = productDetail.classList.contains('inactive')
    if(!isshoppingCartContainerClose || !isproductDetailClose){
        shoppingCartContainer.classList.add('inactive'); 
        productDetailClose();     
    }
    desktopMEnu.classList.toggle('inactive');
}
function toggleMobileMenu(){
    const isshoppingCartContainerClose = shoppingCartContainer.classList.contains('inactive'); 
    const isproductDetailClose = productDetail.classList.contains('inactive')
    if(!isshoppingCartContainerClose || !isproductDetailClose){

        shoppingCartContainer.classList.add('inactive');
        productDetailClose();  
    }
    mobileMenu.classList.toggle('inactive');
}
function toggleshoCard(){
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isdesktopMEnuClose = desktopMEnu.classList.contains('inactive');
    const isproductDetailClose = productDetail.classList.contains('inactive')
    if(!isMobileMenuClose || !isdesktopMEnuClose || !isproductDetailClose){
        
        mobileMenu.classList.add('inactive');
        desktopMEnu.classList.add('inactive');
        productDetailClose();
    }   
    shoppingCartContainer.classList.toggle('inactive');
 }
 function openProductDetailAside(){
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isdesktopMEnuClose = desktopMEnu.classList.contains('inactive');
    const isproductDetailClose = productDetail.classList.contains('inactive')
    const isshoppingCartContainerClose = shoppingCartContainer.classList.contains('inactive');
    if(!isMobileMenuClose || !isdesktopMEnuClose || !isshoppingCartContainerClose){
        
        mobileMenu.classList.add('inactive');
        desktopMEnu.classList.add('inactive');
        shoppingCartContainer.classList.add('inactive');

    }   
    productDetail.classList.remove('inactive')
    

 }
 const productList=[];
 productList.push({
    name: 'bike',
    price: 120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

 });

 productList.push({
    name: 'Pantalla',
    price: 1200,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

 });

 productList.push({
    name: 'Laptop',
    price: 2120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

 });
 productList.push({
    name: 'bike',
    price: 120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

 });

 productList.push({
    name: 'Pantalla',
    price: 1200,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

 });

 productList.push({
    name: 'Laptop',
    price: 2120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

 });
 productList.push({
    name: 'bike',
    price: 120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

 });

 productList.push({
    name: 'Pantalla',
    price: 1200,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

 });

 productList.push({
    name: 'Laptop',
    price: 2120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

 });


function renderProducts(arr){
    for(product of arr){
    const producCard = document.createElement('div');
    producCard.classList.add('product-card');
    producCard.addEventListener('click', openProductDetailAside);

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');


    const productPrice = document.createElement('p');
    productPrice.innerText=`$${product.price}`

    const productName = document.createElement('p');
    productName.innerText=product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    producCard.appendChild(productImg);
    producCard.appendChild(productInfo);

    cardsContainer.appendChild(producCard);
    }

}
renderProducts(productList);