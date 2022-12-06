const menuEmail =document.querySelector('.navbar-email');
const desktopMenu =document.querySelector('.desktop-menu');
const menuCarritoIcon =document.querySelector('.navbar-shopping-cart');
const menuHamIcon =document.querySelector('.menu');
const productDetailCloseIcon =document.querySelector('product-detail-close');
const mobileMenu =document.querySelector('.mobile-menu');
const shoppingCartContainer =document.querySelector('#shoppingCartContainer');
const productDetailContainer =document.querySelector('#productDetail');
const cardsContainer =document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', togglemobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailContainer.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive'); 
    
    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    
    mobileMenu.classList.toggle('inactive');
    desktopMenu.classList.toggle('inactive');
}

function togglemobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive'); 
    
    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside ();
    
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
  
    if (!isMobileMenuClosed){
            mobileMenu.classList.add('inactive')}


    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
      
    if (!isProductDetailClosed){
        productDetailContainer.classList.add('inactive')}

            shoppingCartContainer.classList.toggle('inactive');
    }

    function openProductDetailAside (){
        shoppingCartContainer.classList.add('inactive');
        productDetailContainer.classList.remove('inactive')
    }

    function closeProductDetailAside (){
        productDetailContainer.classList.add('inactive')

    }

    const productList = [];
    productList.push({
        name: 'bicicleta',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    });
    productList.push({
        name: 'Pantalla',
        price: 220,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    });
    productList.push({
        name: 'Computador',
        price: 620,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    });


    for (product of productList){
       const productCard =document.createElement('div');
       productCard.classList.add('product-card');
       const productImg = document.createElement('img');
       productImg.setAttribute('src', product.image);
       productImg.addEventListener('click', openProductDetailAside)


       const productInfo = document.createElement('div');
       productInfo.classList.add('product-info');

       const productInfoDiv =document.createElement('div');
       const productprice = document.createElement('p');
        productprice.innerText = '$' + product.price;
       const productname = document.createElement('p');
       productname.innerText = product.name;

       productInfoDiv.appendChild(productprice);
       productInfoDiv.appendChild(productname);

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