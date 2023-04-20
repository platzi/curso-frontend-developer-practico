const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart'); //email
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');//shopping-cart-detail
const productDetailContainer = document.querySelector('#productDetail');//productDetail
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);//email
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);


function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.add('inactive');
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle('inactive');
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.add('inactive');
}

function toggleCarritoAside() {
  shoppingCartContainer.classList.toggle('inactive');
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  productDetailContainer.classList.add('inactive')
}

function openProductDetailAside() {
  productDetailContainer.classList.toggle('inactive');
  shoppingCartContainer.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  mobileMenu.classList.add('inactive');
}
function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive');

}

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'TV OLED',
  price: 220,
  image: 'https://i1.wp.com/techtrendske.co.ke/wp-content/uploads/2018/07/lg-oled-tv.jpg?fit=1280%2C720',
});
productList.push({
  name: 'Computadora',
  price: 300,
  image: 'https://th.bing.com/th/id/R.bfa0a08c49b570133a4998a22e54d561?rik=TvrCd%2bHiE%2fnKmw&riu=http%3a%2f%2fhardzone.es%2fapp%2fuploads%2f2016%2f08%2fAsus.jpg&ehk=qfdjrF%2boK8LHxtJriKsh0TeCMwQr8i0K7A9txbuRqkI%3d&risl=&pid=ImgRaw&r=0',
});
productList.push({
  name: 'TV OLED',
  price: 220,
  image: 'https://i1.wp.com/techtrendske.co.ke/wp-content/uploads/2018/07/lg-oled-tv.jpg?fit=1280%2C720',
});
productList.push({
  name: 'Hello Kityy',
  price: 150,
  image: 'https://th.bing.com/th/id/R.a715e2a9002a13c7a720406dfe4dcb1e?rik=Q1XSRDiveW2zSA&pid=ImgRaw&r=0',
});



function renderProducts(arr){
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside);
  
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
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);