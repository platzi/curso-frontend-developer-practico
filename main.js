
const navEmail = document.querySelector('.navbar-email');

const deskMenu = document.querySelector('.desktop-menu');

const menuBurguer = document.querySelector('.menu');

const mobileMenu = document.querySelector('.mobile-menu');

const aside = document.querySelector('.product-detail');

const shopCartIcon = document.querySelector('.navbar-shopping-cart');

const cardsContainer = document.querySelector('.cards-container');

const productList = [];

productList.push({
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    price: 120,
    name: 'Bike'
});

productList.push({
    img: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 590,
    name: 'Phone'
});

productList.push({
    img: 'https://images.pexels.com/photos/333984/pexels-photo-333984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 1200,
    name: 'TV'
});

productList.push({
    img: 'https://images.pexels.com/photos/165236/pexels-photo-165236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 200,
    name: 'Skate'
});

productList.push({
    img: 'https://images.pexels.com/photos/1420707/pexels-photo-1420707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: 700,
    name: 'Cartera'
});

const toggleMobileMenu = function() {
    mobileMenu.classList.toggle('inactive');
    aside.classList.add('inactive');

}

const toggleDeskMenu = function() {
    deskMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
}

const toggleCarritoAside = function() {
    aside.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    deskMenu.classList.add('inactive');

}

const renderProducts = function(arr){
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src', product.img);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText= '$ '+product.price;
        const productName = document.createElement('p');
        productName.append(product.name);
    
        productInfoDiv.append(productPrice);
        productInfoDiv.append(productName);
    
        const productInfoFigure = document.createElement('figure');
    
        const productImgCart = document.createElement('img');
    
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        cardsContainer.append(productCard);
    
        productCard.append(img);
        productCard.append(productInfo);
    
        productInfo.append(productInfoDiv)
    
        productInfo.append(productInfoFigure);
        productInfoFigure.append(productImgCart);
    
    
    }
}

renderProducts(productList);

shopCartIcon.addEventListener('click', toggleCarritoAside);

navEmail.addEventListener('click', toggleDeskMenu);

menuBurguer.addEventListener('click', toggleMobileMenu);