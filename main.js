const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

     if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

     if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    
    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }
    
    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}  

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 150,
    image: 'https://cdn.cikla.ec/wp-content/uploads/2022/01/13103219/roja-cikla-1500x1500-1-450x450.png',
});
productList.push({
    name: 'Monitor',
    price: 380,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmEVyH5GYsIwuvhsCwuFiqC-xerh6iYl1kGw&usqp=CAU',
});
productList.push({
    name: 'Computer',
    price: 750,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPSkN81e3cbRVEzG2IZReet7P0xuSyT8WS0A&usqp=CAU',
});
productList.push({
    name: 'Bike',
    price: 799,
    image: 'https://s3.amazonaws.com/rtvc-assets-senalcolombia.gov.co/s3fs-public/field/image/bicicletas-world-tour-2023.jpg',
});
productList.push({
    name: 'Monitor',
    price: 380,
    image: 'https://s3.abcstatics.com/media/favorito/2021/11/29/mejores-monitores-PC-oferta-U72777153102iNy-620x349@abc.jpg',
});
productList.push({
    name: 'Computer',
    price: 750,
    image: 'https://img.global.news.samsung.com/mx/wp-content/uploads/2019/01/Notebook-9-Pro-3.jpg',
});

/*
<div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"  alt="">
    <div class="product-info">
    <div>
        <p>$120,00</p>
        <p>Bike</p>
    </div>
    <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
    </figure>
    </div>
</div>
*/
function renderProducts(array) {
    for (product of array) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        // product = {name, price, image} -> product.image
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
}
    
renderProducts(productList);