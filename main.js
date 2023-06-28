const menuEmail = document.querySelector('.navbar-email')
const menuHamIcon = document.querySelector('.menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const aside = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)


// Funciones de menus displays
function toggleDesktopMenu() {
  const isAsideClosed = aside.classList.contains('inactive')
  if (!isAsideClosed) {
    aside.classList.add('inactive')
  }
  desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains('inactive')
  if (!isAsideClosed) {
    aside.classList.add('inactive')
  }
  mobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isDesktopmenuClose = desktopMenu.classList.contains('inactive');

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive')
  } 
  aside.classList.toggle('inactive')

  if (!isDesktopmenuClose){
    desktopMenu.classList.toggle('inactive')
  }
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