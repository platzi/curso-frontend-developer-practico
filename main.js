const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBarIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuBarIcon.addEventListener('click', toggleMobileMenu);
carIcon.addEventListener('click', togglesaide);

//Menu desplegable en el correo electronico
function toggleDesktopMenu() {
    const isAsideClose = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClose) {
        shoppingCartContainer.classList.add('inactive');     
    }
    desktopMenu.classList.toggle('inactive');
}

// menu de barras en la version mobile
function toggleMobileMenu() {
    const isAsideClose = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClose) {
        shoppingCartContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

// menu de carrito de compras
function togglesaide() {
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClose) {
        mobileMenu.classList.add('inactive');
    }else if (!isDesktopMenuClose) {
        desktopMenu.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');
}

// lista de productos
/*con una lista larga de productos no es eficiente poner producto por producto en html(como en el archivo de la calse6.html) por esta razon se crea una lista en el backend que permitira acceder a los productos de una forma mas eficiente*/
const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: "Bike",
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: "Bike",
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: "Bike",
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: "Bike",
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: "Bike",
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

// encapsular el ciclo for en una funcion nos permite cambiar la base de datos de manera mas eficiente en caso de ser necesario.
function renderProducts(ar) {
    for (product of ar) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        // product= {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName);
    
        const productFigure = document.createElement('figure');
    
        const productFigureCard = document.createElement('img');
        productFigureCard.setAttribute('src', './icons/bt_add_to_cart.svg')
    
        productFigure.appendChild(productFigureCard);
    
        productInfo.append(productInfoDiv, productFigure);
        productCard.append(productImg, productInfo);
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);
