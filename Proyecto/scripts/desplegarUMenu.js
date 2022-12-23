const menuEmail = document.querySelector('.navbar-email')
const menudropdown = document.querySelector('.desktop-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const menuDeOrdenes = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleMenuEmail)
menuCarritoIcon.addEventListener('click', toggleMenuOrder)

function toggleMenuEmail(){
    menudropdown.classList.toggle('inactive')
    menuDeOrdenes.classList.add('inactive')
}

function toggleMenuOrder(){
    menuDeOrdenes.classList.toggle('inactive')
    menudropdown.classList.add('inactive')
    mobilemenu.classList.add('inactive')
    
    // const isMobileMenuClosed = mobilemenu.classList.contains('inactive')
    
    // if(!isMobileMenuClosed){
    //    mobilemenu.classList.add('inactive')
    // }
    // menuDeOrdenes.classList.toggle('inactive')
}

// mobile //
const burgerMenuMobile = document.querySelector('.menu')
const mobilemenu = document.querySelector('.mobile-menu')

burgerMenuMobile.addEventListener('click', toggleMenuMobile)

function toggleMenuMobile(){
    mobilemenu.classList.toggle('inactive')
    menuDeOrdenes.classList.add('inactive')
}

//segunda forma de hacerlo
// function toggleMenuMobile(){
//     //creamos una variable que revise que un elemento en el html tenga una clase especifica
//     const isMenuDeOrdenesClosed = menuDeOrdenes.classList.contains('inactive')
    
//     //revisa si no tiene la clase, osea que esta activo, se ejecuta, si si tiene la clase, no se ejecuta
//     if(!isMenuDeOrdenesClosed){
//        menuDeOrdenes.classList.add('inactive')
//     }

//     //Y al final se muestra el menu
//     mobilemenu.classList.toggle('inactive')
// }








//toggle hace que por cada ejecucion de la funcion quite o añada la misma. como si fuera un swicher de luz

//add añade una nueva clase al elemento, que puede ya estar definida en el css


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