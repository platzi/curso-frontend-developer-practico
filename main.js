const menuEmail = document.querySelector('.navbar-email');
const DesktopMenu = document.querySelector('.desktop-menu');


menuEmail.addEventListener('click', toggleDesktopMenu);


//Solucion Ale 1 
// function toggleDesktopMenu(){
//     if(DesktopMenu.classList.contains('inactive')){
//         DesktopMenu.classList.remove('inactive');
//     }else{
//         DesktopMenu.classList.add('inactive');
//     }
// }

//Solucion Ale 2
// function toggleDesktopMenu(){
//     DesktopMenu.classList.contains('inactive')?DesktopMenu.classList.remove('inactive') : DesktopMenu.classList.add('inactive'); 
// }

//Solucion profe
function toggleDesktopMenu(){
    DesktopMenu.classList.toggle('inactive');
}