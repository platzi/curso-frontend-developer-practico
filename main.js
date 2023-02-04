const menuEmail = document.querySelector('.navbar-email');
const iconMenu = document.querySelector('.menu');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const shoppingCartImg = document.querySelector('.product-detail--img');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
iconMenu.addEventListener('click', toggleMobileMenu);
shoppingCartIcon.addEventListener('click', toggleShoppingCartAside);
shoppingCartImg.addEventListener('click', toggleShoppingCartAside);

function toggleDesktopMenu() {    
    mobileMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu (){
    shoppingCartContainer.classList.add('inactive');

    closeProductDetailAside();
    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCartAside (){
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside (e) {
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.innerHTML = '';

    for (product of productList) {
        if (e.target.dataset.id == product.id) {
            const productDetailClosed = document.createElement('div');
            productDetailClosed.classList.add('product-detail-close');
            const iconClosed = document.createElement('img');
            iconClosed.setAttribute('src', './icons/icon_close.png');
            productDetailClosed.appendChild(iconClosed);
            productDetailClosed.addEventListener('click', closeProductDetailAside);
    
            const productImgInfo = document.createElement('img');
            productImgInfo.setAttribute('src', product.Image);
            productImgInfo.classList.add('product-img');
    
            const productInfo_Container = document.createElement('div');
            productInfo_Container.classList.add('product-info');
    
            const productPriceInfo = document.createElement('p');
            productPriceInfo.innerText = '$ ' + product.price;
    
            const productNameInfo = document.createElement('p');
            productNameInfo.innerText = product.name;
    
            const productInfo = document.createElement('p');
            productInfo.innerText = product.description;
    
            const button = document.createElement('button');
            button.classList.add('primary-button');
            button.classList.add('add-to-cart-button');
    
            const buttonImg = document.createElement('img');
            buttonImg.setAttribute('src', './icons/bt_add_to_cart.svg');
            buttonImg.setAttribute('alt', 'add to cart');
    
            const buttonInfo = document.createElement('p');
            buttonInfo.classList.add('btn-info');
            buttonInfo.innerText = 'Add to cart';
            
            button.appendChild(buttonImg);
            button.appendChild(buttonInfo);
    
            productDetailContainer.appendChild(productImgInfo);
            
            productInfo_Container.appendChild(productPriceInfo);
            productInfo_Container.appendChild(productNameInfo);
            productInfo_Container.appendChild(productInfo);
            productInfo_Container.appendChild(button);
    
            productDetailContainer.appendChild(productDetailClosed);
            productDetailContainer.appendChild(productInfo_Container);
            
            productDetailContainer.classList.remove('inactive');  
        }
    }
    scrollToTop();
    e.stopPropagation();
}
function scrollToTop(){
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}
var productList = [];

productList.push({
    id: 1,
    name: 'Console PS5',
    price: 560,
    Image: './images/image2.jpg',
    description: 'Amazing PS5'
});
productList.push({
    id: 2,
    name: 'Monitor',
    price: 420,
    Image: './images/image3.jpg',
    description: 'Amazing Monitor'
});
productList.push({
    id: 3,
    name: 'Computer',
    price: 1200,
    Image: './images/image4.jpg',
    description: 'Amazing Computer'
});
productList.push({
    id: 4,
    name: 'IPhone 14 Pro',
    price: 1100,
    Image: './images/image5.jpg',
    description: 'Amazing IPhone 14 Pro'
});
productList.push({
    id: 5,
    name: 'Samsung Galaxy S22',
    price: 700,
    Image: './images/image6.jpg',
    description: 'Amazing Samsung Galaxy S22'
});
productList.push({
    id: 6,
    name: 'Beats Headphones',
    price: 300,
    Image: './images/image7.jpg',
    description: 'Amazing Headphones'
});
productList.push({
    id: 7,
    name: 'Mouse Viper',
    price: 60,
    Image: './images/image8.jpeg',
    description: 'Amazing Mouse'
});

productList.push({
    id: 8,
    name: 'motorcycle',
    price: 11000,
    Image: './images/image1.jpeg',
    description: 'Amazing motorcycle'
});

//product list
function renderProducts(arr) {
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.Image);
        productImg.classList.add('product-img');
        productImg.setAttribute('data-id', product.id);
        productImg.addEventListener('click', openProductDetailAside);
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$ ' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        productImgCart.setAttribute('data-id', product.id);
        productImgCart.addEventListener('click', openProductDetailAside);

        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
    
    
}

renderProducts(productList);

// product detail