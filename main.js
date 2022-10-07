

let menuEmail = document.querySelector('.navbar-email');

let desktopMenu = document.querySelector('.desktop-menu');

let menuHamIcon = document.querySelector('.menu');

let mobileMenu = document.querySelector('.mobile-menu');

let iconShopping = document.querySelector('.navbar-shopping-cart');

let asideShopping = document.querySelector('.shoppingCartContainer');

// let productDetailContainer = document.querySelector('.productDetail');

let cardsContainer = document.querySelector('.cards-container');

let productDetailLeft   = document.querySelector('.product-detail-left')

let productDetailClose  = document.querySelector('.product-detail-close')

let myordercontentContainer = document.querySelector('.my-order-content')
let countCarrito        = document.querySelector('.navbar-shopping-cart div')
let totalCarrito        = document.querySelector('.total')
let modal               = document.querySelector('.modal')
let cerrarModal         = document.querySelector('.boton-modal')
let productImageInfor   = document.querySelector('.product-detail-left > img:nth-child(2)')
let labelPriceInfo      = document.querySelector('.product-info-left p:nth-child(1)')
let labelNameInfo       = document.querySelector('.product-info-left p:nth-child(2)')
let labelInforInfo      = document.querySelector('.product-info-left p:nth-child(3)')
let buttonInfo          = document.querySelector('.add-to-cart-button')
let productosEnCarrito  = []
let productoACarrito    = []


countCarrito.innerText = document.querySelectorAll('.shopping-cart').length
totalCarrito.innerText = '$0.00'

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
iconShopping.addEventListener('click', toggleAsideShopping)
productDetailClose.addEventListener('click',closeProductDetail)
buttonInfo.addEventListener('click', butonClick)
cerrarModal.addEventListener('click', closeModal)

function butonClick(){
  agregarCarrito(productoACarrito)
}

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  asideShopping.classList.add("inactive");
  productDetailClose.classList.add("inactive");

  // const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  // if (!isAsideClosed) {
  //   shoppingCartContainer.classList.add('inactive');
  // }
  
  // desktopMenu.classList.toggle('inactive');

}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
  asideShopping.classList.add("inactive");
  productDetailClose.classList.add("inactive");

  // const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  // if (!isAsideClosed) {
  //   shoppingCartContainer.classList.add('inactive'); 
  // }

  // closeProductDetailAside();
  
  // mobileMenu.classList.toggle('inactive');

}

function toggleAsideShopping(){
  productDetailLeft.classList.add('inactive')
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive')
  asideShopping.classList.toggle('inactive')
}

function openProductDetail(){
  asideShopping.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  productDetailLeft.classList.remove('inactive')
}

function closeProductDetail(){
  productoACarrito = []
  asideShopping.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  productDetailLeft.classList.add('inactive')
}

function verificarProducto(nameProduct){
  return productosEnCarrito.some(function(articulo){
      return articulo === nameProduct
  })
}

function closeModal(){
  modal.style.display = 'none'
}

let productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Laptop',
  price: 1220,
  image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
});
productList.push({
  name: 'Pantalla',
  price: 520,
  image: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=800',
});
productList.push({
  name: 'Smarthphone',
  price: 1300,
  image: 'https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=800',
});
productList.push({
  name: 'Watch',
  price: 400,
  image: 'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=800',
});
productList.push({
  name: 'Headphones',
  price: 250,
  image: 'https://images.pexels.com/photos/815494/pexels-photo-815494.jpeg?auto=compress&cs=tinysrgb&w=800',
});
productList.push({
  name: 'Tablet',
  price: 420,
  image: 'https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800',
});
productList.push({
  name: 'Charger',
  price: 80,
  image: 'https://images.pexels.com/photos/1694830/pexels-photo-1694830.jpeg?auto=compress&cs=tinysrgb&w=800',
});
productList.push({
  name: 'Speaker',
  price: 75,
  image: 'https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&w=800',
});



