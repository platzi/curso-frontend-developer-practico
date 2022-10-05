const userMenu=document.querySelector('.desktop-menu');
const userEmail=document.querySelector('.navbar-email');

userEmail.addEventListener('click',toggleUserMenu);

function toggleUserMenu(){
    userMenu.classList.toggle('inactive');
    console.log();
}