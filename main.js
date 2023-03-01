// ----- SELECCIONES ------
const navbarEmail = document.querySelector('.navbar-email');
const menuHam = document.querySelector('.menu');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const asideProDetail = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

// ----- AÑADIR ESCUCHA DE EVENTOS -----
navbarEmail.addEventListener('click', toggleDesktopMenu);
menuHam.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleProDetail);

// ----- Cambiar clase correo desktopMeu -----
function toggleDesktopMenu() {
  const isProDetailClose = asideProDetail.classList.contains('inactive');

  //Ocultar asideProDetail si este está abierto al abrir el menu hamburguesa
  if (!isProDetailClose) {
    asideProDetail.classList.add('inactive');
  }

  desktopMenu.classList.toggle('inactive'); //la clase no se le pone el punto
}

// ----- Cambiar clase mobileMenu -----
function toggleMobileMenu() {
  const isProDetailClose = asideProDetail.classList.contains('inactive');

  //Ocultar asideProDetail si este está abierto al abrir el menu hamburguesa
  if (!isProDetailClose) {
    asideProDetail.classList.add('inactive');
  }

  mobileMenu.classList.toggle('inactive');
}

// ----- Cambiar clase productDetail -----
function toggleProDetail() {
  //Devuelve true si el menu hamburguesa esta cerrado
  const isMobileMenuClose = mobileMenu.classList.contains('inactive');

  const isDesktopMenuClose = desktopMenu.classList.contains('inactive');

  //Ocultar menu hamburguesa si este está abierto al abrir el asideProDetail
  if (!isMobileMenuClose) { //Si está abierto el menú hamburguesa (no tiene clase inactive)
    mobileMenu.classList.add('inactive') //Ocultar el menú hamburguesa (poner clase inactive)
  }
  //Ocultar desktopMenu si este está abierto al abrir el asideProDetail
  if (!isDesktopMenuClose) {
    desktopMenu.classList.add('inactive')
  }

  asideProDetail.classList.toggle('inactive'); //Cambiar clase dependiendio si ya lo tiene o no
}

//----- Crear productos -----
//Crear array que almacena los productos
const productList = [];

//Agega nuevos elementos al final del array
productList.push(
  {
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    name: 'Skateboard',
    price: 90,
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthebigrideguide.com%2Fwp-content%2Fuploads%2F2021%2F06%2FBest-Electric-Skateboard-Kit-1122x748.jpg&f=1&nofb=1&ipt=d7878fa550bfd8537eb017af68f190607d444c7087ba669515b145f20e7a5fb9&ipo=images',
  },
  {
    name: 'Motorcycle Helmet',
    price: 40,
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fkey-se.co.uk%2Fwp-content%2Fuploads%2F2020%2F06%2FIMG_0971-scaled.jpg&f=1&nofb=1&ipt=90751032b54d1f66a008c24af67f3d0877835cb6ff8fc6399f837f436bc33e05&ipo=images',
  },
  {
    name: 'Bmx Bike',
    price: 150,
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fridersvibe.com%2Fwp-content%2Fuploads%2F2019%2F10%2FBest-BMX-Brands.jpg&f=1&nofb=1&ipt=be5dda1b64d97690f1f6a72f4a3679763ec40aee10715ad08a07ac37ce8082b2&ipo=images',
  },
  {
    name: 'Soccer Ball',
    price: 59,
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhttp2.mlstatic.com%2FD_NQ_NP_2X_721839-MLM27425378117_052018-F.jpg&f=1&nofb=1&ipt=ad8ccd5d2bead063bcad088f41eb2af4921a50bcce003895fecb5f9c26ca196c&ipo=images'
  },
  {
    name: 'Electric Scooter',
    price: 170,
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.veemsmotos.com%2Fimgs%2Fproductos%2Fproductos40_2714.jpg&f=1&nofb=1&ipt=b6bab7b57df40e26a6d1ca302f4f5a6337836161cc6489ec8b293cb52a0bcc0f&ipo=images'
  }
);

//Función que recibe como parámetro un array
function renderProducts(arr) {
  //Recorrer el array con un atajo
  for (product of arr) { //Product = {name, price, image}
    //Crear elementos HTML individuales
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const img = document.createElement('img');
    img.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    const productInfoFigure = document.createElement('figure');
    const productCartImg = document.createElement('img');
    productCartImg.setAttribute('src', './icons/bt_add_to_cart.svg');

    //Insertar elementos dentro de sus padres (Empezar desde el más hijo hasta el más padre)
    productInfoFigure.appendChild(productCartImg);
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    productCard.appendChild(img);
    productCard.appendChild(productInfo);
    cardsContainer.appendChild(productCard);
  }
}

//Llamado de la función con pasándole el array de productos
renderProducts(productList);