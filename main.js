const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenuButton = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuShoppingCartButton = document.querySelector('.navbar-shopping-cart');
const shoppingCartMenu = document.querySelector('#shoppingCartContainer');
const productDetailCloseButton = document.querySelector('.product-detail-close');
const productList = [
    {
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: '$120.1',
        name: 'nombre-producto 1',
        description: 'detalles producto 1 detalles producto 1 detalles producto 1 detalles producto 1'
    },
    {
        image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: '$120.2',
        name: 'nombre-producto 2',
        description: 'detalles producto 2 detalles producto 2 detalles producto 2 detalles producto 2'
    },
    {
        image: 'https://images.pexels.com/photos/2253833/pexels-photo-2253833.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: '$120.3',
        name: 'nombre-producto 3',
        description: 'detalles producto 3 detalles producto 3 detalles producto 3 detalles producto 3'
    },
    {
        image: 'https://images.pexels.com/photos/2866796/pexels-photo-2866796.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: '$120.4',
        name: 'nombre-producto 4',
        description: 'detalles producto 4 detalles producto 4 detalles producto 4 detalles producto 4'
    },
    {
        image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: '$120.5',
        name: 'nombre-producto 5',
        description: 'detalles producto 5 detalles producto 5 detalles producto 5 detalles producto 5'
    },
    {
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: '$120.6',
        name: 'nombre-producto 6',
        description: 'detalles producto 6 detalles producto 6 detalles producto 6 detalles producto 6'
    },
    {
        image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: '$120.7',
        name: 'nombre-producto 7',
        description: 'detalles producto 7 detalles producto 7 detalles producto 7 detalles producto 7'
    },
    {
        image: 'https://images.pexels.com/photos/2253833/pexels-photo-2253833.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: '$120.8',
        name: 'nombre-producto 8',
        description: 'detalles producto 8 detalles producto 8 detalles producto 8 detalles producto 8'
    },
    {
        image: 'https://images.pexels.com/photos/2866796/pexels-photo-2866796.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: '$120.9',
        name: 'nombre-producto 9',
        description: 'detalles producto 9 detalles producto 9 detalles producto 9 detalles producto 9'
    },
    {
        image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        price: '$120.01',
        name: 'nombre-producto 10',
        description: 'detalles producto 10 detalles producto 10 detalles producto 10 detalles producto 10'
    },
];

menuEmail.addEventListener('click', toggleDesktopMenu, true);
mobileMenuButton.addEventListener('click', toggleMobileMenu, true);
menuShoppingCartButton.addEventListener('click', toggleShoppingCartMenu, true);
productDetailCloseButton.addEventListener('click', hideProductDetail);

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
        productImg.addEventListener('click', (e)=>{showProductDetail(e, product)});

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

function showProductDetail(e, product){
    const productDetail = document.querySelector('#productDetail');
    const productImg = document.querySelector('#productDetail>img:nth-child(2)')
    productImg.setAttribute('src', product.image);
    const productPrice = document.querySelector('#productDetail .product-info p:nth-child(1)');
    productPrice.childNodes[0].nodeValue = product.price;
    const productName = document.querySelector('#productDetail .product-info p:nth-child(2)');
    productName.childNodes[0].nodeValue = product.name;
    const productDescription = document.querySelector('#productDetail .product-info p:nth-child(3)');
    productDescription.childNodes[0].nodeValue = product.description;


    if (productDetail.classList.contains('inactive')) {
        e.stopPropagation();
        document.addEventListener('click', hideProductDetail, true);
        productDetail.classList.remove('inactive');
    }

}

function hideProductDetail(){
    const productDetail = document.querySelector('#productDetail');
    productDetail.classList.add('inactive');
    document.removeEventListener('click', hideProductDetail, true);
}