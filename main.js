const menuEmail =  document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const itemsOnCart = document.querySelector('#productsCart');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleShoppingCart);
productDetailCloseIcon.addEventListener('click', closeProductDetail);

const isItemsOnCartClosed = itemsOnCart.classList.contains('inactive');
const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

function closeProductDetail() {
    productDetailContainer.classList.add('inactive');
}

function openProductDetail(){
    itemsOnCart.classList.add('inactive');
productDetailContainer.classList.remove('inactive');
}

function toggleDesktopMenu(){
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    const isItemsOnCartClosed = itemsOnCart.classList.contains('inactive');

    if(!isItemsOnCartClosed){
        itemsOnCart.classList.add('inactive');
    } else if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }
desktopMenu.classList.toggle('inactive');

}

function toggleMobileMenu(){
const isItemsOnCartClosed = itemsOnCart.classList.contains('inactive');
const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if(!isItemsOnCartClosed){
        itemsOnCart.classList.add('inactive');
    } else if (!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');

}
       
function toggleShoppingCart(){
const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if(!isMobileMenuClosed){
            mobileMenu.classList.add('inactive');
        } else if(!isDesktopMenuClosed){
            desktopMenu.classList.add('inactive');
        } else if (!isProductDetailClosed){
            productDetailContainer.classList.add('inactive');
        }
        itemsOnCart.classList.toggle('inactive');
    }

    const productList = [];
    productList.push({
        name: 'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    });
    productList.push({
        name: 'PlayStation 5',
        price: 600,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    });
    productList.push({
        name: 'Keyboard',
        price: 300,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    });
    productList.push({
        name: 'Botines',
        price: 150,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    });
    productList.push({
        name: 'Computer',
        price: 800,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    });

function renderProducts(arrayp){   
for (product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetail);

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