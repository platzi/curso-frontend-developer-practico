//Selectores del DOM
const menuEmail = document.querySelector('.navbar-email');
const menuContainAccount = document.querySelector('.desktop-menu');
const menuHamburguesa = document.querySelector('.menuIconHamburguesa');
const menuContainMobile = document.querySelector('.mobile-menu');

//CardsContainer: donde se incluyen cada artículo
const cardsContainer = document.querySelector('.cards-container');

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
});
menuIconCar.addEventListener('click', ()=> {
  toggleMenuShoppingCar();
  //Para cerrar el menu MObile izquierdo si está abierto
  const isActiveMenuContainMobile = menuContainMobile.classList.contains('inactive');
  !isActiveMenuContainMobile && toggleMenuHamburguesa();
  //Para cerrar el menu Account si está abierto
  const isActiveMenuAccount = menuContainAccount.classList.contains('inactive');
  !isActiveMenuAccount && toggleMenu();
});

const toggleMenu = () => menuContainAccount.classList.toggle('inactive');
const toggleMenuHamburguesa = () => menuContainMobile.classList.toggle('inactive');
const toggleMenuShoppingCar = () => aside.classList.toggle('inactive');

let productsList;

const db = [
  {
    imgSrc: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    name: 'Bike',
    price: 220
  },
  {
    imgSrc: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    name: 'Car',
    price: 2020
  },
  {
    imgSrc: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    name: 'Destockp',
    price: 500
  },
  {
    imgSrc: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    name: 'Mouse',
    price: 70
  },
  {
    imgSrc: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    name: 'Televisor',
    price: 670
  },
  {
    imgSrc: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    name: 'Disco Duro',
    price: 330
  },
];

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

const renderHtml = (url, name, price) => {
  const divProductCard = document.createElement('div');
  divProductCard.classList.add('product-card');

  const imgPrincipal = document.createElement('img');
  imgPrincipal.setAttribute('src', url);

  const divProductInfo = document.createElement('div');
  divProductInfo.classList.add('product-info');

  const divChild = document.createElement('div');
  const pPrice = document.createElement('p');
  pPrice.append(`$ ${price}`);
  const pName = document.createElement('p');
  pName.innerText = `$ ${name}`;
  divChild.append(pPrice, pName);

  const figure = document.createElement('figure');
  const imgFigure = document.createElement('img');
  imgFigure.setAttribute('src', './icons/bt_add_to_cart.svg');
  figure.append(imgFigure);

  divProductInfo.append(divChild, figure);
  divProductCard.append(imgPrincipal, divProductInfo);
  cardsContainer.append(divProductCard);

  const cargando = document.querySelector('.cargando');
  cargando.classList.add('inactive');
}

db.forEach(product => renderHtml(product.imgSrc, product.name, product.price))