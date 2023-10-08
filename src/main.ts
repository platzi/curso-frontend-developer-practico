const navEmail = document.querySelector('.navbar-email');
const menu = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.menu');
const mobileMenuList = document.querySelector('.mobile-menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCart = document.querySelector('.shoppin-card-detail');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('.product-detail-popup');
const closeButtonAsideIcon = document.querySelector('.product-detail-close');
const orderCloseArrow = document.querySelector('#arrowOrder');


navEmail?.addEventListener('click',toogleDesktopMenu);

menuIcon?.addEventListener('click',toogleMobileMenu);

menuCartIcon?.addEventListener('click',toggleCarritoAside);

closeButtonAsideIcon?.addEventListener('click',closeProductAside);

orderCloseArrow?.addEventListener('click',closeOrder);

function toogleDesktopMenu(){
    const isAsideClosed = shoppingCart?.classList.contains('inactive');
    menu?.classList.toggle('inactive');
    
    if(!isAsideClosed){
        shoppingCart?.classList.add('inactive');
    }
}

function toogleMobileMenu(){
    mobileMenuList?.classList.toggle('inactive');
const isAsideClosed = shoppingCart?.classList.contains('inactive');

closeProductAside();

if(!isAsideClosed){
    shoppingCart?.classList.add('inactive');
}

}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenuList?.classList.contains('inactive');
    const isAsideClosed = shoppingCart?.classList.contains('inactive');
    const isEmialMenuClosed = menu?.classList.contains('inactive');
    const isProductDetailClose = productDetailContainer?.classList.contains('inactive');
    if(!isMobileMenuClosed){
        mobileMenuList?.classList.add('inactive'); 
    }
    shoppingCart?.classList.toggle('inactive');

    if(!isEmialMenuClosed){
        menu?.classList.add('inactive');
    }

    if(!isProductDetailClose){
        productDetailContainer?.classList.add('inactive');
    }
}

function openProductDetail(){

    shoppingCart?.classList.add('inactive');

    mobileMenuList?.classList.add('inactive');

    productDetailContainer?.classList.remove('inactive');

}

function closeProductAside(){
    productDetailContainer?.classList.add('inactive');
}

function closeOrder(){
    shoppingCart?.classList.add('inactive');
}

const productList = [];

productList.push({
    name : 'Bike',
    price: 250,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name : 'Nikon Z6II',
    price: 1900,
    image: 'https://www.udeniosite.com/funciones_destacadas/img/z6ii/1659-Z6II-right.png',
});

productList.push({
    name : 'Xbox Controller',
    price: 90,
    image: 'https://m.media-amazon.com/images/I/513gfnMEWnL.jpg',

});

productList.push({
    name : 'Nikon 135mm 1.8 Plena',
    price: 2560,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4AIQUcKIcLjPaEyKF3ckA9SOCK5YAmsv9q7B-xUVWFinmVxZw3-1BbOxnS9ntUN9Oo2U&usqp=CAU',
    
});

console.log(productList);


/* <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div> */



function renderProducts(arr:any[]){
let product : any;

for (product of arr){  
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const prodImg = document.createElement('img');
    prodImg.setAttribute('src',product.image);
    prodImg.addEventListener('click',openProductDetail);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const divProductInfo = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    const productName = document.createElement('p');
    productName.innerText = product.name;


    const iconAddCartFigure = document.createElement('figure');
    const cartIcon = document.createElement('img');
    cartIcon.setAttribute('src','../icons/bt_add_to_cart.svg');
    

    iconAddCartFigure.appendChild(cartIcon);

    divProductInfo.appendChild(productName);
    divProductInfo.appendChild(productPrice);

    productCard.appendChild(prodImg);
    productCard.appendChild(divProductInfo);

    /* ahora tenemos que crear la estrcutura */    
    cardsContainer?.appendChild(productCard);
}

}
/* hasta acá todo funciona */
renderProducts(productList);