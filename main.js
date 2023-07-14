const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuBars = document.querySelector(".menu");
const menuMobile = document.querySelector(".mobile-menu");
const cartIcon = document.querySelector(".navbar-shopping-cart");
const menuCart = document.querySelector("#shoppingCartContainer");
const cardContainer = document.querySelector(".card-container");
const productDetailContainer = document.querySelector("#productDetail");
const productDetailClose = document.querySelector(".product-detail-close");
const myOrderContent = document.querySelector('.my-order-content');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuBars.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleCartMenu);
productDetailClose.addEventListener('click', closeProductDetail);

function toggleDesktopMenu() {
    const isAsideClosed = menuCart.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if(!isAsideClosed){
        menuCart.classList.add('inactive');
    } else if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    };

    desktopMenu.classList.toggle('inactive');
};

function toggleMobileMenu() {
    const isAsideClosed = menuCart.classList.contains('inactive');
    const isProductDetailOpen = !productDetailContainer.classList.contains('inactive');

    //si esta abierto el carrito, lo cierra
    if(!isAsideClosed){
        menuCart.classList.add('inactive');
    } else if (isProductDetailOpen){
        closeProductDetail();
    };
    menuMobile.classList.toggle('inactive');
};

function toggleCartMenu() {
    const isMobileMenuClosed = menuMobile.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    //si esta abierto el menu mobile o desktop, lo cierra
    if(!isMobileMenuClosed){
        menuMobile.classList.add('inactive');
    } else if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    } else if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    };

    menuCart.classList.toggle('inactive');
};

function openProductDetail() {
    productDetailContainer.classList.remove('inactive');

    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    const isMobileMenuOpen = !menuMobile.classList.contains('inactive');
    const isCartMenuOpen = !menuCart.classList.contains('inactive');

    if(isDesktopMenuOpen){
        desktopMenu.classList.add('inactive');
    } else if (isMobileMenuOpen){
        menuMobile.classList.add('inactive');
    } else if (isCartMenuOpen) {
        menuCart.classList.add('inactive');
    };
};

function closeProductDetail() {
    productDetailContainer.classList.add('inactive');
};


const productList = []; //Esto es lo que traeria al hacer una consulta API Rest a la BD

//Llenamos el array manual mientras
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/13738406/pexels-photo-13738406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Pantalla',
    price: 625,
    image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Camara',
    price: 1200,
    image: 'https://images.pexels.com/photos/17436320/pexels-photo-17436320/free-photo-of-camara-fotografia-tecnologia-dispositivo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Iphone',
    price: 1900,
    image: 'https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});


function renderProducts(arr){
//Este ciclo recorre el array de productos y crea el HTML para cada uno
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        //Cada iteración: product = {name, price, image}
        productImg.setAttribute('src',product.image);
        productImg.classList.add('product-img');

        productImg.addEventListener('click', openProductDetail);
        productImg.addEventListener('mouseover', productImg.classList.add('pointer'));

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        productPrice.classList.add('product-price');

        const productName = document.createElement('p');
        productName.innerText = product.name;
        productName.classList.add('product-name');


        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');

        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', '/icons/bt_add_to_cart.svg');
        productImgCart.classList.add('btn-add-cart');
        productImgCart.classList.add('pointer');



        productInfoFigure.appendChild(productImgCart);


        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardContainer.appendChild(productCard);

    };
};

//de esta forma no se carga automatico sino cuando yo quiera llamar la función: un click, hover...
renderProducts(productList);


const shoppingCart = document.querySelector(".shopping-cart");


//Array con los productos que añaden al carrito
let allProducts= [];

const valorTotal = document.querySelector('.valor-total');
const countProducts = document.querySelector('.count-products');

//añade al array los productos que undimos add to cart
cardContainer.addEventListener('click', e => {
    const isBtnClicked = e.target.classList.contains('btn-add-cart');

    if(isBtnClicked){
        const product = e.target.parentElement.parentElement.parentElement;
        productDetailContainer.classList.add('inactive');
        desktopMenu.classList.add('inactive');
        menuCart.classList.remove('inactive');


        const infoProduct = {
            quantity: 1,
            title: product.querySelector('.product-name').innerText,
            price: product.querySelector('.product-price').innerText,
            image: product.querySelector('.product-img').getAttribute('src')
        }
        allProducts.push(infoProduct);
        renderCartProducts(allProducts);
    }
    console.log(allProducts);
})


function renderCartProducts(allProducts){

    myOrderContent.innerHTML = '';
    let total = 0;
    let totalOfProducts = 0;

    for(product of allProducts){

        const shoppingProductCart = document.createElement('div');
        shoppingProductCart.classList.add('shopping-cart');

        const figure = document.createElement('figure');

        const productCartImg = document.createElement('img');
        productCartImg.setAttribute('src', product.image);

        const productCartTitle = document.createElement('p');
        productCartTitle.innerText = product.title;

        const productCartPrice = document.createElement('p');
        productCartPrice.innerText = product.price;

        const deleteProductCart = document.createElement('img');
        deleteProductCart.setAttribute('src', "/icons/icon_close.png" );

        figure.appendChild(productCartImg);

        shoppingProductCart.appendChild(figure);
        shoppingProductCart.appendChild(productCartTitle);
        shoppingProductCart.appendChild(productCartPrice);
        shoppingProductCart.appendChild(deleteProductCart);

        myOrderContent.appendChild(shoppingProductCart);

        total = total + parseInt(product.price.slice(1));
        }
        console.log(allProducts);
        valorTotal.innerHTML = `$ ${total}`;
        countProducts.innerHTML = allProducts.length;
}
