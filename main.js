// ------------------------Variables-----------------------------
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const mobileMenu = document.querySelector('.mobile-menu');
const menuHamIcon = document.querySelector('.menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside=document.querySelector('.aside-order');





// -------------------Llamando Eventos-------------------------------
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);


// -----------------------Funciones----------------------------------
function toggleDesktopMenu() {
  const isAsideClosed=aside.classList.contains('inactive');
  
  if(!isAsideClosed){
    aside.classList.add('inactive');
  }
  desktopMenu.classList.toggle('inactive'); //el .toggle hace que suceda el intercambio de la clase
  console.log("Click menu desktop");
}

function toggleMobileMenu() {
 
  const isAsideClosed=aside.classList.contains('inactive');
  
  if(!isAsideClosed){
    aside.classList.add('inactive');
  }
  mobileMenu.classList.toggle('inactive');
  console.log("Click menu mobile");


}

function toggleCarritoAside(){
  const isMobileMenuClosed=mobileMenu.classList.contains('inactive');
  const isDesktopMenuClosed=desktopMenu.classList.contains('inactive');
  if (!isMobileMenuClosed){
    mobileMenu.classList.add('inactive');
    
  }
  else if(!isDesktopMenuClosed){
    desktopMenu.classList.toggle('inactive')
  }
  
  aside.classList.toggle('inactive');}


  const productlist=[];
  productlist.push({
    name:'Bike',
    price: 120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  })
  productlist.push({
    name:'telefono',
    price: 200,
    image:'https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2023/04/Pixel-Fold-scaled.jpg?resize=1500%2C844&quality=50&strip=all&ssl=1'
  })
  productlist.push({
    name:'Pantalla',
    price: 220,
    image:'https://www.mayoristatecnologico.com.co/images/companies/7/UN58TU6900KXZL%201.jpg?1669070456334'
  })