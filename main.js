// Se colocan las variables en primer lugar
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail')



// ----------------------------------------------------------------------------------------------

// Escucha y activa la funcion (toggleDesktorMenu) mediante el click
menuEmail.addEventListener('click', toggleDesktopMenu);

// Funcion que verifica que tenga la clase (inactive), con toggle pone/quita la clase mencionada.
// Constante (isAsideClosed) verifica que (aside) contenga la clase INACTIVE.
// IF condicional que verifica que la constante (isAsideClosed) no ( ! ) tenga la clase INACTIVE, de ese modo puede agregarsela a la constante (aside) mediante CLASSLIST.ADD
function toggleDesktopMenu(){

    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle('inactive');
};

// ----------------------------------------------------------------------------------------------

// Escucha y activa la funcion (toggleMobileMenu) mediante el click
menuHamIcon.addEventListener('click', toggleMobileMenu);

// Funcion que verifica que tenga la clase (inactive), con toggle pone/quita la clase mencionada.
// Constante (isAsideClosed) verifica que (aside) contenga la clase INACTIVE.
// IF condicional que verifica que la constante (isAsideClosed) no ( ! ) tenga la clase INACTIVE, de ese modo puede agregarsela a la constante (aside) mediante CLASSLIST.ADD
function toggleMobileMenu(){

    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
};

// ----------------------------------------------------------------------------------------------

// Escucha y activa la funcion (toggleAside) mediante el click
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

// Funcion que verifica que tenga la clase (inactive), con toggle pone/quita la clase mencionada.
// Constante (isMobileMenuClosed) (isDesktopMenuClosed) verifica que (mobileMenu) (desktopMenu) contenga la clase INACTIVE.
// IF condicional que verifica que la constante (isMobileMenuClosed) (isDesktopMenuClosed) no ( ! ) tenga la clase INACTIVE, de ese modo puede agregarsela a la constante (mobileMenu) (desktopMenu) mediante CLASSLIST.ADD
function toggleCarritoAside(){

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}

// ----------------------------------------------------------------------------------------------

