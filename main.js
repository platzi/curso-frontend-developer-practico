let btnMail = document.querySelector('.navbar-email');
let menuEscritorio = document.querySelector('.desktop-menu')


btnMail.addEventListener('click', function(){
    menuEscritorio.classList.toggle('inactive')
})

let btnMenuCategoriasMobile = document.querySelector('#btn-menu-categorias-mobile');
let menuMobile = document.querySelector('.mobile-menu')

btnMenuCategoriasMobile.addEventListener('click', function(){
    menuMobile.classList.toggle('inactive')
})