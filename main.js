const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobMenu = document.querySelector('.mobile-menu');
const shcar = document.querySelector('.navbar-shopping-cart');
const detailP = document.querySelector('.product-detail');

navEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    const isdetailOpen = detailP.classList.contains('inactive');
    if(!isdetailOpen){
        detailP.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

burguerMenu.addEventListener('click', toggleMobMenu);

function toggleMobMenu(){
    const isdetailOpen = detailP.classList.contains('inactive');
    //Cuando esta abierto es False y cuando esta cerrado es True
    if(!isdetailOpen){
        detailP.classList.add('inactive');
    }

    mobMenu.classList.toggle('none'); 
}

shcar.addEventListener('click', segnal);

function segnal(){
    /*cuando esta abierto False y cuando esta cerrado True*/
    const ismobileMenuOpen = mobMenu.classList.contains('none');
    const isDeksMenuOpen = desktopMenu.classList.contains('inactive');

    if(!isDeksMenuOpen){
        desktopMenu.classList.add('inactive');
    }

    if(!ismobileMenuOpen){         //Se cambia de False a True para ejecutar
        mobMenu.classList.add('none'); //Se agrega la clase nuevamente.
    }

    detailP.classList.toggle('inactive'); // y como consecuencia se abre la nueva pestaña
    
}