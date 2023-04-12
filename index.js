const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuDelCarrito = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const menuShowMobile = document.querySelector('.menu-show-mobile');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCardContainer = document.querySelector('#shoppingCardContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');



navEmail.addEventListener('click', intercambioMenuEscritorio);
menuShowMobile.addEventListener('click', toggleMobileMenu);
menuDelCarrito.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);


function intercambioMenuEscritorio(){
    const isAsideClosed = shoppingCardContainer.classList.contains('inactiv');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactiv');

    if(!isAsideClosed){
        shoppingCardContainer.classList.add('inactiv');
    }

    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactiv');
    }

    desktopMenu.classList.toggle('inactiv')
    // classList accede a las clases de nuestro html
    // el (.toggle) añade o elimina las clases del html
}

function toggleMobileMenu(){
    const isAsideClosed = shoppingCardContainer.classList.contains('inactiv');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactiv');

    if(!isAsideClosed){
        shoppingCardContainer.classList.add('inactiv');
    }

    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactiv');
    }

    mobileMenu.classList.toggle('inactiv');
}

function toggleCarritoAside(){
    const mobileMenuClosed = mobileMenu.classList.contains('inactiv');
    const menuDesktopClosed = desktopMenu.classList.contains('inactiv');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactiv');

    if(!mobileMenuClosed){
        mobileMenu.classList.add('inactiv');
    };

    if(!menuDesktopClosed){
        desktopMenu.classList.add('inactiv');
    };

    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactiv');
    };

    shoppingCardContainer.classList.toggle('inactiv');
}

function openProductDetailAside(){
    const menuDesktopClosed = desktopMenu.classList.contains('inactiv');
    const isAsideClosed = shoppingCardContainer.classList.contains('inactiv');
    const productDetailCloseIcon = productDetailContainer.classList.contains('inactiv')

    if(!productDetailCloseIcon){
        productDetailContainer.classList.add('inactiv');
    }else{
        productDetailContainer.classList.toggle('inactiv')
    }

    if(!menuDesktopClosed){
        desktopMenu.classList.add('inactiv');
    }else {
        productDetailContainer.classList.toggle('inactiv');
    }

    if(!isAsideClosed){
        shoppingCardContainer.classList.add('inactiv');
    }else {
        productDetailContainer.classList.toggle('inactiv');
    }

    productDetailContainer.classList.remove('inactiv'); 
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactiv');
}

const productList = [];
productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'pantalla',
    price: 320,
    image: 'https://media.gcflearnfree.org/content/5ce56bebc0220e22c08b9f74_05_22_2019/monitor-01_xl.png',
});
productList.push({
    name: 'cpu',
    price: 620,
    image: 'https://cdn.pixabay.com/photo/2015/03/21/19/27/pc-684125_1280.jpg',
});


function renderProducts(array){
for (product of array){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    // product = {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside);

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
    const productImgCard = document.createElement('img');
    productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCard);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}
}

renderProducts(productList)