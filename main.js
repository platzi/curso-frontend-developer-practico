// const navEmail = document.querySelector('.desktop-menu');


// function SetVisible(element){
//  document.element.style.display = 'block';   
// }

const email = document.querySelector('.navbar-email')
const navEmail = document.querySelector('.desktop-menu');
const hammenu = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu')


email.setAttribute('style','cursor: pointer'); /*iNTERACCION DEL CODIGO CON EL EMAIL*/ 
email.addEventListener('click', SetVisible);
hammenu.addEventListener('click', SetVisibleHam);

function SetVisible(){
    // navEmail.setAttribute('style', 'display: block', 'cursor: pointer');
    console.log('click');
    navEmail.classList.toggle('inactive')
}
function SetVisibleHam(){
    // navEmail.setAttribute('style', 'display: block', 'cursor: pointer');
    console.log('click');
    menuMobile.classList.toggle('inactive')
}
