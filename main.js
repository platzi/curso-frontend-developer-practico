const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const iconMenuMobile = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('#productDetail');
const productElement = document.querySelector('.cards-container');
const imgCloseProductDetail = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', toggleDesktopMenu);
iconMenuMobile.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', togglecarritoAside);
productElement.addEventListener('click', openProductDetail);
imgCloseProductDetail.addEventListener('click', closeProductDetail);


function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetail.classList.add('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetail.classList.add('inactive');

}

function togglecarritoAside() {
    shoppingCartContainer.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetail.classList.add('inactive');
}

function openProductDetail(){
    productDetail.classList.remove('inactive')
    desktopMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
}

function closeProductDetail(){
    productDetail.classList.add('inactive')
    desktopMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
}

const listProduct = [];

listProduct.push({
    name: 'Bicicleta',
    price: 120,
    image: 'https://www.zonagw.com/wp-content/uploads/2022/08/BICICLETA-GW-FAT-BIKE060461.jpg'

})

listProduct.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://www.lg.com/it/images/monitor/md05998436/gallery/medium03.jpg'

})

listProduct.push({
    name: 'Motocicleta',
    price: 1820,
    image: 'https://www.incolmotos-yamaha.com.co/wp-content/uploads/2018/03/AP000293889_2023_YZ250_DPBSE_USA_360_006.png'

})

function renderProduct (arr) {
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const imgProduct = document.createElement('img');
        imgProduct.setAttribute('src', product.image);
    
        const productInfoContainer = document.createElement('div');
        productInfoContainer.classList.add('product-info')
    
        const productinfoDiv = document.createElement('div');
        const productInfoPrice = document.createElement('p');
        productInfoPrice.innerText = '$' + product.price;
    
        const productInfoName = document.createElement('p');
        productInfoName.innerText = product.name;
    
        productinfoDiv.appendChild(productInfoPrice);
        productinfoDiv.appendChild(productInfoName);
    
        const productFigure = document.createElement('figure');
        const iconCarritoAdd = document.createElement('img');
        iconCarritoAdd.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productFigure.append(iconCarritoAdd);
    
        productInfoContainer.appendChild(productinfoDiv);
        productInfoContainer.appendChild(productFigure);
        
        productCard.appendChild(imgProduct);
        productCard.appendChild(productInfoContainer);
    
        cardsContainer.appendChild(productCard);
    
    
    }
}

renderProduct(listProduct);