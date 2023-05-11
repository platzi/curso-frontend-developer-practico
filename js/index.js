const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const shoppingDetailCloseIcon = document.querySelector('.product-detail-close');
const menuHamIcon = document.querySelector('.menu');
const mobilMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container')
const productDetailContainer = document.querySelector('#productDetail')



menuEmail.addEventListener('click',toggleDesktopMenu)
menuHamIcon.addEventListener('click',toggleMobilMenu)
menuCarritoIcon.addEventListener('click',toggleCarritoShoppingCartContainer);
shoppingDetailCloseIcon.addEventListener('click',closeProductDetailAside)

function toggleDesktopMenu()
{
    const shoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive')
    if(!shoppingCartContainerClosed)
    {
        shoppingCartContainer.classList.add('inactive');
    }
  
    desktopMenu.classList.toggle('inactive');
}

function toggleMobilMenu()
{
    const shoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive')
    if(!shoppingCartContainerClosed)
    {
        shoppingCartContainer.classList.add('inactive');
    }
    closeProductDetailAside();
    mobilMenu.classList.toggle('inactive');
}

function toggleCarritoShoppingCartContainer()
{
    
    const isMobileMenuClosed = mobilMenu.classList.contains('inactive');
    

    if(!isMobileMenuClosed)
    {
        mobilMenu.classList.add('inactive');
    }

    const isProductDeatilClosed = productDetailContainer.classList.contains('inactive');

    if(!isProductDeatilClosed)
    {
        productDetailContainer.classList.add('inactive'); 
    }

    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside()
{
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside()
{
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: 'Pantalla',
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: 'Computer',
    price: 620,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

 function renderProducts(arr){

    for( product of arr)
    {
       const productCard = document.createElement('div');
       productCard.classList.add('product-card');
   
       const productImg = document.createElement('img');
       productImg.setAttribute('src', product.image);
       productImg.addEventListener('click',openProductDetailAside)
   
       const productInfo = document.createElement('div')
       productInfo.classList.add('product-info');
   
       const productInfoDiv = document.createElement('div');
   
       const productPrice = document.createElement('p');
       productPrice.innerText = '$' + product.price;
   
       const productName = document.createElement('p');
       productName.innerText = product.name;
       productInfo.appendChild(productPrice);
       productInfo.appendChild(productName);
   
       const productInfoFigure = document.createElement('figure')
       const productImgCart = document.createElement('img')
       productImgCart.setAttribute('src', "./icons/bt_add_to_cart.svg")
   
       productInfoFigure.appendChild(productImgCart);
       productInfo.appendChild(productInfoFigure);
   
       productCard.appendChild(productImg);
       productCard.appendChild(productInfo);
   
       cardsContainer.appendChild(productCard);
   
    }
 }

 renderProducts(productList);
 