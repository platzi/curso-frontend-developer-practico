let btnMail = document.querySelector('.navbar-email');
let menuEscritorio = document.querySelector('.desktop-menu')

btnMail.addEventListener('click', function(){
    menuEscritorio.classList.toggle('inactive')
})