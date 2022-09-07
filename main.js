const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const menuHamIcon = document.querySelector('.menu');
const movileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');




menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobilMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){
const isAsideClosed = aside.classList.contains('inactive');

if (!isAsideClosed){
  aside.classList.add('inactive');
}

   desktopMenu.classList.toggle('inactive');
}

function toggleMobilMenu(){
  const isAsideClosed = aside.classList.contains('inactive');

  if (!isAsideClosed){
    aside.classList.add('inactive');
  }
  movileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
  const ismobileMenuClosed = movileMenu.classList.contains('inactive');
  
  if (!ismobileMenuClosed){
    movileMenu.classList.add('inactive');
  }
    aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
  name:'Bike',
  price: 120,
  image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name:'Pantalla',
  price:220,
  image:"https://images.pexels.com/photos/7947958/pexels-photo-7947958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
  name:'laptop',
  price:420,
  image:'https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
  name:'Celular',
  price: 320,
  image:'https://i.pinimg.com/236x/9c/d9/5d/9cd95d443475b7ff5ecb81b08fc66215.jpg',
});
productList.push({
  name:'Peluches',
  price: 120,
  image:'https://img.freepik.com/foto-gratis/vista-frontal-lindo-bebe-nino-cupcake-osito-peluche_23-2148415544.jpg?w=2000',
});
productList.push({
  name:'Refrigeradores',
  price: 620,
  image:'https://www.costco.com.mx/medias/sys_master/products/hb3/hc1/79323053359134.jpg',
});


function renderProducts(arr){     
for (product of arr){
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

   // product= {name, price, image} --> product,image
  const productImg = document.createElement('img');
  productImg.setAttribute('src',product.image);

  const productInfo = document.createElement('div')
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
  productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg' );

  productInfoFigure.appendChild(productImgCart);

  productInfo.appendChild(productInfoDiv);
  productInfo.appendChild(productInfoFigure);

  productCard.appendChild(productImg);
  productCard.appendChild(productInfo);

  cardsContainer.appendChild(productCard);
 
}

}
renderProducts(productList);