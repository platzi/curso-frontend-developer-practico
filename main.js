const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shopping-cart-container');
const productDetailContainer = document.querySelector('#product-detail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const cardContainer = document.querySelector('.cards-container');
const darkScreen = document.querySelector('.dark-screen');
const addProductMenuIcon = document.querySelector('.add-product');
const addProductMenu = document.querySelector('.add-product-menu');
const addProductBtn = document.querySelector('.add-product-button');

menuEmail.addEventListener('click', toggleDestopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);
darkScreen.addEventListener('click', closeAllMenus);
addProductMenuIcon.addEventListener('click', toggleAddProductMenu);
addProductBtn.addEventListener('click', addProduct);

function toggleAddProductMenu() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    } else if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    const isProductDetailAsideClosed = productDetailContainer.classList.contains('inactive');

    if (!isProductDetailAsideClosed) {
        closeProductDetailAside();
    }

    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    toggleDarkScreen(addProductMenu);
    addProductMenu.classList.toggle('inactive');
}

function toggleDestopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    const isAddProductMenuClosed = addProductMenu.classList.contains('inactive');

    if (!isAddProductMenuClosed) {
        addProductMenu.classList.add('inactive');
    }

    toggleDarkScreen(desktopMenu);
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside()

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    } else if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    const isProductDetailAsideClosed = productDetailContainer.classList.contains('inactive');

    if (!isProductDetailAsideClosed) {
        closeProductDetailAside();
    }

    const isAddProductMenuClosed = addProductMenu.classList.contains('inactive');

    if (!isAddProductMenuClosed) {
        addProductMenu.classList.add('inactive');
    }

    toggleDarkScreen(shoppingCartContainer);
    shoppingCartContainer.classList.toggle('inactive');

}

function openProductDetailAside(product) {

    const productDetailImg = document.querySelector('#product-detail-img');
    const productDetailPrice = document.querySelector('.product-info p:nth-child(1)');
    const productDetailName = document.querySelector('.product-info p:nth-child(2)');
    const productDetailDescription = document.querySelector('.product-info p:nth-child(3)');

    productDetailImg.setAttribute('src', product.img);
    productDetailPrice.innerText = '$' + product.price;
    productDetailName.innerText = product.name;
    productDetailDescription.innerText = product.info;

    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
    darkScreen.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
    darkScreen.classList.add('inactive');
}

function closeAllMenus() {
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    addProductMenu.classList.add('inactive');
    darkScreen.classList.add('inactive');
}

function toggleDarkScreen(menu) {
    const isMenuOpen = !menu.classList.contains('inactive');

    if (isMenuOpen) {
        darkScreen.classList.add('inactive');
    } else {
        darkScreen.classList.remove('inactive');
    }
}

const productList = []

productList.push({
    name: 'Bike',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    info: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace',
})
productList.push({
    name: 'Pantalla',
    price: 220,
    img: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    info: 'With its practical position, this Display also fulfills a decorative function, add your hall or workspace',
})
productList.push({
    name: 'PC',
    price: 620,
    img: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    info: 'With its practical position, this PC also fulfills a decorative function, add your hall or workspace',
})

function renderProducts(arr) {
    for (const product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImage = document.createElement('img');
        productImage.setAttribute('src', product.img);
        productImage.addEventListener('click', () => {
            openProductDetailAside(product);
        })

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

        productCard.appendChild(productImage);
        productCard.appendChild(productInfo);

        cardContainer.appendChild(productCard);
    }
}

function renderNewProduct(product) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImage = document.createElement('img');
    productImage.setAttribute('src', product.img);
    productImage.addEventListener('click', () => {
        openProductDetailAside(product);
    })

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

    productCard.appendChild(productImage);
    productCard.appendChild(productInfo);

    cardContainer.appendChild(productCard);
}

function addProduct() {
    const addProductImageInput = document.querySelector('.add-product-menu ul li:nth-child(1) input');
    const addProductNameInput = document.querySelector('.add-product-menu ul li:nth-child(2) input');
    const addProductPriceInput = document.querySelector('.add-product-menu ul li:nth-child(3) input');
    const addProductDescriptionInput = document.querySelector('.add-product-menu ul li:nth-child(4) input');

    const addProductImage = addProductImageInput.value;
    const addProductName = addProductNameInput.value;
    const addProductPrice = addProductPriceInput.value;
    const addProductDescription = addProductDescriptionInput.value;

    const newProduct = {
        name: addProductName,
        price: addProductPrice,
        img: addProductImage,
        info: addProductDescription,
    };

    console.log(newProduct.name);

    renderNewProduct(newProduct);

    // Limpiar los campos de entrada después de agregar el producto
    addProductImageInput.value = '';
    addProductNameInput.value = '';
    addProductPriceInput.value = '';
    addProductDescriptionInput.value = '';
}

renderProducts(productList);