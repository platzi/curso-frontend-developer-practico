const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.burger-menu')
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailClose = document.querySelector('.product-detail-close');


// Desktop
navEmail.addEventListener('click', toggleDesktopMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)

// Mobile
burgerMenu.addEventListener('click', toggleMobileMenu)

productDetailClose.addEventListener('click', closeProductDetailAside);


function toggleDesktopMenu ()
{
    desktopMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');
    closeProductDetailAside();
}

function toggleMobileMenu ()
{
    mobileMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');
    closeProductDetailAside();
}

function toggleCarritoAside ()
{
    shoppingCartContainer.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    closeProductDetailAside();
}

function openProductDetailAside ()
{
    productDetailContainer.classList.remove('inactive');
    shoppingCartContainer.classList.add('inactive')
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')

}

function closeProductDetailAside ()
{
    productDetailContainer.classList.add('inactive');
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Display Desktop',
    price: 200,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_613118-MLA48131245525_112021-F.webp',
})
productList.push({
    name: 'Logitech Keyboard',
    price: 100,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_880780-MCO50451049251_062022-F.webp',
})
productList.push({
    name: 'Aerosol Negro',
    price: 10,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_936396-MCO51446043263_092022-F.webp',
})
productList.push({
    name: 'Audífonos Inalámbricos Noise cancelling Sony - WH-1000XM4 - Negro',
    price: 300,
    image: 'https://i.linio.com/p/fdb81cbb90f94dad3d07821dbf29807f-product.webp',
})
productList.push({
    name: 'Bombillo Led Wi-fi (inteligente) Compatib Con Google Y Alexa',
    price: 10,
    image: 'https://http2.mlstatic.com/D_NQ_NP_804874-MCO45121218882_032021-O.webp',
})
productList.push({
    name: 'Display Desktop',
    price: 200,
    image: 'https://http2.mlstatic.com/D_NQ_NP_853049-MCO49462008710_032022-O.webp',
})
productList.push({
    name: 'Logitech Keyboard',
    price: 100,
    image: 'https://http2.mlstatic.com/D_NQ_NP_882522-MLA46542882211_062021-O.webp',
})
productList.push({
    name: 'Aerosol Negro',
    price: 10,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_936396-MCO51446043263_092022-F.webp',
})
productList.push({
    name: 'Audífonos Inalámbricos Noise cancelling Sony - WH-1000XM4 - Negro',
    price: 300,
    image: 'https://i.linio.com/p/fdb81cbb90f94dad3d07821dbf29807f-product.webp',
})
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

function renderProducts (array)
{
    for (product of productList)
{
    const productCard =  document.createElement('div');
    productCard.classList.add('product-card');

    const productImage = document.createElement('img');
    productImage.setAttribute('src', product.image);
    productImage.addEventListener('click', openProductDetailAside)

    const productInfo =  document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = `$${product.price}`;
    const productName = document.createElement('p');
    productName.innerText = `${product.name}`;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv)
    productInfo.appendChild(productInfoFigure)


    productCard.appendChild(productImage)
    productCard.appendChild(productInfo)

    cardsContainer.appendChild(productCard)
}

}

renderProducts(productList)
