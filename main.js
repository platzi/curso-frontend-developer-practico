//  Menú que sale al darle click al correo (está a la derecha)
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
//  Menú que sale al darle click al menú hamburguesa de la izquierda
const hamburgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
//  Menú que sale al darle click al carrito de compras
const shoppingCarMenu = document.querySelector('.navbar-shopping-cart');
const shoppingCarPreview = document.querySelector('.product-detail');
// Menú que sale al darle click a la imagen del producto
const productDetailPreviewElement = document.querySelector('.product-detail-preview')
const ProductDetailPreviewCloseIcon = document.querySelector('.product-detail-preview-close')
menuEmail.addEventListener('click',toggleDesktopMenu);
hamburgerMenu.addEventListener('click', toggleMobileMenu);
shoppingCarMenu.addEventListener('click', toggleShoppingCarMenu);
ProductDetailPreviewCloseIcon.addEventListener('click', closeProductDetailPreview)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    shoppingCarPreview.classList.add('inactive');
    productDetailPreviewElement.classList.add('inactive')
    // let isShoppingCarPreviewOpen = !shoppingCarPreview.classList.contains('inactive') ;
    // if (isShoppingCarPreviewOpen){
    //     shoppingCarPreview.classList.toggle('inactive');
    // }
}


function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    shoppingCarPreview.classList.add('inactive');
    productDetailPreviewElement.classList.add('inactive')

    // let isShoppingCarPreviewOpen = !shoppingCarPreview.classList.contains('inactive');
    // if (isShoppingCarPreviewOpen){
    //     shoppingCarPreview.classList.toggle('inactive');
    // }
}


function toggleShoppingCarMenu() {
    shoppingCarPreview.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetailPreviewElement.classList.add('inactive')
    
    // let isDesktopMenuOpen = !desktopMenu.classList.contains('inactive') ;
    // let isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    // if (isDesktopMenuOpen) {
    //     desktopMenu.classList.toggle('inactive');
    // }
    // if (isMobileMenuOpen) {
    // mobileMenu.classList.toggle('inactive');
    // }

}
function openProductDetailPreview() {
    productDetailPreviewElement.classList.remove('inactive')
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    shoppingCarPreview.classList.add('inactive');
}
function closeProductDetailPreview() {
    productDetailPreviewElement.classList.add('inactive')
}
const productList = [];

productList.push({
    name:'Bike',
    price:12000,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name:'TV',
    price:750,
    image:'https://images.pexels.com/photos/5721910/pexels-photo-5721910.jpeg?cs=srgb&dl=pexels-anete-lusina-5721910.jpg&fm=jpg'
});
productList.push({
    name:'Laptop',
    price:25000,
    image:'https://images.pexels.com/photos/18105/pexels-photo.jpg?cs=srgb&dl=pexels-karsten-madsen-18105.jpg&fm=jpg'
});
productList.push({
    name:'Bike',
    price:12000,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name:'TV',
    price:750,
    image:'https://images.pexels.com/photos/5721910/pexels-photo-5721910.jpeg?cs=srgb&dl=pexels-anete-lusina-5721910.jpg&fm=jpg'
});
productList.push({
    name:'Laptop',
    price:25000,
    image:'https://images.pexels.com/photos/18105/pexels-photo.jpg?cs=srgb&dl=pexels-karsten-madsen-18105.jpg&fm=jpg'
});

function gridOfProducts(arr) {
// Agrega los productos en la grid de productos
const mainContainer = document.querySelector('.cards-container');

arr.forEach((product) =>{

const productCard = document.createElement('div');
productCard.classList.add('product-card');

const productCardImage = document.createElement('img');
// productCardImage.src = product.image;
productCardImage.setAttribute('src',product.image);
productCardImage.addEventListener('click',openProductDetailPreview);

const divProductInfo = document.createElement('div');
divProductInfo.classList.add('product-info');

mainContainer.append(productCard);
productCard.append(productCardImage,divProductInfo);

const divInsideDivProductInfo = document.createElement('div');
const figureInsideDivProductInfo = document.createElement('figure');

divProductInfo.append(divInsideDivProductInfo,figureInsideDivProductInfo);


const  priceTag = document.createElement('p');
priceTag.innerText = "$" + product.price;
const  productName = document.createElement('p');
productName.innerText = product.name;
divInsideDivProductInfo.append(priceTag, productName);

const iconProduct = document.createElement('img');
iconProduct.src = './icons/bt_add_to_cart.svg';

figureInsideDivProductInfo.append(iconProduct);

}
);
}


gridOfProducts(productList);