let menuEmail = document.querySelector('.navbar-email');
let desktop = document.querySelector('.desktop-menu');
let menuMobile = document.querySelector('.mobile-menu');
let logo = document.querySelector('.menu');
let carritoCompras = document.querySelector('.shopping-card');
let shoppingCartContainer = document.querySelector('#shoppingCartContainer');
let cardsContainer = document.querySelector('.cards-container');
let productDetailContainer = document.querySelector('#product-detail');
let productDetailClose = document.querySelector('#product-detail-close');


menuEmail.addEventListener("click",toggleMenu);
logo.addEventListener("click",toggleMenuMobile);
carritoCompras.addEventListener('click',toggleProductDetail);
productDetailClose.addEventListener('click',closeProductDetail);
function toggleMenu(){
    let isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isshoppingCartContainerClosed){
        shoppingCartContainer.classList.add('inactive');
      }
    
        desktop.classList.toggle('inactive'); 
    

}
function toggleMenuMobile(){
    let isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

    if(!isshoppingCartContainerClosed){
        shoppingCartContainer.classList.add('inactive');
      }
       closeProductDetail();

        menuMobile.classList.toggle('inactive'); 
}

function toggleProductDetail(){
    let isMobileMenuClosed = carritoCompras.classList.contains('inactive');

      if(!isMobileMenuClosed){
        menuMobile.classList.add('inactive');
      }

        let isProductDetailClose = productDetailContainer.classList.contains('inactive');

        if(!isProductDetailClose){
          productDetailContainer.classList.add('inactive');
        }
      
          shoppingCartContainer.classList.toggle('inactive'); 
    }
function openProduct(){
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');
}
function closeProductDetail(){
  productDetailContainer.classList.add('inactive');

} 
    let productList = [];
    productList.push({
      name: 'Bike',
      price: 120,
      img : "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    });
    productList.push({
      name: 'Pantalla',
      price: 320,
      img : "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    });
    productList.push({
      name: 'Computador',
      price: 620,
      img : "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    });

    for (product of productList){
    let productCard=  document.createElement('div');
    productCard.classList.add('product-card');

    let img = document.createElement('img');
    img.setAttribute('src', product.img);
    img.addEventListener('click', openProduct);
      
    let productInfo=  document.createElement('div');
    productInfo.classList.add('product-info');

    let productInfoDiv = document.createElement('div');
    
    let productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    let productName = document.createElement('p');
    productName.innerText = product.name;

    let productInfoFigure = document.createElement('figure');

    let productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    cardsContainer.appendChild(productCard);
    
    productCard.appendChild(img);
    productCard.appendChild(productInfo);
    
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    }
    console.log(productList);