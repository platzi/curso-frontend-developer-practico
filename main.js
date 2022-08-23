const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburgerIcon = document.querySelector('.menu');
const menuShoppingCar = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const carContainer = document.querySelector('.cards-container');

function toggleDesktopMenu() {
    const isAsideOpen = !aside.classList.contains('inactive');

    //When we make click on the email in the navbar we closed the aside if it´s open
    if (isAsideOpen) {
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobilMenu() {
    const isAsideOpen = !aside.classList.contains('inactive');

    //When we make click on the humburger menu icon (in mobile) in the navbar we closed the aside if it´s open
    if (isAsideOpen) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCar() {
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isdesktopMenuOpen = !desktopMenu.classList.contains('inactive');

    //When we make click on the shopping cart icon we closed the mobile menu and desktop menu if it´s open
    if (isMobileMenuOpen) {
        mobileMenu.classList.add('inactive');
    } else if (isdesktopMenuOpen) {
        desktopMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productList.push({
    name: 'Screen',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productList.push({
    name: 'Computer',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

function renderProduct(array) {
    for (product of array) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const divContainer = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        divContainer.append(productPrice, productName);
    
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.append(divContainer, productInfoFigure);
    
        productCard.append(img, productInfo);
    
        carContainer.appendChild(productCard);
    
    }
}

renderProduct(productList);

navEmail.addEventListener('click', toggleDesktopMenu);
menuHamburgerIcon.addEventListener('click', toggleMobilMenu);
menuShoppingCar.addEventListener('click', toggleShoppingCar);