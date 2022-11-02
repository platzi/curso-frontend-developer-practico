const menuEmail = document.querySelector('.navbar-email'); 
const desktopMenu = document.querySelector('.desktop-menu'); // Selectores
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
	const isAsideClosed = aside.classList.contains('inactive'); 
	
	if (!isAsideClosed) {
		aside.classList.add('inactive');
	}

	desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
	const isAsideClosed = aside.classList.contains('inactive'); 
	
	if (!isAsideClosed) {
		aside.classList.add('inactive');
	}

	mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
	const isMobileMenuClosed = mobileMenu.classList.contains('inactive'); 

	if (!isMobileMenuClosed) {
		mobileMenu.classList.add('inactive');
	}
	
	aside.classList.toggle('inactive');
}

// Lista de productos: HTML a partir de arrays

const productList = [];
productList.push({
	name: 'Bike',
	price: 120,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
	name: 'Pantalla',
	price: 220,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
	name: 'Computador',
	price: 620,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

/*
Se pueden AÑADIR tantos productos como queramos

productList.push({
	name: 'Bike',
	price: 120,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
	name: 'Pantalla',
	price: 220,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
	name: 'Computador',
	price: 620,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
*/

// Ya con el array listo, ahora vamos a insertarlos en el HTML

/*

// Referencia del HTML que hay que construir pero ahora utilizando JS

// Esto está hardcodeado
<div class="product-card">
  <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
  <div class="product-info">
    <div>
      <p>$120,00</p>
      <p>Bike</p>
    </div>
    <figure>
      <img src="./icons/bt_add_to_cart.svg" alt="">
    </figure>
  </div>
</div>
*/

// Maquetación HTML desde JavaScript

// for (product of productList) {
// 	const productCard = document.createElement('div');
// 	productCard.classList.add('product-card');

// 	const productImg = document.createElement('img');
// 	productImg.setAttribute('src', product.image);
// 	// product = {name, price, image}
// 	// product = {name, price, image} -> product.image

// 	const productInfo = document.createElement('div');
// 	productInfo.classList.add('product-info');

// 	const productInfoDiv = document.createElement('div');

// 	const productPrice = document.createElement('p');
// 	productPrice.innerText = '$' + product.price;

// 	const productName = document.createElement('p');
// 	productName.innerText = product.name;

// 	const productInfoFigure = document.createElement('figure');
	
// 	const productImgCart = document.createElement('img');
// 	productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

// 	// Hasta aquí ya creamos los elementos. Ahora vamos a empezar a devolvernos, es decir a meter los elementos hijos dentro de sus papás.

// 	productInfoFigure.appendChild(productImgCart);
// 	productInfoDiv.appendChild(productPrice);
// 	productInfoDiv.appendChild(productName);
// 	productInfo.appendChild(productInfoDiv);
// 	productInfo.appendChild(productInfoFigure);
// 	productCard.appendChild(productImg);
// 	productCard.appendChild(productInfo);

// 	// Ahora hay que insertar este productCard en el div con la class="cards-container" del HTML. Para eso hay que seleccionar el elemento.  

// 	cardsContainer.appendChild(productCard);
// }

// Uno de los usos de las funciones es poder reutilizar código. Pero hay otro uso: la organización. 
// El ciclo for...of está tirado a la mitad de nuestro código. Vamos a usar una función para colocar dentro este ciclo y organizar mejor esto...me sirve por orden para más adelante cuando escale mucho más la aplicación.

function renderProducts(arr) {
	for (product of arr) {
		const productCard = document.createElement('div');
		productCard.classList.add('product-card');
	
		const productImg = document.createElement('img');
		productImg.setAttribute('src', product.image);
		// product = {name, price, image}
		// product = {name, price, image} -> product.image
	
		const productInfo = document.createElement('div');
		productInfo.classList.add('product-info');
	
		const productInfoDiv = document.createElement('div');
	
		const productPrice = document.createElement('p');
		productPrice.innerText = '$' + product.price;
	
		const productName = document.createElement('p');
		productName.innerText = product.name;
	
		const productInfoFigure = document.createElement('figure');
		
		const productImgCart = document.createElement('img');
		productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
	
// 	// Hasta aquí ya creamos los elementos. Ahora vamos a empezar a devolvernos, es decir a meter los elementos hijos dentro de sus papás.
	
		productInfoFigure.appendChild(productImgCart);
		productInfoDiv.appendChild(productPrice);
		productInfoDiv.appendChild(productName);
		productInfo.appendChild(productInfoDiv);
		productInfo.appendChild(productInfoFigure);
		productCard.appendChild(productImg);
		productCard.appendChild(productInfo);
	
		// Ahora hay que insertar este productCard en el div con la class="cards-container" del HTML. Para eso hay que seleccionar el elemento.  
	
		cardsContainer.appendChild(productCard);
	}
}

renderProducts(productList);