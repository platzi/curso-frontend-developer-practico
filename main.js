//Desktop Menu
const desktopMenu = document.querySelector(".desktop-menu");
const navEmail = document.querySelector(".navbar-email");



navEmail.addEventListener('click', () => {
    if (!productDetail.classList.contains('inactive')) {
        productDetail.classList.toggle('inactive')
    }
    desktopMenu.classList.toggle('inactive')

});

//mobile menu
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector('.mobile-menu');

menuHamIcon.addEventListener('click', () => {
    if (!productDetail.classList.contains('inactive')) {
        productDetail.classList.toggle('inactive')
    }
    mobileMenu.classList.toggle('inactive')

});

//Shopping car
const productDetail = document.querySelector('.product-detail');
const ShoppingCarIcon = document.querySelector('.navbar-shopping-cart')

ShoppingCarIcon.addEventListener('click', ShoppingCarIconn);

function ShoppingCarIconn() {

    if (!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.toggle('inactive');
    }
    if (desktopMenu.classList.contains('inactive') == false) {
        desktopMenu.classList.add('inactive');
    }

    productDetail.classList.toggle('inactive')
}

// producto list 
const cardsContainer = document.querySelector('.cards-container')

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Hamaca',
    price: 120,
    image: "https://hamacas.org/wp-content/uploads/Hamaca-Nicaragua-300x300.jpg"
});



function mostrar(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerHTML = '$' + product.price;

        const productName = document.createElement('p');
        productName.innerHTML = product.name;

        productInfoDiv.appendChild(productPrice);
        productInfo.appendChild(productName);

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

mostrar(productList);