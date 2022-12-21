const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuBurgerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

const productList = [];
productList.push({
	name: 'Bike',
	price: 120,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
	name: 'Screen',
	price: 220,
	image: 'https://www.profesionalreview.com/wp-content/uploads/2020/04/Qu%C3%A9-es-el-contraste-de-una-pantalla-03.jpg'
});
productList.push({
	name: 'Laptop',
	price: 350,
	image: 'https://www.lenovo.com/medias/lenovo-laptop-ideapad-3i-15in-hero.png?context=bWFzdGVyfHJvb3R8MzM3NTg5fGltYWdlL3BuZ3xoM2MvaDExLzE0MTkxNTE3NDAxMTE4LnBuZ3w4OTg2YTg5YzQ0ZmFiZDYzOTdjZTkzNDJjNDY3MTJlODM4YTQ2ODdlMGVmZTFlYjBiODRjYWFmY2JjOTBkODNj'
});

navEmail.addEventListener('click', toggleDesktopMenu);
menuBurgerIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
	const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

	if (!isAsideClosed) {
		shoppingCartContainer.classList.add('inactive');
	}

	desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {

	const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

	if (!isAsideClosed) {
		shoppingCartContainer.classList.add('inactive');
	}

	closeProductDetailAside();

	mobileMenu.classList.toggle('inactive');
}

function toggleCartAside() {
	const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
	const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

	if (!isMobileMenuClosed) {
		mobileMenu.classList.add('inactive');
	}
	if (!isDesktopMenuClosed) {
		desktopMenu.classList.add('inactive');
	}

	const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

	if(!isProductDetailClosed) {
		productDetailContainer.classList.add('inactive');
	}

	shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {

	shoppingCartContainer.classList.add('inactive');

	productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
	productDetailContainer.classList.add('inactive');
}

function renderProducts(arr) {

	for(product of arr) {
		const productCard = document.createElement('DIV');
		productCard.classList.add('product-card');
	
		const productImg = document.createElement('IMG');
		productImg.setAttribute('src', product.image);
		productImg.addEventListener('click', openProductDetailAside);
	
		const productInfo = document.createElement('DIV');
		productInfo.classList.add('product-info');
	
		const productInfoDiv = document.createElement('DIV');
	
		const productPrice = document.createElement('P');
		productPrice.innerText = '$' + product.price;
	
		const productName = document.createElement('P');
		productName.innerText = product.name;
	
		productInfoDiv.append(productPrice, productName);
	
		const productInfoFigure = document.createElement('FIGURE');
		const productImgCart = document.createElement('IMG');
		productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
	
		productInfoFigure.appendChild(productImgCart);
	
		productInfo.appendChild(productInfoDiv);
		productInfo.appendChild(productInfoFigure);
	
		productCard.appendChild(productImg);
		productCard.appendChild(productInfo);
	
		cardsContainer.appendChild(productCard);
	
	}
}

renderProducts(productList);