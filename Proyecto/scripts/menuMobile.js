const burgerMenuMobile = document.querySelector('.menu')
const mobilemenu = document.querySelector('.mobile-menu')

burgerMenuMobile.addEventListener('click', toggleMenuMobile)

function toggleMenuMobile(){
    mobilemenu.classList.toggle('inactive')
}