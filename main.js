const desktop_menu = document.querySelector('.desktop-menu');
const navbar_email = document.querySelector('.navbar-email');


navbar_email.addEventListener('mouseenter',function(){
    desktop_menu.classList.remove('inactive');
});
desktop_menu.addEventListener('mouseleave', function(){
    desktop_menu.classList.add('inactive');
});