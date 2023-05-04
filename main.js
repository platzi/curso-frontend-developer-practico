const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const iconMenuMobile = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
iconMenuMobile.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', togglecarritoAside)


function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    aside.classList.add('inactive');

}

function togglecarritoAside() {
    aside.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
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