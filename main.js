const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if (!isAsideClosed) {
      shoppingCartContainer.classList.add('inactive')
    }
    closeProductDetailAside();
    
    desktopMenu.classList.toggle('inactive');
}

 function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if (!isAsideClosed) {
      shoppingCartContainer.classList.add('inactive')
    }
    closeProductDetailAside();

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
    closeProductDetailAside();

    shoppingCartContainer.classList.toggle('inactive');
 }
 function openProductDetailAside () {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive')
  }
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive')
    }

  productDetailContainer.classList.remove('inactive');

 }
 function closeProductDetailAside (){
  productDetailContainer.classList.add('inactive');
 }



const productList = [];
productList.push({

    name: 'bike',
    price: 300,
    image : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description:'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.',
});
productList.push({

  name: 'guitar',
  price: 600,
  image : 'https://guitarrasandalucia.com.co/wp-content/uploads/2020/08/guitarra-bucaramanga.jpg',
  description:'Classical guitars in cedar, measures 1 meter * 37cm * 10 cm wide, 4/4 normal size for adults, excellent finishes, 3 months warranty',
});
productList.push({

  name: 'headphones',
  price: 1000,
  image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEh0ZnizL0O9iv4ce9FQznZ22Ns4gOE1wlew&usqp=CAU',
  description:'40mm neodymium dynamic drivers closed headphones cushions around the ear adjustable headband'
});
 
function renderCards(arr) {
for (product of arr) {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');
 
 

  const productImg = document.createElement('img');
  productImg.setAttribute('src' , product.image);
  productImg.addEventListener('click' , openProductDetailAside);

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
  productImgCart.setAttribute( 'src' , './icons/bt_add_to_cart.svg');

  productInfoFigure.appendChild(productImgCart);
  productInfo.append(productInfoDiv , productInfoFigure);
  productCard.append( productImg , productInfo);
  cardsContainer.appendChild(productCard);
}
};
renderCards(productList)




