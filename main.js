const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.burger-menu')
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');



// Desktop
navEmail.addEventListener('click', toggleDesktopMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)

// Mobile
burgerMenu.addEventListener('click', toggleMobileMenu)

function toggleDesktopMenu ()
{
    const isAsideClosed = aside.classList.contains('inactive')

    if (!isAsideClosed){
        aside.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')
}
function toggleMobileMenu ()
{
    const isAsideClosed = aside.classList.contains('inactive')

    if (!isAsideClosed){
        aside.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive')
}
function toggleCarritoAside ()
{

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    
    
    if (!isMobileMenuClosed || !isDesktopMenuClosed){
        mobileMenu.classList.add('inactive')
        desktopMenu.classList.add('inactive')
    }

    aside.classList.toggle('inactive')
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

function renderProducts (array)
{
    for (product of productList)
{
    const productCard =  document.createElement('div');
    productCard.classList.add('product-card');

    const productImage = document.createElement('img');
    productImage.setAttribute('src', product.image);

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