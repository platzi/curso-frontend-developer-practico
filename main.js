const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('.product-detail2');
const productDetailCloseIcon =document.querySelector('.product-detail-close');



menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarIcon.addEventListener("click", toggleCarAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

//menuEmail
function toggleDesktopMenu() {
  aside.classList.add("inactive");

  desktopMenu.classList.toggle("inactive");
  productDetailContainer.classList.add('inactive')
}

//menu of the hambuger
function toggleMobileMenu() {
  // const isAsideClosed = aside.classList.contains('inactive');

  // if(!isAsideClosed)    {
  //     aside.classList.add('inactive');
  // }

  aside.classList.add("inactive");

  mobileMenu.classList.toggle("inactive");
}
//Shopping car
function toggleCarAside() {
  // const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

  // if(!isMobileMenuClosed){
  //     mobileMenu.classList.add('inactive');
  // }
  desktopMenu.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  productDetailContainer.classList.add('inactive')

  aside.classList.toggle("inactive");
}

function openProductDetailAside () {
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside (){
    productDetailContainer.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    aside.classList.add('inactive');
}
// Adding products using js and creating html with it
const productList = [];
productList.push({
    name: 'Orange cake',
    price: 60000 ,
    image: 'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Blueberry Cake',
    price:70000,
    image:'https://images.pexels.com/photos/1291712/pexels-photo-1291712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',  
});
productList.push({
    name: 'Strawberry Cake',
    price:60000,
    image:'https://images.pexels.com/photos/461431/pexels-photo-461431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',  
});
productList.push({
    name: 'Lemon Cake',
    price:55000,
    image:'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',  
});
productList.push({
    name: 'Cheese cake',
    price:120000,
    image:'https://images.pexels.com/photos/1200666/pexels-photo-1200666.jpeg?auto=compress&cs=tinysrgb&w=600',  
});
productList.push({
    name: 'Chocolate cake',
    price:90000,
    image:'https://images.pexels.com/photos/2144200/pexels-photo-2144200.jpeg?auto=compress&cs=tinysrgb&w=600',  
});
productList.push({
    name: 'Caramel cake',
    price:100000,
    image:'https://images.pexels.com/photos/2680603/pexels-photo-2680603.jpeg?auto=compress&cs=tinysrgb&w=600',  
});
productList.push({
    name: 'Tangerine cake',
    price:85000,
    image:'https://images.pexels.com/photos/264939/pexels-photo-264939.jpeg?auto=compress&cs=tinysrgb&w=600',  
});
productList.push({
    name: 'Vanilla cake',
    price:120000,
    image:'https://images.pexels.com/photos/1829423/pexels-photo-1829423.jpeg?auto=compress&cs=tinysrgb&w=600',  
});
productList.push({
    name: 'Honey cake',
    price:130000,
    image:'https://images.pexels.com/photos/2684556/pexels-photo-2684556.jpeg?auto=compress&cs=tinysrgb&w=600',  
});


//function that renders the html code to create cakes 
function renderProducts (arr){
    
    for (product of arr){
    
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        // product= {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click',openProductDetailAside)
        
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        
        const productInfoDiv = document.createElement('div');
        
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
        
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
    
        const productInfoFigure = document.createElement ('figure');
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