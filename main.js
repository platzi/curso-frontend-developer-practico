const menuEmail = document.querySelector('.navbar-email');
const menuMobileIcon = document.querySelector('.menu');
const menuShopingCart = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail')
const productDetailClose = document.querySelector('.product-detail-close')
const cardsContainer =document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuMobileIcon.addEventListener('click', toggleMobileMenu);
menuShopingCart.addEventListener('click', toggleCartAside);
productDetailClose.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
	const isAsideOpen = !shoppingCartContainer.classList.contains('inactive');
	const isProductDetailContainerOpen = !productDetailContainer.classList.contains('inactive');

	if (isAsideOpen) {
		shoppingCartContainer.classList.add('inactive')
	}
	if (isProductDetailContainerOpen) {
		productDetailContainer.classList.add('inactive')
	}

	desktopMenu.classList.toggle('inactive')
};

function toggleMobileMenu() {
	const isAsideOpen = !shoppingCartContainer.classList.contains('inactive');
	const isProductDetailContainerOpen = !productDetailContainer.classList.contains('inactive');

	if (isAsideOpen) {
		shoppingCartContainer.classList.add('inactive')
	} 
	if (isProductDetailContainerOpen) {
		productDetailContainer.classList.add('inactive')
	}
		
	mobileMenu.classList.toggle('inactive')
};

function toggleCartAside() {
	const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
	const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
	const isProductDetailContainerOpen = !productDetailContainer.classList.contains('inactive');
	
	if (isMobileMenuOpen) {
		mobileMenu.classList.add('inactive')
	}
	if (isDesktopMenuOpen) {
		desktopMenu.classList.add('inactive')
	}
	if (isProductDetailContainerOpen) {
		productDetailContainer.classList.add('inactive')
	}
	
	shoppingCartContainer.classList.toggle('inactive')
};

function openProductDetailAside() {
	const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
	const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
	const isShoppingCartOpen = !shoppingCartContainer.classList.contains('inactive');
	
	if (isShoppingCartOpen) {
		shoppingCartContainer.classList.add('inactive')
	}
	if (isMobileMenuOpen) {
		mobileMenu.classList.add('inactive')
	}
	if (isDesktopMenuOpen) {
		desktopMenu.classList.add('inactive')
	}

	productDetailContainer.classList.remove('inactive');
};

function closeProductDetailAside() {
	productDetailContainer.classList.add('inactive');
};

const productList = [];
productList.push({
	name: 'Bike',
	price: 120,
	image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
	name: 'Pantalla',
	price: 300,
	image: "https://images.pexels.com/photos/439803/pexels-photo-439803.jpeg?auto=compress&cs=tinysrgb&w=400",
});
productList.push({
	name: 'Laptop',
	price: 1500,
	image: "https://media.istockphoto.com/id/1182241805/es/foto/port%C3%A1til-moderno-con-pantalla-vac%C3%ADa-sobre-fondo-blanco-dise%C3%B1o-de-mockup-copiar-texto-espacial.jpg?b=1&s=612x612&w=0&k=20&c=TCeKaij0QzNaNQDkWuEWbGRXu7pfSJtB53l6pfDVaR8=",
});
productList.push({
	name: 'PS5',
	price: 650,
	image: "https://images.pexels.com/photos/13189272/pexels-photo-13189272.jpeg?auto=compress&cs=tinysrgb&w=400",
});

function renderProduct(arr) {
	for (product of arr) {
		const productCard = document.createElement('div');
		productCard.classList.add('product-card');
		
		const productImg = document.createElement('img');
		productImg.classList.add('product-card-img');
		productImg.setAttribute('src', product.image);
		productImg.addEventListener('click', openProductDetailAside);
					
		const productInfo = document.createElement('div');
		productInfo.classList.add('product-info');
		
		const productInfoDiv = document.createElement('div');
		
		const productPrice = document.createElement('p');
		productPrice.innerText = `$ ${product.price}`;
		
		const productName = document.createElement('p');
		productName.innerText = `$ ${product.name}`;
		
		const productInfoFigure = document.createElement('figure');
		
		const productImgCart = document.createElement('img');
		productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
		
		productCard.appendChild(productImg);
		productCard.appendChild(productInfo);
					
		productInfo.appendChild(productInfoDiv);
		productInfo.appendChild(productInfoFigure);
					
		productInfoDiv.appendChild(productPrice);
		productInfoDiv.appendChild(productName);
					
		productInfoFigure.appendChild(productImgCart);
					
		cardsContainer.appendChild(productCard);
	};
};

renderProduct(productList);