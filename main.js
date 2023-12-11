
console.log('prueba de el archivo ');

const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileEmail = document.querySelector('.email');
const menuhamicon = document.querySelector('.menu');
const mobilMenu = document.querySelector('.mobile-menu');
const navbarShoppingCart = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const pruductDetailContainer = document.querySelector('#prodructDetail')
const productDetailClose = document.querySelector('.product-detail-close');
const cardsContaine = document.querySelector('.cards-container');



emailMenu.addEventListener('click', toggleDesktopMenu);

menuhamicon.addEventListener('click', togglemobilMenu);
navbarShoppingCart.addEventListener('click', toggleCarritoAside);
productDetailClose.addEventListener('click', closeproductDeTailAside);
mobileEmail.addEventListener('click', toggleDesktopMenuMobile);






function toggleDesktopMenu() {
    const isproductDeTailcloed = shoppingCartContainer.classList.contains('inactive');
    if (!isproductDeTailcloed) {
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');

}
function togglemobilMenu() {
    const isproductDeTailcloed = shoppingCartContainer.classList.contains('inactive');
    const ispruductDetailContainerIsClosed = pruductDetailContainer.classList.contains('inactive');
    if (!isproductDeTailcloed || !ispruductDetailContainerIsClosed) {
        shoppingCartContainer.classList.add('inactive');
        pruductDetailContainer.classList.add('inactive');
    }
    mobilMenu.classList.toggle('inactive');
}
function toggleCarritoAside() {
    const ismobilMenuclosed = mobilMenu.classList.contains('inactive');
    const isdesktopMenuCloses = desktopMenu.classList.contains('inactive');
    const ispruductDetailContainerIsClosed = pruductDetailContainer.classList.contains('inactive');

    if (!ismobilMenuclosed || !isdesktopMenuCloses || !ispruductDetailContainerIsClosed) {
        mobilMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
        pruductDetailContainer.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');
}

function openDetailAside() {
    
    desktopMenu.classList.add('inactive')
    pruductDetailContainer.classList.remove('inactive')
}
function closeproductDeTailAside() {
    const isshoppingCartContainercosed = shoppingCartContainer.classList.contains('inactive');
    if (!isshoppingCartContainercosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    pruductDetailContainer.classList.add('inactive')
}

function toggleDesktopMenuMobile() {
    mobilMenu.classList.add('inactive');
    desktopMenu.classList.remove('inactive');
}
const products = [];

products.push({
    nombre: 'bike',
    price: 120,
    imga: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
products.push({
    nombre: 'pantalla',
    price: 300,
    imga: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
products.push({
    nombre: 'computador',
    price: 600,
    imga: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
products.push({
    nombre: 'bike',
    price: 120,
    imga: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
products.push({
    nombre: 'bike',
    price: 120,
    imga: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
products.push({
    nombre: 'pantalla',
    price: 300,
    imga: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
products.push({
    nombre: 'computador',
    price: 600,
    imga: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
products.push({
    nombre: 'bike',
    price: 120,
    imga: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
for (product of products) {




    const producrCard = document.createElement('div');
    producrCard.classList.add('product-card');
    const productimg = document.createElement('img');
    productimg.setAttribute('src', product.imga);

    productimg.addEventListener('click', openDetailAside);



    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    const productname = document.createElement('p');
    productname.innerText = product.nombre;



    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productname);


    const productInfofigure = document.createElement('figure');
    const producrImgCard = document.createElement('img');
    producrImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfofigure.appendChild(producrImgCard);

    productInfo.appendChild(productInfofigure);
    productInfo.appendChild(productInfoDiv);


    producrCard.appendChild(productimg);
    producrCard.appendChild(productInfo);


    cardsContaine.appendChild(producrCard);








}



