 const menuEmail = document.querySelector('.navbar-email');
 const desktopMenu = document.querySelector('.desktop-menu ')
 const mobileMenu = document.querySelector('.mobile-menu');
 const menuHamIcon = document.querySelector('.menu');
 const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
 const aside = document.querySelector('.product-detail');
 const cardsContainer = document.querySelector('.cards-container');


 menuEmail.addEventListener('click', toggleDesktopMenu);
 menuHamIcon.addEventListener('click', toggleMobileMenu);
 menuCarritoIcon.addEventListener('click', toggleCarritoAside);

 function toggleDesktopMenu () {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed){
        aside.classList.add('inactive');
    }

     desktopMenu.classList.toggle('inactive');
 }

 function toggleMobileMenu () {
     const isAsideClosed = aside.classList.contains('inactive');

     if (!isAsideClosed){
         aside.classList.add('inactive');
     }

     mobileMenu.classList.toggle('inactive');
 }

 function toggleCarritoAside () {
     const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
     if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
     }
     aside.classList.toggle('inactive');
 }

 const productList = [];
 productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
 });

 productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
 });

 productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
 });

 productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
 });


 function renderProducts (arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        //product = {name, price, image} => product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const ProductInfoDiv = document.createElement('div');
    
        const ProductPrice = document.createElement('p');
        ProductPrice.innerText = '$' + product.price;
        const ProductName = document.createElement('p');
        ProductName.innerText = '$' + product.name;
    
        ProductInfoDiv.appendChild(ProductPrice);
        ProductInfoDiv.appendChild(ProductName);
    
    
        
        const ProductInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
        ProductInfoFigure.appendChild(productImgCard);
    
        
        productInfo.appendChild(ProductInfoDiv);
        productInfo.appendChild(ProductInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
     }
 }

renderProducts(productList);