let btnMail = document.querySelector('.navbar-email');
let menuEscritorio = document.querySelector('.desktop-menu')


btnMail.addEventListener('click', function(){
    menuEscritorio.classList.toggle('inactive')
    
})

let btnMenuCategoriasMobile = document.querySelector('#btn-menu-categorias-mobile');
let menuMobile = document.querySelector('.mobile-menu')

btnMenuCategoriasMobile.addEventListener('click', function(){
    menuMobile.classList.toggle('inactive')
    menuCarritodeCompras.classList.add('inactive')
})


let btnCarritodeCompras = document.querySelector('.navbar-shopping-cart');
let menuCarritodeCompras = document.querySelector('.product-detail');

btnCarritodeCompras.addEventListener('click', function(){
    menuCarritodeCompras.classList.toggle('inactive')
    menuMobile.classList.add('inactive')
})