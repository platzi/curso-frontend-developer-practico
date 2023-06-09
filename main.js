var navbarEmail = document.querySelector('.navbar-email');
var menuHamIcon = document.querySelector('.menu');
var menuCarIcon = document.querySelector('.navbar-shopping-cart');
var productDetailCloseIcon = document.querySelector('.product-detail-close');

var desktopMenu = document.querySelector('.desktop-menu');
var mobileMenu = document.querySelector('.mobile-menu');
var carMenu = document.querySelector('#shoppingCart');
var cardsContainer = document.querySelector('.cards-container');
var productDetailContainer = document.querySelector('#productDetail');



navbarEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', toggleCarMenu);
productDetailCloseIcon.addEventListener('click', closeDetailAside);

function toggleDesktopMenu(event){
    desktopMenu.classList.toggle('inactive')
    carMenu.classList.add('inactive')
    productDetailContainer.classList.add('inactive')
}

function toggleMobileMenu(event){
    mobileMenu.classList.toggle('inactive')
    carMenu.classList.add('inactive')
    productDetailContainer.classList.add('inactive')
}

function toggleCarMenu(event){
    carMenu.classList.toggle('inactive')
    desktopMenu.classList.add('inactive')
    mobileMenu.classList.add('inactive')
    productDetailContainer.classList.add('inactive')
}

function openDetailAside(event){
    productDetailContainer.classList.remove('inactive')
    carMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
    mobileMenu.classList.add('inactive')
}

function closeDetailAside(event){
    productDetailContainer.classList.add('inactive')
}


const productList = [];
productList.push({
    name: 'Bike',
    price: 120.00,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Pantalla',
    price: 80.00,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Teclado',
    price: 15.00,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
// productList.push({
//     name: 'Bike',
//     price: 120.00,
//     image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
// });

// productList.push({
//     name: 'Pantalla',
//     price: 80.00,
//     image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
// });

// productList.push({
//     name: 'Teclado',
//     price: 15.00,
//     image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
// });

// <div class="product-card">
// <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
//     alt="">
// <div class="product-info">
//     <div>
//         <p>$120,00</p>
//         <p>Bike</p>
//     </div>
//     <figure>
//         <img src="./icons/bt_add_to_cart.svg" alt="">
//     </figure>
// </div>
// </div>

for (product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openDetailAside);
    
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');
    
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    const productName = document.createElement('p');
    productName.innerText = product.name;
    
    const productInfoFigure = document.createElement('figure');

    const productInfoImg = document.createElement('img');
    productInfoImg.setAttribute('src', './icons/bt_add_to_cart.svg')

    productInfoFigure.appendChild(productInfoImg);
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}