function renderListProduct(productList){
  for (const product of productList) {
    let divproductCard = document.createElement('div')
    let imgproductcard = document.createElement('img')
    let divproductinfo = document.createElement('div')
    let divdivproductinfo = document.createElement('div')
    let pprice = document.createElement('p')
    let pname = document.createElement('p')
    let figureproductinfo = document.createElement('figure')
    let imgproductinfo = document.createElement('img')

    divproductCard.classList.add('product-card')
    imgproductcard.setAttribute('src', product.image)
    divproductinfo.classList.add('product-info')
    pprice.innerText ='$' + product.price
    pname.innerText = product.name
    imgproductinfo.setAttribute('src', './icons/bt_add_to_cart.svg')
      
    figureproductinfo.appendChild(imgproductinfo)
    divdivproductinfo.appendChild(pprice)
    divdivproductinfo.appendChild(pname)

    divproductinfo.appendChild(divdivproductinfo)
    divproductinfo.appendChild(figureproductinfo)

    divproductCard.appendChild(imgproductcard)
    divproductCard.appendChild(divproductinfo)

    cardsContainer.appendChild(divproductCard)

    imgproductcard.addEventListener('click', function(){
      mostrarInfoProduct(product.image, product.price, product.name, product.desc)
      openProductDetail()
    });

    imgproductinfo.addEventListener('click', function(){
      let productoAgregado = []
      productoAgregado.push({
        name: product.name,
        price: product.price,
        image: product.image
      })
      agregarCarrito(productoAgregado)
    })
  }
}


/* Funcion para agregar productos al carrito */
function agregarCarrito(producto){
  if(verificarProducto(producto[0].name)){
      productoACarrito= []
      return modal.style.display = 'grid'
  }

  /* Creacion de elemtentos HTML */
  let divShoppingCart = document.createElement('div')
  let figureShoppingCart = document.createElement('figure')
  let imgfigureShoppingCart = document.createElement('img')
  let pnameShoppingCart = document.createElement('p')
  let ppriceShoppingCart = document.createElement('p')
  let imgcloseShoppingCart = document.createElement('img')

  /* Se agrega contenido a cada uno de los elementos */
  divShoppingCart.classList.add('shopping-cart')
  imgfigureShoppingCart.setAttribute('src', producto[0].image)
  pnameShoppingCart.innerText = producto[0].name
  ppriceShoppingCart.innerText ='$' + producto[0].price
  imgcloseShoppingCart.setAttribute('src','./icons/icon_close.png')
  imgcloseShoppingCart.classList.add('removeList')

  /* Se insertan los documentos */
  figureShoppingCart.appendChild(imgfigureShoppingCart)
  divShoppingCart.appendChild(figureShoppingCart)
  divShoppingCart.appendChild(pnameShoppingCart)
  divShoppingCart.appendChild(ppriceShoppingCart)
  divShoppingCart.appendChild(imgcloseShoppingCart)
  myordercontentContainer.appendChild (divShoppingCart)

  /* Se agregan la cantidad de productos ademas de la suma de precios */
  countCarrito.innerText = document.querySelectorAll('.shopping-cart').length
  totalCarrito.innerText = '$' + (Number(totalCarrito.innerText.substring(1)) + Number(producto[0].price))
  productosEnCarrito.push(producto[0].name)
  
  /* Funcion para quitar productos del carrito */
  imgcloseShoppingCart.addEventListener('click', function(){
      divShoppingCart.remove()
      countCarrito.innerText = document.querySelectorAll('.shopping-cart').length
      totalCarrito.innerText = '$' + (Number(totalCarrito.innerText.substring(1)) - Number(producto[0].price))
      productosEnCarrito.splice(productosEnCarrito.indexOf(producto[0].name),1)
  }) 

}


function mostrarInfoProduct(imagen, precio, nombre, descripcion){
  productImageInfor.setAttribute('src', imagen)
  labelPriceInfo.innerText = '$' + precio
  labelNameInfo.innerText = nombre
  labelInforInfo.innerText = descripcion
  productoACarrito = []
  productoACarrito.push({
    name: nombre,
    price: precio,
    image: imagen
  })
}

renderListProduct(productList);