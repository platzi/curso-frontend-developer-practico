/**
 * front-dev-practico
 * https://platzi.com/clases/3271-javascript-practico
 * Pull Request to -> https://github.com/platzi/curso-frontend-developer-practico
 * @author: Carlos Duarte
 * @email: hola@davdav.tech
 * @curo: https://platzi.com/clases/3271-javascript-practico
 * 
 * */

const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');
const addToCartButton = document.querySelector('.add-to-cart-button');
const productList = document.querySelector('.product-list');

const overlay = document.querySelector('.headerOverlay');
const myOrderTotal = document.querySelector('.my-order-total');

let menusVisibles = {}

document.addEventListener("DOMContentLoaded", () => {
  console.info("front-dev-practico - Platzi");
  main();
});

function main() {
	menuEmail.addEventListener('click', toggleDesktopMenu);
	menuHamIcon.addEventListener('click', toggleMobileMenu);
	menuCarritoIcon.addEventListener('click', toggleCarritoAside);
	productDetailCloseIcon.addEventListener('click', closeProductDetailAside);
	addToCartButton.addEventListener('click', addToCartProduct);
	overlay.addEventListener('click', clearScreen);

	menusVisibles = {
	desktopMenu: false,
	mobileMenu: false,
	shoppingCartContainer: false,
	productDetailContainer: false,
	overlay: false
	}

	localStorage.setItem('CARRITO', JSON.stringify([]));
}


function clearScreen() {
	overlay.classList.remove('showOverlay'); 
	desktopMenu.classList.add('inactive');
	shoppingCartContainer.classList.add('inactive');
	productDetailContainer.classList.add('inactive');
}

function toggleDesktopMenu () {
	if (!shoppingCartContainer.classList.contains('inactive')) {
		shoppingCartContainer.classList.add('inactive');
	}

	if (!productDetailContainer.classList.contains('inactive')) {
		productDetailContainer.classList.add('inactive');
	}

	if (!desktopMenu.classList.contains('inactive')) {
		overlay.classList.remove('showOverlay');
		desktopMenu.classList.add('inactive');
	}else{
		overlay.classList.add('showOverlay');
		desktopMenu.classList.remove('inactive');
	}

}

function toggleMobileMenu () {
	if (!shoppingCartContainer.classList.contains('inactive')) {
		shoppingCartContainer.classList.add('inactive');
	}

	closeProductDetailAside();
	mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
	if (!mobileMenu.classList.contains('inactive')) {
		mobileMenu.classList.add('inactive');
	}

	if (!productDetailContainer.classList.contains('inactive')) {
		productDetailContainer.classList.add('inactive');
	}

	if (!desktopMenu.classList.contains('inactive')) {
		desktopMenu.classList.add('inactive');
	}


	if (!shoppingCartContainer.classList.contains('inactive')) {
		overlay.classList.remove('showOverlay');
		shoppingCartContainer.classList.add('inactive');
	}else{
		overlay.classList.add('showOverlay');
		shoppingCartContainer.classList.remove('inactive');
	}
}

function openProductDetailAside(obj) {
	console.log(obj.currentTarget.params);
	let params = obj.currentTarget.params;
	addToCartButton.params = {
			id: params.id,
			name: params.name,
			price: params.price,
			image: params.image,
			description: params.description,
			qnty: 1
		}

	productDetailContainer.childNodes[3].setAttribute('src', params.image);
	productDetailContainer.querySelector('.product-name').innerText = '' + params.name;
	productDetailContainer.querySelector('.product-price').innerText = '$' + params.price;
	productDetailContainer.querySelector('.product-description').innerText = '' + params.description;


	shoppingCartContainer.classList.add('inactive');
	productDetailContainer.classList.remove('inactive');
	overlay.classList.add('showOverlay');
}

function closeProductDetailAside() {
	productDetailContainer.classList.add('inactive');
	overlay.classList.remove('showOverlay');
}

