const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if (!isAsideClosed) {
      shoppingCartContainer.classList.add('inactive')
    }
    
    desktopMenu.classList.toggle('inactive');
}

 function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if (!isAsideClosed) {
      shoppingCartContainer.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive');
 }

 function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }

    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive')
    }

    shoppingCartContainer.classList.toggle('inactive');
 }
 
const productList = [];
productList.push({

    name: 'bike',
    price: 300,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  
});
productList.push({

  name: 'guitar',
  price: 600,
  image : 'https://guitarrasandalucia.com.co/wp-content/uploads/2020/08/guitarra-bucaramanga.jpg',

});
productList.push({

  name: 'headphones',
  price: 1000,
  image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEh0ZnizL0O9iv4ce9FQznZ22Ns4gOE1wlew&usqp=CAU',

});
 
function renderCards(arr) {
for (product of arr) {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');
 
 

  const productImg = document.createElement('img');
  productImg.setAttribute('src' , product.image);

  const productInfo = document.createElement('div');
  productInfo.classList.add('product-info');
  
  
  const productInfoDiv = document.createElement('div');

  const productPrice = document.createElement('p');
  productPrice.innerText = '$' + product.price;
  const productName = document.createElement('p');
  productName.innerText = product.name;
  productInfoDiv.append(productPrice , productName );

  const productInfoFigure = document.createElement('figure');
  const productImgCart = document.createElement('img');
  productImgCart.setAttribute( 'src' , '/icons/bt_add_to_cart.svg');

  productInfoFigure.appendChild(productImgCart);
  productInfo.append(productInfoDiv , productInfoFigure);
  productCard.append( productImg , productInfo);
  cardsContainer.appendChild(productCard);
}
};
renderCards(productList)
