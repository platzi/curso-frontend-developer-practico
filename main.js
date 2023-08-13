var navbarEmail = document.querySelector('.navbar-email');
var iconMenu = document.querySelector('.icon_menu')
var desktopMenu = document.querySelector('.desktop-menu');
var mobileMenu = document.querySelector('.mobile-menu');
var productDetail = document.querySelector('.product-detail');
var imgShoppingCart = document.querySelector('.img_shopping-cart')

function mostrar(elemento){
    elemento.classList.toggle('d-none');
}
function ocultar(elemento){
    if(elemento.classList.contains('d-none')){return;}
    else{elemento.classList.add('d-none');}
}

navbarEmail.addEventListener('click', function(){
    mostrar(desktopMenu);
})
iconMenu.addEventListener('click', function(){
    mostrar(mobileMenu);
    ocultar(productDetail);
})
imgShoppingCart.addEventListener('click', function(){
    mostrar(productDetail);
    ocultar(mobileMenu);
})