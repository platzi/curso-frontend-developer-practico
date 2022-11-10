const menuEmailBtn = document.querySelector('.navbar-email')
const menuEmailBox = document.querySelector('.desktop-menu')
const menuMobileBtn = document.querySelector('.menu')
const menuMobileBox = document.querySelector('.mobile-menu')

menuEmailBtn.addEventListener('click', ()=>{
    menuEmailBox.classList.toggle('inactive')
})
menuMobileBtn.addEventListener('click', ()=>{
    menuMobileBox.classList.toggle('inactive')
})