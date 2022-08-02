const navbarRmenu = document.getElementsByClassName("desktop-menu inactive")
const navbarR = document.querySelector('.navbar-email')

const burguerContainer = document.querySelector('.burguerMenu')
const burguerIcon = document.querySelector('.menu');
const displayedBurguer = document.querySelector('.mobile-menu')

navbarR.addEventListener('click',toggleDesktopMenu)
function toggleDesktopMenu(event){
    if(navbarRmenu[0].style.display == ""){
        navbarRmenu[0].style.display = "block"
    }
    else{
        navbarRmenu[0].style.display = "";
    }
}
/* navEmail.addEventListener('click', () => {
    menuDesktop.classList.toggle('inactive');    //CON TOGGLE Y ARROW FUNCTION
}); */

burguerIcon.addEventListener('click',(event)=>{displayedBurguer.classList.toggle('inactive')})


/* function f(x){
    if (x.matches){
        document.body.style.backgroundColor = "yellow";
    } else {
        document.body.style.backgroundColor = "pink";
  }
}
const media = window.matchMedia("(max-width: 640px)")
f(media)
media.addEventListener("changes",function (){f(media)}) */

