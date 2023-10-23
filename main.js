const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');



menuEmail.addEventListener('click', () => {
    desktopMenu.classList.toggle('inactive');
})

menuHamIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
})

menuCarIcon.addEventListener('click', () => {
    aside.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
})

const productList = [];

productList.push({
    name: 'Samsung Galaxy S20',
    price: 10000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'TV Samsung 55',
    price: 14000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productList.push({
    name: 'Tablet Samsung 10',
    price: 20000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',  
})

const renderProducts = ( arr ) => {

    for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    const productImg = document.createElement('img');
    productImg.src = product.image;
    
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const producPrice = document.createElement('p');
    producPrice.innerText = `$ ${product.price}`
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(producPrice)
    productInfoDiv.appendChild(productName);
    
    const productInfoFigure = document.createElement('figure');
    const productImgCard = document.createElement('img');
    productImgCard.src = './icons/bt_add_to_cart.svg';
    
    productInfoFigure.appendChild(productImgCard);
    
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    
    cardsContainer.appendChild(productCard);

    }

}