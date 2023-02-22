const menuEmail = document.querySelector('.navbar-email'); 
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurguer = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCarIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCarContainer = document.querySelector('#shoppingCarContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer =document.querySelector('.cards-container');
const closeProductDetail = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', toggleDesktopMenu); //Escuchamos el evento click sobre el email y llamamos a la función toogleDesktopMenu cuando ocurra
menuBurguer.addEventListener('click', toggleMobileMenu); // Escuchamos el evento click sobre el burgerIcon y llamamos a la función toogleMobileMenu cuando ocurra
shoppingCarIcon.addEventListener('click', toggleMenuShopping); //Escuchamos el evento click sobre el icono del carrito y llamamos a la función toogleMenuShopping cuando ocurra

function toggleDesktopMenu(){
    /*Agregamos la clase inactive que en css pone un display:none para mostrar/ocultar los menus
    Toogle agrega o quita la clase dependiendo de si la tiene o no
    Add agrega sí o sí la clase, así forzamos que si estaba abierto un menú lo cierre para no sobre poner*/
    desktopMenu.classList.toggle('inactive');
    shoppingCarContainer.classList.add('inactive');
}

function toggleMobileMenu(){
    /*Agregamos la clase inactive que en css pone un display:none para mostrar/ocultar los menus
    Toogle agrega o quita la clase dependiendo de si la tiene o no
    Add agrega sí o sí la clase, así forzamos que si estaba abierto un menú lo cierre para no sobre poner*/
    mobileMenu.classList.toggle('inactive');
    shoppingCarContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}

function toggleMenuShopping(){
    /*Agregamos la clase inactive que en css pone un display:none para mostrar/ocultar los menus
    Toogle agrega o quita la clase dependiendo de si la tiene o no
    Add agrega sí o sí la clase, así forzamos que si estaba abierto un menú lo cierre para no sobre poner*/
    shoppingCarContainer.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}


/*<div class="product-card">
      <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
      <div class="product-info">
        <div>
          <p>$120,00</p>
          <p>Bike</p>
        </div>
        <figure>
          <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
      </div>
    </div>*/

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Pantalla',
  price: 220,
  image: 'https://images.pexels.com/photos/9072307/pexels-photo-9072307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
  name: 'Moto',
  price: 620,
  image: 'https://images.pexels.com/photos/104842/bmw-vehicle-ride-bike-104842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Juguetes',
    price: 380,
    image: 'https://images.pexels.com/photos/6692962/pexels-photo-6692962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  });
  productList.push({
    name: 'Sofá',
    price: 825,
    image: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  });
  productList.push({
    name: 'Telefono antiguo',
    price: 620,
    image: 'https://images.pexels.com/photos/209695/pexels-photo-209695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  });
  productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  });
  productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/9072307/pexels-photo-9072307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  });
  productList.push({
    name: 'Moto',
    price: 620,
    image: 'https://images.pexels.com/photos/104842/bmw-vehicle-ride-bike-104842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  });
  productList.push({
      name: 'Juguetes',
      price: 380,
      image: 'https://images.pexels.com/photos/6692962/pexels-photo-6692962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    });
    productList.push({
      name: 'Sofá',
      price: 825,
      image: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    });
    productList.push({
      name: 'Telefono antiguo',
      price: 620,
      image: 'https://images.pexels.com/photos/209695/pexels-photo-209695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    });

function openProductDetailAside() {
productDetailContainer.classList.remove('inactive');
shoppingCarContainer.classList.add('inactive');
mobileMenu.classList.add('inactive');
}

closeProductDetail.addEventListener('click', closeDetailOfProducto);

function closeDetailOfProducto(){
  productDetailContainer.classList.add('inactive');
}

function renderProducts(arr) {
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


/*  #############################################################################
    ############    Codigo alternativo para aparecer y desaparecer   ############
    ############  los menus sin sobre ponerlos usando condicionales  ############
    #############################################################################

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    if(!shoppingCarContainer.classList.contains('inactive')){
        shoppingCarContainer.classList.add('inactive');
    }
    
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    if(!shoppingCarContainer.classList.contains('inactive')){
        shoppingCarContainer.classList.add('inactive');
    }

}

function toggleMenuShopping(){
    shoppingCarContainer.classList.toggle('inactive');
    if (!mobileMenu.classList.contains('inactive')){
        mobileMenu.classList.add('inactive');
    }
    if(!desktopMenu.classList.contains('inactive')){
        desktopMenu.classList.add('inactive');
    }
} */



