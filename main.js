//Selectores del DOM
const menuEmail = document.querySelector('.navbar-email');
const menuContainAccount = document.querySelector('.desktop-menu');
const menuHamburguesa = document.querySelector('.menuIconHamburguesa');
const menuContainMobile = document.querySelector('.mobile-menu');

//CardsContainer: donde se incluyen cada artículo
const cardsContainer = document.querySelector('.cards-container');

//Aside de la información de un articulo (barra lateral)
const asideProductInfoDetail = document.querySelector('.product-info-detail');
// const iconCloseAsideProductInfoDetail = document.querySelector('.product-info-detail-close');

//contenedor de productos en el carrito
const shoppingCartContainer = document.querySelector('.my-order-content');
const TotalPriceShoppingCar = document.querySelector('.saltoLine');
const numberOfProductsShoppingCar = document.querySelector('#lengthProductsShoppingCar');
const containerTotalOrder = document.querySelector('.container-total-order');
const containerTotalPriceShoppingCar = document.querySelector('.order');
const btnCheckout = document.querySelector('.btnCheckout');
const sumTotalCar = document.getElementById('sumTotalCar');

//Variable global para el valor total a pagar
let priceTotalOrder = 0;

const menuIconCar = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', ()=> {
  toggleMenu();
  const isActiveAside = aside.classList.contains('inactive');
  !isActiveAside && toggleMenuShoppingCar();
});
menuHamburguesa.addEventListener('click', ()=> {
  toggleMenuHamburguesa();
  const isActiveAside = aside.classList.contains('inactive');
  !isActiveAside && toggleMenuShoppingCar();
  //Para cerrar el aside con la información o detalle de un producto si está abierto
  const isActiveAsideDetail = asideProductInfoDetail.classList.contains('inactive');
  !isActiveAsideDetail && asideProductInfoDetail.classList.add('inactive');
});
menuIconCar.addEventListener('click', ()=> {
  toggleMenuShoppingCar();
  //Para cerrar el menu MObile izquierdo si está abierto
  const isActiveMenuContainMobile = menuContainMobile.classList.contains('inactive');
  !isActiveMenuContainMobile && toggleMenuHamburguesa();
  //Para cerrar el menu Account si está abierto
  const isActiveMenuAccount = menuContainAccount.classList.contains('inactive');
  !isActiveMenuAccount && toggleMenu();
  //Para cerrar el aside con la información o detalle de un producto si está abierto
  const isActiveAside = asideProductInfoDetail.classList.contains('inactive');
  !isActiveAside && asideProductInfoDetail.classList.add('inactive');
});
// iconCloseAsideProductInfoDetail.addEventListener('click', closeDetailInfoAside)

const toggleMenu = () => menuContainAccount.classList.toggle('inactive');
const toggleMenuHamburguesa = () => menuContainMobile.classList.toggle('inactive');
const toggleMenuShoppingCar = () => aside.classList.toggle('inactive');


const db = [
  {
    id: 1,
    imgSrc: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    name: 'Bike',
    price: 220,
    description: `Esta es la descripcion del producto ${this.id}`
  },
  {
    id: 2,
    imgSrc: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Car',
    price: 2020,
    description: `Esta es la descripcion del producto ${this.id}`
  },
  {
    id: 3,
    imgSrc: 'https://images.pexels.com/photos/6045232/pexels-photo-6045232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Destockp',
    price: 500,
    description: `Esta es la descripcion del producto ${this.id}`
  },
  {
    id: 4,
    imgSrc: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Mouse',
    price: 70,
    description: `Esta es la descripcion del producto ${this.id}`
  },
  {
    id: 5,
    imgSrc: 'https://images.pexels.com/photos/5721805/pexels-photo-5721805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Televisor',
    price: 670,
    description: `Esta es la descripcion del producto ${this.id}`
  },
  {
    id: 6,
    imgSrc: 'https://images.pexels.com/photos/2942361/pexels-photo-2942361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Disco Duro',
    price: 330,
    description: `Esta es la descripcion del producto ${this.id}`
  },
];


const openDetailInfoAside = (id) => {  
  const isActiveAside = renderAsideInfoDetail(id);
  const isOpenCartAside = aside.classList.contains('inactive');
  const isOpenMenuMobile = menuContainMobile.classList.contains('inactive');
  if(isActiveAside){
    asideProductInfoDetail.classList.remove('inactive');
    !isOpenCartAside && aside.classList.add('inactive');
    !isOpenMenuMobile && menuContainMobile.classList.add('inactive')
  };
}


function closeDetailInfoAside(){
  asideProductInfoDetail.classList.add('inactive');
}

// for (product of db){
//   const card = createHtml(product.imgSrc, product.name, product.price);
//   cardsContainer.innerHTML += card;
// }

