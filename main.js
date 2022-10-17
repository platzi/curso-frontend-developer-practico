const navEmail = document.querySelector ('.navbar-email');
const desktopMenu = document.querySelector ('.desktop-menu');

const menuHamIcon = document.querySelector ('.menu');
const mobileMenu = document.querySelector ('.mobile-menu');

const menuCarritoIcon = document.querySelector ('.navbar-shopping-cart');
const menuCarrito = document.querySelector ('.product-detail');

const cardsContainer =  document.querySelector('.cards-container');


navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', togglemenuCarrito);

function toggleDesktopMenu() {
    const isMenuCarritoClosed = menuCarrito.classList.contains('inactive');

    if (!isMenuCarritoClosed) {
    menuCarrito.classList.add('inactive')
    }


    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isMenuCarritoClosed = menuCarrito.classList.contains('inactive');

        if (!isMenuCarritoClosed) {
        menuCarrito.classList.add('inactive')
        }


    mobileMenu.classList.toggle('inactive');
}

function togglemenuCarrito() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

        if (!isMobileMenuClosed) {
            mobileMenu.classList.add('inactive')
        }
        if (!isDesktopMenuClosed) {
            desktopMenu.classList.add('inactive')
        }


    menuCarrito.classList.toggle('inactive');
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Computer',
    price: 700,
    image: 'https://i.insider.com/5e31f0d162fa811f6d5b011c?width=1136&format=jpeg',
});
productList.push({
    name: 'Cell Phone',
    price: 520,
    image: 'https://www.lg.com/us/images/cell-phones/MD05967556/MD05967557/gallery/medium04.jpg',
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Computer',
    price: 700,
    image: 'https://i.insider.com/5e31f0d162fa811f6d5b011c?width=1136&format=jpeg',
});
productList.push({
    name: 'Cell Phone',
    price: 520,
    image: 'https://www.lg.com/us/images/cell-phones/MD05967556/MD05967557/gallery/medium04.jpg',
});

function renderProducts(arr) {
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