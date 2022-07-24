const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.burguer-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const cardsContainer= document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#product-detail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    } 
    desktopMenu.classList.toggle('inactive');
    closeProductDetailAside();
}

function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    } 
    mobileMenu.classList.toggle('inactive');
    closeProductDetailAside();
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
}  

function openProductDetailAside(){
    shoppingCartContainer.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}



const productList = [];
productList.push({
    name: 'Bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla',
    price: '500',
    image: 'https://media.istockphoto.com/photos/modern-curved-4k-ultrahd-tv-picture-id638043774?k=20&m=638043774&s=612x612&w=0&h=B51ZGI1WsMG1bYmjATM8pCU31gTZGj4MvnIJ45qqsr8=',
});
productList.push({
    name: 'Computador',
    price: '1500',
    image: 'https://www.destreaming.es/wp-content/uploads/2020/11/pc_para_streaming_gaming.jpg',
});
productList.push({
    name: 'Computador',
    price: '1500',
    image: 'https://www.destreaming.es/wp-content/uploads/2020/11/pc_para_streaming_gaming.jpg',
});
productList.push({
    name: 'Computador',
    price: '1500',
    image: 'https://www.destreaming.es/wp-content/uploads/2020/11/pc_para_streaming_gaming.jpg',
});

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
        img.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productInfoPrice = document.createElement('p');
        productInfoPrice.innerText = `$ ${product.price}.00`
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productInfoPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productCartImg = document.createElement('img');
        productCartImg.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productCartImg);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(img);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}
renderProducts(productList);