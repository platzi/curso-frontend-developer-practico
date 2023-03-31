const emailSelector = document.querySelector('.navbar-email')
const doscktopMenuSelector = document.querySelector('.desktop-menu')
emailSelector.addEventListener('click', showDesktopMenu)


function showDesktopMenu() {
    doscktopMenuSelector.classList.toggle('inactive')
}
console.log('working');