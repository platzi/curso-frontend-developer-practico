const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    aside.classList.toggle('inactive');
}
const productsList = [];
productsList.push({
    name: 'Rosa pasión',
    price:  120,
    image: 'https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_960_720.jpg'
});

productsList.push({
    name: 'Rosa esperanza',
    price:  240,
    image: 'https://cdn.pixabay.com/photo/2014/04/10/11/24/rose-320868_960_720.jpg'
});
productsList.push({
    name: 'Rosa imaginación',
    price:  360,
    image: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509_960_720.jpg'
});
productsList.push({
    name: 'Rosa pasión',
    price:  120,
    image: 'https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_960_720.jpg'
});

productsList.push({
    name: 'Rosa esperanza',
    price:  240,
    image: 'https://cdn.pixabay.com/photo/2014/04/10/11/24/rose-320868_960_720.jpg'
});
productsList.push({
    name: 'Rosa imaginación',
    price:  360,
    image: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509_960_720.jpg'
});
productsList.push({
    name: 'Rosa pasión',
    price:  120,
    image: 'https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_960_720.jpg'
});

productsList.push({
    name: 'Rosa esperanza',
    price:  240,
    image: 'https://cdn.pixabay.com/photo/2014/04/10/11/24/rose-320868_960_720.jpg'
});
productsList.push({
    name: 'Rosa imaginación',
    price:  360,
    image: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509_960_720.jpg'
});
productsList.push({
    name: 'Rosa imaginación',
    price:  360,
    image: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509_960_720.jpg'
});

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
     
        // product= {name, price, image} -> product.image
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
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
     
        productInfoFigure.appendChild(productImgCart);
     
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
     
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
     
        cardsContainer.appendChild(productCard);
     }
}

renderProducts(productsList);
