const menuEmail     = document.querySelector('.navbar-email');
const desktopMenu   = document.querySelector('.desktop-menu');

const imgMenu       = document.querySelector('.menu');
const mobileMenu    = document.querySelector('.mobile-menu');

const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const carritoMenu = document.querySelector('.navbar-shopping-cart');

const cardsContainer = document.querySelector('.cards-container');

const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', toggleDesktopMenu);
imgMenu.addEventListener('click', toggleImgMenu );
carritoMenu.addEventListener('click', showCarritoMenu);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)


function toggleDesktopMenu(){

    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive')
    }

    const isProductDetailClose = productDetailContainer.classList.contains('inactive');

    if(!isProductDetailClose){
            productDetailContainer.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
};

function toggleImgMenu(){

    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive')
    }

    const isProductDetailClose = productDetailContainer.classList.contains('inactive');

    if(!isProductDetailClose){
            productDetailContainer.classList.add('inactive');
    }
    
    
    mobileMenu.classList.toggle('inactive');
};

function showCarritoMenu(){

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
            mobileMenu.classList.add('inactive');
    }

    const isProductDetailClose = productDetailContainer.classList.contains('inactive');

    if(!isProductDetailClose){
            productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside(){
    productDetailContainer.classList.remove('inactive')
    
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive')
}
const productList = [];

productList.push({
    name: 'Valeria y su familia',
    price: 120,
    imagen: './fotosValeria/foto1.jpeg',
})

productList.push({
    name: 'Valeria no me deja salir',
    price: 120,
    imagen: './fotosValeria/foto2.jpeg',
})

productList.push({
    name: 'Valeria y florez',
    price: 120,
    imagen: './fotosValeria/foto3.jpeg',
})

productList.push({
    name: 'valeria y yop',
    price: 120,
    imagen: './fotosValeria/foto4.jpeg',
})

productList.push({
    name: 'valeria dormida',
    price: 120,
    imagen: './fotosValeria/foto5.jpeg',
})

productList.push({
    name: 'valeria top model',
    price: 120,
    imagen: './fotosValeria/foto6.jpeg',
})

productList.push({
    name: 'valeria ojos de reyna',
    price: 120,
    imagen: './fotosValeria/foto7.jpeg',
})

productList.push({
    name: 'valeria fit',
    price: 120,
    imagen: './fotosValeria/foto8.jpeg',
})

productList.push({
    name: 'valeria congo',
    price: 120,
    imagen: './fotosValeria/foto9.jpeg',
})

productList.push({
    name: 'valeria esteril',
    price: 120,
    imagen: './fotosValeria/foto10.jpeg',
})

productList.push({
    name: 'valeria looser',
    price: 120,
    imagen: './fotosValeria/foto11.jpeg',
})




function renderProducts(arr) {
    for (product of arr ){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.imagen);
        productImg.addEventListener('click', openProductDetailAside);
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerHTML='$' + product.price;
        
        const productName= document.createElement('p');
        productName.innerHTML = product.name;
        
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        
        const productInfoFig = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');    

        productInfoFig.appendChild(productImgCard);
        
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFig);
        
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);


