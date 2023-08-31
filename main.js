const desktopManu = document.querySelector('.navbar-email')
const deskM = document.querySelector('.desktop-menu')
const menuHamburgerIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const orderList = document.querySelector('#shoppingCartContainer')
const cardsContainer = document.querySelector('.cards-container');
const producotDetails = document.querySelector('#productDetail');
const productDetailsClose = document.querySelector('.product-detail-close');







desktopManu.addEventListener('click', toggleDesktopManu);
menuHamburgerIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleOrderList);

function toggleDesktopManu() {
   const  isOrderListOpen = !orderList.classList.contains('inactive');


   if (isOrderListOpen){
        orderList.classList.add('inactive');
    }

    deskM.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const  isOrderListOpen = !orderList.classList.contains('inactive');

    if (isOrderListOpen){
        orderList.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleOrderList() {
    const isNavMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isDeskMenuOpen = !deskM.classList.contains('inactive');
    const isProductDetailOpen = !producotDetails.classList.contains('inactive');

    if (isNavMobileMenuOpen){
        mobileMenu.classList.add('inactive');
    }
    if (isDeskMenuOpen){
        deskM.classList.add('inactive')
    }
    if (isProductDetailOpen){
        producotDetails.classList.add('inactive');
    }
    orderList.classList.toggle('inactive');
}

function openProductDetailAside() {
    producotDetails.classList.remove('inactive');

    const isShopingCartOpen = !orderList.classList.contains('inactive');

    if (isShopingCartOpen){
        orderList.classList.add('inactive');
    }
}

function closeProductDetailAside(){
    producotDetails.classList.add('inactive');
}


productDetailsClose.addEventListener('click', closeProductDetailAside);


const producList = [];
producList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
);
producList.push({
    name: 'mountainBike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
);
producList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    }
);


function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

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
        cardsContainer.appendChild(productCard)

    }

}

renderProducts(producList);