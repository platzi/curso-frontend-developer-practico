const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburguer = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('#productDetail');
const productDetailClose = document.querySelector('.product-detail-close');


navbarEmail.addEventListener('click', desktopMenuToggle);
menuHamburguer.addEventListener('click', mobileMenuToggle);
shoppingCart.addEventListener('click', shoppingCartContainerAside);
productDetailClose.addEventListener('click', closeProductDetailContainer);



function desktopMenuToggle() {
    desktopMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive-aside');
    productDetail.classList.add('inactive')

}
function mobileMenuToggle() {
    mobileMenu.classList.toggle('inactive-mobile');
    shoppingCartContainer.classList.add('inactive-aside');
    desktopMenu.classList.add('inactive');
    productDetail.classList.add('inactive')



    if (mobileMenu.classList.contains('inactive-mobile')) {
        cardsContainer.style.display = 'grid';

    }else if(mobileMenu.classList.contains('mobile-menu')){
        cardsContainer.style.display = 'none';
    }
}
function shoppingCartContainerAside() {
    shoppingCartContainer.classList.toggle('inactive-aside');
    desktopMenu.classList.add('inactive');
    productDetail.classList.add('inactive')

    mobileMenu.classList.add('inactive-mobile');
    if (cardsContainer.style.display = 'none') {
        cardsContainer.style.display = 'grid'
    }

    // if (window.matchMedia('(max-width: 766px)').matches) {
    //     cardsContainer.style.display = 'none'; 
    // }
    
}
function openDetailProductContainer() {
    productDetail.classList.remove('inactive')
    shoppingCartContainer.classList.add('inactive-aside')
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive-mobile');


// if (window.matchMedia('(max-width: 766px)').matches) {
//     cardsContainer.style.display = 'none'; 
// }else if (window.matchMedia('(min-width: 768px)').matches) {
//     cardsContainer.style.display = 'grid';
// }


}
function closeProductDetailContainer() {
    productDetail.classList.add('inactive')


    if (window.matchMedia('(max-width: 766px)').matches) {
        cardsContainer.style.display = 'grid';
    }
}

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
            productCardImg.addEventListener('click',openDetailProductContainer)


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