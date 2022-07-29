const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const mobileMenu = document.querySelector(".mobile-menu");
const menuHamIcon = document.querySelector(".menu");

const productDetailContainer = document.querySelector("#productDetail");
const productDetailCloseIcon = document.querySelector(".product-detail-close");

const carritoIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");

navbarEmail.addEventListener("click", showDesktopMenu);    
menuHamIcon.addEventListener("click", showMobileMenu);
carritoIcon.addEventListener("click", showMyOrder);
productDetailCloseIcon.addEventListener("click", productDetailClose);



function showDesktopMenu(){   
  productDetailContainer.classList.add("inactive");
  shoppingCartContainer.classList.add("inactive");
  desktopMenu.classList.toggle("inactive"); 

}

function showMobileMenu(){ 
  productDetailContainer.classList.add("inactive");
  shoppingCartContainer.classList.add("inactive");
  mobileMenu.classList.toggle("inactive"); 

}

function showMyOrder(){ 
  productDetailContainer.classList.add("inactive");
  mobileMenu.classList.add("inactive"); 
  shoppingCartContainer.classList.toggle("inactive"); 
}

function openProductDetailAside(){
  desktopMenu.classList.add("inactive"); 
  mobileMenu.classList.add("inactive"); 
  shoppingCartContainer.classList.add("inactive"); 
  productDetailContainer.classList.remove("inactive");


}
function productDetailClose(){
  productDetailContainer.classList.add("inactive");
 }



const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Pantalla 24"',
  price: 330,
  image: 'https://us.123rf.com/450wm/imagemir/imagemir1712/imagemir171200014/92059853-moderno-monitor-de-ordenador-de-pantalla-plana-estilo-imac-pantalla-de-ordenador-aislada-en-el-fondo.jpg?ver=6',
});
productList.push({
  name: 'Parlante BOSE',
  price: 610,
  image: 'https://www.ktronix.com/medias/017817771528-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wyMDYyMDh8aW1hZ2UvanBlZ3xpbWFnZXMvaGM5L2hkMS8xMTY0OTEyMzc3ODU5MC5qcGd8MzBlYmQ1Zjg1NDU4YWRmNDcxNTY0YmJjYjFmMWU2NDFmYWQ1OTc0NGY4ZDc2ZGI5NmZiY2IzNWNlMDlmMzA4MQ',
});


function renderProduct(arr) {
for(product of arr){

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener("click", openProductDetailAside);
  
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
  
    productInfo.append(productInfoDiv,productInfoFigure);
  
    productCard.append(productImg,productInfo);
    
    
    
    cardsContainer.appendChild(productCard);
  }
}
  renderProduct(productList);




