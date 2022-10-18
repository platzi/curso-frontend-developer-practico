/* Llamado de los componentes html*/
const menuEmail= document.querySelector('.navbar-email');
const desktopMenu= document.querySelector('.desktop-menu');
const menuHamIcon= document.querySelector('.menu');
const productDetailCloseIcon= document.querySelector('.product-detail-close');
const mobileMenu= document.querySelector('.mobile-menu');
const menuCarritoIcon= document.querySelector('.navbar-shopping-cart');
const ShoppingCartContainer= document.querySelector('#ShoppingCartContainer');
const productDetailContainer= document.querySelector('#productDetail');
const cardsContainer= document.querySelector('.cards-container');

/* event listeners*/

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMovileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

/* funciones */

function toggleDesktopMenu(){
    const isAsideClosed= ShoppingCartContainer.classList.contains('inactive');

   if(!isAsideClosed){
    ShoppingCartContainer.classList.toggle('inactive');
   }
   desktopMenu.classList.toggle('inactive');
}

function toggleMovileMenu(){
    const isAsideClosed= ShoppingCartContainer.classList.contains('inactive');

   if(!isAsideClosed){
    ShoppingCartContainer.classList.toggle('inactive');
   }
   mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobilemenuClosed= mobileMenu.classList.contains('inactive');
    const isDesktopmenuClosed= desktopMenu.classList.contains('inactive');
    const isProductDetailClosed= productDetailContainer.classList.contains('inactive');


   if(!isMobilemenuClosed){
    mobileMenu.classList.toggle('inactive');
   }if (!isDesktopmenuClosed) {
    desktopMenu.classList.toggle('inactive');
   }if (!isProductDetailClosed) {
    productDetailContainer.classList.toggle('inactive');
   } else {
    ShoppingCartContainer.classList.toggle('inactive');
   }
   
}

const productList=[];
productList.push({
    name:'bike',
    price:'120',
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});
productList.push({
    name:'car',
    price:'1000',
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});
productList.push({
    name:'toy',
    price:'10',
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});
productList.push({
    name:'bike',
    price:'120',
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});
productList.push({
    name:'car',
    price:'1000',
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});
productList.push({
    name:'toy',
    price:'10',
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

});

function openProductDetailAside(){
    productDetailContainer.classList.remove('inactive');
}
function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

function renderProducts(arr){
    for (product of arr){
        const productCard= document.createElement('div');
        productCard.classList.add('product-card');
    
        //producrt= name, price, image
        const ProductImg= document.createElement('img');
        ProductImg.setAttribute('src', product.image);
        ProductImg.addEventListener('click', openProductDetailAside);
    
        const productInfo= document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv= document.createElement('div');
    
        const productPrice= document.createElement('p');
        productPrice.innerText='$' + product.price;
        const productName= document.createElement('p');
        productName.innerText=product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure= document.createElement('figure');
        const productImgCart= document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(ProductImg);
        productCard.appendChild(productInfo);
        
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);