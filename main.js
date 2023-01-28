const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurguer = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCart = document.querySelector('#shoppingCartContainer');
const productDetail = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');
const productDetailClose = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){

    const isShoppingCartClosed = shoppingCart.classList.contains('inactive');

    if(!isShoppingCartClosed){
        shoppingCart.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

menuBurguer.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){

    const isProductDetailClosed = productDetail.classList.contains('inactive');
    const isShoppingCartClosed = shoppingCart.classList.contains('inactive');

    if(!isShoppingCartClosed){
        shoppingCart.classList.add('inactive');
    }

    if(!isProductDetailClosed){
        productDetail.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

cartIcon.addEventListener('click', toggleShoppingCart);

function toggleShoppingCart(){

    const isDesktopClosed = desktopMenu.classList.contains('inactive');
    const isMobileClosed = mobileMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetail.classList.contains('inactive');

    if(!isMobileClosed){
        mobileMenu.classList.add('inactive');
    }

    if(!isDesktopClosed){
        desktopMenu.classList.add('inactive');
    }

    if(!isProductDetailClosed){
        productDetail.classList.add('inactive');
    }

    shoppingCart.classList.toggle('inactive');
}

productDetailClose.addEventListener('click', closeProductDetail);

function closeProductDetail (){

    productDetail.classList.add('inactive');

}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Tv',
    price: 400,
    image: 'https://images.pexels.com/photos/6976094/pexels-photo-6976094.jpeg?auto=compress&cs=tinysrgb&w=600'
});

productList.push({
    name: 'Pc',
    price: 1000,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600'
});

function renderProducts(array){

    for(product of productList){

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);

        productImg.addEventListener('click', openProductDetail);

        function openProductDetail(){
          
            const isDesktopClosed = desktopMenu.classList.contains('inactive');
            const isShoppingCartClosed = shoppingCart.classList.contains('inactive');

            if(!isShoppingCartClosed){
                shoppingCart.classList.add('inactive');
            }

            if(!isDesktopClosed){
                desktopMenu.classList.add('inactive');
            }
             
            productDetail.classList.remove('inactive');
            
        }
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure');
    
        const cartImg = document.createElement('img');
        cartImg.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(cartImg);
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        
        cardsContainer.appendChild(productCard);

        /*cartImg.addEventListener('click', openProductDetail);

        function openProductDetail(){
          
            const isDesktopClosed = desktopMenu.classList.contains('inactive');
            const isShoppingCartClosed = shoppingCart.classList.contains('inactive');

            if(!isShoppingCartClosed){
                shoppingCart.classList.add('inactive');
            }

            if(!isDesktopClosed){
                desktopMenu.classList.add('inactive');
            }
             
            productDetail.classList.remove('inactive');
            
        }*/
    }
}

renderProducts(productList);