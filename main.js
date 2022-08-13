const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDestopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);


function toggleDestopMenu() {
    desktopMenu.classList.toggle('inactive');
}


function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
       }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}


function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
     mobileMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isProductDetailClosed) {
     productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}


function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive');


    productDetailContainer.classList.remove('inactive')
}


function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive')
}


const productList = [];
productList.push({
    name: 'Perritos',
    price: 120,
    image: 'https://i.pinimg.com/564x/fe/6f/27/fe6f27e8b1aa33ecb6db63667862c310.jpg'
});

productList.push({
    name: 'Niñita rodetitos',
    price: 180,
    image: 'https://i.pinimg.com/564x/40/59/20/4059204aa650e6c7c1b45bbfc524e9f6.jpg'
});

productList.push({
    name: 'Niña con su perrito',
    price: 220,
    image: 'https://i.pinimg.com/564x/e0/49/50/e04950f5af01c710b12078e8ccee9b97.jpg'
});

productList.push({
    name: 'Girl',
    price: 150,
    image: 'https://i.pinimg.com/564x/38/b8/c1/38b8c1298a1ab1ce11f95a3284087bb5.jpg'
});

productList.push({
    name: 'Elefantita bonita',
    price: 170,
    image: 'https://i.pinimg.com/564x/12/ff/2e/12ff2e9a200a552b74f9320845c80370.jpg'
});

productList.push({
    name: 'Conejita',
    price: 220,
    image: 'https://i.pinimg.com/564x/96/40/58/964058507f7e204381785efe2bf2c398.jpg'
});

productList.push({
    name: 'Sr Conejo',
    price: 210,
    image: 'https://i.pinimg.com/564x/07/43/3b/07433bfb6c3947925a2fc4adfdaf707d.jpg'
});

productList.push({
    name: 'Conejita zorrita',
    price: 120,
    image: 'https://i.pinimg.com/564x/7f/fb/24/7ffb247038f15788be623fef3423cb73.jpg'
});

productList.push({
    name: 'Niñita zorrilla',
    price: 320,
    image: 'https://i.pinimg.com/564x/ac/3f/3d/ac3f3d29b35e07e48ca32a2f8f469ea5.jpg'
});

productList.push({
    name: 'Conejito',
    price: 230,
    image: 'https://i.pinimg.com/736x/3c/d2/f7/3cd2f71df3593cedb997ef36e336cec4.jpg'
});

productList.push({
    name: 'Pony',
    price: 250,
    image: 'https://i.pinimg.com/736x/81/7c/96/817c969a45f5e14fe803c4d3ff62b05a.jpg'
});

productList.push({
    name: 'Tigresito',
    price: 350,
    image: 'https://i.pinimg.com/564x/17/52/35/175235fc5a0826ee83b394995cc36ffa.jpg'
});

function renderProducts(arr){
   for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    // product= {name, price, image} -> product.image
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

renderProducts(productList)