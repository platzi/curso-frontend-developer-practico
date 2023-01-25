const nav_email = document.querySelector(`.navbar-email`);
const desktopMenu = document.querySelector(`.desktop-menu`);
const menuHamIcon = document.querySelector(`.menu`);
const menuCarIcon = document.querySelector(`.navbar-shopping-cart`);
const productDetailCloseIcon = document.querySelector(`.product-detail-close`);
const footerCart = document.querySelector('#footer-cart');
const mobileMenu = document.querySelector(`.mobile-menu`);
const shoppingCartContainer = document.querySelector(`#shoppingCartContainer`);
const montoTotal = document.querySelector('#total');
const cardsContainer = document.querySelector(`.cards-container`);
const productDetailContainer = document.querySelector(`#productDetail`);
const myOrderContent = document.querySelector(`.my-order-content`);
const contadorCarrito = document.querySelector('#cantidad-carrito');
const containPriCant = document.querySelector('.containCov')
const containProductDetail = document.querySelector('#contain-product'); 
let carrito = [];

document.addEventListener('DOMContentLoaded', () => {
  carrito = JSON.parse(localStorage.getItem('carrito')) || []
  productoEnCarrito()
})


nav_email.addEventListener(`click`, toggleDesktopMenu);
menuHamIcon.addEventListener(`click`, toggleMobileMenu);
menuCarIcon.addEventListener(`click`, toggleCarAside);
containProductDetail.addEventListener(`click`, closeProductDetailAside);

function toggleDesktopMenu() {
  const isAsideClose = shoppingCartContainer.classList.contains(`inactive`);

  if (!isAsideClose) {
    shoppingCartContainer.classList.add(`inactive`);
  }

  desktopMenu.classList.toggle(`inactive`);

  // const iscontainProductDetail =
  //   containProductDetail.classList.add(`inactive`);


}

function toggleMobileMenu() {
  const isAsideClose = shoppingCartContainer.classList.contains(`inactive`);

  if (!isAsideClose) {
    shoppingCartContainer.classList.add(`inactive`);
  }

  closeProductDetailAside();

  mobileMenu.classList.toggle(`inactive`);
}

function toggleCarAside() {
  pintarFooter()
  const isMobileMenuClosed = mobileMenu.classList.contains(`inactive`);

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add(`inactive`);
  }

  const isProductDetailClosed =
    containProductDetail.classList.contains(`inactive`);

  if (!isProductDetailClosed) {
    containProductDetail.classList.add(`inactive`);
  }

  shoppingCartContainer.classList.toggle(`inactive`);
}

function openProductDetailAside() {
  shoppingCartContainer.classList.add(`inactive`);
  containProductDetail.classList.remove(`inactive`);

  desktopMenu.classList.add(`inactive`);
}

function closeProductDetailAside() {
    containProductDetail.classList.add(`inactive`);
}


productList.forEach((product) => {

  const productCard = document.createElement(`div`);
    productCard.classList.add(`product-card`);

  const productImg = document.createElement(`img`);
  productImg.classList.add('imgCart-detail');
  productImg.setAttribute(`src`, product.image);
  productImg.addEventListener('click', () => {
  console.log(`click Imagen ${product.id}`)})
   
    
    const productInfo = document.createElement(`div`);
    productInfo.classList.add(`product-info`);

    const productInfoDiv = document.createElement(`div`);

    const productPrice = document.createElement(`p`);
    productPrice.innerText = `$` + product.price;
    const productName = document.createElement(`p`);
    productName.innerText = product.name;

    productInfoDiv.append(productPrice, productName);

    const productInfoFigure = document.createElement(`figure`);
    productInfoFigure.addEventListener("click", () => {
      addToCart(product.id)
      console.log('click')
    });
    

    const productImgCart = document.createElement(`img`);
    productImgCart.setAttribute(`src`, `./icons/bt_add_to_cart.svg`);
    //____Contenedor Secundario(mandar a llamar los elementos dentro del contenedor)_____
    productInfoFigure.appendChild(productImgCart);

    //esta linea se encargan de mandar lo que ya tenemos creado hacia el padre de cada elemento
    //_____Contenedores Principales_____
    productInfo.append(productInfoDiv, productInfoFigure);

    productCard.append(productImg, productInfo);

    cardsContainer.appendChild(productCard);
   }
    
   
)

