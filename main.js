const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
	const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

	if (!isAsideClosed) {shoppingCartContainer
		shoppingCartContainer.classList.add('inactive');
	}

	desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
	const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

	if (!isAsideClosed) {shoppingCartContainer
		shoppingCartContainer.classList.add('inactive');
	}

	closeProductDetailAside();

	mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
	const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

	if (!isMobileMenuClosed) {
		mobileMenu.classList.add('inactive');
	}
	
	const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

	if (!isProductDetailClosed) {
		productDetailContainer.classList.add('inactive');
	}

	shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside () {
	shoppingCartContainer.classList.add('inactive');	
	productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside () {
	productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
	name: 'Bike',
	price: 120,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
	name: 'Pantalla',
	price: 220,
	image: 'https://images.pexels.com/photos/333984/pexels-photo-333984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
	name: 'Computadora',
	price: 620,
	image: 'https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});


function renderProcucts (productList) {
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
		productPrice.innerText = `$ ${product.price}`;
		const productName = document.createElement('p');
		productName.innerText = product.name;
	
		// Element.append() permite agregar varios nodos y texto
		// Element.appendChild() solo permite agregar un nodo
		productInfoDiv.append(productPrice, productName);
	
		const productInfoFigure = document.createElement('figure');
		const productImgCart = document.createElement('img');
		productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
	
		productInfoFigure.appendChild(productImgCart);
	
		productInfo.append(productInfoDiv, productInfoFigure);
	
		productCard.append(productImg,productInfo)
	
		cardsContainer.appendChild(productCard);
	}
}

renderProcucts(productList);