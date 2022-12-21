const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shopCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingChart = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

let productList = [];
productList.push({
name: 'Bike',
price: '120,00',
image: 'https://images.pexels.com/photos/5691159/pexels-photo-5691159.jpeg'
});
productList.push({
name: 'Skateboard',
price: '200,00',
image: 'https://images.pexels.com/photos/4663825/pexels-photo-4663825.jpeg'
});
productList.push({
name: 'Kick Scooter',
price: '180,00',
image: 'https://images.pexels.com/photos/4413303/pexels-photo-4413303.jpeg'
});

function addProductList() {
    for (product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure')
    
        const addImg = document.createElement('img');
        addImg.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(addImg)
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        
        cardsContainer.appendChild(productCard);
    }
}

menuEmail.addEventListener('click', toggleDesktopMenu);
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');

    shoppingChart.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}

menuHamIcon.addEventListener('click', toggleMobileMenu);
function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    
    shoppingChart.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}

shopCartIcon.addEventListener('click', toggleShoppingChart);
function toggleShoppingChart() {
    shoppingChart.classList.toggle('inactive');

    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}

addProductList();