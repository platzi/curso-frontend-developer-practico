const menuemail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu ');
const menuHamIcon = document.querySelector('.menu');
const productDetailIcon = document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector('.mobile-menu');
const cardsContainer = document.querySelector('.cards-container');

const carMobileIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');



menuemail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
carMobileIcon.addEventListener('click', toggleCarMobileMenu);
productDetailIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');


    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }
        desktopmenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');


    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    
    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

function toggleCarMobileMenu(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopmenu.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    
    // aside.classList.toggle('inactive');

    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    
    if (!isDesktopMenuClosed){
        desktopmenu.classList.add('inactive');
    }
    
    if (!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');
   
}

function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}
const productList = [];

productList.push({
    name : 'Bike',
    price : 1200 ,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name : 'bike helmet',
    price : 420 ,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name : 'pants',
    price : 83480 ,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name : 'tires',
    price : 880 ,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});



function renderProducts(arr){
    for (product of arr){
        const productCar = document.createElement('div');
        productCar.classList.add('product-card');
        
        const image = document.createElement('img');
        image.setAttribute('src', product.image);
        image.addEventListener('click', openProductDetailAside);
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
      
     
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        
     
        const productFigure = document.createElement('figure');
        const productImgCar = document.createElement('img');
        productImgCar.setAttribute('src', './icons/bt_add_to_cart.svg');
        //Introducimos la etiqueta img (productImgCar) a la etiqueta figure(productFigure) 
        productFigure.appendChild(productImgCar);
         //Introducimos las etiquetas p (productPrice , productName) a la etiqueta Div(productInfoDiv) 
         productInfoDiv.append(productPrice, productName)
           //Introducimos la etiqueta div (productInfoDiv) a la etiqueta Div(productInfo) 
        productInfo.append(productInfoDiv, productFigure);
         //Introducimos la etiqueta img (image) y la etiqueta div(productInfo) a la etiqueta Div(productCar) 
        productCar.append(image, productInfo);
         //Introducimos  la etiqueta div(productCar) a la etiqueta Div(cardsContainer) 
        cardsContainer.appendChild(productCar);
     
     }
}

renderProducts(productList);