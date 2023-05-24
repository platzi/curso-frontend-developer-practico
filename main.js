//cree esta constante para no tener que estar escribiendo document.querySelector(selector) cada vez.
const $ = (selector) => document.querySelector(selector);

const menuEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu');
const menuHamIcon = $('.menu');
const mobileMenu = $('.mobile-menu');
const menuCarritoIcon = $('.navbar-shopping-cart');
const aside = $('.product-detail');
const cardContainer = $('.cards-container');


/* como la escribió el profesor
menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}*/

//Una forma mas comprimida de escribir el  evento de la función es:
/*
--------------------------------------------------
- menuEmail.addEventListener('click', ()=> {     -   
-     desktopMenu.classList.toggle('inactive')   -
- });                                            -
--------------------------------------------------
Pero al parecer no es una buena práctica ya que si te ves en la necesidad de remover el evento, al ser anónimo, no podrás hacerlo.


Para agregar la función flecha ()=> seria recomendable hacerlo así.*/

const toggleDesktopMenu = () => {
    const isCarritoClosed = aside.classList.contains('inactive');

    if (!isCarritoClosed) {
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}
const toggleMobileMenu = () => {
    const isCarritoClosed = aside.classList.contains('inactive');

    if (!isCarritoClosed) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}
const toggleCarrito = () => {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarrito);

// Para que funcione tube que poner el evento click después de la función.

const productList = [];
productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'pantalla',
    price: 220,
    image: 'https://cdn1.coppel.com/images/catalog/pm/2989683-1.jpg'
});
productList.push({
    name: 'Desktop',
    price: 150,
    image:'https://sg-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/7/6/76Y93PA-1_T1678884756.png'
})

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('Div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName);
    
        const productFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productFigure.appendChild(productImg);
    
        productInfo.append(productInfoDiv,productFigure);
    
        productCard.append(productImg,productInfo);
    
        cardContainer.appendChild(productCard);
    }
}

renderProducts(productList);