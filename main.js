const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

const menuIcon = document.querySelector('.menu')
const menuMobile = document.querySelector('.mobile-menu')

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')

const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu () {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive')
    } 

    desktopMenu.classList.toggle('inactive')
}

menuIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu () {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive')
}

    menuMobile.classList.toggle('inactive')
}

menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleCarritoAside () {
const isMobileMenuClosed = menuMobile.classList.contains('inactive');
const isNavBarEmailClosed = menuEmail.classList.contains('inactive')

if (!isMobileMenuClosed) {
    menuMobile.classList.add('inactive')
} else {desktopMenu.classList.add('inactive')}

shoppingCartContainer.classList.toggle('inactive');
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productList.push({
    name: 'Screen',
    price: 330,
    image: 'https://www.wesellit.ph/content/images/thumbs/0004877_samsung-24-flat-screen-led-monitor.jpeg',
})

productList.push({
    name: 'Laptop',
    price: 1400,
    image: 'https://i.pcmag.com/imagery/roundups/02naaOkVLe7DIiejFUyDPJp-31..v1588859331.jpg',
})

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productList.push({
    name: 'Screen',
    price: 330,
    image: 'https://www.wesellit.ph/content/images/thumbs/0004877_samsung-24-flat-screen-led-monitor.jpeg',
})

productList.push({
    name: 'Laptop',
    price: 1400,
    image: 'https://i.pcmag.com/imagery/roundups/02naaOkVLe7DIiejFUyDPJp-31..v1588859331.jpg',
})

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        // product = {name, price, image}
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure')
    
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList)