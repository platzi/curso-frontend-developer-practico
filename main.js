const menuEmail = document.querySelector('.navbar-email');
const descktopMenu = document.querySelector('.desktop-menu');

const menuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDescktopMenu);
menuIcon.addEventListener('click', toggleMobileMenu);
shoppingCartIcon.addEventListener('click', toggleShoppingCart);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDescktopMenu() {
	shoppingCartContainer.classList.contains('inactive')
		? null
		: toggleShoppingCart();
	descktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
	shoppingCartContainer.classList.contains('inactive')
		? null
		: toggleShoppingCart();
	mobileMenu.classList.toggle('inactive');
	closeProductDetailAside();
}

function toggleShoppingCart() {
	mobileMenu.classList.contains('inactive') ? null : toggleMobileMenu();
	descktopMenu.classList.contains('inactive') ? null : toggleDescktopMenu();
	shoppingCartContainer.classList.toggle('inactive');
	closeProductDetailAside();
}

function openProductDetailAside() {
	productDetailContainer.classList.remove('inactive');
	shoppingCartContainer.classList.add('inactive');
}

function closeProductDetailAside() {
	productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
	name: 'Jeans',
	price: 15000,
	image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg',
});
productList.push({
	name: 'Shorts',
	price: 12000,
	image:
		'https://images.pexels.com/photos/1760078/pexels-photo-1760078.jpeg?auto=compress&cs=tinysrgb&w=400',
});
productList.push({
	name: 'Remera',
	price: 6000,
	image:
		'https://images.pexels.com/photos/8053341/pexels-photo-8053341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
	name: 'Jeans',
	price: 15000,
	image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg',
});
productList.push({
	name: 'Shorts',
	price: 12000,
	image:
		'https://images.pexels.com/photos/1760078/pexels-photo-1760078.jpeg?auto=compress&cs=tinysrgb&w=400',
});
productList.push({
	name: 'Remera',
	price: 6000,
	image:
		'https://images.pexels.com/photos/8053341/pexels-photo-8053341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});

for (product of productList) {
	const productCard = document.createElement('div');
	productCard.classList.add('product-card');

	const productImg = document.createElement('img');
	productImg.setAttribute('src', product.image);
	productImg.addEventListener('click', openProductDetailAside);

	const productInfo = document.createElement('div');
	productInfo.classList.add('product-info');

	const productInfoDiv = document.createElement('div');

	const productPrice = document.createElement('p');
	productPrice.innerText = '$' + product.price;

	const productName = document.createElement('p');
	productName.innerText = product.name;

	const productFigure = document.createElement('figure');

	const productImgCart = document.createElement('img');
	productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

	productCard.appendChild(productImg);
	productCard.appendChild(productInfo);
	productInfoDiv.appendChild(productPrice);
	productInfoDiv.appendChild(productName);
	productInfo.appendChild(productInfoDiv, productFigure);
	productInfo.appendChild(productFigure);
	productFigure.appendChild(productImgCart);
	cardsContainer.appendChild(productCard);
}
