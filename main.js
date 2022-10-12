const MenuMail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const MobilMenu = document.querySelector('.mobile-menu');
const MenuCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailContainerIcon = document.querySelector('.product-detail-close');

MenuMail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
MenuCartIcon.addEventListener('click', toggleProductDetail);
productDetailContainerIcon.addEventListener('click', closeProductDetailAside);


function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();
    
    MobilMenu.classList.toggle('inactive');
}

function toggleProductDetail(){
   const isMobilMenuClosed = MobilMenu.classList.contains('inactive');

   if(!isMobilMenuClosed){
    MobilMenu.classList.add('inactive');
   } 

   const isProductDetailClosed = productDetailContainer.classList.contains('inactive')
   if(!isProductDetailClosed){

    productDetailContainer.classList.add('inactive');

   }

   shoppingCartContainer.classList.toggle('inactive');
}
// creacion de Arrays

const productList = [];
productList.push({
    name:'Bike',
    price:'250',
    image:' https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name:'Chaqueta',
    price:'5000',
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name:'PC',
    price:'6000',
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})


function openProductDetailAside (){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}



function renderProduct(arr){
    for(product of arr){
        
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside)
        // product = {name.price, image} -> product.image
    
        const productInfo = document.createElement('div') 
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div')
    
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        cardsContainer.appendChild(productCard);
    }
}
renderProduct(productList);

