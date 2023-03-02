const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuMobileImg = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#product-detail');
const productDetailClosedIcon = document.querySelector('.product-detail-close');

navEmail.addEventListener('click',toggleDesktopMenu);
menuMobileImg.addEventListener('click', toggleMenuMobile);
menuCartIcon.addEventListener('click', toggleProductDetail);
productDetailClosedIcon.addEventListener('click', closeProductDetailIconAside);

function toggleDesktopMenu(){
	const isProductDetailClosed = shoppingCartContainer.classList.contains('inactive');

	if( !isProductDetailClosed)
		shoppingCartContainer.classList.add('inactive');



	desktopMenu.classList.toggle('inactive');
};

function toggleMenuMobile() {
	const isProductDetailClosed = shoppingCartContainer.classList.contains('inactive');
	
	if( !isProductDetailClosed)
		shoppingCartContainer.classList.add('inactive');

		closeProductDetailIconAside();

	menuMobile.classList.toggle('inactive');
}

function toggleProductDetail() {
	const isMobileMenuClosed = menuMobile.classList.contains('inactive');
	const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
	const isProductDetailSelectClosed = productDetailContainer.classList.contains('inactive');

	if(!isDesktopMenuClosed)
		desktopMenu.classList.add('inactive');

	if( !isMobileMenuClosed)
		menuMobile.classList.add('inactive');

	if(!isProductDetailSelectClosed)
		productDetailContainer.classList.add('inactive');

	shoppingCartContainer.classList.toggle('inactive');

}




const productList = [];
productList.push({
	name:'Bike',
	price: 120,
	image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});
productList.push({
	name:'Computer',
	price: 320,
	image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});
productList.push({
	name:'TV',
	price: 420,
	image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

});
function openProductDetailAside() {
	// const isProductDetailClosed = shoppingCartContainer.classList.contains('inactive');
	
	// if( !isProductDetailClosed)
		shoppingCartContainer.classList.add('inactive');


	productDetailContainer.classList.remove('inactive');
}

function closeProductDetailIconAside() {
	productDetailContainer.classList.add('inactive');
	
}

function renderProduct(arr){
	for(product of arr){
		const productCard= document.createElement('div');
		productCard.classList.add('product-card');
	
		const img = document.createElement('img');
		img.setAttribute('src',product.image);
		img.addEventListener('click', openProductDetailAside);
	
	
		const productInfo = document.createElement('div');
		productInfo.classList.add('product-info')
	
	
		
		const productInfoDiv = document.createElement('div')
		
		const productPrice = document.createElement('p');
		productPrice.innerText = '$' + product.price;
	
		const productName = document.createElement('p');
		productName.innerText = product.name;
	
	
		const productFigure = document.createElement('figure');
		const productIcon = document.createElement('img');
		productIcon.setAttribute('src', './icons/bt_add_to_cart.svg');
	
		productCard.appendChild(img);
		productCard.appendChild(productInfo);
	
		productInfo.appendChild(productInfoDiv);
		productInfo.appendChild(productFigure);
	
		productFigure.appendChild(productIcon);
		productInfoDiv.appendChild(productPrice);
		productInfoDiv.appendChild(productName);
		
	
		cardContainer.appendChild(productCard);
	}
}

renderProduct(productList);