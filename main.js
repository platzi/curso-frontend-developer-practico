//ACTIVAR EL MENU DEL EMAIL
const activarEmail = document.querySelector('.navbar-email');
const desktopMenu= document.querySelector('.desktop-menu');
//ACTIVAR EL MENU BURGERICON
const burgerIcon= document.querySelector('.menu');
const movilMenu= document.querySelector('.mobile-menu');
//ACTIVAR MY ORDER
const shoppingCart= document.querySelector('.navbar-shopping-cart');
const myOrder= document.querySelector('.productList-detail');
//DETALLE DEL PRODUCTO
const productCard= document.querySelector('.product-card');
const aside = document.querySelector('.product-detail');
const productDetailClosed = document.querySelector('.product-detail-closed');

//CARDS CONTAINER
const cardsContainer = document.querySelector('.cards-container');
const mainContainer = document.querySelector('.main-container');

activarEmail.addEventListener('click', toggleMenuEmail);
burgerIcon.addEventListener('click', toggleMenuMobil);
shoppingCart.addEventListener('click', togglemyOrder);


function toggleMenuEmail(){
   const ismyOrderClosed= myOrder.classList.contains('inactive'); 
   const isproductDetailClosed= aside.classList.contains('inactive');

   if (!ismyOrderClosed){
      myOrder.classList.add('inactive');
   } 
   if(!isproductDetailClosed){
      productDetail.classList.add('inactive')
   }
   desktopMenu.classList.toggle('inactive');
}

function toggleMenuMobil(){
   const ismyOrderClosed= myOrder.classList.contains('inactive'); 

   if (!ismyOrderClosed){
      myOrder.classList.add('inactive');
   } 
   aside.classList.add('inactive');
   movilMenu.classList.toggle('inactive');
}

function togglemyOrder(){
   const ismovilMenuClosed= movilMenu.classList.contains('inactive'); 
   const isproductDetailClosed= aside.classList.contains('inactive');

   if (!ismovilMenuClosed){
      movilMenu.classList.add('inactive');
   } 
   if(!isproductDetailClosed){
      aside.classList.add('inactive')
   }
   myOrder.classList.toggle('inactive');
}

function toggleCloseMenu(){
   desktopMenu.classList.add("inactive");
   movilMenu.classList.add("inactive");
   myOrder.classList.add('inactive');
   aside.classList.add('inactive') 
}

function openProductDetail(product) {
   toggleCloseMenu()
   aside.classList.remove('inactive')
   
   const containerCard = document.querySelector('.containerCard');
   if (containerCard) {
      containerCard.innerHTML = '';
   }

   const closedDetail = document.createElement('div');
   closedDetail.classList.add('product-detail-closed');
   const iconClose = document.createElement('img');
   iconClose.setAttribute('src', "./icons/icon_close.png")
   closedDetail.appendChild(iconClose);
   containerCard.appendChild(closedDetail);

   const productImg = document.createElement('img');
   productImg.setAttribute('src', product.image);
   containerCard.appendChild(productImg);

   const div = document.createElement('div');
   div.classList.add('product-info-detail');
   const productPrice = document.createElement('p');
   productPrice.textContent = product.price;
   div.appendChild(productPrice)
   const productName = document.createElement('p');;
   productName.textContent = product.name;
   div.appendChild(productName)

   containerCard.appendChild(div);
   aside.appendChild(containerCard);

   closedDetail.addEventListener('click', toggleCloseMenu)
}

const productList = [];
productList.push({
   name: 'Bike',
   price: 150,
   image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
   name: 'Computadora',
   price: 350,
   image: 'https://www.tecnologia-informatica.com/wp-content/uploads/2018/07/funciones-de-la-computadora-1.jpeg',
})
productList.push({
   name: 'Televisor',
   price: 250,
   image: 'https://tienda.claro.com.co/wcsstore/Claro/images/catalog/equipos/646x1000/10001674.jpg',
})
productList.push({
   name: 'Sonido',
   price: 250,
   image: 'https://www.lg.com/co/images/sistemas-de-audio/md05260705/gallery/medium01.jpg',
})
productList.push({
   name: 'Impresora',
   price: 100,
   image: 'https://mediaserver.goepson.com/ImConvServlet/imconv/73461fb77d7f424f37899fa294f5df16b5613880/1200Wx1200H?use=banner&assetDescr=foto-ecotank-L8180-1-690x480',
})
productList.push({
   name: 'Tablet',
   price: 400,
   image: 'https://tienda.claro.com.co/wcsstore/Claro//images/catalog/equipos/646x1000/4894461886169.jpg',
})

function renderProducts(arr){
   arr.forEach(prod => {
      
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
      productCard.addEventListener('click', () => openProductDetail(prod))

      const imagen = document.createElement('img');
      imagen.src = prod.image;
      
      const infoProduct = document.createElement('div');
      infoProduct.classList.add('product-info');

      const div = document.createElement('div');
      const infoPrice = document.createElement('p');
      infoPrice.innerText = '$' + prod.price;

      const infoName = document.createElement('p');
      infoName.innerText = prod.name;

      const figure = document.createElement('figure');
      const figureImg = document.createElement('img');
      figureImg.src = './icons/bt_add_to_cart.svg';

      div.appendChild(infoPrice);
      div.appendChild(infoName);
      figure.appendChild(figureImg);
      infoProduct.appendChild(div);
      infoProduct.appendChild(figure);
      productCard.appendChild(imagen);
      productCard.appendChild(infoProduct);
      cardsContainer.appendChild(productCard);
      mainContainer.appendChild(cardsContainer);     
      
     
   });
 
}
renderProducts(productList);







