const menuEmail         = document.querySelector('.navbar-email');
const desktopMenu       = document.querySelector('.desktop-menu');
const mobileMenuIco     = document.querySelector('.menu');
const mobileMenu        = document.querySelector('.mobile-menu');
const ShopCartMenuIco   = document.querySelector('.navbar-shopping-cart');
const ShopCartMenu      = document.querySelector('#shoppingCartContainer');
const cardsContainer    = document.querySelector('.cards-container');

// Escuchador despliegue menu email.
menuEmail.addEventListener('click',toggleDesktopMenu);
// Escuchador despliegue  menu hamburguesa.
mobileMenuIco.addEventListener('click',togglemobileMenuIco);
// Escuchador despliegue  menu carrito de compras.
ShopCartMenuIco.addEventListener('click',toggleShopCartMenuIco);

// Funcion despliegue menu email.
function toggleDesktopMenu()
{
    // Menú carrito de compras cerrado
    let isShopCartMenuuClose = ShopCartMenu.classList.contains('inactive');

    if (!isShopCartMenuuClose)
    {

        ShopCartMenu.classList.add('inactive');
    }  
    
    desktopMenu.classList.toggle('inactive');
}

// Funcion despliegue menu dispositivos mobiles.
function togglemobileMenuIco()
{
    // Menú carrito de compras cerrado
    let isShopCartMenuuClose = ShopCartMenu.classList.contains('inactive');

    if (!isShopCartMenuuClose)
    {

        ShopCartMenu.classList.add('inactive');
    }    

    mobileMenu.classList.toggle('inactive');
}

// Funcion despliegue menu carrito de compras.
function toggleShopCartMenuIco()
{
    // Menú movil cerrado
    let isMobileMenuClose = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClose)
    {

        mobileMenu.classList.add('inactive');
    }    
    ShopCartMenu.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Bike2',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Tv',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Computer',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts(array)
{
    for (product of productList)
    {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv    = document.createElement('div');
        const productPrice      = document.createElement('p');
        productPrice.innerText  = '$' + product.price;
        const productName       = document.createElement('p');
        productName.innerText   = product.name;
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const ProductFigureImg  = document.createElement('img');
        ProductFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg');
        productInfoFigure.appendChild(ProductFigureImg);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);

