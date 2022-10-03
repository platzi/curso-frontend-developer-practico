const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideOpen = !aside.classList.contains('inactive');
    
    desktopMenu.classList.toggle('inactive');
    if (isAsideOpen) {
        aside.classList.toggle('inactive');
    }
}

function toggleMobileMenu() {
    const isAsideOpen = !aside.classList.contains('inactive');
    mobileMenu.classList.toggle('inactive');
    if (isAsideOpen) {
        aside.classList.toggle('inactive');
    }
}

function toggleCarritoAside() {
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const idDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    aside.classList.toggle('inactive');
    if (isMobileMenuOpen) {
        mobileMenu.classList.toggle('inactive'); 
    }
    if (idDesktopMenuOpen) {
        desktopMenu.classList.toggle('inactive'); 
    }
}

const productList = [];
productList.push({
    name:'Bike',
    price: 120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name:'Bike',
    price: 120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name:'Bike',
    price: 120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

const cardsContainer = document.querySelector('.cards-container');

function renderProducts(array) {
    for (const product of array) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$'+product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice,productName);
        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src','./icons/bt_add_to_cart.svg');
        
        productInfoFigure.appendChild(productImgCard);
    
        productInfo.append(productInfoDiv,productInfoFigure);
    
        productCard.append(productImg,productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);