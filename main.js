const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const CardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
  
    if(!isAsideClosed){
      aside.classList.add('inactive')
    }
  
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
  const isAsideClosed = aside.classList.contains('inactive');

  if(!isAsideClosed){
    aside.classList.add('inactive')
  }

  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
  const isMobileMenuOpenClosed = mobileMenu.classList.contains('inactive');
  const isdesktopMenuClosed = desktopMenu.classList.contains('inactive');

  if(!isMobileMenuOpenClosed || !isdesktopMenuClosed){
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
  }

  aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Pantalla',
  price: 220,
  image: 'https://d500.epimg.net/cincodias/imagenes/2022/05/30/smarttv/1653897720_117335_1653897767_noticia_normal.jpg',
});
productList.push({
  name: 'Compu',
  price: 620,
  image: 'https://es.digitaltrends.com/wp-content/uploads/2022/12/macbook-pro-2021-01.jpg?fit=720%2C480&p=1',
});
productList.push({
  name: 'Celular',
  price: 541,
  image: 'https://i5.walmartimages.com.mx/mg/gm/1p/images/product-images/img_large/00880609411073l.jpg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
});
productList.push({
  name: 'Audifonos',
  price: 220,
  image: 'https://previews.123rf.com/images/karandaev/karandaev1611/karandaev161100223/65339994-auriculares-sobre-el-ordenador-port%C3%A1til-en-la-mesa-de-escritorio-de-madera-concepto-de-la-m%C3%BAsica.jpg',
});
productList.push({
  name: 'Lentes',
  price: 620,
  image: 'https://images.pexels.com/photos/343720/pexels-photo-343720.jpeg?auto=compress&cs=tinysrgb&w=600',
});

function renderProducts(arr){
  for(product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const productimg = document.createElement('img');
    productimg.setAttribute('src', product.image);
    //product = {name, prise, image} -> image
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrise = document.createElement('p');
    productPrise.innerText = '$' + product.price;
  
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrise);
    productInfoDiv.appendChild(productName);
    
    const productFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productFigure);
  
    productCard.appendChild(productimg);
    productCard.appendChild(productInfo);
  
    CardsContainer.appendChild(productCard);
  }
}
renderProducts(productList);