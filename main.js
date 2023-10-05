const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuMobileLogo = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const asideCarrito = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailClose = document.querySelector('.product-detail-close');
const cardsContainer = document.querySelector('.cards-container');
const productDetailImg = document.querySelector('#img_product');
const productDetailPrice = document.querySelector('#product_price');
const productDetailName = document.querySelector('#product_name');
const productDetailDescription = document.querySelector('#product_descript');
const filterDarker = document.querySelector('.darken');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuMobileLogo.addEventListener('click', toggleMobilepMenu);
menuCarrito.addEventListener('click', toggleAsideCarrito);

productDetailClose.addEventListener('click',closeProductDetailAside)


function toggleDesktopMenu(){
    const isAsideCarritoClosed = asideCarrito.classList.contains('inactive');

    if (!isAsideCarritoClosed) {
        asideCarrito.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');
    filterDarker.classList.add('inactive');
}

function toggleMobilepMenu(){
    const isAsideCarritoClosed = asideCarrito.classList.contains('inactive');

    if (!isAsideCarritoClosed) {
        asideCarrito.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive');
    filterDarker.classList.add('inactive');
    closeProductDetailAside(); // Para que me cierre el detalle cuando abro el MenuMobile
}

function toggleAsideCarrito(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive'); // Devuelve True si esta cerrado o False si esta abierto
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailContainerClosed = productDetailContainer.classList.contains('inactive');

    // Evalua si el mobileMenu esta abierto, al llegar en False, se cambia a True para que entre al condicional
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
    if (!isProductDetailContainerClosed) {
        productDetailContainer.classList.add('inactive');
    }

    asideCarrito.classList.toggle('inactive');
    filterDarker.classList.add('inactive');

}

function openProductDetailAside(index){
    const productDetail = productList[index];
 /*
    const isAsideCarritoClosed = asideCarrito.classList.contains('inactive');
    
    if (!isAsideCarritoClosed) {
        asideCarrito.classList.add('inactive');
    }
 */
    asideCarrito.classList.add('inactive'); // Resumen del codigo de arriba, siempre cerrare el carrito cuando se abra el detail
    productDetailContainer.classList.remove('inactive');
    productDetailImg.setAttribute('src', productDetail.image);
    productDetailPrice.innerText = '$' + productDetail.price;
    productDetailName.innerText = productDetail.name;
    productDetailDescription.innerText = productDetail.descript;
    filterDarker.classList.remove('inactive');
}

function closeProductDetailAside(){
    asideCarrito.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    filterDarker.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    descript: 'Descripcion de la Bike'
});
productList.push({
    name: 'PC Gammer',
    price: '500',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    descript: 'Descripcion de la PC Gammer'
});
productList.push({
    name: 'iPhone 15 Pro Max',
    price: '1199',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    descript: 'Descripcion del iPhone 15 Pro Max'
});

// Atajo para recorrer toda la lista
// Aqui se ingresan los productos desde el JS, es decir se esta ***CONSTRUYENDO*** el HTML
// Revisar HTML comentado en el index.html clase product-card
function renderProducts (arr){
    for (let i= 0; i < arr.length; i++) {
        const product = arr[i];
        const productCar = document.createElement('div');
        productCar.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image); // Agrego al src el link que se encuentra dentro del elemento producto en Image
        //productImg.addEventListener('click', openProductDetailAside)
        productImg.addEventListener("click",() => openProductDetailAside(i));
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const producInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        producInfoDiv.appendChild(productPrice); // Agrega dentro del div, el elemento p llamado productPrice
        producInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(producInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCar.appendChild(productImg);
        productCar.appendChild(productInfo);
    
        cardsContainer.appendChild(productCar);
    
    }
}

renderProducts(productList);