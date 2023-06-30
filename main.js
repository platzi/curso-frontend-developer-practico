const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const asideProductDescription = document.querySelector('.product-detail-aside');
const cardsContainer = document.querySelector('.cards-container');

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'
})
productList.push({
    name: 'Television',
    price: 800,
    image: 'https://images.pexels.com/photos/5197107/pexels-photo-5197107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: "Looking for a top-of-the-line viewing experience? Look no further than our state-of-the-art television! With stunning picture quality, vibrant colors, and crystal-clear sound, you'll feel like you're right in the middle of the action. Plus, with the latest smart features, you can easily connect to your favorite streaming services and control your TV with just your voice. Upgrade your entertainment system today with our amazing television!"
})
productList.push({
    name: 'Computer',
    price: 2000,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    description: "Are you looking for a reliable and high-performance computer that will help you tackle all your work and entertainment needs? Our cutting-edge computer system is exactly what you need. With lightning-fast processing speeds, ample storage, and advanced graphics capabilities, you'll be able to breeze through all your tasks and enjoy seamless multimedia experiences. Plus, our sleek and modern design will add a touch of sophistication to any workspace. Don't settle for a subpar computer - upgrade to our top-of-the-line system today and take your productivity to the next level!"
})
function renderProducts (arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = `$${product.price}`
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName)
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.append(productInfoDiv, productInfoFigure);
        productCard.append(img, productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}
function renderProductDescription () {
    asideProductDescription.innerHTML = '';

    /*Buscar el producto del HTML en la lista de productos*/
    let currentProduct;
    const productName = this.querySelector('.product-info div p:nth-child(2)').innerText;
    console.log(productName);
    for (product of productList) {
        if (product.name == productName) {
            currentProduct = product;
            console.log(product);
        }
    }

    /* Hacer el aside del elemento en especifico e introducirlo en product-detail-aside*/
    const productDetailClose = document.createElement('div');
    productDetailClose.classList.add('product-detail-close');

    const iconClose = document.createElement('img');
    iconClose.setAttribute('src', './icons/icon_close.png');

    productDetailClose.appendChild(iconClose);

    iconClose.addEventListener('click', _ => asideProductDescription.classList.toggle('inactive'));

    const productImage = document.createElement('img');
    productImage.setAttribute('src', currentProduct.image);

    const productInfoAside = document.createElement('div');
    productInfoAside.classList.add('product-info-aside');

    const name = document.createElement('p');
    name.innerText = currentProduct.name;

    const price = document.createElement('p');
    price.innerText = `$${currentProduct.price}`;

    const description = document.createElement('p');
    description.innerText = currentProduct.description;

    const primaryButton = document.createElement('button');
    primaryButton.classList.add('primary-button', 'add-to-cart-button');
    

    const cartIcon = document.createElement('img');
    cartIcon.setAttribute('src', './icons/bt_add_to_cart.svg');

    primaryButton.append(cartIcon, 'Add to cart');
    productInfoAside.append(price, name, description, primaryButton);
    asideProductDescription.append(productDetailClose, productImage, productInfoAside);
    openProductDescription();
}
function openProductDescription() {
    /* ocultar el otro aside si esta activo, y mostrar este aside */
    const isAsideOpen = !aside.classList.contains('inactive');

    if (isAsideOpen) {
        aside.classList.toggle('inactive');
    }

    if (asideProductDescription.classList.contains('inactive')) {
        asideProductDescription.classList.toggle('inactive');
    }
}
function toggleDesktopMenu() {
    const isAsideOpen = !aside.classList.contains('inactive');

    if (isAsideOpen) {
        aside.classList.toggle('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideOpen = !aside.classList.contains('inactive');
    const isProductDescriptionOpen = !asideProductDescription.classList.contains('inactive');

    if (isAsideOpen) {
        aside.classList.toggle('inactive');
    }
    
    if (isProductDescriptionOpen) {
        asideProductDescription.classList.toggle('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isProductDescriptionOpen = !asideProductDescription.classList.contains('inactive');

    if (isMobileMenuOpen) {
        mobileMenu.classList.toggle('inactive');
    }

    if (isProductDescriptionOpen) {
        asideProductDescription.classList.toggle('inactive');
    }

    aside.classList.toggle('inactive');
}

renderProducts(productList);
const products = document.querySelectorAll('.product-card');
for( prod of products) {
    prod.addEventListener('click', renderProductDescription);
}

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

