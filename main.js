//Aparecer menu de inicio de seccion
const navEmail = document.querySelector(".navbar-email");//llama al elemento email.
const desktopMenu = document.querySelector(".desktop-menu");//variable que representa al menu del email.

navEmail.addEventListener("click", toggleDesktopMenu);//agregar evento click al email.

function toggleDesktopMenu()//funcion aparecer menu del email.
{
    const isAsideClosed = aside.classList.contains("inactive")//Almacena el estado del aside, que si esta cerrado o abierto.
    
    if(!isAsideClosed)//si esta abierto
    {
        aside.classList.add("inactive");//le agrega la clase incative para que se cierre.
    }

    desktopMenu.classList.toggle('inactive');//Agrega o le quita la clase incative para que se cierre o se abra.
}

//Aparecer menu lateral en mobile
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

menuHamIcon.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu()
{
    const isAsideClosed = aside.classList.contains("inactive");//Almacena el estado del menu lateral mobile, que si esta cerrado o abierto.
    
    if(!isAsideClosed)//Si esta abierto
    {
        aside.classList.add("inactive");//le agrega la clase incative para que se cierre.
    }

    mobileMenu.classList.toggle("inactive");//Agrega o le quita la clase incative para que se cierre o se abra.
}

//Aparecer menu de compras (icon)
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

menuCarritoIcon.addEventListener("click", toggleCarritoAside)

function toggleCarritoAside()
{
    const ismobileMenuClosed = mobileMenu.classList.contains("inactive")//Almacena el estado del menu mobile, que si esta abierto o cerrado.
    
    if(!ismobileMenuClosed)//Si esta abierto.
    {
        mobileMenu.classList.add("inactive");//Le agrega la clase inactive para se cierre. 
    }

    const isDestopMenuClosed = desktopMenu.classList.contains("inactive")//Almacena el estado del menu del email, que si esta abierto o cerrado.
    
    if(!isDestopMenuClosed)//si esta abierto
    {
        desktopMenu.classList.add("inactive");//le agrega para la clase inactive para que se cierre.
    }
    
    aside.classList.toggle("inactive");//Agrega o le quita la clase incative para que se cierre o se abra.
}

