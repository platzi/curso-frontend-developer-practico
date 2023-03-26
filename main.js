console.log("js funcionando");

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');

const productList = [];
productList.push({
    nombre: 'Audi RX8',
    price: 120.000,
    img: 'https://i.pinimg.com/564x/5d/55/e1/5d55e19b047410aef57b7e61f4f4f878.jpg'
});

productList.push({
    nombre: 'BMW on road',
    price: 150.000,
    img: 'https://i.pinimg.com/564x/82/12/43/821243eeaa9d3bd66b0c3107a8cfc5ca.jpg'
});

productList.push({
    nombre: 'Mercedes Benz class g',
    price: 350.000,
    img: 'https://i.pinimg.com/564x/af/a5/0a/afa50a7f9f06ab71d23223ce8860cca7.jpg'
});

productList.push({
    nombre: 'The Hoonicorn',
    price: 950.000,
    img: 'https://i.pinimg.com/564x/29/84/c3/2984c38a0694ef857b0db3ec2ebc764f.jpg'
}); 

productList.push({
    nombre: 'Porshe 911 Turbo',
    price: 750.000,
    img: 'https://i.pinimg.com/564x/14/65/62/1465622ceedd919e73359adddef6d636.jpg'
}); 

productList.push({
    nombre: 'Nissa GTR',
    price: 150.000,
    img: 'https://i.pinimg.com/564x/a2/bf/4b/a2bf4b7d275436cf297851f8c98cd238.jpg'
}); 


function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.img)
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$ ' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.nombre;
    
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

renderProducts(productList);


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);


function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    closeProductDetailAside();  
    mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");
    }   

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isProductDetailClosed) {
        productDetailContainer.classList.add("inactive");
    }   
    shoppingCartContainer.classList.toggle("inactive");
}

function openProductDetailAside() {
    shoppingCartContainer.classList.add("inactive");
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

