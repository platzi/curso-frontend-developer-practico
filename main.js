const d = document;
const menuEmail = d.querySelector('.navbar-email');
const desktopMenu = d.querySelector('.desktop-menu');

const hamMenuIcon = d.querySelector('.menu');
const mobileMenu = d.querySelector('.mobile-menu');

const menuCarIcon = d.querySelector('.navbar-shopping-cart');
const aside = d.getElementById('shoppingCartContainer');
const productDetailContainer = d.getElementById('productDetail');
const productDetailClose = d.querySelector('.product-detail-close');
const cardContainer = d.querySelector('.cards-container');
const darkenBackground = d.querySelector('.darken');



menuEmail.addEventListener('click', toggleDesktopMenu);
hamMenuIcon.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', toggleCarrito);
productDetailClose.addEventListener('click', closeProductDetails);

// function toggleDesktopMenu(){
//     const isAsideClosed = aside.classList.contains('inactive');
    
//     if(!isAsideClosed){
//         aside.classList.add('inactive');
//     }
//     desktopMenu.classList.toggle('inactive');
// }

function itsNotDarken(){
    const isNotDarken = darkenBackground.classList.contains('inactive');
    if(!isNotDarken){
        darkenBackground.classList.add('inactive');
    } else {
        darkenBackground.classList.remove('inactive');
    }
}

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    aside.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    itsNotDarken();
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    itsNotDarken();
}

function toggleCarrito(){
    aside.classList.toggle('inactive');
    productDetailContainer.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    itsNotDarken();
}

function openProductDetail(){
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    aside.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
    itsNotDarken();
}

function closeProductDetails(){
    productDetailContainer.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    aside.classList.add('inactive');
    itsNotDarken();
}



const productList = [];
productList.push({
    name: 'Bike',
    price: 1232,
    image: "https://picsum.photos/500/500?random=1"
});

productList.push({
    name: 'Car',
    price: 23254,
    image: 'https://picsum.photos/500/500?random=2'
});

productList.push({
    name: 'Airplane',
    price: 1233456,
    image: 'https://picsum.photos/500/500?random=3'
});

productList.push({
    name: 'Bus',
    price: 652148,
    image: 'https://picsum.photos/900/900'
});

function renderProducts(arr){
    for(product of arr) {
        const productCard = d.createElement('div');
        productCard.classList.add('product-card');
        productCard.addEventListener('click', openProductDetail);
        const producImg = d.createElement('img');
        producImg.setAttribute('src', product.image);
        const productInfo = d.createElement('div');
        productInfo.classList.add('product-info');
        const productInfoDiv = d.createElement('div');
        const productPrice = d.createElement('p')
        productPrice.innerText = `$ ${product.price}`;
        const productName = d.createElement('p');
        productName.innerText = product.name;
        const productInfoFigure = d.createElement('figure');
        const icon = d.createElement('img');
        icon.setAttribute('src', './icons/bt_add_to_cart.svg');
        // productInfoDiv.appendChild(productPrice);
        // productInfoDiv.appendChild(productName);
        // productInfoFigure.appendChild(icon);
        // productInfo.appendChild(productInfoFigure);
        // productInfo.appendChild(productInfoDiv);
        // productCard.appendChild(producImg);
        // productCard.appendChild(productInfo);
        // cardContainer.appendChild(productCard);
    
        productInfoDiv.append(productPrice, productName);
        productInfoFigure.appendChild(icon);
        productInfo.append(productInfoFigure, productInfoDiv);
        productCard.append(producImg,productInfo);
        cardContainer.appendChild(productCard);
    }
}

renderProducts(productList);