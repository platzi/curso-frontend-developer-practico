const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', toggleProductDetail);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('oculto-men-desktop');
    productDetailContainer.classList.add('inactive');
    shoppingCartContainer.classList.add('oculto-aside');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('oculto-mobile');
    shoppingCartContainer.classList.add('oculto-aside');
    productDetailContainer.classList.add('inactive');

}

function toggleCarritoAside() {
    shoppingCartContainer.classList.toggle('oculto-aside');
    mobileMenu.classList.add('oculto-mobile');
    productDetailContainer.classList.add('inactive');
    desktopMenu.classList.add('oculto-men-desktop');
}

function toggleProductDetail() {
    productDetailContainer.classList.toggle('inactive');
    shoppingCartContainer.classList.add('oculto-aside');
    desktopMenu.classList.add('oculto-men-desktop');
    mobileMenu.classList.add('oculto-mobile');
}

// function openProductDetail() {
//     productDetailContainer.classList.remove('inactive');
// }

// function closeProductDetailAside() {
//     productDetailContainer.classList.add('inactive');
// }

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Computer',
    price: 250,
    image: 'https://images.unsplash.com/photo-1587302912306-cf1ed9c33146?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=380&q=80',
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
    
        // produc= {name, price, image} ➡ produc.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', toggleProductDetail);
    
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




