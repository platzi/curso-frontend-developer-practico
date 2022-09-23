const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carShopping = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleBurguerMenu);
carShopping.addEventListener('click', toggleCarShopping)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

function toggleBurguerMenu(){
    const IsAsideMenuClosed = shoppingCartContainer.classList.contains('inactive');

    if(!IsAsideMenuClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarShopping(){
    const IsMobileMenuClosed = mobileMenu.classList.contains('inactive');


    if(!IsMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

   shoppingCartContainer.classList.toggle('inactive');

   
}


const productList = [];
productList.push({
    name: 'Airpods',
    price: 120,
    image: 'https://cafamfloresta.com.co/wp-content/uploads/2020/10/MWP22AM-A-1.jpg',
});
productList.push({
    name: 'Ipad',
    price: 120,
    image: 'https://d500.epimg.net/cincodias/imagenes/2021/09/14/tablets/1631645550_777617_1631645983_sumario_normal.jpg',
});
productList.push({
    name: 'Iphone',
    price: 120,
    image: 'https://falabella.scene7.com/is/image/FalabellaCO/9722714_1?wid=800&hei=800&qlt=70',
});



function renderProducts (arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productCard.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = "$" + product.price;
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

renderProducts(productList);
