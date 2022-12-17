// Variables Descktop
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

// Variables Mobile
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

// Constructor de cardInfo
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
	const isAsideClosed = aside.classList.contains('inactive');
	
	if (!isAsideClosed) {
		aside.classList.add('inactive');
	}
	desktopMenu.classList.toggle('inactive');
};

function toggleMobileMenu() {
	const isAsideClosed = aside.classList.contains('inactive');
	
	if (!isAsideClosed) {
		aside.classList.add('inactive');
	}

	mobileMenu.classList.toggle('inactive');
};

function toggleCarritoAside() {
	const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
	const isdesktopMenuClosed = desktopMenu.classList.contains('inactive');

	if (!isMobileMenuClosed) {
		mobileMenu.classList.add('inactive');
	}

	if (!isdesktopMenuClosed) {
		desktopMenu.classList.add('inactive');
	}

	aside.classList.toggle('inactive');
};

// Product List

const productList = [];
productList.push({
	name: 'Bike',
	price: 120,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
	name: 'Pantalla',
	price: 440,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
	name: 'Pc gamer',
	price: 1200,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
	name: 'Bike',
	price: 120,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
	name: 'Pantalla',
	price: 440,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
	name: 'Pc gamer',
	price: 1200,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
	name: 'Pantalla',
	price: 440,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
	name: 'Pc gamer',
	price: 1200,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

for (product of productList){
	const productCard = document.createElement('div');
	productCard.classList.add('product-card');

	// Product = {name, price, img} -> product.img
	const productImg = document.createElement('img');
	productImg.setAttribute('src', product.image);

		const productInfo = document.createElement('div');
		productInfo.classList.add('product-info');

			const productInfoDiv = document.createElement('div');

				const productPrice = document.createElement('p');
				productPrice.innerText = '$' + product.price;
				const productName = document.createElement('p');
				productName.innerText = product.name;

				productInfoDiv.appendChild(productPrice);
				productInfoDiv.appendChild(productName);

			const productInfoFigure = document.createElement('figure');

				const productImgCard = document.createElement('img');
				productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');

				productInfoFigure.appendChild(productImgCard);

		productInfo.appendChild(productInfoDiv);
		productInfo.appendChild(productInfoFigure);

	productCard.appendChild(productImg);
	productCard.appendChild(productInfo);

	cardsContainer.appendChild(productCard);
}


