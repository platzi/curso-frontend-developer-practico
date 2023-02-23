const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shopCar = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container')

menuHamMenu.addEventListener('click', toggleMobileMenu);
menuEmail.addEventListener('click', toggleDesktopMenu);
shopCar.addEventListener('click', toggleShopList);

function toggleDesktopMenu()
{
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')
    if (!isAsideClosed)
    {
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu()
{
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')
    if (!isAsideClosed)
    {
        shoppingCartContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleShopList()
{
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed)
    {
        mobileMenu.classList.add('inactive');
    }

    if (!isDesktopMenuClosed)
    {
        desktopMenu.classList.add('inactive');
    }

   shoppingCartContainer.classList.toggle('inactive');
}

const productList = [];
productList.push(
    {
        name: 'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    });

productList.push(
    {
        name: 'TV',
        price: 100,
        image: 'https://images.pexels.com/photos/6976094/pexels-photo-6976094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    });

productList.push(
     {
        name: 'Laptop',
        price: 80,
        image: 'https://images.pexels.com/photos/5629144/pexels-photo-5629144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    });
    
function renderProducts(arr)
{
    for (product of arr) 
{
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

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