const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector( '.desktop-menu');
const menuHamIcon = document.querySelector( '.menu');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector( '.mobile-menu');
const menuShoppingCartIcon = document.querySelector( '.navbar-shopping-cart');
const shoppingCardContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuShoppingCartIcon.addEventListener('click', toggleShoppingCartAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){
    const isAsideShoppingCartClose = shoppingCardContainer.classList.contains('inactive');

    console.log('click email');

    if(!isAsideShoppingCartClose){
        //si el asideShoppingCart esta open, hay que cerrarlo
        shoppingCardContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideShoppingCartClose = shoppingCardContainer.classList.contains('inactive');
    
    console.log('click menu Ham icon');
    
    if(!isAsideShoppingCartClose){
        //si el asideShoppingCart esta open, hay que cerrarlo
        shoppingCardContainer.classList.add('inactive');
    }
    
    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCartAside(){
    /* const isMobileMenuOpen = !mobileMenu.classList.contains('inactive'); */
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isMenuDesktopClose = desktopMenu.classList.contains('inactive');
    
    console.log('click shopping cart icon');
    
    
    if(!isMobileMenuClose){
        //si el mobileMenu esta open, hay que cerrarlo
        mobileMenu.classList.add('inactive')
    }
    if(!isMenuDesktopClose){
        //si el menu Desktop esta open, hay que cerrarlo
        desktopMenu.classList.add('inactive')
    }
    
    const isProductDetailClose = productDetailContainer.classList.contains('inactive');
    if(!isProductDetailClose){
        //si el menu Desktop esta open, hay que cerrarlo
        productDetailContainer.classList.add('inactive')
    }

    shoppingCardContainer.classList.toggle('inactive');
}

function openProductDetailAside(){
    shoppingCardContainer.classList.add('inactive');
        
    productDetailContainer.classList.remove('inactive');

}

function closeProductDetailAside(){
    console.log('close product detail');
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name:'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name:'Pantalla',
    price: 520,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name:'Laptop',
    price: 1120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

//el ciclo es en cada objet
//for (product in productList) el ciclo es en el indice 0,1,2 

function renderProducts(arrayProducts){
    for (product of arrayProducts){
        const productCard = document.createElement('div');
        productCard.classList.add( 'product-card');
        
        //product = {name, price, image}
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener( 'click', openProductDetailAside)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add( 'product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$ ' + product.price;
        
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
    
        const productInfoFigure = document.createElement('figure');
    
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        
        cardsContainer.appendChild(productCard);
    }

}

renderProducts(productList);