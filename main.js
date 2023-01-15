const menuEmail = document.querySelector('.navbar-email');
const menuBurgerIcon = document.querySelector('.menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart')
// const productDetailCloseIcon = document.querySelector('.product-detail-close');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurgerIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartAside);
// productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive'); //inactive está, al hacer clic se quitará
  shoppingCartContainer.classList.add('inactive') //si está abierta la ventana, se le agrega inactive a las demás para que desaparezcan
  productDetailContainer.classList.add('inactive');
};

function toggleMobileMenu() {
  mobileMenu.classList.toggle('inactive');
  shoppingCartContainer.classList.add('inactive')
  productDetailContainer.classList.add('inactive');
};

function toggleCartAside() {
  shoppingCartContainer.classList.toggle('inactive');
  desktopMenu.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  productDetailContainer.classList.add('inactive'); 
};

const productList = [];
productList.push ({
  name:'Reebuk Air',
  price: 100,
  description: 'powerful shoes',
  image: 'https://images.pexels.com/photos/11123099/pexels-photo-11123099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push ({
  name:'Niky Air',
  price: 150,
  description: 'powerful shoes',
  image: 'https://images.pexels.com/photos/11870331/pexels-photo-11870331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push ({
  name:'Jorden Force',
  price: 160,
  description: 'powerful shoes',
  image: 'https://images.pexels.com/photos/14637513/pexels-photo-14637513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push ({
  name:'Helmet Adi',
  price: 80,
  description: 'powerful shoes',
  image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push ({
  name:'Seat HotWheels',
  price: 90,
  description: 'powerful shoes',
  image: 'https://images.pexels.com/photos/12730146/pexels-photo-12730146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push ({
  name:'Tennis Montain Skate',
  price: 110,
  description: 'powerful shoes',
  image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});
productList.push ({
  name:'Niky Sun',
  price: 115,
  description: 'powerful shoes',
  image: 'https://images.pexels.com/photos/4462781/pexels-photo-4462781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push ({
  name:'White Niky',
  price: 110,
  description: 'powerful shoes',
  image: 'https://images.pexels.com/photos/7396650/pexels-photo-7396650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push ({
  name:'White Converte',
  price: 100,
  description: 'powerful shoes',
  image: 'https://images.pexels.com/photos/2421374/pexels-photo-2421374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push ({
  name:'Air Force Niky',
  price: 120,
  description: 'powerful shoes',
  image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
}); 

function renderProducts(arr) {
  arr.forEach((product) => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image)
    productImg.addEventListener('click', () => {
      openProductDetailAside(product);
    });
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice)
    productInfoDiv.appendChild(productName)
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  });
};
renderProducts(productList);

//función para abrir el aside con el detalle del producto
function openProductDetailAside(product) {
  shoppingCartContainer.classList.add('inactive'); //para que desaparezcan todas las ventanas abiertas cuando queramos abrir el product detail
  desktopMenu.classList.add('inactive');
  mobileMenu.classList.add('inactive');

  productDetailContainer.innerHTML= "";

  const productDetailCloseIcon = document.createElement('div');
  productDetailCloseIcon.classList.add('product-detail-close');
  const closeIcon = document.createElement('img');
  closeIcon.setAttribute('src', './icons/icon_close.png');
  productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

  productDetailCloseIcon.appendChild(closeIcon);

  const productImage = document.createElement('img');
  productImage.setAttribute('src', product.image);

  const productInfo = document.createElement('div');
  productInfo.classList.add('product-info');
  const productPrice = document.createElement('p');
  productPrice.innerText = '$' + product.price;
  const productName = document.createElement('p');
  productName.innerText = product.name;
  const productDescription = document.createElement('p');
  productDescription.innerText = product.description;

  const addToCartButton = document.createElement('button')
  addToCartButton.classList.add('primary-button', 'add-to-cart-button')
  addToCartButton.innerText = "Add to cart";
    
  const addToCartImg = document.createElement('img');
  addToCartImg.setAttribute('src', './icons/bt_add_to_cart.svg');
  addToCartButton.appendChild(addToCartImg);

  productInfo.append(
    productPrice,
    productName,
    productDescription,
    addToCartButton
  );

  productDetailContainer.append(productDetailCloseIcon, productImage, productInfo);
  productDetailContainer.classList.remove('inactive'); //para que aparezca el aside de producDetail al darle clic a la imagen
};
//openProductDetailAside(productList);

function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive');
}