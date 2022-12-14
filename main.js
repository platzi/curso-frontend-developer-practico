const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenuButton = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuShoppingCartButton = document.querySelector('.navbar-shopping-cart');
const shoppingCartMenu = document.querySelector('.product-detail');

const productList = [
    {
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: '$120',
        name: 'nombre-producto 1'
    },
    {
        image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: '$120',
        name: 'nombre-producto 2'
    },
    {
        image: 'https://images.pexels.com/photos/2253833/pexels-photo-2253833.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: '$120',
        name: 'nombre-producto 3'
    },
    {
        image: 'https://images.pexels.com/photos/2866796/pexels-photo-2866796.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: '$120',
        name: 'nombre-producto 4'
    },
    {
        image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: '$120',
        name: 'nombre-producto 5'
    },
    {
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: '$120',
        name: 'nombre-producto 1'
    },
    {
        image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: '$120',
        name: 'nombre-producto 2'
    },
    {
        image: 'https://images.pexels.com/photos/2253833/pexels-photo-2253833.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: '$120',
        name: 'nombre-producto 3'
    },
    {
        image: 'https://images.pexels.com/photos/2866796/pexels-photo-2866796.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: '$120',
        name: 'nombre-producto 4'
    },
    {
        image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: '$120',
        name: 'nombre-producto 5'
    },
];

menuEmail.addEventListener('click', toggleDesktopMenu, true);
mobileMenuButton.addEventListener('click', toggleMobileMenu, true);
menuShoppingCartButton.addEventListener('click', toggleShoppingCartMenu, true);

function toggleDesktopMenu(e) {

    if (desktopMenu.classList.contains('inactive') && e.currentTarget == menuEmail) {
        e.stopPropagation();
        document.addEventListener('click', hideDesktopMenu, true)
        desktopMenu.classList.toggle('inactive');
    }

}

function hideDesktopMenu(e) {

    if (e.target == menuEmail) {
        e.stopPropagation();
        e.preventDefault();
    }
    if (e.target != desktopMenu) {
        // e.stopPropagation();
        desktopMenu.classList.add('inactive');
        document.removeEventListener('click', hideDesktopMenu, true);
    }

}

function toggleMobileMenu(e) {

    if (mobileMenu.classList.contains('inactive') && e.currentTarget == mobileMenuButton) {
        e.stopPropagation();
        document.addEventListener('click', hideMobileMenu, true)
        mobileMenu.classList.toggle('inactive');
    }

}

function hideMobileMenu(e) {

    if (e.target == mobileMenuButton) {
        e.stopPropagation();
        e.preventDefault();
    }

    if (e.target != mobileMenu) {
        // e.stopPropagation();
        mobileMenu.classList.add('inactive');
        document.removeEventListener('click', hideMobileMenu, true);
    }

}

function toggleShoppingCartMenu(e) {

    console.log('toogle currentTarget');
    console.log(e.currentTarget);
    console.log('toogle target');
    console.log(e.target);
    console.log('------------------------------');

    if (shoppingCartMenu.classList.contains('inactive') && e.currentTarget == menuShoppingCartButton) {
        e.stopPropagation();
        document.addEventListener('click', hideShoppingCartMenu, true)
        shoppingCartMenu.classList.toggle('inactive');
    }

}

function hideShoppingCartMenu(e) {

    console.log('hide target.parentNode');
    console.log(e.target.parentNode);
    console.log('hide target');
    console.log(e.target);
    console.log('------------------------------');

    if (e.target.parentNode == menuShoppingCartButton || e.target == menuShoppingCartButton) {
        e.stopPropagation();
        e.preventDefault();
    }
    if (e.target != shoppingCartMenu) {
        // e.stopPropagation();
        shoppingCartMenu.classList.add('inactive');
        document.removeEventListener('click', hideShoppingCartMenu, true);
    }

}

function populateProductView(){
    const cardsContainer = document.querySelector('.cards-container');
    const htmlProductList = document.createDocumentFragment();

    for (const product of productList) {

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        htmlProductList.appendChild(productCard);

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        productCard.append(productImg, productInfo);

        const productInfoContainer = document.createElement('div');

        productInfo.appendChild(productInfoContainer);

        const productInfoPrice = document.createElement('p');
        const productInfoPriceText = document.createTextNode(product.price);
        productInfoPrice.appendChild(productInfoPriceText);

        const productInfoName = document.createElement('p');
        const productInfoNameText = document.createTextNode(product.name);
        productInfoName.appendChild(productInfoNameText);

        productInfoContainer.append(productInfoPrice, productInfoName);

        const addToCartFigure = document.createElement('figure');
        const addToCartImg = document.createElement('img');
        addToCartImg.setAttribute('src', './icons/bt_add_to_cart.svg');

        addToCartFigure.appendChild(addToCartImg);
        
        productInfo.appendChild(addToCartFigure);
    }

    cardsContainer.appendChild(htmlProductList);
}

populateProductView();