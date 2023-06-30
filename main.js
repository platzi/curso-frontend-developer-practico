const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);

function toggleDesktopMenu(){

    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    };

    const isProductDetailClose = productDetailContainer.classList.contains('inactive');
     
    if(!isProductDetailClose){
        productDetailContainer.classList.add('inactive');
    };

    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu(){

    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    } 
    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside() {

     const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
     
     if(!isMobileMenuClosed){
         mobileMenu.classList.add('inactive');
     };


     const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

     if(!isDesktopMenuClosed){
         desktopMenu.classList.add('inactive');
    }

    const isProductDetailClose = productDetailContainer.classList.contains('inactive');
     
    if(!isProductDetailClose){
        productDetailContainer.classList.add('inactive');
    };


    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside () {
    shoppingCartContainer.classList.add('inactive');
    desktopMenu.classList.add('inactive');


    productDetailContainer.classList.remove('inactive')
}

function closeProductDetailAside () {
    productDetailContainer.classList.add('inactive')
}


const productList = [];
productList.push({
    name:'bike',
    price:100,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name:'pantalla',
    price:200,
    image:"https://images.pexels.com/photos/400678/pexels-photo-400678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    name:'termo',
    price:50,
    image:"https://images.pexels.com/photos/14939673/pexels-photo-14939673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    name:'telefono',
    price:900,
    image:"https://images.pexels.com/photos/6913718/pexels-photo-6913718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    name:'macbook',
    price:2200,
    image:"https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});


function renderProducts(arr) {
    for (product of arr){

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
      
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);
        productImg.addEventListener('click', openProductDetailAside); 
      
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
      
        const productInfoDiv = document.createElement('div');
      
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
      
        const productName = document.createElement('p');
        productName.innerText =  product.name;
      
        productInfoDiv.append(productPrice, productName)
      
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
      
        productInfoFigure.appendChild(productImgCart);
      
        productInfo.append(productInfoDiv, productInfoFigure);
      
        productCard.append(productImg, productInfo);
      
        cardsContainer.appendChild(productCard);
       
      
        
      }
};

renderProducts(productList);