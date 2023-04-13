const toggleElement = (e) => {
	return () => {
		e.classList.toggle('inactive')
	}
}

const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const burgerMenu = document.querySelector('.menu')

menuEmail.addEventListener('click', toggleElement(desktopMenu))
burgerMenu.addEventListener('click', toggleElement(mobileMenu))