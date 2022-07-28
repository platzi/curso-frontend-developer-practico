const menuEmail = document.querySelector('.navbar-email'); // las clases de CSS se 
const desktopMenu = document.querySelector('.desktop-menu'); // importan con un punto al inicio
const menuIcon = document.querySelector('.menu');
const productCloseIcon = document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu); // El segundo parametro es una funcion a ejecutarse cuando se hace click (primero parametro)
menuIcon.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleCarritoAside);
productCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu()
{
    productDetailContainer.classList.add('inactive');
    const isAsideMenuClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideMenuClosed)
    {
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu()
{
    productDetailContainer.classList.add('inactive');
    const isAsideMenuClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideMenuClosed)
    {
        shoppingCartContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside()
{
    productDetailContainer.classList.add('inactive');
    
    desktopMenu.classList.add('inactive'); // De esta forma siempre que entre
                                         // a esta funcion, se cierra el desktop Menu
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    
    if(!isMobileMenuClosed)
    {
        mobileMenu.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside()
{
    shoppingCartContainer.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.remove('inactive')
}

function closeProductDetailAside()
{
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push
({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push
({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push
({
    name: 'Laptop',
    price: '620',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr)
{
    for (product of arr)
    {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        // product = {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');

        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);