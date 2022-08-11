const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

// Cuando demos click aquí (sig L.9)...
const menuCartIcon = document.querySelector('.navbar-shopping-cart');

// Este aparecera o desaparecera con la función en -> (sig L.25)
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartAside);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive'); 
    // aside es cerrado

    // si aside esta abierto
    if(!isAsideClosed) {
        // cierra aside
        aside.classList.add('inactive');
    }

    // Despues abre mobile.
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive'); // aside es cerrado

    // si aside esta abierto
    if(!isAsideClosed) {
        // cierra aside
        aside.classList.add('inactive');
    }
    // Despues abre mobile.
    mobileMenu.classList.toggle('inactive');
}

// Hace que aparezca con dar click en el carrito.
function toggleCartAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isMobileMenuClosed) { // Si menu mobile esta abierto
        mobileMenu.classList.add('inactive');

    } else if(!isDesktopMenuClosed) { // Si menu desktop tambien lo esta...
        desktopMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive'); // brir Aside.
}

// Esta funcion mantiene de principio los menus inactivos.
window.onresize = function () {
    // Cuando la pantalla en menor o igual a 640.
    document.documentElement.scrollWidth <= 640 && desktopMenu.classList.add('inactive');
    // Cuando la pantalla en mayor o igual a 641.
    document.documentElement.scrollWidth >= 641 && mobileMenu.classList.add('inactive');
    // Siempre lo mantendra inactive a no ser que le des click.
    document.documentElement.scrollWidth && aside.classList.add('inactive');
  };
  onresize();