const menuEmail              = document.querySelector('.navbar-email');
const desktopMenu            = document.querySelector('.desktop-menu');
const menuHamIcon            = document.querySelector('.menu');
const mobileMenu             = document.querySelector('.mobile-menu');
const menuCarritoIcon        = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const shoppingCartContainer  = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer         = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobilepMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);

/**
 * Toggle desktop menu
 */
function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        // If mobileMenu is open, close it
        shoppingCartContainer.classList.add('inactive');
    }

    // Close product detail aside
    closeProductDetailAside();

    desktopMenu.classList.toggle('inactive');
}

/**
 * Toggle mobile menu
 */
function toggleMobilepMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        // If chopping cart aside is open, close it
        shoppingCartContainer.classList.add('inactive');
    }

    // Close product detail aside
    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

/**
 * Toggle shopping cart aside
 */
function toggleCarritoAside() {
    const isMobileMenuClosed    = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed   = desktopMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        // If mobileMenu is open, close it
        mobileMenu.classList.add('inactive');
    }

    if (!isDesktopMenuClosed) {
        // If desktopMenu is open, close it
        desktopMenu.classList.add('inactive');
    }

    if (!isProductDetailClosed) {
        // If product detail is open, close it
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}

/**
 * Close product detail
 */
function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

/**
 * Open product detail
 */
function openProductDetailAside(element) {
    // Close menus and shopping cart aside
    shoppingCartContainer.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');

    // Get product id to call info from array product list
    const idProduct = element.target.parentElement.id;

    for (const productDetail of productList) {
        if (productDetail.id == idProduct) {
            // Set image attributes
            document.querySelector('#productDetail-image').setAttribute('src', productDetail.image);
            document.querySelector('#productDetail-image').setAttribute('alt', productDetail.name);

            // Set price
            document.querySelector('#productDetail-price').innerText = '$' + productDetail.price; 

            // Set name
            document.querySelector('#productDetail-name').innerText = productDetail.name;            

            // Set description
            document.querySelector('#productDetail-description').innerText = productDetail.description;
        }
    }

    // Open product detail aside
    productDetailContainer.classList.remove('inactive');
}

// Array with product list data
const productList = [];
productList.push({
    id: 1,
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'
});
productList.push({
    id: 2,
    name: 'Pantalla',
    price: 240,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'This is the pantalla description'
});
productList.push({
    id: 3,
    name: 'Computador',
    price: 520,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'This is the Computer description'
});

/**
 * Function to render all produicts on the page
 * @param {Array} arr // Array with all product list
 */
const renderProducts = (arr) => {
    for (const product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.setAttribute('id', product.id);
    
        // productList name, image, price
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = '$' + product.name;
    
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCard);
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(productImg, productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);