const menuEmail = document.querySelector('.navbar-email'); //mandamos llamar al email
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu); // le decimos que queremos hacer al darle click
//ESTO ES UNA FUNCION   //toggle: intercambiar //addEventListener: Agregue un evento de clic a un elemento

function toggleDesktopMenu(){
    //se le pone l clse inctive al desktopmenu y luego cd ue le den clik se v  ejecutr est function
    console.log('click');
   desktopMenu.classList.toggle('inactive') // esta funcion classList.toggle: aprece y desprece
}

console.log('si funciono');