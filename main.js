const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHambIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const cardsContainer = document.querySelector('.cards-container')


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHambIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);


function toggleDesktopMenu(){
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive')

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }
  
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive')

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isDesktopMenu = desktopMenu.classList.contains('inactive');


  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  } else if (!isDesktopMenu) {
    desktopMenu.classList.add('inactive');
  }

  shoppingCartContainer.classList.toggle('inactive');
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


function renderProducts(arr){
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    // product = {name, price,img}--> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv= document.createElement('div');
      
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
  
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    
    const productInfofigure= document.createElement('figure');
    const productImgCart= document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfofigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfofigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard)
  }
}

renderProducts(productList);