const menuEmail = document.querySelector('.navbar-email');   
const desktopMenu = document.querySelector('.desktop-menu');
const menucarroIcon = document.querySelector('.navbar-shopping-cart');
const burguerMenu = document.querySelector('.menu');   
const mobileMenu = document.querySelector('.mobile-menu');   
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');



menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menucarroIcon.addEventListener('click', toggleCarritoAside);


function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

    if  (!isAsideClosed){
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
    console.log('click')
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    if  (!isAsideClosed){
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
    console.log('click')
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if  (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }  

    aside.classList.toggle('inactive');
}


const productList = [];
productList.push({
    name: 'BMW',
    price: 120,
    image: 'https://www.autonocion.com/wp-content/uploads/2022/10/bmw-moto-m.jpg'
})

productList.push ({
    name:'Ducati',
    price: 2200,
    image: 'https://img.remediosdigitales.com/14dd1c/ducati-panigale-v4-sp2-2022-007/1366_2000.jpeg'
});
productList.push ({
    name:'ZX10R',
    price: 3600,
    image: 'https://pbs.twimg.com/media/FQn7AMGXMAAnMSz.jpg'
});


function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
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

    




