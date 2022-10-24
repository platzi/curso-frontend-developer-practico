const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const hamburgerMenu = document.querySelector(".menu");
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const menuShoping = document.querySelector(".navbar-shopping-cart");
const mobileMenu = document.querySelector(".mobile-menu")
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardContainer = document.querySelector(".cards-container");
const productDetailContainer = document.querySelector('#productDetail');


menuEmail.addEventListener('click', toggleshowDesktopMenu);
hamburgerMenu.addEventListener('click', togglemobileMenu);
menuShoping.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleshowDesktopMenu()
{

    const isAsideMenuClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideMenuClosed)
    {
        shoppingCartContainer.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');

}

function togglemobileMenu()
{

    const isAsideMenuClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideMenuClosed)
    {
        shoppingCartContainer.classList.add('inactive')
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');

}

function toggleCarritoAside()
{
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed)
    {
        mobileMenu.classList.add('inactive')
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if(!isProductDetailClosed)
    {
        productDetailContainer.classList.add('inactive')
    }


    shoppingCartContainer.classList.toggle('inactive');

}

function openProductDetailAside(){

    shoppingCartContainer.classList.add('inactive');

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if(!isProductDetailClosed)
    {
        productDetailContainer.classList.add('inactive')
    }


    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}



//Creando array de lista dinamica de productos

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'TV',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Laptop',
    price: 420,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});


function renderProduct(arr)
{
    for(product of arr)
{
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    //product = {name, price, image} --> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    productImg.addEventListener('click', openProductDetailAside);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText =  '$' + product.price;

    const productName = document.createElement('p');
    productName.innerText =  product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);


    const productInfoFigure = document.createElement('figure');

    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', '/icons/icon_shopping_cart.svg');

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);

    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);

    productCard.appendChild(productInfo);

    cardContainer.appendChild(productCard);


    
}

}



renderProduct(productList);




