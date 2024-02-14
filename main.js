const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hambMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuStoreIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailClose = document.querySelector('.product-detail-close');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
hambMenu.addEventListener('click', toggleMobileMenu);
menuStoreIcon.addEventListener('click', toggleAsideMenuProducts);
productDetailClose.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isShoppingCartContainerClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
};

function toggleMobileMenu() {
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');
    /*const isproducDetailClosed = productDetailContainer.classList.contains('inactive');*/

    if (!isShoppingCartContainerClosed){
        shoppingCartContainer.classList.add('inactive');
   }

   /*if (!isproducDetailClosed){
        productDetailContainer.classList.add('inactive');
   }*/

    closeProductDetailAside();//permite cerrar el detalle del producto reusando la función antes creada
    mobileMenu.classList.toggle('inactive');
};

function toggleAsideMenuProducts() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isproducDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isMobileMenuClosed){
         mobileMenu.classList.add('inactive');
    }

    if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

    if (!isproducDetailClosed){
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside(){
    const isShoppingCartClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isShoppingCartClosed){
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
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Screen',
    price: 250,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Headphones',
    price: 80,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Phone',
    price: 300,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
        img.addEventListener('click', openProductDetailAside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice); //Adding the price to the div with class "product-info"
        productInfoDiv.appendChild(productName);//Adding the name to the div
    
        const productFigure = document.createElement('figure');
        const productFigureIcon = document.createElement('img');
        productFigureIcon.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productFigure.appendChild(productFigureIcon);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productFigure);
    
        productCard.appendChild(img);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    };
};

renderProducts(productList);

//prueba para crear un detalle individual de producto que muestre la información del producto al que se da click
function renderProductDetail(list){

    const detailClose = document.createElement('div');
    detailClose.classList.add('product-detail-close');

    const closeImage = document.createElement('img');
    closeImage.setAttribute('src', './icons/icon_close.png');
    closeImage.setAttribute('alt', 'close');

    const productImage = document.createElement('img');
    productImage.setAttribute('src', product.image);
    productImage.setAttribute('alt', product.alt);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const  price = document.createElement('p');
    price.innerText = '$' + product.price;

    const  name = document.createElement('p');
    name.innerText = product.name;

    const description  = document.createElement('p');
    description.innerText = product.description;

    const productButton = document.createElement('button');
    productButton.classList.add('primary-button add-to-cart-button');

    const imageAddCart = document.createElement('img');
    imageAddCart.setAttribute('src', "./icons/bt_add_to_cart.svg");

    detailClose.appendChild(closeImage);

    productInfo.appendChild(productButton);
    productInfo.appendChild(price);
    productInfo.appendChild(name);
    productInfo.appendChild(description);

    productDetailContainer.appendChild(detailClose)
    productDetailContainer.appendChild(productImage)
    productDetailContainer.appendChild(productInfo)
};

renderProductDetail(productList);

