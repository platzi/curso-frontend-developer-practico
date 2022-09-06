const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const cartIcon = document.querySelector(".navbar-shopping-cart");
const cartMenu = document.querySelector("#cartMenu");
const cartdsCont = document.querySelector(".cards-container");
const productDetail = document.querySelector("#productDetail");
const productDdetailClose = document.querySelector('.product-detail-close');

//DesktopMenu
menuEmail.addEventListener("click", toggleDesktopMenu);
//MobileMenu
mobileIcon.addEventListener("click", toggleMobileMenu);
//CartMenu
cartIcon.addEventListener("click", toggleCartMenu);

//Close detail
productDdetailClose.addEventListener("click", closeProductoDetail);

//DesktopMenu
function toggleDesktopMenu() {
  const isCartMenu = !cartMenu.classList.contains("inactive");

  if (isCartMenu) {
    cartMenu.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");


}

//MobileMenu
function toggleMobileMenu() {
  const isCartMenu = !cartMenu.classList.contains("inactive");

  if (isCartMenu) {
    cartMenu.classList.add("inactive");
  }

  if(!productDetail.classList.contains('inactive')){
    productDetail.classList.add('inactive');
  }

  mobileMenu.classList.toggle("inactive");
}

//CartMenu
function toggleCartMenu() {
  const isDesktopMenu = !desktopMenu.classList.contains("inactive");
  const isMobileMenu = !mobileMenu.classList.contains("inactive");

  if (isDesktopMenu) {
    desktopMenu.classList.add("inactive");
  }

  if (isMobileMenu) {
    mobileMenu.classList.add("inactive");
  }

  if(!productDetail.classList.contains('inactive')){
    productDetail.classList.add('inactive');
  }

  cartMenu.classList.toggle("inactive");  
  
}

//body 
let productos = [];
productos.push({
  name: 'Producto1',
  price: 620,
  img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productos.push({
  name: 'Producto2',
  price: 515,
  img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productos.push({
  name: 'Producto3',
  price: 300,
  img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productos.push({
  name: 'Producto4',
  price: 111,
  img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


//Recorrere productos

/*
<div class="product-card">
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
</div>
*/

function renderProduct(productosArr){

  for(producto of productosArr){
    //definicicon del elemento
    const divElement = document.createElement("div");
    divElement.classList.add('product-card');
    
    //imagen
    const imgCart = document.createElement("img");
    imgCart.setAttribute('src', producto.img);
    imgCart.addEventListener('click', openProductoDetail);
  
    //div info
    const divProducInf = document.createElement('div');
    divProducInf.classList.add('product-info');
  
    //div price
    const divPrice = document.createElement('div');
  
    //div parrafo Producto
    const divParrafoName = document.createElement('p');
    divParrafoName.innerText = producto.name;
  
    //div parrafo Price
    const divParrafoPrice = document.createElement('p');
    divParrafoPrice.innerText = producto.price;
  
    //div figure
    const divFigure = document.createElement('figure');
    //imagen figure
    const divImgFigure = document.createElement('img');
    divImgFigure.setAttribute('src', "./icons/bt_add_to_cart.svg");
  
  
    //Append child
    cartdsCont.appendChild(divElement);
    divElement.appendChild(divProducInf);
    divElement.appendChild(imgCart);
    divProducInf.appendChild(divPrice);
    divProducInf.appendChild(divFigure);
    divPrice.appendChild(divParrafoName);
    divPrice.appendChild(divParrafoPrice);
    divFigure.appendChild(divImgFigure);
  }
}

renderProduct(productos);

function openProductoDetail(arrg){

  if(!mobileMenu.classList.contains("inactive")){
    mobileMenu.classList.add("inactive");
  }

  productDetail.classList.remove('inactive');
}

function closeProductoDetail(){
  if(!cartMenu.classList.contains('inactive')){
    cartMenu.classList.add('inactive');
  }

  productDetail.classList.add('inactive');
}








