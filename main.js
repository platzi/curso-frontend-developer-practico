//Constantes;
const $menuEmail = document.querySelector('.navbar-email');
const $desktopMenu = document.querySelector('.desktop-menu');

const $menuHambIcon = document.querySelector('.menu'); 
const $mobileMenu = document.querySelector('.mobile-menu');

const $menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const $aside = document.querySelector('.product-detail');


//Agregar el escuchador de eventos; 
$menuEmail.addEventListener('click', toggleDesktopMenu);
$menuHambIcon.addEventListener('click', toggleMobileMenu);
$menuCarritoIcon.addEventListener('click', toggleCarritoAside); 

//Funciones que agregar la clase inactive mediante 'toggle'; 
function toggleDesktopMenu(){
    const isAsideClosed = $aside.classList.contains('inactive');
    
    if(!isAsideClosed){
        $aside.classList.add('inactive');
    }

    $desktopMenu.classList.toggle('inactive');
};

function toggleMobileMenu(){
    const isAsideClosed = $aside.classList.contains('inactive');
    
    if(!isAsideClosed){
        $aside.classList.add('inactive');
    }

    $mobileMenu.classList.toggle('inactive');
};

function toggleCarritoAside(){
    const isMobileMenuClosed = $mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        $mobileMenu.classList.add('inactive');
    }

    $aside.classList.toggle('inactive');

};

