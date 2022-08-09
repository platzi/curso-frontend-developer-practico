const menuEmail = document.querySelector('.navbar-email');
const desktopMenu  = document.querySelector('.desktop-menu');
const menuCarritoIcon  = document.querySelector('.navbar-shopping-cart');
const menuHanIcon  = document.querySelector('.menu');
const mobileMenu  = document.querySelector('.mobile-menu');
const aside  = document.querySelector('.product-detail');
const cardsConteiner = document.querySelector('.cards-container');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuHanIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
}

function toggleCarritoAside(){
    aside.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr){
    for (product of arr) {
        const productCar = document.createElement('div');
        productCar.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$'+product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        /* meter todo lo anterior a la clase cards conteiner */
        cardsConteiner.appendChild(productCar);
        productCar.append(productImg,productInfo);
        productInfo.append(productInfoDiv,productInfoFigure);
        productInfoFigure.appendChild(productImgCard);
        productInfoDiv.append(productPrice,productName);    
    } 
}

renderProducts(productList);

