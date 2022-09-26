const menuEmail = document.querySelector(".navbar-email")
const passMenu = document.querySelector(".desktop-menu")
menuEmail.addEventListener("click", appearMenuEmail)

function appearMenuEmail (){
    console.log("asdS")
    passMenu.classList.toggle('inactive')
}