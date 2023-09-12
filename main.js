const navMail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu =  document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('#productDetail');

navMail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
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

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}


function toggleCarritoAside(){
    const  isMobileMenuclosed = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuclosed){
        mobileMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
     
    if(!isProductDetailClosed){
      productDetailContainer.classList.add('inactive');
     }


       shoppingCartContainer.classList.toggle('inactive');
    }


function openProductDetailAside(){
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');

}

function closeProductDetailAside(){
  productDetailCloseIcon.classList.add('inactive');
}

    
const productList = [];
productList.push({
    name: 'Cream',
    price: 320,
    image: 'https://img.freepik.com/psd-gratis/conjunto-envases-cosmeticos-icono-aislado-3d-render-ilustracion_47987-11336.jpg?w=2000',
});
productList.push({
    name: 'MakeUp',
    price: 350,
    image: 'https://www.verywellhealth.com/thmb/T_OlMhFfEYWW0Igl4A_VvDKZ4gY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gluten-free-makeup-brands-562443-primary-recirc-b8cf5ac52391436ba4114a6355aac323.jpg',
});
productList.push({
    name: 'Profesional makeup tools',
    price: 620,
    image: 'https://img.freepik.com/premium-photo/professional-makeup-tools-with-beauty-products-flatlay-white-background_971686-1851.jpg?w=2000',
});

productList.push({
  name: 'Lipstick',
  price: 220,
  image: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?cs=srgb&dl=pexels-suzy-hazelwood-2533266.jpg&fm=jpg',
});
productList.push({
  name: 'Perfume',
  price: 800,
  image: 'https://img.freepik.com/free-photo/front-view-yellow-fragrance-bottle-with-golden-cap-white-wall_140725-11697.jpg',
});
productList.push({
  name: '',
  price: 420,
  image: 'https://c.pxhere.com/photos/5c/82/brushes_make_up_brush_make_up_brushes_public_domain_images-1570147.jpg!d',
});




 function renderProducts(arr){
  for (product of arr){
    const productCard = document.createElement('div');
      productCard.classList.add('product-card');

    const productImg = document.createElement('img');
      productImg.setAttribute('src', product.image);
      productImg.addEventListener('click', openProductDetailAside);

    const productInfo = document.createElement('div');
      productInfo.classList.add('product-info');


    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement ('p');
      productPrice.innerText = '$' + product.price;

    const productName = document.createElement ('p');
      productName.innerText = product.name;

      productInfoDiv.appendChild(productPrice);
      productInfoDiv.appendChild(productName);
    
    const productInfoFigure = document.createElement ('figure');
    
    const productImgCard = document.createElement ('img');
      productImgCard.setAttribute('src','./icons/bt_add_to_cart.svg' );

      productInfoFigure.appendChild(productImgCard);

      productInfo.appendChild(productInfoDiv);
      productInfo.appendChild(productInfoFigure);

      productCard.appendChild(productImg);
      productCard.appendChild(productInfo);

      cardContainer.appendChild(productCard);



}
 }
  
 renderProducts(productList);
