let menuEmail = document.querySelector('.navbar-email');
let menuHamIcon = document.querySelector('.menu');
let menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
let desktopMenu = document.querySelector('.desktop-menu');
let mobileMenu = document.querySelector('.mobile-menu');
let shoppingCartContainer = document.querySelector('.shoppingCartContainer');
let cardsContainer = document.querySelector('.cards-container');
let productDetailCloseIcon = document.querySelector('.product-detail-close');
let productDetailContainer = document.querySelector('.productDetail');
let productImageInfor = document.querySelector('.jugo');
let labelPriceInfo = document.querySelector('.product-info p:nth-child(1)')
let labelNameInfo = document.querySelector('.product-info p:nth-child(2)')
let labelInforInfo = document.querySelector('.product-info p:nth-child(3)')
let productosEnCarrito  = []
let productoACarrito    = []



menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProducDetailAside);



function toggleDesktopMenu(){
  mobileMenu.classList.add('inactive');
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.add('inactive');
  desktopMenu.classList.toggle('inactive')
}
function toggleCarritoAside(){
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  productDetailContainer.classList.add('inactive');
  shoppingCartContainer.classList.toggle('inactive');
}
function toggleMobileMenu(){
  desktopMenu.classList.add('inactive');
  productDetailContainer.classList.add('inactive');
  shoppingCartContainer.classList.add('inactive');
  mobileMenu.classList.toggle('inactive');
}
function closeProducDetailAside(){
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.add('inactive');
}
function openProductDetail(){
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');
}

let productList = [];
productList.push({
  name: 'MORA',
  price: 5000,
  image: './Fotos jugos/Mora.jpg',
  description: "Juguito de mora delicioso",
});
productList.push({
  name: 'LULO',
  price: 5000,
  image: './Fotos jugos/Lulo.jpg',
  description: "Juguito de LULO delicioso",
});
productList.push({
  name: 'MARACUYA',
  price: 5000,
  image: './Fotos jugos/Maracuya.jpg',
  description: "Juguito de MARACUYA delicioso",
});
productList.push({
  name: 'BOROJO',
  price: 5000,
  image: './Fotos jugos/borojo.jpg',
  description: "Juguito de BOROJO delicioso",
});
productList.push({
  name: 'MANGO',
  price: 5000,
  image: './Fotos jugos/Maracuya.jpg',
  description: "Juguito de   name: 'MANGO delicioso",
});
productList.push({
  name: 'GUANABANA',
  price: 5000,
  image: './Fotos jugos/Guanaban.jpg',
  description: "Juguito de GUANABANA delicioso",
});

function renderProduct(arr) {
  for (product of arr) {
    let productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    // product= {name, price, image} -> product.image
    let productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetail);
   
  
    let productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    let productInfoDiv = document.createElement('div');
  
    let productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    let productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    let productInfoFigure = document.createElement('figure');
    let productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);

    productImg.addEventListener('click', function(){
      mostrarInfoProduct(product.image, product.price, product.name, product.description)
      openProductDetail();
    })
  }
}


function mostrarInfoProduct(imagen, precio, nombre, descripcion){
  productImageInfor.setAttribute('src', imagen);
  labelPriceInfo.innerText = '$' + precio
  labelNameInfo.innerText = nombre
  labelInforInfo.innerText = descripcion
}

renderProduct(productList);

// Desde aqui empieza lo que tengo que maquetar desde Javascript
//   <aside class="productDetail" class="inactive">
//     <div class="product-detail-close">
//       <img src="./icons/icon_close.png" alt="close">
//     </div>
//     <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
//     <div class="product-info">
//       <p>$35,00</p>
//       <p>Bike</p>
//       <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
//       <button class="primary-button add-to-cart-button">
//         <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
//         Add to cart
//       </button>
//     </div>
//   </aside>

// function renderProducts2(array) {
//   for (product of array) {
//     let divButtonX = document.createElement('div');
//     let closeButton = document.createElement('img');
//     closeButton.setAttribute('src','./icons/icon_close.png');


//     let imagenProd = document.createElement('img');
//     imagenProd.setAttribute('src', product.image);


//     let divInfo = document.createElement('div');
//     divInfo.classList.add('product-info');


//     let productPrice2 = document.createElement('p');
//     productPrice.innerText = '$' + product.price;
//     let productName2 = document.createElement('p');
//     productName.innerText = product.name;
//     let productDescription = document.createElement('p');
//     productName.innerText = product.description;

//     let addButton = document.createElement('button');
//     addButton.classList.add('primary-button add-to-cart-button');
//     let imgButton = document.createElement('img');
//     imgButton.setAttribute('src', './icons/bt_add_to_cart.svg');

//     addButton.appendChild(imgButton);

//     divInfo.appendChild(addButton);
//     divInfo.appendChild(productDescription);
//     divInfo.appendChild(productName2);
//     divInfo.appendChild(productPrice2);

//     divButtonX.appendChild(closeButton);

//     productDetailContainer.appendChild(divButtonX);
//     productDetailContainer.appendChild(divInfo);
//     productDetailContainer.appendChild(imagenProd);
  


