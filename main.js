const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerIconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

const shoppingCardContainer = document.querySelector('#shoppingCardContainer');
const productDetailContainer = document.querySelector('#productDetail')
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerIconMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){
    const isAsideClosed = shoppingCardContainer.classList.contains('inactive');
    if(!isAsideClosed){
        shoppingCardContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = shoppingCardContainer.classList.contains('inactive');
    if(!isAsideClosed){
        shoppingCardContainer.classList.add('inactive');
    }
    closeProductDetailAside();
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }
    shoppingCardContainer.classList.toggle('inactive');
    desktopMenu.classList.add('inactive')
}

function openProductDetailAside(){
    desktopMenu.classList.add('inactive')
    shoppingCardContainer.classList.add('inactive');
    mobileMenu.classList.add('inactive')
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
    desktopMenu.classList.add('inactive')
}


const productList = [];
productList.push({
    name: 'Bike',
    price: 200,
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    })
    productList.push({
    name: 'Gorra',
    price: 12,
    image: "https://images.unsplash.com/photo-1560774358-d727658f457c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    })
    productList.push({
    name: 'Mouse',
    price: 5,
    image: "https://images.unsplash.com/photo-1605773527852-c546a8584ea3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    })
    productList.push({
    name: 'Billetera',
    price: 17,
    image: "https://plus.unsplash.com/premium_photo-1677109899648-7a3bd1e495d8?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    })
    productList.push({
    name: 'Camiseta Mujer',
    price: 25,
    image: "https://images.unsplash.com/photo-1618677603544-51162346e165?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    })
    productList.push({
    name: 'Cartera Rosa',
    price: 40,
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
});
productList.push({
    name: 'Motorbike Cross',
    price: 40000,
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
});
productList.push({
    name: 'Automóvil Juguete',
    price: 4,
    image: "https://images.unsplash.com/photo-1456082902841-3335005c3082?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
});
productList.push({
    name: 'Parlantes',
    price: 230,
    image: "https://plus.unsplash.com/premium_photo-1683141496040-eeef9702269f?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
});
productList.push({
    name: 'Pato Goma Batman',
    price: 35,
    image: "https://images.unsplash.com/photo-1559715541-5daf8a0296d0?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
});
productList.push({
    name: 'Pelota Vintage',
    price: 15,
    image: "https://images.unsplash.com/photo-1554591203-3c8b71297add?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
});
productList.push({
    name: 'Patines para Hielo',
    price: 50,
    image: "https://images.unsplash.com/photo-1638720495078-facd4bd6625f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
});
productList.push({
    name: 'Notebook',
    price: 1520,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
});
productList.push({
    name: 'Telefóno Móvil',
    price: 700,
    image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
});
productList.push({
    name: 'Mono Peluche',
    price: 7,
    image: "https://images.unsplash.com/photo-1517686748843-bb360cfc62b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
});

function renderProducts(arr){
    // para recorrer array
for (product of arr){
    const productCard= document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside);

    const productInfo= document.createElement('div');
    productInfo.classList.add('product-info');


    const productInfoDiv = document.createElement('div');
    
    const productPrice = document.createElement('p');
    productPrice.innerText = '€' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
    
    const productInfoFigure = document.createElement ('figure');
    const productImgCard = document.createElement('img');
    productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCard);
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}};

renderProducts(productList);


