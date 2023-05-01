const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMenuMobile = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const iconCar = document.querySelector('.navbar-shopping-cart');
const iconClose = document.querySelector('.product-detail-close');
//const shopingCartContainer = document.querySelector('.product-detail');
const shopingCartContainer = document.querySelector('#shopingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
iconMenuMobile.addEventListener('click', toggleMobileMenu);
iconCar.addEventListener('click', toggleCarDetails);
iconClose.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
    productDetailContainer.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    shopingCartContainer.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    productDetailContainer.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    shopingCartContainer.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleCarDetails() {
    productDetailContainer.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    shopingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
    productDetailContainer.classList.remove('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    shopingCartContainer.classList.add('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: '120',
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg'
});

productList.push({
    name: 'Pantalla',
    price: '420',
    image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1600'
});

productList.push({
    name: 'Motocicleta',
    price: '1300',
    image: 'https://images.pexels.com/photos/2607554/pexels-photo-2607554.jpeg?auto=compress&cs=tinysrgb&w=1600'
});

productList.push({
    name: 'Silla',
    price: '640',
    image: 'https://images.pexels.com/photos/2762247/pexels-photo-2762247.jpeg?auto=compress&cs=tinysrgb&w=1600'
});

productList.push({
    name: 'Computadora',
    price: '64000',
    image: 'https://images.pexels.com/photos/5412270/pexels-photo-5412270.jpeg?auto=compress&cs=tinysrgb&w=1600'
});

productList.push({
    name: 'Patines',
    price: '3200',
    image: 'https://images.pexels.com/photos/11470504/pexels-photo-11470504.jpeg?auto=compress&cs=tinysrgb&w=1600'
});

productList.push({
    name: 'Mochila',
    price: '950',
    image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1" srcset="https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1 1x, https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2 2x" alt="Gratis Mochila Azul Y Marrón En El Suelo Foto de stock" class="spacing_noMargin__Q_PsJ PhotoZoom_image__iR_Ia" width="1707" height="2560" style="transform: none; background: rgb(75, 72, 67)'
    
});

/* llamamos a la funcion de renderizado y enviamos el array de articulos hardcodeados */
renderProducts(productList);


/* Esta funcion maqueda los elementos html usando nodos de las propiedades en JS de cada elemento */
function renderProducts(arr) {
    for (product of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p')
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