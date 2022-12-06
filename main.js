const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const producDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);



function toggleDesktopMenu (){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')

    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu (){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive')

    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();
    
    mobileMenu.classList.toggle('inactive');   

       
}

function toggleCarritoAside (){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }else if(!isDesktopMenuClosed) {
        desktopMenu.classList.toggle('inactive');
    }

    const isProductDetailClosed = producDetailContainer.classList.contains('inactive')
    if (!isProductDetailClosed){
        producDetailContainer.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');
    

}

function openProdutDetailAside(){
shoppingCartContainer.classList.add('inactive');

    producDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
    producDetailContainer.classList.add('inactive');
}


const produclist = [];
produclist.push({
    name:'spray bucal',
    price:12,
    image: './img/1.JPG',
})
produclist.push({
    name:'jabon de chocolate',
    price:12,
    image: './img/1.JPG',
})
produclist.push({
    name:'pasta dental con carbon activado',
    price:25,
    image: './img/1.JPG',
})
produclist.push({
    name:'jabon de carbon activado',
    price:12,
    image: './img/1.JPG',
})
produclist.push({
    name:'jabon de carbon activado',
    price:12,
    image: './img/1.JPG',
})

function renderProduct (arr){
    for (product of arr){

        //se crea el div con su clase
        const productcard = document.createElement('div');
        productcard.classList.add('product-card');
        //product= {name, price, image}->product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProdutDetailAside);
        
        const productinfo = document.createElement('div');
        productinfo.classList.add('product-info');
    
        const productinfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productinfoDiv.appendChild(productPrice);
        productinfoDiv.appendChild(productName);
    
        const productinfofigure = document.createElement('figure');
    
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productinfofigure.appendChild(productImgCart);
        productinfo.appendChild(productinfoDiv);
        productinfo.appendChild(productinfofigure);
        productcard.appendChild(productImg);
        productcard.appendChild(productinfo);
        cardsContainer.appendChild(productcard);
    }
}


renderProduct (produclist);
