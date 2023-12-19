const menuEmail=document.querySelector(".navbar-email");
const desktopMenu=document.querySelector(".desktop-menu");
const menuIcon=document.querySelector(".menu");
const mobileMenu=document.querySelector(".mobile-menu");
const carritoIcon=document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon=document.querySelector(".product-detail-close");
const shoppingCartContainer=document.querySelector("#shoppingCartContainer");
const cardsContainer=document.querySelector(".cards-container");
const productDetailContainer=document.querySelector("#productDetail");

menuEmail.addEventListener('click',toggleDesktopMenu);
menuIcon.addEventListener('click',toggleMobileMenu);
carritoIcon.addEventListener('click',toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){
    const isAsideClose=shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClose){
        shoppingCartContainer.classList.add('inactive'); 
    }
    
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClose=shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClose){
        shoppingCartContainer.classList.add('inactive');     
    }
    mobileMenu.classList.toggle('inactive');
    closeProductDetailAside();
}

function toggleCarritoAside(){
    const isMobileMenuClose=mobileMenu.classList.contains('inactive');
    const isDesktopMenuClose=mobileMenu.classList.contains('inactive');
    const isProductDetailClose=productDetailContainer.classList.contains('inactive');

    if (!isMobileMenuClose){
        mobileMenu.classList.add('inactive');     
    }

    if (!isDesktopMenuClose){
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

const productList=[];
productList.push({
    name:'Bike',
    price:'120',
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name:'Pantalla',
    price:'220',
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
    name:'Computadora',
    price:'620',
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

function renderProducts(productos){
    for(product of productos){
        const productCar=document.createElement('div');
        productCar.classList.add('product-card');

        const productImg=document.createElement('img');
        productImg.setAttribute('src',product.image);
        productImg.addEventListener("click", openProductDetailAside);

        const productInfo=document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv=document.createElement('div');
        
        const productPrice=document.createElement('p');
        productPrice.innerText='$'+product.price;

        const productName=document.createElement('p');
        productName.innerText=product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure=document.createElement('figure');

        const productImgCart=document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart)

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCar.appendChild(productImg);
        productCar.appendChild(productInfo);

        cardsContainer.appendChild(productCar);
    }
}

renderProducts(productList);