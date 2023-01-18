const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu= document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {

    const isAsideClose = aside.classList.contains('inactive');

    if (!isAsideClose) {
        aside.classList.add('inactive');
    }

  desktopMenu.classList.toggle('inactive');
};

function toggleMobileMenu() {

    const isAsideClose = aside.classList.contains('inactive');

    if (!isAsideClose) {
        aside.classList.add('inactive');
    }
    
   mobileMenu.classList.toggle('inactive');
};

function toggleCarritoAside() {

    const isMobileMenuClose = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClose) {
        mobileMenu.classList.add('inactive');
    };

    aside.classList.toggle('inactive');

 };

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Computador',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

for(product of productList){
    const productCard= document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo= document.createElement('div');
    productInfo.classList.add('product-info');
    
    const productInfoDiv= document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price; 

    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure= document.createElement('figure');

    const productInfoCart = document.createElement('img');
    productInfoCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productInfoCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard)

}

  
