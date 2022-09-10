const navEmail = document.querySelector('.navbar-email');

const menuHamIcon = document.querySelector('#hamIcon');
const menucarritoIcon = document.querySelector('.navbar-shopping-cart');

const mobileMenu = document.querySelector('.mobile-menu');
const desktopMenu = document.querySelector('.desktop-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

const cardsContainer = document.querySelector('.cards-container');

navEmail.addEventListener('click', () => {
    if (!shoppingCartContainer.classList.contains('inactive')) {
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle("inactive");
})

menuHamIcon.addEventListener('click', () => {
    if (!shoppingCartContainer.classList.contains('inactive')) {
        shoppingCartContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive')
})

menucarritoIcon.addEventListener('click', ()=> {
    if (!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.add('inactive');
    }
    if (!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive')
})

const productsList = [];
productsList.push({
    name:'bike',
    price:120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productsList.push({
    name:'pantalla',
    price:220,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productsList.push({
    name:'computadora',
    price: 620,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr) {
    for (const product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const img = document.createElement('img');
        img.setAttribute('src', product.img);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');
        const price = document.createElement('p');
        price.innerText = '$'+ product.price;

        const name = document.createElement('p');
        name.innerText = product.name;

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src', "./icons/bt_add_to_cart.svg")
        
        
        //appending
        productInfoFigure.append(productImgCart);
        productInfoDiv.append(price, name);
        productInfo.append(productInfoDiv, productInfoFigure);
        productCard.append(img, productInfo);
        cardsContainer.append(productCard);
        
    }
}

renderProducts(productsList);