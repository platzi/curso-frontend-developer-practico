const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu'); 
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu); 
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartMenu);

function toggleDesktopMenu (){
    desktopMenu.classList.toggle('inactive'); 
    productDetail.classList.add('inactive'); 
}

function toggleMobileMenu (){
    mobileMenu.classList.toggle('inactive'); 
    productDetail.classList.add('inactive'); 
}

function toggleCartMenu (){
    productDetail.classList.toggle('inactive'); 
    desktopMenu.classList.add('inactive'); 
    mobileMenu.classList.add('inactive');
}

const productList = []; 
productList.push({
    name: 'luxury car',
    price: 120000.00, 
    image: 'https://images.pexels.com/photos/13578691/pexels-photo-13578691.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Motorcycle',
    price: 80000.00, 
    image: 'https://images.pexels.com/photos/104842/bmw-vehicle-ride-bike-104842.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Bike',
    price: 120.00, 
    image: 'https://images.pexels.com/photos/15222358/pexels-photo-15222358.jpeg?auto=compress&cs=tinysrgb&w=600',
}); 

productList.push({
    name: 'Luxury Home',
    price: 1000000.00, 
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600',
});

function renderProducts(arr){
    for(product of arr){
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

        productInfoDiv.append(productPrice,productName);
        
        const productInfoFigure = document.createElement('figure');
        const iconCart = document.createElement('img');
        iconCart.setAttribute('src', "./icons/bt_add_to_cart.svg"); 

        productInfoFigure.appendChild(iconCart);

        productInfo.append(productInfoDiv,productInfoFigure); 
    
        productCard.append(productImg,productInfo);

        cardsContainer.appendChild(productCard)
    };
}

renderProducts(productList); 
