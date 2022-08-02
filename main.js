// menu flotante del correo
const navBarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const hamburgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const shoppingCar = document.querySelector('.navbar-shopping-cart');
const myOrder_Detail = document.querySelector('.myOrder-detail');

const cardsContainer = document.querySelector('.cards-container');

const product_detail = document.querySelector('.product-detail');

const productDetailCloseIcon = document.querySelector('.product-detail-close')


navBarEmail.addEventListener("click", toggleDesktopMenu);

hamburgerMenu.addEventListener("click", toggleMobileMenu);

shoppingCar.addEventListener("click", toggleMyOrder_Detail);

productDetailCloseIcon.addEventListener('click', closeProductDetailAside);


function toggleDesktopMenu() {
    const isMyOrder_DetailClosed = myOrder_Detail.classList.contains('inactive') ;

    if (!isMyOrder_DetailClosed){
        myOrder_Detail.classList.add('inactive');
    }

    const isProduct_detailClosed = product_detail.classList.contains('inactive') ;

    if (!isProduct_detailClosed){
        closeProductDetailAside();
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isMyOrder_DetailClosed = myOrder_Detail.classList.contains('inactive') ;

    if (!isMyOrder_DetailClosed){
        myOrder_Detail.classList.add('inactive');
    }

    const isProduct_detailClosed = product_detail.classList.contains('inactive') ;

    if (!isProduct_detailClosed){
        closeProductDetailAside();
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleMyOrder_Detail() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive') ;
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    };

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    const isProduct_detailClosed = product_detail.classList.contains('inactive') ;

    if (!isProduct_detailClosed){
        closeProductDetailAside();
    }

    myOrder_Detail.classList.toggle('inactive');
}

function openProudctDeatil(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive') ;
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    };

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    const isMyOrder_DetailClosed = myOrder_Detail.classList.contains('inactive') ;

    if (!isMyOrder_DetailClosed){
        myOrder_Detail.classList.add('inactive');
    }

    product_detail.classList.remove('inactive');
};

function closeProductDetailAside() {
    product_detail.classList.add('inactive');
  }

const productList = [];

productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'tote',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Hangbag',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'ShoulderBag',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

for (product of productList) {

const productCard = document.createElement('div');
productCard.classList.add('product-card'); 

const img = document.createElement('img');
img.setAttribute('src', product.image);
img.addEventListener('click', openProudctDeatil);

const productInfo = document.createElement('div');
productInfo.classList.add('product-info');

const nonNameDiv = document.createElement('div');

const productInfo_price = document.createElement('p');
productInfo_price.innerText = '$' + product.price;

const productInfo_name = document.createElement('p');
productInfo_name.innerText = product.name;

const productInfo_figure = document.createElement('figure');


const productInfo_figureImg = document.createElement('img');
productInfo_figureImg.setAttribute('src', './icons/bt_add_to_cart.svg');

cardsContainer.appendChild(productCard);

productCard.appendChild(img);
productCard.appendChild(productInfo);

productInfo.appendChild(nonNameDiv);
productInfo.appendChild(productInfo_figure);


nonNameDiv.appendChild(productInfo_price);
nonNameDiv.appendChild(productInfo_name);

productInfo_figure.appendChild(productInfo_figureImg);
}


