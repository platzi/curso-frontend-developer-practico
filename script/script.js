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

const productList = [
  {
    id: 1,
    name: `Bike`,
    cantidad: 1,
    price: 120,
    image: `https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=600`,
  }
  ,{
    id: 2,
    name: `Monitor`,
    cantidad: 1,
    price: 300,
    image: `https://www.lg.com/mx/images/monitores/md06126439/Gallery/D-4.jpg`,
  }
  ,{
    id: 3,
    name: `Teclado`,
    cantidad: 1,
    price: 56,
    image: `http://cdn.shopify.com/s/files/1/2272/2505/products/1_6e7aab19-2943-4a9b-8f63-52d4337c5a44.jpg?v=1621447358`,
  }
  ,{
    id: 4,
    name: `Cascos de Audio`,
    cantidad: 1,
    price: 110,
    image: `https://www.officedepot.com.mx/medias/100021917.jpg-1200ftw?context=bWFzdGVyfHJvb3R8NDgzNjQ3fGltYWdlL2pwZWd8aDI1L2g5ZS8xMDA1MTI3ODkyOTk1MC5qcGd8MDFhOWMzODUwNzg4ZTdkMzA0NTljODZiZGU0Y2M2MmFmNmFkN2Y3NjY1NTljYjQwMzQ5OGRhZDU2NWI0N2EwNA`,
  },
  {
    id: 5,
    name: `Regulador`,
    cantidad: 1,
    price: 50,
    image: `https://digitalconnection.com.ec/wp-content/uploads/2021/02/REGULADOR-DE-VOLTAJE-FVR-1200B-FORZA-1200VA-600W-120V-8-TOMAS-2.jpg`,
  },
  {
    id: 6,
    name: `Motocicleta`,
    cantidad: 1,
    price: 1200,
    image: `http://cdn2.dineroenimagen.com/media/dinero/styles/xlarge/public/images/2020/01/2291628.jpg`,
  }
  ,{
    id: 7,
    name: `Guantes FutBol`,
    cantidad: 1,
    price: 50,
    image: `https://m.media-amazon.com/images/I/81N2C7J6chL._AC_SX425_.jpg`,
  }
  ,{
    id: 8,
    name: `Tennis Futbol`,
    cantidad: 1,
    price: 80,
    image: `https://m.media-amazon.com/images/I/61xRv7viPML._AC._SR360,460.jpg`,
  }
  ,{
    id: 9,
    name: `Sillon Personal`,
    cantidad: 1,
    price: 450,
    image: `https://assets.sams.com.mx/image/upload/f_auto,q_auto:eco,w_350,c_scale,dpr_auto/mx/images/product-images/img_medium/980037750m.jpg`,
  }
  ,{
    id: 11,
    name: `Carrito Control Remoto`,
    cantidad: 1,
    price: 130,
    image: `https://m.media-amazon.com/images/I/61ySBqnUsML._AC_SX425_.jpg`,
  }
  ,{
    id: 12,
    name: `Tripie Celular`,
    cantidad: 1,
    price: 60,
    image: `https://m.media-amazon.com/images/I/41fIQhZwUxL._AC_SS450_.jpg`,
  }
  ,{
    id: 13,
    name: 'Mesa de Plastico',
    cantidad: 1,
    price: 230,
    image: `https://http2.mlstatic.com/D_NQ_NP_927442-MLM48601643295_122021-O.jpg`,
  }
  ,{
    id: 14,
    name: `Hielera Grande`,
    cantidad: 1,
    price: 170,
    image: `https://img.uline.com/is/image/uline/H-7737?$Mobile_SI$`,
  }
  ,{
    id: 15,
    name: `Reloj de Oro`,
    cantidad: 1,
    price: 3000,
    image: ``,
  }
  ,{
    id: 16,
    name: `Bocinas Modulares`,
    cantidad: 1,
    price: 340,
    image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDQWJYWGsyNVj0bZJmZ-uAj9IIdhL50LcnpQ&usqp=CAU`,
  }
  ,{
    id: 17,
    name: `Mochila`,
    cantidad: 1,
    price: 90,
    image: `https://cdn.shopify.com/s/files/1/0462/9499/1012/products/ee0275525953b07e64946b6c5129d51de33cb405a6783b79a2fbbc89d811f130_384x384.jpg?v=1658326789`,
  },
  {
    id: 18,
    name: `Ventilador`,
    cantidad: 1,
    price: 120,
    image: `https://www.sams.com.mx/images/product-images/img_small/980017239s.jpg`,
  }
];




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


