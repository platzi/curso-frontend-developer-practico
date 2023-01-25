const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

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

function toggleCarritoAside() {
	const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
	const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
	
	if (!isMobileMenuClosed) {
		mobileMenu.classList.add('inactive');
	}
	
	if (!isProductDetailClosed) {
		productDetailContainer.classList.add('inactive');
	}
	
	shoppingCartContainer.classList.toggle('inactive');
}

const openProductDetailAside = () => {
	shoppingCartContainer.classList.add('inactive');

	productDetailContainer.classList.remove('inactive');
}

const closeProductDetailAside = () => {
	productDetailContainer.classList.add('inactive');
}

productDetailCloseIcon.addEventListener('click', closeProductDetailAside);


const productList = [];

productList.push({
	name:'bike',
	price: 120,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
	name:'pantalla',
	price: 220,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
	name:'computadora',
	price: 520,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

const renderProduct = (arr) => {
	for (product of arr){
		const productCard = document.createElement('div');
		productCard.classList.add('product-card')
		
		const img = document.createElement('img');
		img.setAttribute('src', product.image);
		img.addEventListener('click', openProductDetailAside)
		
		const productInfo = document.createElement('div');
		productInfo.classList.add('product-info')
		
		const productInfoDiv = document.createElement('div');
		
		const productInfoPrice = document.createElement('p');
		productInfoPrice.innerText = '$' + product.price;
		const productInfoName = document.createElement('p');
		productInfoName.innerText = product.name;
		
		productInfoDiv.append(productInfoPrice, productInfoName);
		
		const productInfoFigure = document.createElement('figure');
		
		const productImgCard = document.createElement('img');
		productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
		
		productInfoFigure.append(productImgCard);
		productInfo.append(productInfoDiv, productInfoFigure);
		productCard.append(img, productInfo);
		cardContainer.append(productCard);
	}
}


renderProduct(productList);