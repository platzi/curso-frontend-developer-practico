const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuHaIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const productoDetailFull = document.querySelector('.product-detail-full');
const productoDetailFullCloset = document.querySelector('.product-detail-close-full');

menuEmail.addEventListener('click',toggleDestopMenu);
menuHaIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toogleCarritoAside);
productoDetailFullCloset.addEventListener('click',closeProductDetailFull);

function toggleDestopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');    
    
    if (!isAsideClosed){
        aside.classList.add('inactive');            
    }

    console.log('Click Email');
    desktopMenu.classList.toggle('inactive');  
    
    productoDetailFull.classList.add('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');    
    
    if (!isAsideClosed){
        aside.classList.add('inactive');            
    }

    console.log('Click Menu Mobile');
    mobileMenu.classList.toggle('inactive');

    productoDetailFull.classList.add('inactive');
}

function toogleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductoDetailFullCloset = productoDetailFull.classList.contains('inactive');   
    
    if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');            
    }

    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');            
    }

    if (!isProductoDetailFullCloset){
        productoDetailFull.classList.add('inactive');            
    }

    console.log('Click Buy Car');
    aside.classList.toggle('inactive');
}

function openProductoDetailFull(){
    aside.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productoDetailFull.classList.remove('inactive');
}

function closeProductDetailFull() {
    productoDetailFull.classList.add('inactive');
}

const productList = [];
for (let index = 0; index < 5; index++) {
    productList.push({
        name: 'Bike',
        price: 120+index,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',    
    });    
}

function renderProducts(arr){  

    /* Code create for js
        <div class="product-card">
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
        </div>
    */

    for (product of arr) {    
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click',openProductoDetailFull);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;

        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCard);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);


/* // Detect MediaQuery and place display none in menu mobile and menu hamburge

const mql = window.matchMedia('(max-width: 640px)');
const mql1 = window.matchMedia('(min-width: 641px)');

mql1.onchange = (e) => {
    if (e.matches) {
        console.log('This is a wide screen — more than 640px wide.');
        mobileMenu.style.display="none";
        mobileMenu.setAttribute('display:','none');
        console.log('display none at mobile menu');        
    }
}

mql.onchange = (e) => {
    if (e.matches) {
        console.log('This is a wide screen — less than 640px wide.');
        desktopMenu.style.display="none";
        console.log('display none at desktop menu');        
    }
}*/
