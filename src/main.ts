const navEmail = document.querySelector('.navbar-email');
const menu = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.menu');
const mobileMenuList = document.querySelector('.mobile-menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');


navEmail?.addEventListener('click',toogleDesktopMenu);

menuIcon?.addEventListener('click',toogleMobileMenu);

menuCartIcon?.addEventListener('click',toggleCarritoAside);

function toogleDesktopMenu(){
    const isAsideClosed = aside?.classList.contains('inactive');
    menu?.classList.toggle('inactive');
    
    if(!isAsideClosed){
        aside?.classList.add('inactive');
    }
}

function toogleMobileMenu(){
    mobileMenuList?.classList.toggle('inactive');
const isAsideClosed = aside?.classList.contains('inactive');

if(!isAsideClosed){
    aside?.classList.add('inactive');
}

}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenuList?.classList.contains('inactive');
    const isAsideClosed = aside?.classList.contains('inactive');
    const isEmialMenuClosed = menu?.classList.contains('inactive');
    if(!isMobileMenuClosed){
        mobileMenuList?.classList.add('inactive'); 
    }
    aside?.classList.toggle('inactive');

    if(!isEmialMenuClosed){
        menu?.classList.add('inactive');
    }
}

const productList = [];

productList.push({
    name : 'Bike',
    prince: 250,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name : 'Nikon Z6II',
    prince: 1900,
    image: 'https://www.udeniosite.com/funciones_destacadas/img/z6ii/1659-Z6II-right.png',
});

productList.push({
    name : 'Xbox Controller',
    prince: 90,
    image: 'https://m.media-amazon.com/images/I/513gfnMEWnL.jpg',
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

let product : any;

for (product of productList){  
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const img = document.createElement('img');
    img.setAttribute('src',product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const divProductInfo = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    const productName = document.createElement('p');
    productName.innerText = product.name;

    const iconAddCart = document.createElement('figure');
    iconAddCart.setAttribute('src','../icons/bt_add_to_cart.svg');

    
}