
const desplegable = document.querySelector('.desktop-menu');
const correo = document.querySelector('.navbar-email');
const hamburger = document.querySelector('.menu');
const menuView = document.querySelector('.mobile-menu');
const carShoping = document.querySelector('.navbar-shopping-cart');
const listToogle = document.querySelector('.product-detail');

correo.addEventListener('click', toogleClass);


function toogleClass(){
    desplegable.classList.toggle('inactive');
    if(listToogle.getAttribute('class').includes('inactive') == false){
        listToogle.classList.toggle('inactive');
      }
}

hamburger.addEventListener('click', menuHamburger);

function menuHamburger(){
    menuView.classList.toggle('inactive');
    
    if(listToogle.getAttribute('class').includes('inactive')== false){
        listToogle.classList.toggle('inactive');
    }
    
}

carShoping.addEventListener('click',toogleList);

function toogleList(){
  listToogle.classList.toggle('inactive');

  if(menuView.getAttribute('class').includes('inactive')== false){
    menuView.classList.toggle('inactive');
}
if(desplegable.getAttribute('class').includes('inactive')==false){
    desplegable.classList.toggle('inactive');
}
 
}