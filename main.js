const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail")
const carsContainer =document.querySelector('.cards-container');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);


function toggleDesktopMenu(){

desktopMenu.classList.toggle('inactive');
const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    }
function toggleCarritoAside(){
    const isMobileMenuClosed = !mobileMenu.classList.contains('inactive');
   
    aside.classList.toggle('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
  
       
}


const productList=[];
productList.push({
    name: 'Bike',
    price: 120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Computadora',
    price: 320,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


function renderProduct(arr){
    for(product of productList){
    const productCard=document.createElement('div');
    productCard.classList.add('product-card');

    const productImg=document.createElement('img');
    productImg.setAttribute('src',product.image);

    const productInfo=document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice=document.createElement('p');
    productPrice.innerText='$ ' + product.price;

    const productName=document.createElement('p');
    productName.innerText= product.name;

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

    carsContainer.appendChild(productCard);


}
}

renderProduct(productList);
