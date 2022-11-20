//Para dar click al menu desktop
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
//Para dar click al menu hamburguesa
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

//Para sacar el carrito de compras en el inside
const carritoCompras = document.querySelector('.navbar-shopping-cart');
const sidebarCarrito = document.querySelector('.product-detail');

//los eventos que vamos a escuchar
menuEmail.addEventListener('click', function(){toggleMenus(desktopMenu)});

menuHamIcon.addEventListener('click', function(){toggleMenus(mobileMenu)});

carritoCompras.addEventListener('click', togglesidebarCarrito);

//funciones de los eventos
function toggleMenus(menu) {
  const isClosedSidebarCarrito = sidebarCarrito.classList.contains('inactive');
  if(!isClosedSidebarCarrito){
    sidebarCarrito.classList.add('inactive');
  }
  menu.classList.toggle('inactive');
}

function togglesidebarCarrito(){
  const isClosedMobileMenu = mobileMenu.classList.contains('inactive');
  const isClosedDesktopMenu =desktopMenu.classList.contains('inactive');

  if(!isClosedMobileMenu){
     mobileMenu.classList.add('inactive');
  }
  if(!isClosedDesktopMenu){
    desktopMenu.classList.add('inactive');
  }

  sidebarCarrito.classList.toggle('inactive');
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
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Compu',
  price: 620,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Pantalla',
  price: 220,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Compu',
  price: 620,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Pantalla',
  price: 220,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Compu',
  price: 620,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});


for (product of productList){
  const htmlCardsProducts =`
<div class="product-card">
  <img src=${product.image} alt="">
  <div class="product-info">
    <div>
      <p>$${product.price}</p>
      <p>$${product.name}</p>
    </div>
    <figure>
      <img src="./icons/bt_add_to_cart.svg" alt="">
    </figure>
  </div>
</div>
  `
const cardContainer = document.querySelector('.cards-container')

cardContainer.innerHTML += htmlCardsProducts
}

