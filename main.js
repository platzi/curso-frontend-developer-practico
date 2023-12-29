const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamDesktop = document.querySelector('.menu');
const menuMobil = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

navEmail.addEventListener('click',toggleDesktopMenu);
menuHamDesktop.addEventListener('click',toggleMobilMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);

function toggleDesktopMenu(){
    const IsAsideClose = aside.classList.contains('inactive');
    if(!IsAsideClose){
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobilMenu(){
    const IsAsideClose = aside.classList.contains('inactive');
    if(!IsAsideClose){
        aside.classList.add('inactive');
    }
    menuMobil.classList.toggle('inactive');
}
function toggleCarritoAside(){
    const IsMobilMenuClosed = menuMobil.classList.contains('inactive');
    if(!IsMobilMenuClosed){
        menuMobil.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
}

const productList =[];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla',
    price: 200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'laptop',
    price: 600,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla',
    price: 200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'laptop',
    price: 600,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr){
for (product of arr){

    const productCar = document.createElement('div');
    productCar.classList.add('product-card');


    const productImag = document.createElement('img');
    productImag.setAttribute('src',product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    const productInfoDiv = document.createElement('div');
    
    
    const productPrice = document.createElement('p');
    productPrice.innerText ='$'+ product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;


    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');


    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCar.appendChild(productImag);
    productCar.appendChild(productInfo);
 

    cardsContainer.appendChild(productCar);
    
}
}

renderProducts(productList);