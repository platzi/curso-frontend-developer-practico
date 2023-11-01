const EmailMenu= document.querySelector('.navbar-email');
const MenuBox= document.querySelector('.desktop-menu');

EmailMenu.addEventListener('click', Aparecer);

function Aparecer(){
    MenuBox.classList.toggle('inactive'); 
}