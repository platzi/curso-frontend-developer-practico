const menuEmail = document.querySelector('.navbar-email')
const menusito = document.querySelector('.desktop-menu')

menuEmail.addEventListener("click", toggleShow)

function toggleShow(){

    menusito.classList.toggle("inactive") 
    

 }