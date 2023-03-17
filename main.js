const productList = [];
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const prodyctDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

productList.push({
	name: 'Bike',
	price: 250,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
	name: 'Pantalla',
	price: 400,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
	name: 'Computador',
	price: 850,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function openProductDetailAside() {
	shoppingCartContainer.classList.add('inactive');
	prodyctDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
	prodyctDetailContainer.classList.add('inactive');
}

function toggleDesktopMenu() {
	const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

	if (!isAsideClosed) {
		shoppingCartContainer.classList.toggle('inactive');
	}

	desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
	const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

	if (!isAsideClosed) {
		shoppingCartContainer.classList.toggle('inactive');
	}

	closeProductDetailAside();

	mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
	const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
	const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
	const isProductDetailClosed =
		prodyctDetailContainer.classList.contains('inactive');

	if (!isMobileMenuClosed) {
		mobileMenu.classList.toggle('inactive');
	}

	if (!isDesktopMenuClosed) {
		desktopMenu.classList.toggle('inactive');
	}

	if (!isProductDetailClosed) {
		prodyctDetailContainer.classList.toggle('inactive');
	}

	shoppingCartContainer.classList.toggle('inactive');
}

function renderProducts(productList) {
	for (product of productList) {
		const productCard = document.createElement('div');
		productCard.classList.add('product-card');

		const productImage = document.createElement('img');
		productImage.setAttribute('src', product.image);
		productImage.setAttribute('alt', product.name);
		productImage.addEventListener('click', openProductDetailAside);

		const productInfo = document.createElement('div');
		productInfo.classList.add('product-info');

		const productInfoDiv = document.createElement('div');

		const productPrice = document.createElement('p');
		productPrice.innerText = `$${product.price}`;

		const productName = document.createElement('p');
		productName.innerHTML = product.name;

		const productInfoFigure = document.createElement('figure');
		const productImgCart = document.createElement('img');
		productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

		productInfoFigure.appendChild(productImgCart);
		productInfoDiv.appendChild(productPrice);
		productInfoDiv.appendChild(productName);
		productInfo.appendChild(productInfoDiv);
		productInfo.appendChild(productInfoFigure);
		productCard.appendChild(productImage);
		productCard.appendChild(productInfo);
		cardsContainer.appendChild(productCard);
	}
}

renderProducts(productList);
