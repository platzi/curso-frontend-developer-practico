const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const navbarShoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const burguerIconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const asideShoppingCart = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

navbarEmail.addEventListener('click', toggleDesktopMenu);
burguerIconMenu.addEventListener('click', toggleMobileMenu);
navbarShoppingCartIcon.addEventListener('click', toggleAsideShoppingCart);

function toggleDesktopMenu() {
	desktopMenu.classList.toggle('inactive');
	asideShoppingCart.classList.add('inactive');
}

function toggleMobileMenu() {
	asideShoppingCart.classList.add('inactive');
	mobileMenu.classList.toggle('inactive');
}

function toggleAsideShoppingCart() {
	mobileMenu.classList.add('inactive');
	desktopMenu.classList.add('inactive');
	asideShoppingCart.classList.toggle('inactive');
}

function renderProducts(arr) {
	for (product of arr) {
		const productCard = document.createElement('div');
		productCard.classList.add('product-card');

		const productImage = document.createElement('img');
		productImage.setAttribute('src', product.image);

		const productInfo = document.createElement('div');
		productInfo.classList.add('product-info');

		const productInfoDiv = document.createElement('div');

		const paraphrasePrice = document.createElement('p');
		paraphrasePrice.innerText = product.price;

		const paraphraseName = document.createElement('p');
		paraphraseName.innerText = product.name;

		const figureProduct = document.createElement('figure');

		const btnAddToCartIcon = document.createElement('img');
		btnAddToCartIcon.setAttribute('src', './icons/bt_add_to_cart.svg');

		figureProduct.append(btnAddToCartIcon);
		productInfoDiv.append(paraphrasePrice, paraphraseName);
		productInfo.append(productInfoDiv, figureProduct);
		productCard.append(productImage, productInfo);
		cardsContainer.append(productCard);
	}
}

const productList = [];
productList.push({
	name: 'Bike',
	price: 120,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
	name: 'Monitor',
	price: 220,
	image: 'https://images.pexels.com/photos/1714202/pexels-photo-1714202.jpeg?auto=compress&cs=tinysrgb&w=800',
});
productList.push({
	name: 'Macbook Air',
	price: 800,
	image: 'https://images.pexels.com/photos/3693732/pexels-photo-3693732.jpeg?auto=compress&cs=tinysrgb&w=800',
});
productList.push({
	name: 'Bike',
	price: 120,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
	name: 'Monitor',
	price: 220,
	image: 'https://images.pexels.com/photos/1714202/pexels-photo-1714202.jpeg?auto=compress&cs=tinysrgb&w=800',
});
productList.push({
	name: 'Macbook Air',
	price: 800,
	image: 'https://images.pexels.com/photos/3693732/pexels-photo-3693732.jpeg?auto=compress&cs=tinysrgb&w=800',
});
productList.push({
	name: 'Bike',
	price: 120,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
	name: 'Monitor',
	price: 220,
	image: 'https://images.pexels.com/photos/1714202/pexels-photo-1714202.jpeg?auto=compress&cs=tinysrgb&w=800',
});
productList.push({
	name: 'Macbook Air',
	price: 800,
	image: 'https://images.pexels.com/photos/3693732/pexels-photo-3693732.jpeg?auto=compress&cs=tinysrgb&w=800',
});

renderProducts(productList);
