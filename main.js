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

function toggleDesktopMenu () {
	const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

	if (!isAsideClosed) {
		shoppingCartContainer.classList.add('inactive');
	}
	desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu () {
	const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

	if (!isAsideClosed) {
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

function openProductDetailAside() {

	shoppingCartContainer.classList.add('inactive');
	productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
	productDetailContainer.classList.add('inactive');
}

const producList = [];
producList.push({
	name: 'Bike',
	price: 120,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
producList.push({
	name: 'Pantalla',
	price: 190,
	image: 'https://images.pexels.com/photos/2728255/pexels-photo-2728255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
});
producList.push({
	name: 'Laptop',
	price: 90,
	image: 'https://images.pexels.com/photos/3589903/pexels-photo-3589903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
});
producList.push({
	name: 'Mouse',
	price: 9,
	image: 'https://images.pexels.com/photos/383496/pexels-photo-383496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
});

function renderProducts(arr) {
	for(product of arr){
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
		productName.innerText = '' + product.name;

		productInfoDiv.appendChild(productPrice);
		productInfoDiv.appendChild(productName);

		const productInfoFigure = document.createElement('figure');
		const productImgCart = document.createElement('img');
		productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

		productInfoFigure.appendChild(productImgCart);

		productInfo.appendChild(productInfoDiv);
		productInfo.appendChild(productInfoFigure);

		productCard.appendChild(productImg);
		productCard.appendChild(productInfo);

		cardsContainer.appendChild(productCard);

	}
}

function addProductCard(arr) {
	for(product of arr){
	  const productCard = document.createElement('div');
	  productCard.className = 'product-card';
	  
	  productCard.innerHTML = `
	    <img src="`+product.image+`" alt="">
	    <div class="product-info">
	      <div>
	        <p>$`+product.price+`</p>
	        <p>`+product.name+`</p>
	      </div>
	      <figure>
	        <img src="./icons/bt_add_to_cart.svg" alt="">
	      </figure>
	    </div>
	  `;
	  
	  cardsContainer.appendChild(productCard);
	}
}

renderProducts(producList);
//addProductCard(producList);