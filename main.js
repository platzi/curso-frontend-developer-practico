//Parte de que aparezca o desaparezca el menú del carrito
//Apuntamos a donde queremos que le de click
const menuEmail = document.querySelector('.navbar-email')
//Apuntamos al menú
const desktopmenu = document.querySelector('.desktop-menu')

//Creamos un selector para el icono del menú mobile
const menuHamIcon = document.querySelector('.menu');
//Para el menú mobile
const mobileMenu = document.querySelector('.mobile-menu');


//Ejecutamos un evento 
menuEmail.addEventListener('click',toggleDesktopmenu);
//Ejecutamos un evento 
menuHamIcon.addEventListener('click',toggleMobilepmenu)



//Activa o desactiva el menú en desk
function toggleDesktopmenu(){
    desktopmenu.classList.toggle('inactive');
};
//Activa o desactiva el menú en movil
function toggleMobilepmenu(){
    mobileMenu.classList.toggle('inactive');
};


