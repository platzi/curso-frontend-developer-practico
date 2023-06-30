const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburguer = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
// experimento abajo
const productContainer = document.querySelector('.cards-container');
// 
navbarEmail.addEventListener('click', desktopMenuToggle);
menuHamburguer.addEventListener('click', mobileMenuToggle);
shoppingCart.addEventListener('click', productDetailAside);


function desktopMenuToggle() {
    desktopMenu.classList.toggle('inactive');
    productDetail.classList.add('inactive-aside');
}
function mobileMenuToggle() {
    mobileMenu.classList.toggle('inactive-mobile');
    productDetail.classList.add('inactive-aside');
    desktopMenu.classList.add('inactive');


    if (mobileMenu.classList.contains('inactive-mobile')) {
        cardsContainer.style.display = 'grid';

    }else{
        cardsContainer.style.display = 'none';

    }

}
function productDetailAside() {
    productDetail.classList.toggle('inactive-aside');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive-mobile');


    if (productDetail.classList.contains('inactive-aside')) {
        cardsContainer.style.display = 'grid';
    }else{
        cardsContainer.style.display = 'none';
    }
}
// Experimento abajo


// {/* <div class="product-card">
// <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
// <div class="product-info">
//     <div>
//     <p>$120,00</p>
//     <p>Bike</p>
//     </div>
//     <figure>
//     <img src="./icons/bt_add_to_cart.svg" alt="">
//     </figure>
// </div>
// </div>  */}

const productList = [];
    productList.push({
        name: 'bike',
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: '120,00'
    });
    productList.push({
        name: 'Tv',
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: '220,00'
    });
    productList.push({
        name: 'Moto',
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: '320,00'
    });
    productList.push({
        name: 'Laptop',
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: '280,00'
    });
    productList.push({
        name: 'bike',
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: '120,00'
    });
    productList.push({
        name: 'Tv',
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: '220,00'
    });
    productList.push({
        name: 'Moto',
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: '320,00'
    });
    productList.push({
        name: 'Laptop',
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: '280,00'
    });
    productList.push({
        name: 'Laptop',
        img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: '280,00'
    });

function card(arr) {
    for (const product of arr) {
        const productCard = document.createElement('div');
            productCard.classList.add('product-card')

        const productCardImg = document.createElement('img');
            productCardImg.setAttribute('src', product.img);

        const productInfo = document.createElement('div');
            productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');
        const productName = document.createElement('p');
            productName.innerText = product.name;
        const productPrice = document.createElement('p');
            productPrice.innerText = product.price;


        const productFigure = document.createElement('figure');
        const productIcon = document.createElement('img');
            productIcon.setAttribute('src', './icons/bt_add_to_cart.svg');

            productCard.append(productCardImg, productInfo)

            productInfo.append(productInfoDiv,productFigure)

            productInfoDiv.append(productName,productPrice)

            productFigure.append(productIcon)

            cardsContainer.append(productCard)
    }
}
card(productList)