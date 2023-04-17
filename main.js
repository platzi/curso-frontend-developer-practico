const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const burgerMenu = document.querySelector('.menu')
const shoppingCart = document.querySelector('.navbar-shopping-cart')
const productDetail = document.querySelector('.product-detail')

const toggleElement = (e) => {
	const elements = [mobileMenu, productDetail, desktopMenu]
	return () => {
		const otherElements = elements.filter(elem => elem !== e)
		e.classList.toggle('inactive')
		const isElementOpen = !e.classList.contains('inactive')
		// Hide other elements
		if (isElementOpen) otherElements.forEach(elem => elem.classList.add('inactive'))
	}
}

menuEmail.addEventListener('click', toggleElement(desktopMenu))
burgerMenu.addEventListener('click', toggleElement(mobileMenu))
shoppingCart.addEventListener('click', toggleElement(productDetail))