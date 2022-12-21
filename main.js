const menuEmail = document.querySelector('.navbar-email')
const menudropdown = document.querySelector('.desktop-menu')
menuEmail.addEventListener('click', toggleMenuEmail)


function toggleMenuEmail(){
    menudropdown.classList.toggle('inactive')
}
//togle hace que por cada ejecucion de la funcion quite o añada la misma. como si fuera un swicher de luz




//ESTA FUE MI SOLUCION
// let menuSwitcher = 0
// function sacaElMenu(){
//     if(menuSwitcher == 0){
//         menuDesplegable.style.display = "block"
//         menuSwitcher++
//     }else if(menuSwitcher == 1){
//         menuDesplegable.style.display = "none"
//         menuSwitcher--
//     }
    
// }