function detallesProducto() {
  productList.find(product => {
    const productDetail = document.createElement('aside')
    productDetail.setAttribute('id', 'productDetail')

    const divImageClose = document.createElement('div');
    divImageClose.classList.add('product-detail-close');

    const imgClose = document.createElement('img')
    imgClose.setAttribute('src','./icons/icon_close.png')

    const imgProduct = document.createElement('img')
    imgProduct.setAttribute('src', product.image)
    // imgProduct.addEventListener('click', () => {
    //   console.log('click Imagen Detail');
    // })

    const productInfo = document.createElement('div')
    productInfo.classList.add('product-info')

    const pPrice = document.createElement('p')
    pPrice.textContent = product.price;

    const pName = document.createElement('p')
    pName.textContent = product.name;

    const pDescription = document.createElement('p');
    pDescription.textContent = product.description;

    const buttonAdd = document.createElement('button'); // Asi buttonAdd es ahora un HTMLElement que si contiene 'appendChild'
    buttonAdd.textContent = 'Add to cart';
    buttonAdd.classList = 'primary-button add-to-cart-button';
    
    const imgButtonCar = document.createElement('img');
    imgButtonCar.setAttribute('src', './icons/bt_add_to_cart.svg');

    //Mandar llamar elementos dentro del contenedor
    divImageClose.appendChild(imgClose);

    buttonAdd.appendChild(imgButtonCar)

    productInfo.append(pPrice, pName, pDescription, buttonAdd)

    productDetail.appendChild(divImageClose, imgProduct, productInfo)

    containProductDetail.append(productDetail)
  })
  
}

function addToCart(id){
  const existe = carrito.some((prod) => prod.id === id)

  if(existe){
    const newProduct = carrito.some(prod => {
      if(prod.id === id) {
        prod.cantidad++ 
        productoEnCarrito()
      } }) 
 return newProduct;
} else {
     const item = productList.find((prod) => prod.id === id)
      carrito.push(item)
  }
   
    productoEnCarrito();
}

function productoEnCarrito() {
    const orderContainer = document.createElement(`div`);
    orderContainer.classList.add(`my-order-content`);
    myOrderContent.innerHTML = "";
    pintarFooter()
    
    carrito.forEach((product) => {
    const shoppingCart = document.createElement(`div`);
    shoppingCart.classList.add(`shopping-cart`,'m-0', 'justify-content-between');

    const figureContainerCart = document.createElement(`figure`);
    const imgFigureCart = document.createElement(`img`);
    imgFigureCart.setAttribute(`src`, product.image);
    imgFigureCart.addEventListener(`click`, toggleCarAside);

    figureContainerCart.appendChild(imgFigureCart);

    const nameProductCart = document.createElement(`p`);
    nameProductCart.classList.add('my-0')
    nameProductCart.innerText = product.name;


    const cantidadProd = document.createElement('p');
    cantidadProd.classList.add('cantidad-product', 'm-0');
    cantidadProd.innerText =  product.cantidad;

    const priceProductCard = document.createElement(`p`);
    priceProductCard.classList.add('m-0', 'fw-bold')
    priceProductCard.innerText = `$` + product.price ;

    const containPriCant = document.createElement('div')
    containPriCant.classList.add('d-flex','align-items-center','column-gap-1','ms-3')
    containPriCant.append(cantidadProd, priceProductCard);
    
    const productImgCart =  document.createElement(`button`)
    productImgCart.classList.add('btn') 
    productImgCart.innerHTML = `<a class="link-danger">Eliminar</a>`;
    productImgCart.addEventListener('click', () => {
      eliminarProducto(product.id);
    });
    shoppingCart.append(figureContainerCart, nameProductCart, containPriCant, productImgCart);
    
    orderContainer.append(shoppingCart);
  })

  myOrderContent.appendChild(orderContainer);
  
  // const containerOrderList = document.createElement(`div`);
  // containerOrderList.classList.add(`order-container`);

  montoTotal.innerText = carrito.reduce((acc, product) => acc + product.price , 0) 

  contadorCarrito.textContent = carrito.length

  guardarStorage();
}

const pintarFooter = () => {
  footerCart.innerHTML = "";
  if(carrito.length === 0){
    footerCart.innerHTML = `
    <p class="my-4" >Vacio, agrega productos a tu carrito.</p>`
    return;
  }
}
    
function eliminarProducto(id){
 const prodId = id;
 
  carrito = carrito.filter((product) => product.id !== prodId)
  productoEnCarrito();
}

function guardarStorage() {
  localStorage.setItem("carrito", JSON.stringify(carrito))
}


