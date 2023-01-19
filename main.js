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
    name: 'Lulu la mas fea',
    price: 120,
    imagen: './fotosPeludos/foto1.jpeg',
})

productList.push({
    name: 'pipu y la tropa',
    price: 120,
    imagen: './fotosPeludos/foto2.jpeg',
})

productList.push({
    name: 'pelusa es mas linda',
    price: 120,
    imagen: './fotosPeludos/foto3.jpeg',
})

productList.push({
    name: 'lulu',
    price: 120,
    imagen: './fotosPeludos/foto4.jpeg',
})

productList.push({
    name: 'pelusa',
    price: 120,
    imagen: './fotosPeludos/foto5.jpeg',
})

productList.push({
    name: 'pelusa 2',
    price: 120,
    imagen: './fotosPeludos/foto6.jpeg',
})

productList.push({
    name: 'pelusa cono de la verguenza',
    price: 120,
    imagen: './fotosPeludos/foto7.jpeg',
})

productList.push({
    name: 'familia',
    price: 120,
    imagen: './fotosPeludos/foto8.jpeg',
})

productList.push({
    name: 'sueño',
    price: 120,
    imagen: './fotosPeludos/foto9.jpeg',
})

productList.push({
    name: 'lucas',
    price: 120,
    imagen: './fotosPeludos/foto10.jpeg',
})

productList.push({
    name: 'pelusa',
    price: 120,
    imagen: './fotosPeludos/foto11.jpeg',
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


