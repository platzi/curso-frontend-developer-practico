const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');



// escuchadores de eventos
menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurger.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

// Desaparecer menus hasta hacer click
function toggleDesktopMenu() {
    // const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    //  if(!isAsideClosed){
    //     shoppingCartContainer.classList.add('inactive');
    //  }
    desktopMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}
function toggleMobileMenu() {
    // const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    //  if(!isAsideClosed){
    //     shoppingCartContainer.classList.add('inactive');
    //  }
    mobileMenu.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}
function toggleCartAside() {
    // const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    // if (!isMobileMenuClosed) {
    //     mobileMenu.classList.add('inactive');
    // }

    // const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    //  if (!isMobileMenuClosed) {
    //      mobileMenu.classList.add('inactive');
    // }

    shoppingCartContainer.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');

}

function openProductDetailAside() {
    productDetailContainer.classList.remove('inactive');  
}
function closeProductDetailAside() {
    shoppingCartContainer.classList.toggle('inactive');
    productDetailContainer.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');

}

const productList = [];
   productList.push({
    name: 'Pioneer CX (Dj Headphones)',
    price: 180,
    image: 'https://audiowave.com.co/wp-content/uploads/2022/06/hdj-cx-3.jpg',
   })
   productList.push({
    name: 'Sennheiser HD-25 Plus (DJ Headphones',
    price: 160,
    image:'https://audiowave.com.co/wp-content/uploads/2019/05/hd25plus.jpg' ,
   })
   productList.push({
    name: 'Pioneer PLX-500 Tornamesa',
    price: 400,
    image: 'https://audiowave.com.co/wp-content/uploads/2019/06/plx500-3.jpg',
   })
   productList.push({
    name: 'Mixer Xone Allen & Heath Xone:96',
    price: 3000,
    image: 'https://audiowave.com.co/wp-content/uploads/2020/09/xone-96.jpg',
   })
   productList.push({
    name: 'Pioneer CDJ-3000',
    price: 3500,
    image: 'https://audiowave.com.co/wp-content/uploads/2020/12/cdj3000-3.jpg',
   })
   productList.push({
    name: 'Pioneer DJ DM-50D - Monitores de Estudio',
    price: 600,
    image:'https://audiowave.com.co/wp-content/uploads/2023/05/dm50dbt.jpg' ,
   })
   productList.push({
    name: 'Mixer Pioneer DJM-A9',
    price: 2800,
    image:'https://audiowave.com.co/wp-content/uploads/2023/10/a9.jpg' ,
   })
function renderProducts(arr) {
    for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside);

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
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
   }
}
renderProducts(productList);
