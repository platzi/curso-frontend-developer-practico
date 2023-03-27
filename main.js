// const navEmail = document.querySelector('.desktop-menu');


// function SetVisible(element){
//  document.element.style.display = 'block';   
// }

const email = document.querySelector('.navbar-email')
const navEmail = document.querySelector('.desktop-menu');
const hammenu = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
const carrito = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');


email.setAttribute('style','cursor: pointer'); /*iNTERACCION DEL CODIGO CON EL EMAIL*/ 
carrito.setAttribute('style', 'cursor: pointer');
email.addEventListener('click', SetVisible);
hammenu.addEventListener('click', SetVisibleHam);
carrito.addEventListener('click', SetVisibleCar);

function SetVisible(){
    // navEmail.setAttribute('style', 'display: block', 'cursor: pointer');
    // console.log('click' + Boolean(SetVisible));
    navEmail.classList.toggle('inactive'); SaberComo();
}
function SetVisibleHam(){
    // navEmail.setAttribute('style', 'display: block', 'cursor: pointer');
    console.log('click');
    menuMobile.classList.toggle('inactive'); SaberComo();
}
function SetVisibleCar(){
    console.log('click')
    aside.classList.toggle('inactive');
    const MobileClosed = menuMobile.classList.contains('inactive');
    const navEmailClosed = navEmail.classList.contains('inactive'); 

    if(!aside.classList.contains('inactive')){
        navEmail.classList.add('inactive');
        menuMobile.classList.add('inactive');

    }
    }

function SaberComo(){
    
    if(!navEmail.classList.contains('inactive') || !menuMobile.classList.contains('inactive')){
        console.log('menu abierto')
        aside.classList.add('inactive');
    }
}

