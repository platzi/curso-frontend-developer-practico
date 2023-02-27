const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailAside = document.querySelector('.product-detail');
const cardConteiner = document.querySelector ('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleProductDetailAside);

function toggleDesktopMenu(){

    const isAsideClosed =  productDetailAside.classList.contains('inactive');

    if(!isAsideClosed){
        productDetailAside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
};

function toggleMobileMenu(){
    const isAsideClosed =  productDetailAside.classList.contains('inactive');

    if(!isAsideClosed){
        productDetailAside.classList.add('inactive');
    }

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

    productDetailAside.classList.toggle('inactive');

};

const productList = [];

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



function renderProducts(arr){
    for (product of arr){

    console.log('entre')

    const productCard= document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute ('src',product.image);

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

    cardConteiner.appendChild(productCard);

};

}

renderProducts(productList);

