const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const arrowAsideClose = document.querySelector('.arrow-close');
const cardsContainer = document.querySelector('.cards-container');
const darken = document.querySelector('.darken');

const mobileMenuLine = document.querySelector('.mobile-menu ul:nth-child(1)');

// Declarando funciones para abrir y cerrar los contenedores
const toggleDesktopMenu = () => {
    shoppingCartContainer.classList.remove('show');
    desktopMenu.classList.toggle('inactive');
};

const toggleMobileMenu = () => {
    shoppingCartContainer.classList.remove('show');
    mobileMenu.classList.toggle('active');
    mobileMenuLine.classList.toggle('active');
    productDetailContainer.classList.remove('show');
    darken.classList.remove('show');
};

const toggleCarritoAside = () => {
    mobileMenu.classList.remove('active');
    mobileMenuLine.classList.remove('active');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.remove('show');
    darken.classList.remove('show');
    shoppingCartContainer.classList.toggle('show');
};

const openProductDetailAside = () => {
    mobileMenu.classList.remove('active');
    mobileMenuLine.classList.remove('active');
    desktopMenu.classList.add('inactive');
    shoppingCartContainer.classList.remove('show');

    productDetailContainer.classList.toggle('show');
    darken.classList.toggle('show');
};

const closeProductDetailAside = () => {
    productDetailContainer.classList.remove('show');
    darken.classList.remove('show');
};

// llamando eventos para abrir y cerrar los contenedores
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
arrowAsideClose.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);
darken.addEventListener('click', closeProductDetailAside);

// Lista de productos
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description:
        'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.',
});
productList.push({
    name: `Automóvil`,
    price: 2880,
    image: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    description:
        'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.',
});
productList.push({
    name: 'Laptop',
    price: 480,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description:
        'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.',
});
productList.push({
    name: `Computadora (Sin el gato :'3)`,
    price: 720,
    image: 'https://images.unsplash.com/photo-1607034071833-18a5b64047ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    description:
        'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.',
});
productList.push({
    name: `Auto`,
    price: 3020,
    image: 'https://images.unsplash.com/photo-1541443131876-44b03de101c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    description:
        'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.',
});
productList.push({
    name: 'Bike',
    price: 220,
    image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1048&q=80',
    description:
        'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.',
});

// Declaración de selectores y array para Shopping Cart
const shoppingContainer = document.querySelector('.shopping-container');
const totalProduct = document.querySelector('.product-count');
const totalPrice = document.querySelector('.price-count');
const shoppingPriceProducts = [];

// Función para sunar el precio de los productos en el carrito
const addPriceProducts = arr => {
    let total = 0;
    arr.forEach(product => (total += product));
    return total;
};

// Agregar producto en 'Shopping Cart'
const addShopping = product => {
    const shoppingCart = document.createElement('div');
    shoppingCart.classList.add('shopping-cart');

    const shoppingFigure = document.createElement('figure');
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.setAttribute('alt', product.name);
    shoppingFigure.appendChild(productImg);

    const productName = document.createElement('p');
    productName.innerText = product.name;
    const productPrice = document.createElement('p');
    productPrice.innerText = product.price;

    const removeIcon = document.createElement('img');
    removeIcon.setAttribute('src', './icons/icon_close.png');
    removeIcon.setAttribute('alt', 'close');
    removeIcon.classList.add('cur-p');
    removeIcon.addEventListener('click', removeShopping);

    shoppingCart.appendChild(shoppingFigure);
    shoppingCart.appendChild(productName);
    shoppingCart.appendChild(productPrice);
    shoppingCart.appendChild(removeIcon);

    shoppingContainer.appendChild(shoppingCart);

    totalProduct.innerText = shoppingContainer.childElementCount;
    totalPrice.innerText =
        parseInt(totalPrice.textContent.substring(1)) + product.price;
    shoppingPriceProducts.push(product.price);

    totalPrice.innerText = `$${addPriceProducts(shoppingPriceProducts)}`;

    // Función para eliminar producto de 'Shopping Cart'
    function removeShopping() {
        shoppingCart.remove();
        totalProduct.innerText = shoppingContainer.childElementCount;

        const totalValue = document.querySelector('.price-count');
        const totalCurrentValue =
            parseInt(totalValue.textContent.substring(1)) - product.price;

        totalValue.innerText = `$${totalCurrentValue}`;
        shoppingPriceProducts.push(product.price - product.price * 2);
    }
};

// Función para agregar los productos en el main
const renderProducts = arr => {
    for (let product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.setAttribute('alt', product.name);
        productImg.classList.add('cur-p');
        productImg.addEventListener('click', openProductDetailAside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = `$${product.price}`;
        const productName = document.createElement('p');
        productName.innerText = `${product.name}`;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
        productImgCard.classList.add('cur-p');
        productInfoFigure.addEventListener('click', function () {
            addShopping(product);
        });

        productInfoFigure.appendChild(productImgCard);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
};

renderProducts(productList);
