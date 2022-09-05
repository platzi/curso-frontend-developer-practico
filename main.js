//Menu Desktop
const menuEmail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    //toggle quita o pone la clase
    console.log("click");
    const isCarritoMenuClosed = carritoCompras.classList.contains('inactive');
    if (!isCarritoMenuClosed) {
        carritoCompras.classList.add('inactive');
    }
    desktopmenu.classList.toggle('inactive');
}

//Menu Movile
const MenuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

MenuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    console.log("Click movil");
    const isCarritoMenuClosed = carritoCompras.classList.contains('inactive');
    if (!isCarritoMenuClosed) {
        carritoCompras.classList.add('inactive');
    }
    closeProductDetail();
    mobileMenu.classList.toggle('inactive');
}
//Product Detail
const productDetail = document.querySelector('#productDetail');
const productDetailClosedIcon = document.querySelector('.product-detail-close');

productDetailClosedIcon.addEventListener('click', closeProductDetail);

function closeProductDetail() {
    productDetail.classList.add('inactive');
}

//Carrito
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const carritoCompras = document.querySelector('#shoppingCartContainer');

function openProductDetail() {
    mobileMenu.classList.add('inactive');
    carritoCompras.classList.add('inactive');
    productDetail.classList.remove('inactive');
}

menuCarritoIcon.addEventListener('click', toggleCarrito);

function toggleCarrito() {
    console.log("click carrito");
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    const isDesktopMenuClosed = desktopmenu.classList.contains('inactive');
    if (!isDesktopMenuClosed) {
        desktopmenu.classList.add('inactive');
    }
    const isProducDetailClosed = productDetail.classList.contains('inactive');
    if (!isProducDetailClosed) {
        productDetail.classList.add('inactive');
    }
    carritoCompras.classList.toggle('inactive');
}


//Lista de Productos
const productList = [];

productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Pantalla',
    price: 100,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
    name: 'Compu',
    price: 150,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

//Añadimos a card container
const cardsContainer = document.querySelector('.cards-container');

function renderProduct(arrayProducts) {
    for (product of arrayProducts) {
        //Div product cart
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        //img
        const img = document.createElement('img');
        img.setAttribute('src',product.image);
        img.addEventListener('click', openProductDetail);

        //Div product info
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        //Product info div
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        productInfoDiv.appendChild(productPrice);
        const productName = document.createElement('p');
        productName.innerText = product.name;
        productInfoDiv.appendChild(productName);
        //Product info figure
        const productInfoFigure = document.createElement('figure');
        const productFigure = document.createElement('img');
        productFigure.setAttribute('src', './icons/bt_add_to_cart.svg');
        productInfoFigure.appendChild(productFigure);
        //Añadimos a Containers Card
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        productCard.appendChild(img);
        productCard.appendChild(productInfo);
        cardsContainer.appendChild(productCard);
    }
}
renderProduct(productList);





