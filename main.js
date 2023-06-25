const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('oculto-men-desktop');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('oculto-mobile');
    aside.classList.add('oculto-aside');

}

function toggleCarritoAside() {
    aside.classList.toggle('oculto-aside');
    mobileMenu.classList.add('oculto-mobile');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Computer',
    price: 250,
    image: 'https://pixabay.com/get/g5e24b23a4cfaf9346f842685bce364321521af3d4057a904594f84dccf3039ea92d19417ce00ca4c2baff9d47a2aeabd6f0784305533a3a2fc40bcbce8ecf05a_1280.jpg',
});

productList.push({
    name: 'Bed',
    price: 200,
    image: 'https://cdn.pixabay.com/photo/2018/01/24/15/08/live-3104077_1280.jpg',
});

productList.push({
    name: 'Mouse',
    price: 50,
    image: 'https://cdn.pixabay.com/photo/2015/05/20/15/28/mouse-775664_1280.jpg',
});

productList.push({
    name: 'Monitor',
    price: 70,
    image: 'https://cdn.pixabay.com/photo/2016/08/05/10/18/pc-1571963_1280.jpg',
});

productList.push({
    name: 'Tv',
    price: 150,
    image: 'https://cdn.pixabay.com/photo/2016/01/01/13/56/vintage-tv-1116587_1280.jpg',
});

productList.push({
    name: 'Laptop',
    price: 250,
    image: 'https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196_1280.jpg',
});

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
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

renderProducts(productList);




