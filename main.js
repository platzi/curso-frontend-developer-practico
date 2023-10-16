const navEmail =document.querySelector('.navbar-email') //Email clickeable 
const desktopMenu =document.querySelector('.desktop-menu')//Menu desplegabla

//click es un evento de escucha, es una palabra reservada para este metodo

navEmail.addEventListener('click', toggleDesktopMenu)//evento del email clickeable llama a funcion

//funcion para que detecte click y se inactive o active el menu
function toggleDesktopMenu(){

    //identificamos el componente a mostrar con desktopMenu
    //classlist nos trae todas las clases que contiene el elemento dsktopMenu
    //toggle es una sublase de classlist que permite alternar entre la clase 
    //inactive es la clase que se va a alternar al dar click en navEmail
    desktopMenu.classList.toggle('inactive')


}