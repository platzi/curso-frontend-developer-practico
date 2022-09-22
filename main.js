//Variables
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

//Eventos
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);
//Vamos a crear un evento para la función de cerrar el detalle de producto
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);

//Funciones
function toggleDesktopMenu(){
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isShoppingCartContainerClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isShoppingCartContainerClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');

    closeProductDetailAside();
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

    if (!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}

//Funcion que solo abra el detalle del producto
function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

//Funcion que solo cierre el detalle del producto
function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

//Para traer los productos a mostrar
const productList =[];

//Agregamos productos al array productList
productList.push({
    name: 'bike',
    price: 120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'pantalla',
    price: 320,
    image:'https://images.pexels.com/photos/58709/pexels-photo-58709.jpeg',
});

productList.push({
    name: 'computadora',
    price: 620,
    image:'https://images.pexels.com/photos/1049764/pexels-photo-1049764.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

//Mostrar los productos
function renderProduct(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);
        //Aqui vamos agregar un evento para que cuando haga click en la imagen
        //esta muestre el detalle del producto
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
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}

renderProduct(productList);