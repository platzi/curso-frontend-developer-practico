console.log('connected');

mailButton = document.getElementById('email');
AccountMenu = document.getElementById('accountmenu');

mailButton.addEventListener('click', toggleMenu)

function toggleMenu() {
    AccountMenu.classList.toggle('inactive')
}