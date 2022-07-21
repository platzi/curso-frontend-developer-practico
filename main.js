const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.burguerMenu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.shopping-cart-detail');

const cardsContainer = document.querySelector('.cards-container');

const productDetailContainer = document.querySelector('.product-detail');

const productDetailClose = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleCartAside);
productDetailClose.addEventListener('click', closeProductDetail);

function toggleDesktopMenu() 
{
    mobileMenu.classList.add('inactive');
    aside.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu()
{
    desktopMenu.classList.add('inactive');
    aside.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleCartAside()
{
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    aside.classList.toggle('inactive');
}

function openProductDetail()
{
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    aside.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetail()
{
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push(
    {
        name: 'Bike',
        price: 120.00,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
);
productList.push(
    {
        name: 'Bike',
        price: 120.00,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
);
productList.push(
    {
        name: 'Bike',
        price: 120.00,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
);
productList.push(
    {
        name: 'Bike',
        price: 120.00,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
);
productList.push(
    {
        name: 'Bike',
        price: 120.00,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
);
productList.push(
    {
        name: 'Bike',
        price: 120.00,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
);

renderProducts(productList);

function renderProducts(arr)
{
    for(product of arr)
    {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const img = document.createElement('img');
        img.setAttribute('src', product.image);
        img.addEventListener('click', openProductDetail);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoData = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;

        const productName = document.createElement('p');
        productName.innerText = product.name;

        const cartFigure = document.createElement('figure');
        const cartImg = document.createElement('img');
        cartImg.setAttribute('src', './icons/bt_add_to_cart.svg');

        cartFigure.appendChild(cartImg);
        productInfoData.appendChild(productPrice);
        productInfoData.appendChild(productName);
        productInfo.appendChild(productInfoData);
        productInfo.appendChild(cartFigure);
        productCard.appendChild(img);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}

