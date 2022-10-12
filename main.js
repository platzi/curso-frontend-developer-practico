const menuEmail = document.querySelector('.navbar-email');
const menuHambIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail')
const cardsContainer = document.querySelector('.cards-container')


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHambIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

// productDetailContainer.addEventListener('click',openProductDetailAside)
// productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
  console.log('click')
 
  if(!isAsideClosed){
    shoppingCartContainer.classList.add('inactive');
  }

  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

 if(!isAsideClosed){
  shoppingCartContainer.classList.add('inactive');

}
mobileMenu.classList.toggle('inactive');

}

function toggleCarritoAside(){
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');


  if(!isMobileMenuClosed){
    mobileMenu.classList.add('inactive');
  }
  shoppingCartContainer.classList.toggle('inactive')
}  

// function openProductDetailAside() {
//   productDetailContainer.classlist.remove('inactive')

// }

// function closeProductDetailAside(){
//   productDetailContainer.classlist.add('inactive')
// }

  // const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

  // if (!isProductDetailClosed) {
  //   productDetailContainer.classList.add('inactive'); 
  // }

//   shoppingCartContainer.classList.toggle('inactive');
// }
// function toggleDesktopMenu(){
//   desktopmenu.classList.toggle('inactive')
//   console.log('click')
// }
// function openProductDetailAside() {
//   shoppingCartContainer.classList.add('inactive');
//   productDetailContainer.classList.remove('inactive');
// }

// function closeProductDetailAside() {
//   productDetailContainer.classList.add('inactive');
// }

const productList = [];
productList.push({
  name: 'Galleta',
  price: 2000,
  image: 'https://scontent.fscl20-1.fna.fbcdn.net/v/t1.6435-9/152552008_195784509002894_7321128372981063825_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=7rdbZLDgaKEAX9CbyTW&_nc_ht=scontent.fscl20-1.fna&oh=00_AT-O5Xb_V7XvBqZjueFBtZoyA32h6NOav_B_xj5NbL3Zhg&oe=636C4681'

});

productList.push({
  name: 'PetHelados',
  price: 2500,
  image: 'https://scontent.fscl20-1.fna.fbcdn.net/v/t1.6435-9/139561226_170825688165443_4335369474403034265_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=fXL79kVByy4AX9RYQtQ&_nc_ht=scontent.fscl20-1.fna&oh=00_AT_zBfpBrfG5P106RG4owDo3Des4cg6rQqC8V3laJbdmzw&oe=636C8ACB'

});

productList.push({
  name: 'PetTortas',
  price: 10000,
  image: 'https://scontent.fscl20-1.fna.fbcdn.net/v/t39.30808-6/270230847_403958934852116_1215414565582004949_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=Dqa9whQzYAIAX_Q6n78&_nc_ht=scontent.fscl20-1.fna&oh=00_AT-gaAv-DmEZ-Y_UGdn4t_6aM-LJEHFr2MefzZsnuoeyVA&oe=6349FF5D'

  
});

function renderProducts(arr) {
  for (product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
  
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
renderProducts(productList)


