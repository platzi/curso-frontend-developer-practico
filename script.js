const emailMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const shoppingCartIco = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');



emailMenu.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
shoppingCartIco.addEventListener('click', toggleCartMenu);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);


function toggleDesktopMenu(){
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    
    closeProductDetailAside();

    desktopMenu.classList.toggle('inactive');
};

function toggleMobileMenu(){
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    
    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

function toggleCartMenu(){
    const isMobileMenuClosed = !mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive')
    }
}

function openProductDetailAside(){
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isshoppingCartContainerClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Notepad',
    price: 30,
    image: 'https://images.pexels.com/photos/531844/pexels-photo-531844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Helmet',
    price: 50,
    image: 'https://images.pexels.com/photos/2862718/pexels-photo-2862718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Usb-cable',
    price: 5,
    image: 'https://images.pexels.com/photos/914915/pexels-photo-914915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Mirror',
    price: 70,
    image: 'https://images.pexels.com/photos/1528975/pexels-photo-1528975.jpeg?auto=compress&cs=tinysrgb&w=600',
});

/* <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div> */

for(product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    // Product = {name, price, image} -> product.image
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
