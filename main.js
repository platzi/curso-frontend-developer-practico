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
let labelPriceInfo = document.querySelector('.product-info p:nth-child(1)');
let labelNameInfo = document.querySelector('.product-info p:nth-child(2)');
let labelInforInfo = document.querySelector('.product-info p:nth-child(3)');
let countCarrito = document.querySelector('.navbar-shopping-cart div');
let contador = document.querySelector('#contador');
let numContador = 0



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
  image: './Fotosjugos/Mora.jpg',
  description: "Rico y delicioso jugo de Mora hecho con los ingredientes de más alta calidad.",
});
productList.push({
  name: 'LULO',
  price: 5000,
  image: './Fotosjugos/Lulo.jpg',
  description: "Rico y delicioso jugo de Lulo hecho con los ingredientes de más alta calidad.",
});
productList.push({
  name: 'MARACUYA',
  price: 5000,
  image: './Fotosjugos/Maracuya.jpg',
  description: "Rico y delicioso jugo de Maracuya hecho con los ingredientes de más alta calidad.",
});
productList.push({
  name: 'BOROJO',
  price: 5000,
  image: './Fotosjugos/Borojo1.png',
  description: "Rico y delicioso jugo de Borojo hecho con los ingredientes de más alta calidad, este es caracteriztico por ser considerado afrodisiaco",
});
productList.push({
  name: 'MORA',
  price: 5000,
  image: './Fotosjugos/Mora.jpg',
  description: "Rico y delicioso jugo de Mora hecho con los ingredientes de más alta calidad.",
});
productList.push({
  name: 'MANGO',
  price: 5000,
  image: './Fotosjugos/Maracuya.jpg',
  description: "Rico y delicioso jugo de Mango hecho con los ingredientes de más alta calidad.",
});


function renderProduct(arr) {
  for (const product of arr) {
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
    });

    const aumentarNumCarr = () => {
      contador.innerHTML = ++numContador;
    };

    productImgCart.addEventListener('click', aumentarNumCarr);
      
      
    
    
          
}
}


function mostrarInfoProduct(imagen, precio, nombre, descripcion){
  productImageInfor.setAttribute('src', imagen);
  labelPriceInfo.innerText = '$' + precio
  labelNameInfo.innerText = nombre
  labelInforInfo.innerText = descripcion
}

renderProduct(productList);



