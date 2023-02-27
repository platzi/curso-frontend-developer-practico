const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardContainer = document.querySelector ('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleProductDetailAside);
productDetailCloseIcon.addEventListener('click',closeProductDetail);

function toggleDesktopMenu(){

    const isAsideClosed =  shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    closeProductDetail ();

    desktopMenu.classList.toggle('inactive');
};

function toggleMobileMenu(){
    const isAsideClosed =  shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetail ();

    mobileMenu.classList.toggle('inactive');    
    
};

function toggleProductDetailAside(){
    
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');   
    
    const isDesktopClosed =  desktopMenu.classList.contains('inactive');

    if(!isDesktopClosed){
        desktopMenu.classList.add('inactive');
    }   

    if (! isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    closeProductDetail ();

    shoppingCartContainer.classList.toggle('inactive');

};

function openProductDetailAside (){
    productDetailContainer.classList.remove('inactive');
    shoppingCartContainer.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add ('inactive');
};

function closeProductDetail (){
    productDetailContainer.classList.add('inactive');
};

const productList = [];

//array de productos---------------------------
productList.push({
    name: 'bike',
    price:120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name:'screen',
    price:220,
    image: 'https://acf.geeknetic.es/imgri/imagenes/auto/22/02/17/rqw-windowscolor.jpg?f=webp',
});

productList.push({
    name: 'mouse',
    price:70,
    image: 'https://www.sincable.mx/wp-content/uploads/2020/04/0-Raton-gamer-Dario-Lo-Presti-61562952_m.jpg',
});

//----------------------------------------------



function renderProducts(arr){
    for (product of arr){

    console.log('entre')

    const productCard= document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute ('src',product.image);
    productImg.addEventListener('click', openProductDetailAside);

    const productInfo = document.createElement ('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement ('div');

    const productPrice = document.createElement ('p');
    productPrice.innerText= '$ '+ product.price;
    const productName = document.createElement ('p');
    productName.innerText = product.name;

    const productFigure = document.createElement('figure');
    
    const figureImg = document.createElement('img')
    figureImg.setAttribute('src','./icons/bt_add_to_cart.svg') 

    productFigure.appendChild(figureImg);
    productInfoDiv.append(productPrice,productName);

    productInfo.append(productInfoDiv, productFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardContainer.appendChild(productCard);

};

}

renderProducts(productList);

