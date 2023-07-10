const menuEmail = document.querySelector('.navbar-email')
const mainsCont = document.querySelector('.main-container')
const menuHamIcon = document.querySelector('.menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const productDetailContainer = document.querySelector('#productDetail')
const cardsContainer = document.querySelector('.cards-container')
const myOrderList = document.querySelector('#my-order')
const btnOrderList = document.querySelector('.primary-button')
const mainContainer = document.querySelector('.main-container')
const btnlogin = document.querySelector('#btnlogin')
const loginMenu = document.querySelector('#login')
const btnEdit = document.querySelector('.login-button')
const editMenu = document.querySelector('#edit')
const btnsout = document.querySelector('#btnss')
const mainSignMenu = document.querySelector('.sign-main')
const btnBackMain = document.querySelector('.edit-button')
const btnPass = document.querySelector('.btn-pass')
const passMenu = document.querySelector('.pass')
const btnPassMenuBack = document.querySelector('.btn-pass-main')
const btnEmailSend = document.querySelector('.email-send')
const menuSend = document.querySelector('.emailsend') 
const btnf = document.querySelector('.btn-fin')

//mconst mobile version
const btnmobile1 = document.querySelector('.btnMobile1')
const btnmobile2 = document.querySelector('.btnMobile2')
const btnmobile3 = document.querySelector('.emailMobile')
const btnmobile4 = document.querySelector('.signMobile')


menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)
btnOrderList.addEventListener('click',toggleMyOrderList)
btnlogin.addEventListener('click',openLogin)
btnEdit.addEventListener('click',Edit)
btnsout.addEventListener('click',openEdit)
btnBackMain.addEventListener('click',backMain)
btnPass.addEventListener('click',openPassword)
btnEmailSend.addEventListener('click',openEmailSend)
btnmobile4.addEventListener('click',openSignMobile)

// escucahr eventos en mobile
btnmobile1.addEventListener('click',openMyOrdersMobile)
btnmobile2.addEventListener('click',openLoginMobile)

// Funciones de menus displays
function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive')
  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive')
  }
  closeProductDetailAside();
  desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive')
  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive')
  }
  closeProductDetailAside();
  mobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isDesktopmenuClose = desktopMenu.classList.contains('inactive');

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive')
  } 

  if (!isDesktopmenuClose){
    desktopMenu.classList.toggle('inactive')
  }

  const isproductDetailClose = productDetailContainer.classList.contains('inactive');

  if (!isproductDetailClose) {
    productDetailContainer.classList.add('inactive')
  }

  shoppingCartContainer.classList.toggle('inactive')
} 

// Agregar carritos desde un Array

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});
productList.push({
  name: 'Pantalla',
  price: 345,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  
});
productList.push({
  name: 'Iphone',
  price: 213,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  
});

// mas funciones
function openProductDetailAside(){
  shoppingCartContainer.classList.add('inactive')
  desktopMenu.classList.add('inactive')
  productDetailContainer.classList.remove('inactive')
}

function closeProductDetailAside(){
  productDetailContainer.classList.add('inactive')
}

function renderProducts(arr){
  for (product of arr){
    console.log(product.name)
    
    // para cada product me vas a crear su elemento div
    const productcard = document.createElement('div');
    productcard.classList.add('product-card');
  
    // para cada product me vas a crear su elemento img
    const productimg = document.createElement('img')
    // Aqui vamos a agregar el atributo que ya venia desde
    // el objeto osea product.image -> product{name,price,image}
    productimg.setAttribute('src', product.image)
    productimg.addEventListener('click', openProductDetailAside)
  
    const productinfo = document.createElement('div');
    productinfo.classList.add('product-info');
  
    const productinfodiv = document.createElement('div');
  
    const productprice = document.createElement('p');
    productprice.innerText = '$' + product.price;
  
    const productname = document.createElement('p');
    productname.innerText = product.name; 
  
    productinfodiv.appendChild(productprice);
    productinfodiv.appendChild(productname);
  
    const productinfofigure = document.createElement('figure');
    const productimgcard = document.createElement('img');
    productimgcard.setAttribute('src', './icons/bt_add_to_cart.svg')
  
    productinfofigure.appendChild(productimgcard);
  
  
    productinfo.appendChild(productinfodiv)
    productinfo.appendChild(productinfofigure)
  
    productcard.appendChild(productimg)
    productcard.appendChild(productinfo)
  
    cardsContainer.appendChild(productcard)
  }
}

// Creamos una funcion para poder utilizar el for cuanto queramos
renderProducts(productList)

// Funciones de carrito display
function toggleMyOrderList() {
  myOrderList.classList.toggle('inactive')

  const isAsideClosed = shoppingCartContainer.classList.contains('inactive')
  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive')
  }
}


// funciones mobile
function openMyOrdersMobile(){
  myOrderList.classList.toggle('inactive')

  toggleMobileMenu()

  if (!mainContainer.classList.contains('inactive')){
    mainContainer.classList.toggle('inactive')
  } else {
    backMain()
  }
}
function openLoginMobile() {
  loginMenu.classList.toggle('inactive')
  mainContainer.classList.toggle('inactive')

  const isAsideClosed = shoppingCartContainer.classList.contains('inactive')
  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive')
  }
  closeProductDetailAside();
  mobileMenu.classList.toggle('inactive')

}
function openSignMobile() {
  openEdit()
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive')
  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive')
  }
  closeProductDetailAside();
  mobileMenu.classList.toggle('inactive')
}


// Login
function openLogin() {
  loginMenu.classList.toggle('inactive')
  mainContainer.classList.toggle('inactive')
}

function Edit() {
  editMenu.classList.toggle('inactive')
  loginMenu.classList.add('inactive')
  console.log('hola') 
}

function openEdit() {
  mainSignMenu.classList.toggle('inactive')
  const isMainCerrada = mainContainer.classList.contains('inactive')
  


  if (!isMainCerrada) {
    mainContainer.classList.add('inactive')
  } else {
    mainContainer.classList.toggle('inactive')
  }


}

function backMain() {
  window.location.href = "index.html";
  console.log('hola')
}

function openPassword() {
  passMenu.classList.toggle('inactive')
  mainSignMenu.classList.add('inactive')

  btnPassMenuBack.addEventListener('click',backMain)

}

function openEmailSend(){
  mainSignMenu.classList.add('inactive')
  menuSend.classList.remove('inactive')

  btnf.addEventListener('click',backMain)
}