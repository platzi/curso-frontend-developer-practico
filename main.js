const menuEmail = document.querySelector('.navbar-email'); //para cuando se le de click
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');   // para cuando se le de click
const mobileMenu = document.querySelector('.mobile-menu'); //para que aparezca y no
const menuCarIcon = document.querySelector('.navbar-shopping-cart'); //para que aparezca y no
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside)
function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');

    closeProductDetailAside();
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside(){
    // const isShoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

    // if(!isShoppingCartContainerClosed){
    //     shoppingCartContainer.classList.add('inactive');
    // }  podriamos hacer esto o ...
    // lo de abajo ya que sabemos que queremos abrir si fueran toogle es abrir y cerrar y si tocaria el condicional pero como no es asi se puede agregar el inactive d euna vez

    shoppingCartContainer.classList.add('inactive');

    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

 


closeProductDetailAside

const productList = []; 
productList.push({
    name : "Bike",
    price : 120,
    image : "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name : "Pantalla",
    price : 220,
    image : "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});-
productList.push({
    name : "Computador",
    price : 620,
    image : "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
}); 

function renderProducts(arr){
    for(product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src',product.image);
        img.addEventListener('click',openProductDetailAside)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure');
    
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src',"./icons/bt_add_to_cart.svg");
    
    
        productInfoFigure.appendChild(productImgCart);
        productInfoDiv.append(productPrice,productName);
        productInfo.append(productInfoDiv,productInfoFigure);
        productCard.append(img,productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}
 
renderProducts(productList);