// function createHtml(url, name, price){
//   const html = `
//   <div class="product-card">
//     <img src="${url}" alt="">
//     <div class="product-info">
//       <div>
//         <p>$ ${price}</p>
//         <p>${name}</p>
//       </div>
//       <figure>
//         <img src="./icons/bt_add_to_cart.svg" alt="">
//       </figure>
//     </div>
//   </div>
//   `;
//   return html;
// };

const renderHtml = (id, url, name, price) => {
  const divProductCard = document.createElement('div');
  divProductCard.classList.add('product-card');

  const imgPrincipal = document.createElement('img');
  imgPrincipal.setAttribute('src', url);
  imgPrincipal.addEventListener('click', () => openDetailInfoAside(id))

  const divProductInfo = document.createElement('div');
  divProductInfo.classList.add('product-info');

  const divChild = document.createElement('div');
  const pPrice = document.createElement('p');
  pPrice.append(`$ ${price}`);
  const pName = document.createElement('p');
  pName.innerText = `${name}`;
  divChild.append(pPrice, pName);

  const figure = document.createElement('figure');
  const imgFigure = document.createElement('img');
  imgFigure.setAttribute('src', './icons/bt_add_to_cart.svg');
  imgFigure.addEventListener('click', () => addProductToCar(id));
  figure.append(imgFigure);

  divProductInfo.append(divChild, figure);
  divProductCard.append(imgPrincipal, divProductInfo);
  cardsContainer.append(divProductCard);

  const cargando = document.querySelector('.cargando');
  cargando.classList.add('inactive');
}

const renderAsideInfoDetail = (id) => {
  const product = db.find(product => product.id == id);
  const htmlAside = `
    <div class="product-info-detail-close">
      <img src="./icons/icon_close.png" alt="close">
    </div>
    <img src="${product.imgSrc}" alt="${product.name}">
    <div class="info-datail">
      <p>$ ${product.price}</p>
      <p>${product.name}</p>
      <p>${product.description}</p>
      <button onclick="addProductToCar(${id})" class="primary-button add-to-cart-button">
        <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
        Add to cart
      </button>
    </div>
  `;
  asideProductInfoDetail.innerHTML = htmlAside;
  asideProductInfoDetail.classList.remove('inactive');

  const iconCloseAsideProductInfoDetail = document.querySelector('.product-info-detail-close');
  iconCloseAsideProductInfoDetail.addEventListener('click', closeDetailInfoAside)
  return true
}

//Agregando un producto de la lista del carrito
const addProductToCar = (id) => {
  const product = db.find(product => product.id == id);
  const divmain = document.createElement('div');
  divmain.classList.add('shopping-cart');
  divmain.setAttribute('id', id);
  const figure = document.createElement('figure');
  const imgProduct = document.createElement('img');
  imgProduct.setAttribute('src', `${product.imgSrc}`);
  figure.append(imgProduct);
  const pName = document.createElement('p');
  pName.append(`${product.name}`);
  const pPrice = document.createElement('p');
  pPrice.append(`${product.price}`);
  const imgIconClose = document.createElement('img');
  imgIconClose.setAttribute('src', './icons/icon_close.png');
  imgIconClose.addEventListener('click', () => deleteProductOfCar(id))
  divmain.append(figure, pName, pPrice, imgIconClose);
  TotalPriceShoppingCar.after(divmain);
  
  const totalPrice = getPrice(id);
  priceTotalOrder += totalPrice;
  sumTotalCar.innerText = priceTotalOrder;
  const numberOfProducts = countProductsOfShoppingCar();
  if(numberOfProducts == 1) containerTotalOrder.classList.remove('inactive')
  
}

//Eliminando un producto de la lista del carrito
const deleteProductOfCar = (id) => {
  const productToDelete = document.getElementById(id);
  shoppingCartContainer.removeChild(productToDelete);

  const totalPrice = getPrice(id);
  priceTotalOrder -= totalPrice;
  sumTotalCar.innerText = priceTotalOrder;
  const numberOfProducts = countProductsOfShoppingCar();
  if(numberOfProducts == 0) containerTotalOrder.classList.add('inactive')
}
//Contador de la cantidad de productos en la lista del carrito
const countProductsOfShoppingCar = () => {
  const listProductsShoppingCar = Array.from(document.querySelectorAll('.shopping-cart'));
  numberOfProductsShoppingCar.innerText = listProductsShoppingCar.length;
  return listProductsShoppingCar.length;
}

const getPrice = (id) => {
  const product = db.find(product => product.id == id);
  return product.price;
}

db.forEach(product => renderHtml(product.id, product.imgSrc, product.name, product.price));
