const menuEmail = document.querySelector('.navbar-email');
const DesktopMenu = document.querySelector('.desktop-menu');
const Hamburguer = document.querySelector('#hamburguer');
const MobileMenu = document.querySelector('.mobile-menu');
const Car = document.querySelector('#carrito');
const DesktopCar = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
Hamburguer.addEventListener('click', toggleMobileMenu);
Car.addEventListener('click', toggleDesktopCar);

function toggleDesktopMenu(){
     DesktopMenu.classList.toggle('inactive');
     DesktopCar.classList.add('inactive');
}
function toggleMobileMenu(){
     MobileMenu.classList.toggle('inactive');
}
function toggleDesktopCar(){
     DesktopCar.classList.toggle('inactive');
     DesktopMenu.classList.add('inactive');
}

/* Arreglo de productos */
const ProductList = [];
ProductList.push({
     name: 'Bici',
     price: 1000,
     image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
ProductList.push({
     name: 'PC GAMER',
     price: 25000,
     image: 'https://tecnobits.net/wp-content/uploads/2020/02/pc-gamer-extrema-2020.jpg'
});
ProductList.push({
     name: 'Xbox 360',
     price: 2371,
     image: 'https://st4.depositphotos.com/1001860/21760/i/600/depositphotos_217604680-stock-photo-montreal-canada-september-8-2018.jpg'
});
ProductList.push({
     name: 'Avion tuneado',
     price: 777,
     image: 'http://bp0.blogger.com/_7_gMFng3OpY/Ry8I9IzDsoI/AAAAAAAAC0A/vMLfDt3iIoA/s400/mickey.jpg'
});
ProductList.push({
     name: 'Silla gamer',
     price: 5000,
     image: 'https://10mejores.top/wp-content/uploads/2021/09/valk-nyx-composicion.jpg'
});
ProductList.push({
     name: 'Call of Duty: Black Ops 2',
     price: 300,
     image: 'https://http2.mlstatic.com/D_NQ_NP_820875-MLA45089119006_032021-O.jpg'
});
/* Funcion maquetadora */
function MaquetaProductos(arreglo){
     for(product of arreglo){
          const ProductCard = document.createElement('div');
          ProductCard.classList.add('product-card');
     
          const ProductImage = document.createElement('img');
          ProductImage.setAttribute('src', product.image);
     
          const ProductInfo = document.createElement('div');
          ProductInfo.classList.add('product-info');
     
          const ProductInfoDiv = document.createElement('div');
     
          const ProductPrice = document.createElement('p');
          ProductPrice.innerText = '$' + product.price;
          const ProductName = document.createElement('p');
          ProductName.innerText = product.name;
     
          ProductInfoDiv.appendChild(ProductPrice);
          ProductInfoDiv.appendChild(ProductName);
     
     
          const ProductInfoFigure = document.createElement('figure');
          const ProductImgCart = document.createElement('img');
          ProductImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
     
          ProductInfoFigure.appendChild(ProductImgCart); 
     
          ProductInfo.appendChild(ProductInfoDiv);
          ProductInfo.appendChild(ProductInfoFigure);
     
          ProductCard.appendChild(ProductImage);
          ProductCard.appendChild(ProductInfo);
     
          cardsContainer.appendChild(ProductCard);
     }
     
}
MaquetaProductos(ProductList);