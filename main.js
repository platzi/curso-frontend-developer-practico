const $ = (selector) => document.querySelector(selector);

const menuEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu');
const menuHamIcon = $('.menu');
const mobilemenu=$('.mobile-menu');
const menuCarritoIcon=$('.navbar-shopping-cart')
const shoppingCartContainer =$('#shoppingCartContainer');
const cardsContainer = $('.cards-container')
const productDetailContainder =$('#productDetail');
const productDetailCloseIcon=$('.product-detail-close')


menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu(){
    const asideProductDetailsClose=shoppingCartContainer.classList.contains('inactive')

    if(!asideProductDetailsClose){
        shoppingCartContainer.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')
} 

function toggleMobileMenu(){
    const asideProductDetailsClose=shoppingCartContainer.classList.contains('inactive')

    if(!asideProductDetailsClose){
        shoppingCartContainer.classList.add('inactive')
    } 

    closeProductDetailAside()
    
    mobilemenu.classList.toggle('inactive')
} 

function toggleCarritoAside(){
    const isMobileMenuClose=mobilemenu.classList.contains('inactive')

    if(!isMobileMenuClose){
        mobilemenu.classList.add('inactive')
    } 

    const isProductDetailClose=productDetailContainder.classList.contains('inactive')

    if(!isProductDetailClose){
        productDetailContainder.classList.add('inactive')
    } 

    shoppingCartContainer.classList.toggle('inactive')
} 
 function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive')

    productDetailContainder.classList.remove('inactive')
 }

 function closeProductDetailAside(){
    productDetailContainder.classList.add('inactive')
 }

// List of products
const productList = [];
productList.push({
    name:"Bike",
    precio: 120,
    imagen:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push({
    name:"Pantalla",
    precio: 145,
    imagen:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push({
    name:"Laptop",
    precio: 1200,
    imagen:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

function renderProduct(arr){
    for (product of arr) {
        const productCard=document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.imagen);
        productImg.addEventListener('click', openProductDetailAside)

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info'); 

        const productInfoDiv = document.createElement('div');

        const productPrice =document.createElement('p');
        productPrice.innerText='$'+product.precio;

        const productName=document.createElement('p');
        productName.innerText=product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCart=document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);

    }
}

renderProduct(productList)
