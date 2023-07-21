const menuEmail = document.querySelector('.navbar-email');
const emailMenu = document.querySelector('.desktop-menu');

const burgerMenuIcon = document.querySelector('.menu');
const burguerMenu = document.querySelector('.mobile-menu');

const cartMenuIcon = document.querySelector('.navbar-shopping-cart');
const asideCartMenu = document.querySelector('.shopping-cart-detail');

const productDetailAside = document.querySelector('.specific-product-detail');
const productDetailCloseIcon = document.querySelector('.specific-product-detail-close');

// Funcion anonima y de flecha para llamar una funcion con la posibilidad de poder enviar
// argumentos para asi reutilizar la funcion y no crear una diferente para cada elemento
menuEmail.addEventListener('click', () => toggleElement(emailMenu));
burgerMenuIcon.addEventListener('click', () => toggleElement(burguerMenu));
cartMenuIcon.addEventListener('click', () => toggleElement(asideCartMenu));
productDetailCloseIcon.addEventListener('click', () => toggleElement(productDetailAside));

function toggleElement(element) {
    element.classList.toggle('inactive');
    closeOtherMenus(element);
}

function closeOtherMenus(activeMenu) {
    // if menu doesnt has inactive class is bc it's open
    const isEmailMenuOpen = !emailMenu.classList.contains('inactive');
    const isBurguerMenuOpen = !burguerMenu.classList.contains('inactive');
    const isAsideCartMenuOpen = !asideCartMenu.classList.contains('inactive');
    const isProductDetailAsideOpen = !productDetailAside.classList.contains('inactive');
    // we add inactive class to disable all but the current menu
    if (activeMenu != emailMenu && isEmailMenuOpen) { emailMenu.classList.add('inactive') };
    if (activeMenu != burguerMenu && isBurguerMenuOpen) { burguerMenu.classList.add('inactive') };
    if (activeMenu != asideCartMenu && isAsideCartMenuOpen) { asideCartMenu.classList.add('inactive') };
    if (activeMenu != productDetailAside && isProductDetailAsideOpen) { productDetailAside.classList.add('inactive') };
}


const productList = [];
productList.push({
    name: 'Bici',
    price: 1500,
    imageURL: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description: 'Bicicleta de dos ruedas muy buena, bonita y barata'
});
productList.push({
    name: 'Moto',
    price: 25000,
    imageURL: 'https://media.gq.com.mx/photos/5ff4909934f0ef41de7cf420/16:9/w_2560%2Cc_limit/FOTO%2520PORTADA.jpg',
    description: 'Moto para verte cool muy buena, bonita y barata'
});
productList.push({
    name: 'Carro',
    price: 340000,
    imageURL: 'https://cdn.pixabay.com/photo/2021/09/20/23/03/car-6642036_1280.jpg',
    description: 'Carro para nada lujoso muy bueno, bonito y barato'
});
productList.push({
    name: 'Cuatrimoto',
    price: 45000,
    imageURL: 'https://radamotors.mx/media/2022/10/955_12616_desktop.jpeg',
    description: 'Cuatrimoto todoterreno para hacer arrancones muy buena, bonita y barata'
});
productList.push({
    name: 'Camión',
    price: 1500000,
    imageURL: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/TSA6JK2HYBETRIGJYDHXWSENVQ.jpg',
    description: 'Camión grande y espacioso muy bueno, bonito y no tan barato'
});
productList.push({
    name: 'Scooter',
    price: 15000,
    imageURL: 'https://i.blogs.es/3055fe/xiaomi-mijia-m365-fotos-1/1366_2000.jpg',
    description: 'Scooter Eléctrico para ciudad. No garantizamos que no te persigan los perros.'
});

const cardsContainer = document.querySelector('.cards-container');

for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.setAttribute('index', productList.indexOf(product));
    //productCard.id = productList.indexOf(product);

    const productImage = document.createElement('img');
    productImage.setAttribute('src', product.imageURL);
    //productImage.src = product.imagen;

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productName = document.createElement('p');
    productName.innerText = product.name;
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    const productFigure = document.createElement('figure');

    const productCartIcon = document.createElement('img');
    productCartIcon.setAttribute('src', './icons/bt_add_to_cart.svg');

    productFigure.appendChild(productCartIcon);
    productInfoDiv.append(productPrice, productName);
    productInfo.append(productInfoDiv, productFigure);
    // productImage.appendChild(productInfo);
    productCard.append(productImage, productInfo);
    cardsContainer.appendChild(productCard);

    productCard.addEventListener('click', () => showProductDetail(productCard.getAttribute('index')));
}

/* Just replace parameters of current HTML created aside */
const productDetailImage = document.querySelector('.specific-product-detail-image');
const productDetailPrice = document.querySelector('#detail-price');
const productDetailName = document.querySelector('#detail-name');
const productDetailDescription = document.querySelector('#detail-descr');

function showProductDetail(productIndex) {
    const product = productList[productIndex];
    // if product details aside is closed
    if (productDetailAside.classList.contains('inactive')) {
        // open it
        productDetailAside.classList.remove('inactive');
        // and close the rest of the menus that could be open
        closeOtherMenus(productDetailAside);
    }
    productDetailImage.setAttribute('src', product.imageURL);
    productDetailPrice.innerText = '$' + product.price;
    productDetailName.innerText = product.name;
    productDetailDescription.innerText = product.description;
}