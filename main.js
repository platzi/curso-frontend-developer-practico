const menuEmail=document.querySelector('.navbar-email');
const desktopMenu=document.querySelector('.desktop-menu');
const menuHamIcon=document.querySelector('.menu');
const mobileMenu=document.querySelector('.mobile-menu');
const menuCarritoIcon=document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon=document.querySelector('.product-detail-close');
const shoppingCartContainer=document.querySelector('#shoppingCartContainer');
const productDetailContainer=document.querySelector('#productDetail');
const cardsContainer=document.querySelector('.cards-container');




menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoASide);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);



function toggleDesktopMenu(){
    const isAsideClosed=shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed=shoppingCartContainer.classList.contains('inactive');
   
    if(!isAsideClosed){
        shoppingCartContainer.classList.toggle('inactive');
    }
    
    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');

}


function toggleCarritoASide(){
    const isMobileMenuClosed=mobileMenu.classList.contains('inactive');
    //aside.classList.toggle('inactive');

    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    const isProductDetailClosed=productDetailContainer.classList.contains('inactive');
    //aside.classList.toggle('inactive');

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

const productList =[];
productList.push({
    name:'Sneakers Nike',
    price:129,
    image:'https://live.staticflickr.com/5521/10020841024_920db858d3_b.jpg'
});

productList.push({
    name:'Sneakers Nike',
    price:199,
    image:'https://images.freejpg.com.ar/900/0405/shoe-footwear-travel-sneakers-floor-F100024130.jpg'
});


productList.push({
    name:'Sneakers Nike',
    price:299,
    image:'https://images.freejpg.com.ar/900/0904/wall-art-mural-painting-graffiti-public-street-F100019575.jpg'
});

function renderProductList( arr){
    

for (product of arr){
const productCard =document.createElement('div');
productCard.classList.add('product-card');

//product ={name, price, image}->product.image
const productImg=document.createElement('img');
productImg.setAttribute('src',product.image);
productImg.addEventListener('click',openProductDetailAside);


const productInfo=document.createElement('div');
productInfo.classList.add('product-info');

const productInfoDiv=document.createElement('div');

const productPrice=document.createElement('p');
productPrice.innerText='$'+product.price;
const productName=document.createElement('p');
productName.innerText=product.name;

productInfoDiv.appendChild(productPrice);
productInfoDiv.appendChild(productName);


const productInfoFigure=document.createElement('figure');
const productImgCart=document.createElement('img');
productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');

productInfoFigure.appendChild(productImgCart);

productInfo.appendChild(productInfoDiv);
productInfo.appendChild(productInfoFigure);


productCard.appendChild(productImg);
productCard.appendChild(productInfo);

cardsContainer.appendChild(productCard);

}


}


renderProductList(productList);

/* 
navEmail.addEventListener('click', () => {
    menuDesktop.classList.toggle('inactive');
}); */