const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');




// escuchadores de eventos
menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurger.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartAside);

// Desaparecer menus hasta hacer click
function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
     if(!isAsideClosed){
         aside.classList.add('inactive');
     }
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
     if(!isAsideClosed){
         aside.classList.add('inactive');
     }
    mobileMenu.classList.toggle('inactive');
}
function toggleCartAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    if (!isMobileMenuClosed) {
         mobileMenu.classList.add('inactive');
     }
    aside.classList.toggle('inactive');
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
   for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image)

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
