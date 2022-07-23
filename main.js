


const navEmail = document.querySelector('.navbar-email');

const menuDesktop = document.querySelector('.inactive')

navEmail.addEventListener('click', () => {
    menuDesktop.classList.toggle('inactive');
});