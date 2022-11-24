
//creacion de los productos un array con varios objectos
const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Pantalla',
  price: 220,
  image: 'https://blog.soltekonline.com/content/images/2021/02/Best-Custom-PC-Builders.jpg',
});
productList.push({
  name: 'Compu',
  price: 620,
  image: 'https://i.ytimg.com/vi/FTDtj5EX8Qc/maxresdefault.jpg',
});
productList.push({
  name: 'Tennis',
  price: 120,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJqDrsPrK2aXIKeYq8WIjS452RXeG8wnJX7A&usqp=CAU',
});  
productList.push({
  name: 'Carro',
  price: 2220,
  image: 'https://www.grupor5.com/hs-fs/hubfs/spark-gt-chevrolet-carro-economicos-colombia.jpg?width=600&name=spark-gt-chevrolet-carro-economicos-colombia.jpg',
});
productList.push({
  name: 'Moto',
  price: 1220,
  image: 'https://www.auteco.com.co/wp-content/uploads/2022/07/moto-500x400-1.jpg',
});
productList.push({
  name: 'Reloj',
  price: 420,
  image: 'https://cf.shopee.com.co/file/9a3bd3de400bd4b0f34dec069f5c4c65',
});
productList.push({
  name: 'Balon',
  price: 620,
  image: 'https://media.gq.com.mx/photos/616312006e683253351164db/3:2/w_2532,h_1688,c_limit/balon%20de%20oro.jpg',
});

let ProductsCards =[]
//cartas de manera dinamica
for (product in productList){
  const htmlCardsProducts =`
<div class="product-card">
  <img src=${productList[product].image} alt="">
  <div class="product-info">
    <div>
      <p>$${productList[product].price}</p>
      <p>$${productList[product].name}</p>
    </div>
    <figure>
      <img src="./icons/bt_add_to_cart.svg" alt="" >
    </figure>
  </div>
</div>
  `
const cardContainer = document.querySelector('.cards-container')
cardContainer.innerHTML += htmlCardsProducts

//dinamico la muestra de los productos indidualmente 
const htmlProductDetail2 =`
<aside class="product-detail2 inactive">
<div class="product-detail-close2">
  <img src="./icons/icon_close.png" alt="close">
</div>
<img src=${productList[product].image} alt="bike">
<div class="product-info2">
  <p>$${productList[product].price}</p>
  <p>${productList[product].name}</p>
  <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
  <button class="primary-button2 add-to-cart-button2">
    <img src="./icons/bt_add_to_cart.svg" alt="add to cart" >
    Add to cart
  </button>
</div>
</aside>
`
ProductsCards.push(htmlProductDetail2)
const producto2 = document.querySelector('.container-producto2')
producto2.innerHTML = htmlProductDetail2

// objectos en el carrito de compras
const htmlCarritoProduct =`
<figure>
  <img src=${productList[product].image} alt="bike">
</figure>
<p>${productList[product].name}</p>
<p>$${productList[product].price}</p>
<img src="./icons/icon_close.png" alt="close">
`
const carritoProduct = document.querySelector('.shopping-cart');
carritoProduct.innerHTML+=htmlCarritoProduct;
}

console.log(ProductsCards)


//Para dar click al menu desktop
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
//Para dar click al menu hamburguesa
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

//Para sacar el carrito de compras en el inside
const carritoCompras = document.querySelector('.navbar-shopping-cart');
const sidebarCarrito = document.querySelector('.product-detail');

//Para sacar el detalle del producto
const productCar = document.querySelectorAll('.product-card')
const detalleProducto = document.querySelector('.product-detail2')
const productIcon = document.querySelector('.product-detail-close2')

//los eventos que vamos a escuchar
menuEmail.addEventListener('click', function(){toggleMenus(desktopMenu)});

menuHamIcon.addEventListener('click', function(){toggleMenus(mobileMenu)});

carritoCompras.addEventListener('click', togglesidebarCarrito);


// recorres cada tajeta que esta 
for(i in productList){
  productCar[i].addEventListener('click',openCar);
}
productIcon.addEventListener('click',closedCar)

//funciones de los eventos

function openCar(){
    detalleProducto.classList.remove('inactive')
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    sidebarCarrito.classList.add('inactive'); 
  
}

function closedCar(){
  detalleProducto.classList.add('inactive')
}

function toggleMenus(menu) {
  const isClosedSidebarCarrito = sidebarCarrito.classList.contains('inactive');
  if(!isClosedSidebarCarrito){
    sidebarCarrito.classList.add('inactive');
  }
  menu.classList.toggle('inactive');
  detalleProducto.classList.add('inactive')
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
  detalleProducto.classList.add('inactive')
}





