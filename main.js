// Desktop
const mail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
// Mobile
const mobileMenu = document.querySelector(".mobile-menu");
const menuHamburger = document.querySelector(".menu");
const cartIcon = document.querySelector(".navbar-shopping-cart")
const AsidePanelDetail = document.querySelector(".product-detail")
const containerCard = document.querySelector('.cards-container')


mail.addEventListener("click", unHiddenDesktopMenu);
menuHamburger.addEventListener("click", showMenuMobile);
cartIcon.addEventListener("click", showAsidePanel);

// Desktop
function unHiddenDesktopMenu() {
  const isAsidePanelClosed = AsidePanelDetail.classList.contains('inactive'); 
  if (!isAsidePanelClosed){
    AsidePanelDetail.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}
// Mobile
function showMenuMobile() {
  const isAsidePanelClosed = AsidePanelDetail.classList.contains('inactive'); 
  if (!isAsidePanelClosed){
    AsidePanelDetail.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}
/////////////////////
function showAsidePanel(){
  // Si el Menu de mobile esta abierto lo cerramos
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive'); 
  if (!isMobileMenuClosed){
    mobileMenu.classList.add("inactive");
  }
  AsidePanelDetail.classList.toggle('inactive');
}

const productList = [];
productList.push({
  name: 'Keyboard 65% Black RGB Blue Gamer',
  price: 250,
  image: 'https://preview.redd.it/2rpowbo5jhua1.jpg?width=960&crop=smart&auto=webp&v=enabled&s=68dcf9a85e643770d7514229f0299b9a8395ff17'
});

productList.push({
  name: 'KB 65% White Letters Japanese',
  price: 1250,
  image: 'https://preview.redd.it/xe7lf2lvqhua1.jpg?width=3394&format=pjpg&auto=webp&v=enabled&s=773d2ca2cac05e64af6d31d070e55cbfae287be8'
});

productList.push({
  name: 'Keyboard 60% with White old Color',
  price: 550,
  image: 'https://preview.redd.it/hzp1o72q9fua1.jpg?width=960&crop=smart&auto=webp&v=enabled&s=437d784c478cb17ca1354f867a9f1cc79a6488ed'
});

productList.push({
  name: 'Keyboard Full-Sized White old Japanese Letters',
  price: 450,
  image: 'https://preview.redd.it/8jlqs8qgaaua1.jpg?width=960&crop=smart&auto=webp&v=enabled&s=d5688ef9e3f37e1059fbe1e23235eaad35859e18'
});

function renderProducts(array) {
  for (product of array){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const productImg = document.createElement('img');
    productImg.src = product.image
    //""MANERA DEL CURSO"" img.setAttribute('src' ,product.image);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerHTML= '$' + product.price;
    const productName = document.createElement('p');
    productName.innerHTML= product.name;
    
    
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    
  
    const productInfoFigure = document.createElement('figure');
  
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src' ,"./icons/bt_add_to_cart.svg" );
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    
  
    containerCard.appendChild(productCard);
  }
}


renderProducts(productList);
