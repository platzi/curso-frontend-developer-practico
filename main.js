const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const imgMenuMobile = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

const cardsContainer = document.querySelector('.cards-container');


function toggleDesktopMenu(){
    productDetailContainer.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    productDetailContainer.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');

}

function toggleshooppingCartMenu(){
    productDetailContainer.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    shoppingCartContainer.classList.toggle('inactive');

}



menuEmail.addEventListener('click', toggleDesktopMenu);
imgMenuMobile.addEventListener('click', toggleMobileMenu);
shoppingCartIcon.addEventListener('click', toggleshooppingCartMenu);
productDetailCloseIcon.addEventListener('click', closeProductDetail);


const productList = [];

productList.push({
    name: 'Bike',
    precio: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Pantalla',
    precio: 500,
    image: 'https://media.gq.com.mx/photos/5fa40fae2c33c736b07c852b/master/w_814,h_830,c_limit/pantallas%204k%20Hisense%2050%E2%80%9D%20VIDAA%20Smart%20TV%204K%20UHD%20con%20Dolby%20Vision%20HDR.png',
});

productList.push({
    name: 'Computadora',
    precio: 1000,
    image: 'https://www.tecnologia-informatica.com/wp-content/uploads/2018/07/tipos-de-computadoras-1.jpeg',
});

productList.push({
    name: 'Bike',
    precio: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Pantalla',
    precio: 500,
    image: 'https://media.gq.com.mx/photos/5fa40fae2c33c736b07c852b/master/w_814,h_830,c_limit/pantallas%204k%20Hisense%2050%E2%80%9D%20VIDAA%20Smart%20TV%204K%20UHD%20con%20Dolby%20Vision%20HDR.png',
});

productList.push({
    name: 'Computadora',
    precio: 1000,
    image: 'https://www.tecnologia-informatica.com/wp-content/uploads/2018/07/tipos-de-computadoras-1.jpeg',
});


function renderProducts(listOfProducts){
    for(product of listOfProducts){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetail);
        
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.precio;
        
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName);
         
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(productImg, productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

function openProductDetail(){
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetail(){
    productDetailContainer.classList.add('inactive');
}

renderProducts(productList);