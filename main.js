const navEmail = document.querySelector('.navbar-email'); 
const desktopMenu = document.querySelector('.desktop-menu');
const hamMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carrito = document.querySelector('.navbar-shopping-cart');
const menuCarrito = document.querySelector('.product-detail');
navEmail .addEventListener('click',clickEmail);
hamMenu.addEventListener('click',toggleMobileMenu);
carrito.addEventListener('click',toggleCarritoMenu);
function clickEmail(){
    desktopMenu.classList.toggle('inactive');

}
function toggleMobileMenu(){
    if(menuCarrito.classList.contains('inactive')){
        mobileMenu.classList.toggle('inactive');
    }
    

}
function toggleCarritoMenu(){
    menuCarrito.classList.toggle('inactive');
    if(!mobileMenu.classList.contains('inactive') && !menuCarrito.classList.contains('inactive')){
        mobileMenu.classList.add('inactive');
    }
}
const productList = []; 
productList.push({
    name: 'Bicicleta' ,
    price: 120,
   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' 
});
productList.push({
    name: 'pantalla' ,
    price: 220,
   image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
});
productList.push({
    name: 'Computador' ,
    price: 620,
   image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
});

const carContainer = document.querySelector('.cards-container');
for(product of productList){
    const productCar = document.createElement('div');
    productCar.classList.add('product-car');

    const productImg = document.createElement('img');
    productImg.setAttribute('src',product.image);
    productImg.setAttribute('alt'," ");
    productImg.classList.add('product-img');

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$'+ product.price;

    const productName = document.createElement('p');
    productName.innerText = '$'+ product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productFigure = document.createElement('figure');

    const imgCar = document.createElement('img'); 
    imgCar.setAttribute('src','./icons/bt_add_to_cart.svg');
    
    productFigure.appendChild(imgCar);
    
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productFigure);

    productCar.appendChild(productImg);
    productCar.appendChild(productInfo);
 
    carContainer.appendChild(productCar);

}