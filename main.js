const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const shoppingCartMenu = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobilepMenu);
shoppingCartIcon.addEventListener('click', toggleCartMenu);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
	desktopMenu.classList.toggle('inactive');
	shoppingCartMenu.classList.add('inactive');
	productDetailContainer.classList.add('inactive');
}

function toggleMobilepMenu() {
	mobileMenu.classList.toggle('inactive');
	shoppingCartMenu.classList.add('inactive');
	productDetailContainer.classList.add('inactive');
}

function toggleCartMenu() {
	shoppingCartMenu.classList.toggle('inactive');
	mobileMenu.classList.add('inactive');
	desktopMenu.classList.add('inactive');
	productDetailContainer.classList.add('inactive');
}

function openProductDetailAside() {
	productDetailContainer.classList.remove('inactive');
	shoppingCartMenu.classList.add('inactive');
	desktopMenu.classList.add('inactive');
}

function closeProductDetailAside() {
	productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
	name: 'Bike',
	price: 12700,
	image:
		'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
	name: 'Bicycle helmet',
	price: 1200,
	image:
		'https://assets.specialized.com/i/specialized/60821-104_HLMT_ALIGN-II-HLMT-MIPS-CE-BLK-BLKREFL-S-M_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto',
});
productList.push({
	name: 'Bicycle helmet',
	price: 1600,
	image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg',
});
productList.push({
	name: 'Bicycle helmet',
	price: 1500,
	image:
		'https://assets.specialized.com/i/specialized/60822-140_HLMT_CHAMONIX-HLMT-MIPS-CE-MRN-M-L_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto',
});
productList.push({
	name: 'Seat',
	price: 300,
	image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg',
});
productList.push({
	name: 'Tennis Montain Bike',
	price: 2200,
	image:
		'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg',
});
productList.push({
	name: 'Sunglasses',
	price: 800,
	image:
		'https://cdn.siroko.com/s/files/1/1220/6874/products/gafas-siroko-tech-k3s-london-lateral/1200x/crop_center.jpg?v=1635209602',
});
productList.push({
	name: 'Sunglasses',
	price: 600,
	image:
		'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603',
});
productList.push({
	name: 'Bicycle seat bag',
	price: 876,
	image: 'https://m.media-amazon.com/images/I/81k2Gmal+VL._AC_SL1500_.jpg',
});

function renderProducts(arr) {
	for (product of arr) {
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

		productInfoDiv.append(productPrice, productName);

		const productInfoFigure = document.createElement('figure');
		const productInfoImg = document.createElement('img');
		productInfoImg.setAttribute('src', './icons/bt_add_to_cart.svg');

		productInfoFigure.append(productInfoImg);

		productInfo.append(productInfoDiv, productInfoFigure);

		productCard.append(productImg, productInfo);

		cardsContainer.append(productCard);
	}
}

renderProducts(productList);
