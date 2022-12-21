// Variables Descktop
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

// Variables Mobile
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

// Constructor de cardInfo
const cardsContainer = document.querySelector('.cards-container');

// constantes de espesificProductDetail
const productDetailContainer = document.querySelector('#productDetail');
const productDetailContainerClose = document.querySelector('.specific-product-details__close');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailContainerClose.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu() {
	const isAsideClosed = aside.classList.contains('inactive');
	const isproductDetailContainerClosed = productDetailContainer.classList.contains('inactive');
	
	if (!isAsideClosed) {
		aside.classList.add('inactive');
	}

	if (!isproductDetailContainerClosed) {
		productDetailContainer.classList.add('inactive');
	}
	
	desktopMenu.classList.toggle('inactive');
};

function toggleMobileMenu() {
	const isAsideClosed = aside.classList.contains('inactive');
	
	if (!isAsideClosed) {
		aside.classList.add('inactive');
	}

	closeProductDetailAside();

	mobileMenu.classList.toggle('inactive');
};

function toggleCarritoAside() {
	const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
	const isdesktopMenuClosed = desktopMenu.classList.contains('inactive');
	const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

	if (!isMobileMenuClosed) {
		mobileMenu.classList.add('inactive');
	}

	if (!isdesktopMenuClosed) {
		desktopMenu.classList.add('inactive');
	}

	if (!isProductDetailClosed) {
		productDetailContainer.classList.add('inactive');
	}

	

	aside.classList.toggle('inactive');
};

function openProductDetailAside () {
	aside.classList.add('inactive');
	desktopMenu.classList.add('inactive');

	productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside () {
	productDetailContainer.classList.add('inactive');
}

// Product List

const productList = [];
productList.push({
	name: 'Procesador',
	price: 120,
	image: 'https://images.pexels.com/photos/3665442/pexels-photo-3665442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
	name: 'Disco mecanico de 1T',
	price: 50,
	image: 'https://images.pexels.com/photos/7370679/pexels-photo-7370679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
	name: 'Pc',
	price: 1200,
	image: 'https://images.pexels.com/photos/461064/pexels-photo-461064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
	name: 'Mando',
	price: 120,
	image: 'https://images.pexels.com/photos/776092/pexels-photo-776092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
	name: 'Phone',
	price: 500,
	image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
	name: 'RTX 2080',
	price: 3500,
	image: 'https://images.pexels.com/photos/8622912/pexels-photo-8622912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
	name: 'Hyperex 16gb x2',
	price: 200,
	image: 'https://images.pexels.com/photos/2582928/pexels-photo-2582928.jpeg?auto=compress&cs=tinysrgb&w=600'
});
productList.push({
	name: 'Placa base',
	price: 1200,
	image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

function renderProducts(arr) {
	for (product of productList){
		const productCard = document.createElement('div');
		productCard.classList.add('product-card');
	
		// Product = {name, price, img} -> product.img
		const productImg = document.createElement('img');
		productImg.setAttribute('src', product.image);
		productImg.addEventListener('click', openProductDetailAside)
	
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
}

renderProducts(productList);