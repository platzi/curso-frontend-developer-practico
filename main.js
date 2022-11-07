const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');
const orderContent = document.querySelector('.my-order-content')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){
    const isAsideClose = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClose){
        shoppingCartContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClose = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClose){
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isMenuDesktopClose = desktopMenu.classList.contains('inactive');
    const isProductDetailClose = productDetailContainer.classList.contains('inactive');

    if (!isMobileMenuClose){
        mobileMenu.classList.add('inactive');
    }

    if (!isMenuDesktopClose){
        desktopMenu.classList.add('inactive');
    }

    if (!isProductDetailClose){
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');

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
    id: 1,
});
productList.push({
    name: 'Pantalla',
    price: 140,
    image: 'https://www.lg.com/cl/images/monitores/md05969116/gallery/Global_20MK400_2018_Gallery_Large_01.jpg',
    id: 2,
});
productList.push({
    name: 'Laptop',
    price: 200,
    image: 'https://consumer.huawei.com/content/dam/huawei-cbg-site/latam/mx/mkt/plp/laptops/d14-amd-2021.jpg',
    id: 3,
});


function renderProduct(arr) {
    for (product of arr){

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        //product ={name, price, image} ->product.image
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
        productImgCart.addEventListener('click', addProductShoppingCart);
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

function addProductShoppingCart(){
    
    // const addProductShoppingCartIcon = document.querySelector('.product-card .product-info figure img');
    // console.log( addProductShoppingCartIcon, 'agregar al carro');

    console.log('agregar al carro');

    const shoppingCart = document.createElement('div');
    shoppingCart.classList.add('shopping-cart');

    const productFigure = document.createElement('figure');
    const productImgFigure = document.createElement('img');
    productImgFigure.setAttribute('src', './Img/laptop.jpg'); //C:\Users\fcoca\Documents\Curso Practico de JavaScript\Clase 16\curso-frontend-developer-Javascript-practico\Img\laptop.jpg

    const productName = document.createElement('p');
    productName.innerText = product.name;
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' +  product.price;       

    const iconClose = document.createElement('img');
    iconClose.setAttribute('src', './icons/icon_close.png');
    iconClose.addEventListener('click', deleteProductCart);

    orderContent.appendChild(shoppingCart);
    shoppingCart.appendChild(productFigure);
    productFigure.appendChild(productImgFigure);
    shoppingCart.appendChild(productName);
    shoppingCart.appendChild(productPrice);
    shoppingCart.appendChild(iconClose);

    if (productList){
        
    }
    
    
}

function deleteProductCart() {
    
    const deleteIcon = document.querySelector('.shopping-cart');
    console.log(deleteIcon)
    deleteIcon.remove('.shopping-cart');
    console.log('eliminar del carro');
    
}

renderProduct(productList);