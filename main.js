const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

const cardsContainer = document.querySelector('.cards-container');

//PopUp detalle de producto
const productImageInfor   = document.querySelector('#productDetail > img:nth-child(2)')
const labelPriceInfo      = document.querySelector('.product-info p:nth-child(1)')
const labelNameInfo       = document.querySelector('.product-info p:nth-child(2)')



navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetail);



function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    shoppingCartContainer.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
    productDetailContainer.classList.add('inactive');
}

function toggleCarritoAside(){
    mobileMenu.classList.add('inactive');
    shoppingCartContainer.classList.toggle('inactive');
    productDetailContainer.classList.add('inactive');
}

function openProductDetail(){
    productDetailContainer.classList.remove('inactive');
    shoppingCartContainer.classList.add('inactive');
}

function closeProductDetail(){
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'TV',
    price: 910,
    image: 'https://www.lg.com/co/images/televisores/md07550828/gallery/medium02.jpg'
});
productList.push({
    name: 'Macbook',
    price: 999,
    image: 'https://i0.wp.com/regionalista.cl/web/wp-content/uploads/2022/01/FACH0144-FOTO-1.jpg?resize=696%2C557&ssl=1'
});

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        // productImg.addEventListener('click', openProductDetail);

    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' +product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productDiv.append(productPrice, productName);
    
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.append(productDiv, productInfoFigure  );
    
        productCard.append(productImg, productInfo);
    
        productImg.addEventListener('click', function(){
            mostrarInfoProduct(product.image, product.price, product.name);
            openProductDetail();
        })

        cardsContainer.appendChild(productCard);
    }
};

function mostrarInfoProduct(imagen, precio, nombre){
    productImageInfor.setAttribute('src', imagen);
    labelPriceInfo.innerText = '$' + precio;
    labelNameInfo.innerText = nombre;
}

renderProducts(productList);