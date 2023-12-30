const menuEmail=document.querySelector('.navbar-email');//que seleecione el elemento del correo de la barra de menu 
const desktopMenu=document.querySelector('.desktop-menu') //seleccione el elemento que tenga a clase destop-manu

menuEmail.addEventListener('click', toggleDesktopMenu); // cuando le den clic en el email llame la funcion 


function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');//quita o pone la clase inactive

}