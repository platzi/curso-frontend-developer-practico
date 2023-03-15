const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive')
    
    if(!isAsideClosed) {
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
        
    if(!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }   
   aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name:'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name:'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=400',
});
productList.push({
    name:'Mouse',
    price: 90,
    image: 'https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=400',
});
productList.push({
    name:'Ipad',
    price: 500,
    image: 'https://images.pexels.com/photos/221185/pexels-photo-221185.jpeg?auto=compress&cs=tinysrgb&w=400',
});
productList.push({
    name:'Iphone',
    price: 350,
    image: 'https://images.pexels.com/photos/15876529/pexels-photo-15876529.jpeg?auto=compress&cs=tinysrgb&w=400',
});
productList.push({
    name:'Ipods',
    price: 150,
    image: 'https://images.pexels.com/photos/4526396/pexels-photo-4526396.jpeg?auto=compress&cs=tinysrgb&w=400',
});
productList.push({
    name:'Books',
    price: 350,
    image: 'https://images.pexels.com/photos/3368816/pexels-photo-3368816.jpeg?auto=compress&cs=tinysrgb&w=400',
});

function renderProducts (arr) {
      for (product of arr) {
    const productCard = document.createElement('div')
    productCard.classList.add('product-card');
    /*Product-card= (name, price, image) => product.image */

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');
   
    const productPrice = document.createElement('p');
    productPrice.innerText ='$' + product.price;
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