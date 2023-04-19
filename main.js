const menuEmail = document.querySelector ('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const menuHamIco = document.querySelector('.menu');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingingCartContainer = document.querySelector('#shoppingingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIco.addEventListener('click', togglemobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeproductDetailAside);

function toggleDesktopMenu() {
    const isAsideClosed =  shoppingingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingingCartContainer.classList.add('inactive')        
    }

    desktopMenu.classList.toggle('inactive');
}

function togglemobileMenu() {
    const isAsideClosed =  shoppingingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingingCartContainer.classList.add('inactive')        
    }

    closeproductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed =  mobileMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');      
    }    
    const isProductDetailClosed =  productDetailContainer.classList.contains('inactive');
    
    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');        
    }    
    shoppingingCartContainer.classList.toggle('inactive')
    }

function openProductDetailAside(){
    shoppingingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeproductDetailAside(){
    productDetailContainer.classList.add('inactive');
}



    const productList = [];
    productList.push({
        name: 'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    });
    productList.push({
        name: 'Pantalla',
        price: 220,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    });
    productList.push({
        name: 'Computador',
        price: 320,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    });

    /*
    <div class="product-card">
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
    */


    function renderProducts(arr) {
        // Por cada producto vamos a crear el elemento html
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        // product= {name, price, image} -> product.image
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

        productInfoDiv.appendChild(productPrice)
        productInfoDiv.appendChild(productName)
        
        const productInfoFigure = document.createElement('figure');
        const productImgCar = document.createElement('img');
        productImgCar.setAttribute('src','./icons/bt_add_to_cart.svg');
        
        productInfoFigure.appendChild(productImgCar);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);

    }
    }

    renderProducts(productList);