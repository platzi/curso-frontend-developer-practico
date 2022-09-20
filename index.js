let emailBtn = document.querySelector(".navbar-email");
let emailDropdown = document.querySelector(".desktop-menu");
let burgerMenu = document.querySelector('.menu');
let dropdownMenu = document.querySelector('.mobile-menu');
let cartBtn = document.querySelector('.navbar-shopping-cart');
let productDetail = document.querySelector('.product-detail');
let cardsContanier = document.querySelector('.cards-container');
let arrowBack = document.querySelector('.product-detail .title-container img');
let asideDetail = document.querySelector('.product-detail-info');
let asideDetailCloseBtn = document.querySelector('.product-detail-info .product-detail-close');

asideDetailCloseBtn.addEventListener('click', () => {
    asideDetail.classList.add('inactive');
})

emailBtn.addEventListener('click', () => {
    emailDropdown.classList.toggle('inactive');
    if (!productDetail.classList.contains('inactive')) {
        productDetail.classList.add('inactive');
    } else {
        emailDropdown.classList.add('inactive');
    }
});

burgerMenu.addEventListener('click', () => {
    dropdownMenu.classList.toggle('inactive');
    if (!productDetail.classList.contains('inactive')) {
        productDetail.classList.add('inactive');
    }
    if (!asideDetail.classList.contains('inactive')) {
        asideDetail.classList.add('inactive');
    }
});

cartBtn.addEventListener('click', () => {
    if (!dropdownMenu.classList.contains('inactive')) {
        dropdownMenu.classList.add('inactive');
    }
    if (!asideDetail.classList.contains('inactive')) {
        asideDetail.classList.add('inactive');
    }
    productDetail.classList.toggle('inactive');
});

arrowBack.addEventListener('click', () => {
    if (!dropdownMenu.classList.contains('inactive')) {
        dropdownMenu.classList.add('inactive');
    }
    productDetail.classList.toggle('inactive');
});

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'    
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'    
});
productList.push({
    name: 'Laptop',
    price: 520,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'    
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'    
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'    
});
productList.push({
    name: 'Laptop',
    price: 520,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'    
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'    
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'    
});
productList.push({
    name: 'Laptop',
    price: 520,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'    
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'    
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'    
});
productList.push({
    name: 'Laptop',
    price: 520,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'    
});

for (product of productList) {
    console.log(product.image);
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const img = document.createElement('img');
    img.setAttribute('src', product.image);
    img.addEventListener('click', () => {
        asideDetail.classList.remove('inactive');
        if(!productDetail.classList.contains('inactive')){
            productDetail.classList.add('inactive');
        }
    });

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = `$ ${product.price}.00`;

    const productName = document.createElement('p');
    productName.innerText = product.name;

    const productFigure = document.createElement('figure');
    const productFigureImg = document.createElement('img');
    productFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg');

    productFigure.appendChild(productFigureImg);
    productInfoDiv.append(productName, productPrice);
    productInfo.append(productInfoDiv, productFigure);
    productCard.append(img, productInfo);
    cardsContanier.append(productCard);
}
