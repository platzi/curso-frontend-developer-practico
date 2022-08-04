const navbarRmenu = document.getElementsByClassName("desktop-menu")
const navbarR = document.querySelector('.navbar-email')

const burguerContainer = document.querySelector('.burguerMenu')
const burguerIcon = document.querySelector('.menu');
const displayedBurguer = document.querySelector('.mobile-menu')

const cartMenu = document.querySelector(".product-detail")
const cartIcon = document.querySelector(".navbar-shopping-cart")

navbarR.addEventListener('click',toggleDesktopMenu)
function toggleDesktopMenu(){
    if(!cartMenu.classList.contains('inactive')){
        cartMenu.classList.toggle('inactive')
    }
    navbarRmenu[0].classList.toggle('inactive')
    
}
cartIcon.addEventListener('click', (event)=> {
    if(!navbarRmenu[0].classList.contains('inactive')){
        navbarRmenu[0].classList.toggle('inactive')
    }
    
    if(!displayedBurguer.classList.contains('inactive')){
        displayedBurguer.classList.toggle('inactive')
    }
    
    cartMenu.classList.toggle('inactive')
    
})
burguerIcon.addEventListener('click',(event)=>{
    if(!cartMenu.classList.contains('inactive')){
        cartMenu.classList.toggle('inactive')
    }
    displayedBurguer.classList.toggle('inactive')
})

