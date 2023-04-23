const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerIcon = document.querySelector('.burguerIcon');
const movileMenu = document.querySelector('.mobile-menu');
const carritoIcon = document.querySelector('.navbar-shopping-cart')
const carritoMenu = document.querySelector('.product-detail')

navEmail.addEventListener('click', toggleMenu)
burguerIcon.addEventListener('click', toggleMovile);
carritoIcon.addEventListener('click', toggleCarrito);


function toggleCarrito() {

    const MenuMovileClose = movileMenu.classList.contains('inactive')
    const MenuCarritoClose = carritoMenu.classList.contains('inactive')


    if(MenuMovileClose){
        carritoMenu.classList.toggle('inactive')
    }else{
        movileMenu.classList.add('inactive')
        carritoMenu.classList.toggle('inactive')
    }
}


function toggleMovile() {

    const MenuMovileClose = movileMenu.classList.contains('inactive')
    const MenuCarritoClose = carritoMenu.classList.contains('inactive')

    if(MenuCarritoClose){
        movileMenu.classList.toggle('inactive')
    }else{
        carritoMenu.classList.add('inactive')
        movileMenu.classList.toggle('inactive')
    }


    
}


function toggleMenu() {
    desktopMenu.classList.toggle('inactive')
}