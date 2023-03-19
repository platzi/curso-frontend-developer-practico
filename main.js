const nav_email = document.querySelector(".navbar-email");
const DesktopMenu = document.querySelector(".desktop-menu");
const MenuIcon = document.querySelector(".menu");
const MenuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const MobileMenu = document.querySelector(".mobile-menu");
const shoppingCart = document.querySelector("#shoppingCart");
const cardsContainer = document.querySelector('.cards-container');


nav_email.addEventListener('click', ToggleDesktopMenu);
MenuIcon.addEventListener('click', ToggleMobileMenu);
MenuCarritoIcon.addEventListener('click', ToggleCArrito);


function ToggleDesktopMenu()
{
    //Esto es para validar si esta abierto el menu mobile o el aside.
    //Es decir: Si tiene la clase inactive es porque esta cerrado
    const IsAsideClosed = shoppingCart.classList.contains('inactive');

    if (!IsAsideClosed) 
    {
        shoppingCart.classList.add('inactive');
    }

    DesktopMenu.classList.toggle('inactive'); //El toggle quita y coloca la clase inactive dependiendo si la tiene o no
}

function ToggleMobileMenu()
{
    const IsAsideClosed = shoppingCart.classList.contains('inactive');

    if (!IsAsideClosed) 
    {
        shoppingCart.classList.add('inactive');
    }

    MobileMenu.classList.toggle('inactive'); //El toggle quita y coloca la clase inactive dependiendo si la tiene o no
}

function ToggleCArrito()
{
    const IsMobileMenuClosed = MobileMenu.classList.contains('inactive');

    if (!IsMobileMenuClosed) 
    {
        MobileMenu.classList.add('inactive');
    }

    shoppingCart.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name : 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name : 'Pantalla',
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name : 'Computador',
    price: 150,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name : 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name : 'Pantalla',
    price: 320,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name : 'Computador',
    price: 150,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts (arr)
{
    for (product of productList) 
    {
        const ProductCard = document.createElement('div');
        ProductCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const ProductInfo = document.createElement('div');
        ProductInfo.classList.add('product-info');
    
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
    
        ProductInfo.appendChild(productInfoDiv);
        ProductInfo.appendChild(productInfoFigure);
    
        ProductCard.appendChild(productImg);
        ProductCard.appendChild(ProductInfo);
    
        cardsContainer.appendChild(ProductCard);
    }
}

renderProducts(productList);