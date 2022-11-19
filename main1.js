const menuMail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const burgerMenu = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuMail.addEventListener('click', toogleDesktopMenu);
burgerMenu.addEventListener('click', toogleMobileMenu);
menuCarritoIcon.addEventListener('click', toogleCarritoAside);

function toogleDesktopMenu(params) {
    aside.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toogleMobileMenu() {
    aside.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toogleCarritoAside() {
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""'
})
productList.push({
    name: 'pc',
    price: 360,
    image: 'https://i.ibb.co/X5HqxK6/pexels-pixabay-38568.jpg" alt="computador"'
})
productList.push({
    name: 'Samsung galaxy',
    price: 900,
    image: 'https://i.ibb.co/jW8H9R4/pexels-mohi-syed-47261.jpg" alt="phone"'
})
productList.push({
    name: 'Shirt and Shoes',
    price: 1000,
    image: 'https://i.ibb.co/YRY9JBR/pexels-terje-sollie-298863.jpg" alt="shirt and shoes"'
})
productList.push({
    name: 'Phone',
    price: 800,
    image: 'https://i.ibb.co/MDs9DVr/pexels-jess-bailey-designs-788946.jpg" alt="phone and airpods"'
})
productList.push({
    name: 'shirt',
    price: 80,
    image: 'https://i.ibb.co/0hvhdzx/pexels-azamat-esenaliev-119550.jpg" alt="mouse and laptop"'
})
productList.push({  
    name: 'Clock',
    price: 750,
    image: 'https://i.ibb.co/LxrQJMD/pexels-alex-carollo-592815.jpg alt="clock"'
})
productList.push({
    name: 'Camera',
    price: 1200,
    image: 'https://i.ibb.co/Rgq8tNm/pexels-pixabay-51383.jpg" alt="camera"'
})
productList.push({
    name: 'Sneakers',
    price: 940,
    image: 'https://i.ibb.co/qNrR3dn/pexels-adrian-dorobantu-2300334.jpg" alt="Sneakers"'
})

for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

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
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}