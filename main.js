

const navEmail = document.querySelector(`.navbar-email`);
const desktopMenu = document.querySelector(`.desktop-menu`);
const navHamIcon = document.querySelector(`.ham-menu-icon`);
const mobileNav =  document.querySelector(`.mobile-menu`);
const navCarShop = document.querySelector(`.navbar-shopping-cart`);
const shoppingDetailCloseIcon = document.querySelector(`.product-detail-close`);

const shoppingCartContainer = document.querySelector(`#shoppingCartContainer`);
const productDetailContainer = document.querySelector(`#productDetail`);
const cardContainer = document.querySelector(`.cards-container`);



navEmail.addEventListener(`click`, toggleDesktopMenu);
navHamIcon.addEventListener(`click`, toggleMobileMenu);
navCarShop.addEventListener(`click`, toggleProductDetail);
shoppingDetailCloseIcon.addEventListener(`click`, closeProductDetailAside);

function toggleDesktopMenu() {
    const isProductDetailClosed = shoppingCartContainer.classList.contains(`inactive`);
    if(!isProductDetailClosed) {
        shoppingCartContainer.classList.add(`inactive`);
        
    }
    

    desktopMenu.classList.toggle(`inactive`);
    
}

function toggleMobileMenu() {
    const isProductDetailClosed = shoppingCartContainer.classList.contains(`inactive`);


    if(!isProductDetailClosed){
        shoppingCartContainer.classList.add(`inactive`);
    }

    const isProductDetailAsideClosed = productDetailContainer.classList.contains(`inactive`);


    if(!isProductDetailAsideClosed){
        productDetailContainer.classList.add(`inactive`);
    }
    mobileNav.classList.toggle(`inactive`);
}

function toggleProductDetail() {

    const isMobileNavClosed = mobileNav.classList.contains(`inactive`);

    if(!isMobileNavClosed){
        mobileNav.classList.add(`inactive`);
    }
    
    const isProductDetailAsideClosed = productDetailContainer.classList.contains(`inactive`);

    if(!isProductDetailAsideClosed){
        productDetailContainer.classList.add(`inactive`);
    }

    shoppingCartContainer.classList.toggle(`inactive`);

}
 
function openProductDetailAside(){
    mobileNav.classList.add(`inactive`);
    shoppingCartContainer.classList.add(`inactive`);
    productDetailContainer.classList.remove(`inactive`);
}

function closeProductDetailAside(){
    productDetailContainer.classList.add(`inactive`);
}

//gracias a la manipulacion del DOM
//Lista de productos: HTML a partir de arrays
const productList = [];

productList.push({
    name: `Bike`,
    price: 120,
    image: `https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
});
productList.push({
    name: `pantalla`,
    price: 300,
    image: `https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
});
productList.push({
    name: `mobile`,
    price: 200,
    image: `https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
});

productList.push({
    name: `Bike`,
    price: 120,
    image: `https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
});
productList.push({
    name: `pantalla`,
    price: 300,
    image: `https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
});
productList.push({
    name: `mobile`,
    price: 200,
    image: `https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
});
productList.push({
    name: `Bike`,
    price: 120,
    image: `https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
});
productList.push({
    name: `pantalla`,
    price: 300,
    image: `https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
});
productList.push({
    name: `mobile`,
    price: 200,
    image: `https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`,
});




function renderProducts(arr){
    for (product of arr) {
        const productCard = document.createElement(`div`);
        productCard.classList.add(`product-card`);
    
       
    
    
        const img = document.createElement(`img`);
        img.setAttribute(`src`, product.image)
        //product = {name, price, image} ->product.image
        img.addEventListener(`click`, openProductDetailAside);
    
        const productInfo = document.createElement(`div`);
        productInfo.classList.add(`product-info`);
    
        
    
        const productInfoChild = document.createElement(`div`);
        const productPrice = document.createElement(`p`);
        productPrice.innerText = "Precio: " + product.price;
        const productName = document.createElement(`p`);
        productName.innerText = "Producto: " + product.name;
    
        productInfoChild.appendChild(productPrice);
        productInfoChild.appendChild(productName);
    
        const productInfoFigure = document.createElement(`figure`);
        const productImgCard = document.createElement(`img`);
    
        productImgCard.setAttribute(`src`, `./icons/bt_add_to_cart.svg`);
        
        productInfo.appendChild(productInfoChild);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(img);
        productCard.appendChild(productInfo);
    
        productInfoFigure.appendChild(productImgCard);
    
    
        cardContainer.appendChild(productCard);
    }
}

renderProducts(productList);

