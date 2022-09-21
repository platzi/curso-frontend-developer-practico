const menuEmail= document.querySelector('.navbar-email');
const desktopMenu= document.querySelector('.desktop-menu');
const burgerMenu= document.querySelector('.menu');
const mobileMenu= document.querySelector('.mobile-menu');
const menuCarritoIcon= document.querySelector('.navbar-shopping-cart');
const asideCarrito= document.querySelector('.shopping-information');
const cardsContainer= document.querySelector('.cards-container');
const productDetailContainer= document.querySelector('.product-detail');
const productDetailCloseIcon= document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);

function toggleDesktopMenu(){
    const isAsideClosed= !asideCarrito.classList.contains('inactive');
    if(isAsideClosed){
        asideCarrito.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed= !asideCarrito.classList.contains('inactive');
    if(isAsideClosed){
        asideCarrito.classList.add('inactive');
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');

}

function toggleCarritoAside(){
    const isMobileMenuOpen= !mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen= !desktopMenu.classList.contains('inactive');
    const isProductDetailOpen= !productDetailContainer.classList.contains('inactive');  

    if(isMobileMenuOpen){
        mobileMenu.classList.add('inactive');
    }

    if(isDesktopMenuOpen){
        desktopMenu.classList.add('inactive');
    }

    if(isProductDetailOpen){
        productDetailContainer.classList.add('inactive');
    }

    asideCarrito.classList.toggle('inactive');
}

function renderPoducts(lista){
    for (product of lista){
        const productCard= document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg= document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo= document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv= document.createElement('div');
    
        const productPrice= document.createElement('p');
        productPrice.innerText= '$' + product.price;
    
        const productName= document.createElement('p');
        productName.innerText= product.name;
    
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure= document.createElement('figure');
        const productImgCart= document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_added_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(productImg, productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

function openProductDetailAside(){
    asideCarrito.classList.add('inactive');

    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

const productList= [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Table',
    price: 80,
    image: 'https://assets.tramontina.com.br/upload/tramon/imagens/BEL/10835076ANM001G.png'
});
productList.push({
    name: 'Hat',
    price: 17,
    image: 'https://img.freepik.com/fotos-premium/sombrero-panama-verde-aislado-sobre-fondo-blanco_379858-12762.jpg?w=826'
});

renderPoducts(productList);


