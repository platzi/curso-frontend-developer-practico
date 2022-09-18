const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const cartIconMenu = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartMenu);

function toggleDesktopMenu(){
//Se puede solucionar el cerrar el menu contrario cuando se abre el otro de dos maneras
    //De esta forma verificamos que el menu contrario contiene la clase inactive
    const isCartIconMenuClosed = cartIconMenu.classList.contains('inactive');
    
    //Miramos si el menu mobile esta abierto ((! = diferente)
    if(!isCartIconMenuClosed) {
        //Si es diferente a closed, es decir, esta abierto, agregamos la clase inactive
        cartIconMenu.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isCartIconMenuClosed = cartIconMenu.classList.contains('inactive');
    
    if(!isCartIconMenuClosed) {
        cartIconMenu.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCartMenu() {
    //De esta forma activo la clase inactive en los otros dos menus asi se cierran en el momento de hacer click y el menu deseado se abre
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');

    cartIconMenu.classList.toggle('inactive');
}