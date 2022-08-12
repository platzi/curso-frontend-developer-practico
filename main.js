const menuMail = document.getElementById('menuMail');
const menuDesktop = document.querySelector('.desktop-menu');
const menuHamburgesa = document.querySelector('.menu')
const menuMobile = document.querySelector('.mobile-menu')
const shoppingCar = document.querySelector('.navbar-shopping-cart')
const product_detail = document.querySelector('.product-detail')

menuMail.addEventListener('click',toggleMenu)
menuHamburgesa.addEventListener('click',toggleMenuMobile)
shoppingCar.addEventListener('click',toggleMenushoppingCar)


function toggleMenu() {
    if(!product_detail.classList.contains("inactive")){
        
        product_detail.classList.add("inactive")
    }
    menuDesktop.classList.toggle("inactive")
}

function toggleMenuMobile() {
    if(!product_detail.classList.contains("inactive")){
        
        product_detail.classList.add("inactive")
    }
    if(!menuDesktop.classList.contains("inactive")){
        
        menuDesktop.classList.add("inactive")
    }
    menuMobile.classList.toggle("inactive")
}
function toggleMenushoppingCar(){
    console.log('hola')
    
    if(!menuDesktop.classList.contains("inactive")){
        
        menuDesktop.classList.add("inactive")
    }
    if(!menuMobile.classList.contains("inactive")){
        
        menuMobile.classList.add("inactive")
    }
    product_detail.classList.toggle("inactive")
}