 const menuEmail = document.querySelector('.navbar-email');
 const desktopMenu = document.querySelector('.desktop-menu');
 const menuHamIcon = document.querySelector('.menu');
 const mobileMenu = document.querySelector('.mobile-menu');
 const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
 const aside = document.querySelector('.product-detail');
 const cardsContainer = document.querySelector('.cards-container');

 menuEmail.addEventListener('click', toggleDesktopMenu);
 menuHamIcon.addEventListener('click', togglemobileMenu);
 menuCarritoIcon.addEventListener('click', toggleCarritoAside);

 function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
 }

 function togglemobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
 }

 function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
 }

 const productList = [];
 productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
 });
 productList.push({
    name: 'Monitor',
    price: 1000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
 });
 productList.push({
    name: 'Laptop',
    price: 2000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
 });

function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement('div');
        const productImg = document.createElement('img');
        const productInfo = document.createElement('div');
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        const productName = document.createElement('p');
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
    
        productCard.classList.add('product-card');
        productInfo.classList.add('product-info');
        productImg.setAttribute('src', product.image);
        productPrice.innerText = `$ ${product.price}`;
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
    
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

 
 