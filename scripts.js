const desktop_menu = document.querySelector('.desktop-menu');
const menuEmail =document.querySelector('.navbar-email');

menuEmail.addEventListener('click', toggleDesktop_menu);

function toggleDesktop_menu (){
console.log('si esta sirviendo el click')
        desktop_menu.classList.toggle('inactive');    
 
}
console.log('si estoy conectado JS');