function renderProducts(arr) {
	for(product of arr){
		const productCard = document.createElement('div');
		productCard.classList.add('product-card');
		productCard.addEventListener('click', openProductDetailAside);
		productCard.params = {
			id: product.id,
			name: product.name,
			price: product.price,
			image: product.image,
			description: product.description
		}

		const productImg = document.createElement('img');
		productImg.setAttribute('src', product.image);

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

//localstorage
function setLocalStorage(params) {

	let carrito = JSON.parse(localStorage.getItem('CARRITO'));
	let novo = true;
	let TOTAL = 0;
	let ITEMS = 0;
	for(x = 0; x < carrito.length; x++){
		if (carrito[x].id == params.id) {
			novo = false;
			carrito[x].qnty += 1;
		}

		TOTAL += parseFloat(carrito[x].price) * parseInt(carrito[x].qnty);
		ITEMS += carrito[x].qnty;
	}
	if (novo) {
		carrito.push(params);
		TOTAL += params.price;
		ITEMS += params.qnty;
	}
	localStorage.removeItem('CARRITO');
	localStorage.setItem('CARRITO', JSON.stringify(carrito));
	localStorage.setItem('TOPAY', TOTAL);

	return [carrito, TOTAL, ITEMS];
	
}

function removeItemLocalStorage(id) {

	let carrito = JSON.parse(localStorage.getItem('CARRITO'));
	let del = false;
	let TOTAL = 0;
	let ITEMS = 0;
	for(x = 0; x < carrito.length; x++){
		if (carrito[x].id == id) {
			console.log("encontrado");
			if (carrito[x].qnty == 1) {
				let y = carrito.splice(x, 1);
				console.log("delete");
				console.log({carrito});
				console.log(y);
				del = true;
			}else{
				carrito[x].qnty -= 1;
				console.log("discount");
			}
		}
	}

	for(product of carrito){
		TOTAL += parseFloat(product.price) * parseInt(product.qnty);
		ITEMS += product.qnty;
	}

	localStorage.removeItem('CARRITO');
	localStorage.setItem('CARRITO', JSON.stringify(carrito));
	localStorage.setItem('TOPAY', TOTAL);

	return [carrito, TOTAL, ITEMS];
	
}

function renderProductsCart(list) {
	productList.innerHTML = '';
	let shoppingCart, figure, productImgCart, productNameCart, productQntyCart, productPriceCart, shoppingCartRemove;
	let totalItems = document.querySelector('.total-items');

	for(params of list[0]){
		shoppingCart = document.createElement('div');
		shoppingCart.classList.add('shopping-cart');
		shoppingCart.setAttribute('prod-id',params.id);

		figure = document.createElement('figure');

		productImgCart = document.createElement('img');
		productImgCart.setAttribute('src', params.image);

		productNameCart = document.createElement('p');
		productNameCart.classList.add('product-name');
		productNameCart.innerText = '' + params.name;

		productQntyCart = document.createElement('p');
		productQntyCart.classList.add('product-qnty');
		productQntyCart.innerText = 'Qnty: ' + params.qnty;

		productPriceCart = document.createElement('p');
		productPriceCart.classList.add('product-price');
		productPriceCart.innerText = '$' + params.price;

		shoppingCartRemove = document.createElement('span');
		shoppingCartRemove.classList.add('product-cart-remove');
		shoppingCartRemove.innerText = 'x';
		shoppingCartRemove.addEventListener('click', removeFromCartProduct);

		figure.appendChild(productImgCart);
		shoppingCart.appendChild(figure);
		shoppingCart.appendChild(productNameCart);
		shoppingCart.appendChild(productQntyCart);
		shoppingCart.appendChild(productPriceCart);
		shoppingCart.appendChild(shoppingCartRemove);

		productList.appendChild(shoppingCart);
		
	}
	totalItems.innerText = list[2];
	myOrderTotal.innerText = list[1];

}


function addToCartProduct(obj) {
	console.log(obj.currentTarget.params);
	let params = obj.currentTarget.params;
	renderProductsCart(setLocalStorage(params));
	modal.style.display = "block";
}

function removeFromCartProduct(obj) {
	let id = obj.currentTarget.parentElement.getAttribute("prod-id");
	renderProductsCart(removeItemLocalStorage(id));
}

/* NA */
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