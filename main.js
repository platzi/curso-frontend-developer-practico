//Constantes;
const $menuEmail = document.querySelector('.navbar-email');
const $desktopMenu = document.querySelector('.desktop-menu');

const $menuHambIcon = document.querySelector('.menu'); 
const $mobileMenu = document.querySelector('.mobile-menu');

//Agregar el escuchador de eventos; 
$menuEmail.addEventListener('click', toggleDesktopMenu);
$menuHambIcon.addEventListener('click', toggleMobileMenu); 

//Funciones que agregar la clase inactive mediante 'toggle'; 
function toggleDesktopMenu(){
    $desktopMenu.classList.toggle('inactive');
};

function toggleMobileMenu(){
    $mobileMenu.classList.toggle('inactive');    
};


