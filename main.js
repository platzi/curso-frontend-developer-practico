const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.burguerMenu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.shopping-cart-detail');
const darken = document.querySelector('.darken');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('.product-detail');
const productDetailClose = document.querySelector('.product-detail-close');
const shoppingCartTitle = document.querySelector('.title-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleCartAside);
productDetailClose.addEventListener('click', closeProductDetail);
darken.addEventListener('click', closeMenus);
shoppingCartTitle.addEventListener('click', toggleCartAside)

function toggleDesktopMenu() 
{
    mobileMenu.classList.add('inactive');
    aside.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');

    const isMenuOpen = !desktopMenu.classList.contains('inactive');

    if(isMenuOpen)
        darken.classList.remove('inactive');
    else
        darken.classList.add('inactive');
}

function toggleMobileMenu()
{
    desktopMenu.classList.add('inactive');
    aside.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');

    const isMenuOpen = !mobileMenu.classList.contains('inactive');

    if(isMenuOpen)
        darken.classList.remove('inactive');
    else
        darken.classList.add('inactive');
}

function toggleCartAside()
{
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    aside.classList.toggle('inactive');
    
    const isMenuOpen = !aside.classList.contains('inactive');

    if(isMenuOpen)
        darken.classList.remove('inactive');
    else
        darken.classList.add('inactive');
}

function openProductDetail()
{
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    aside.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
    darken.classList.remove('inactive');
}

function closeProductDetail()
{
    productDetailContainer.classList.add('inactive');
    darken.classList.add('inactive');
}

function closeMenus()
{
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isCartAsideOpen = !aside.classList.contains('inactive');
    const isProductDetailOpen = !productDetailContainer.classList.contains('inactive');

    if (isDesktopMenuOpen)
    {
        toggleDesktopMenu();
        return;
    }
    if (isMobileMenuOpen)
    {
        toggleMobileMenu();
        return;
    }
    if (isCartAsideOpen)
    {
        toggleCartAside();
        return;
    }
    if (isProductDetailOpen)
    {
        closeProductDetail();
        return;
    }
}

const productList = [];

for(let i = 0; i < 36; i++)
{
    productList.push(
        {
            name: 'Bike',
            price: 120.00,
            image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        }
    );
}

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