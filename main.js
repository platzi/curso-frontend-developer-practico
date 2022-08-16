const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const iconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const navShoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');

const cardsContainer = document.querySelector('.cards-container');

navbarEmail.addEventListener('click', modifyDesktopMenu);
iconMenu.addEventListener('click', modifyMobileMenu);
navShoppingCart.addEventListener('click', modifyProductDetail);

function modifyDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    productDetail.classList.add('inactive');
}

function modifyMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    productDetail.classList.add('inactive');
}

function modifyProductDetail() {
    productDetail.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}

// Create the product list
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Camera',
    price: 220,
    image: 'https://www.pexels.com/assets/partners/camera-427f3f97f174c31789e00a961c98610e66d8ccaf7d008fd6b64ea399c691a70c.jpg'
});
productList.push({
    name: 'Computer',
    price: 320,
    image: 'https://img.lalr.co/cms/2022/06/21095532/renta.jpg?size=xl&ratio=r40_21'
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Camera',
    price: 220,
    image: 'https://www.pexels.com/assets/partners/camera-427f3f97f174c31789e00a961c98610e66d8ccaf7d008fd6b64ea399c691a70c.jpg'
});
productList.push({
    name: 'Computer',
    price: 320,
    image: 'https://img.lalr.co/cms/2022/06/21095532/renta.jpg?size=xl&ratio=r40_21'
});

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card')

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = "$" + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const figureImg = document.createElement('img');
        figureImg.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(figureImg);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);

    }
}

renderProducts(productList);