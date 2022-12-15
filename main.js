const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const asideCarrito = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideClosed = asideCarrito.classList.contains('inactive');

    if (!isAsideClosed) {
        asideCarrito.classList.add('inactive');
    }

    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    const isAsideClosed = asideCarrito.classList.contains('inactive');

    if (!isAsideClosed) {
        asideCarrito.classList.add('inactive');
    }

    mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
    const ismobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!ismobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    asideCarrito.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Yellow Bike',
    price: 230,
    image: 'https://i.pinimg.com/originals/e4/4c/4b/e44c4b5e09415a8fda082285916079ef.jpg',
});
productList.push({
    name: 'Skateboard',
    price: 80,
    image: 'https://contents.mediadecathlon.com/p1134030/5d6b1ce2e5c7b744dfecef67ebb1b7b4/p1134030.jpg',
});
productList.push({
    name: 'Longboard',
    price: 180,
    image: 'https://cdn.shopify.com/s/files/1/0092/1085/5524/products/Loaded-Tarab-II-Complete-axonometric-composite-2048p_eec923dd-838e-4c37-8ce0-e7e321df1999_1080x.jpg',
});
productList.push({
    name: 'Motorcycle',
    price: 970,
    image: 'https://http2.mlstatic.com/D_NQ_NP_676936-MLA50296183383_062022-W.jpg',
});
productList.push({
    name: 'Motorcycle',
    price: 970,
    image: 'https://http2.mlstatic.com/D_NQ_NP_676936-MLA50296183383_062022-W.jpg',
});

function renderProducts(arr) {
    for (product of arr) {
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