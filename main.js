const menuEmail = document.querySelector('.navbar-email');
const menuMobileIcon = document.querySelector('.menu');
const menuShopingCart = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shopingCartDetail = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuMobileIcon.addEventListener('click', toggleMobileMenu);
menuShopingCart.addEventListener('click', toggleCartAside);

function toggleDesktopMenu() {
	const isAsideOpen = !shopingCartDetail.classList.contains('inactive');

	if (isAsideOpen) {
		shopingCartDetail.classList.add('inactive')
	} 

	desktopMenu.classList.toggle('inactive')
};

function toggleMobileMenu() {
	const isAsideOpen = !shopingCartDetail.classList.contains('inactive');

	if (isAsideOpen) {
		shopingCartDetail.classList.add('inactive')
	} 
		
	mobileMenu.classList.toggle('inactive')
};

function toggleCartAside() {
	const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
	const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
	
	if (isMobileMenuOpen) {
		mobileMenu.classList.add('inactive')
	}

	if (isDesktopMenuOpen) {
		desktopMenu.classList.add('inactive')
	}
	
	shopingCartDetail.classList.toggle('inactive')
};