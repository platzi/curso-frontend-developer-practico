let NavEmail=document.querySelector(`.navbar-email`)
let DesktopMenu=document.querySelector(`.desktop-menu`)


NavEmail.addEventListener(`click`,menuEmail)
function menuEmail(){
   DesktopMenu.classList.toggle("inactive");
   
}

