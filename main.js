const desktopMenu = document.querySelector(".desktop-menu");
const navEmail = document.querySelector(".navbar-email");


const toggleDesktopMenu = () =>{
            desktopMenu.classList.toggle("inactive");


}

navEmail.addEventListener("click",  toggleDesktopMenu);
