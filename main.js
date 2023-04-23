const email = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const cartMenu = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");

email.addEventListener("click", toggleDesktopMenu);
burguerMenu.addEventListener("click", toggleMobileMenu);
cartMenu.addEventListener("click", toggleCartAside);

function toggleDesktopMenu() {
	const isAsideClosed = aside.classList.contains("inactive");

	if (!isAsideClosed) {
		aside.classList.add("inactive");
	}

	desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
	const isAsideClosed = aside.classList.contains("inactive");

	if (!isAsideClosed) {
		aside.classList.add("inactive");
	}

	mobileMenu.classList.toggle("inactive");
}

function toggleCartAside() {
	const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
	const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

	if (!isMobileMenuClosed) {
		mobileMenu.classList.add("inactive");
	} else if (!isDesktopMenuClosed) {
		desktopMenu.classList.add("inactive");
	}
	aside.classList.toggle("inactive");
}

const productList = [];
productList.push({
	name: "Bike",
	price: 120,
	image:
		"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
	name: "Computer",
	price: 850,
	image:
		"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
	name: "Screen",
	price: 550,
	image:
		"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
	name: "Cellphone",
	price: 250,
	image:
		"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

/* 
<div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
	alt="">
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

function renderProduct(arr) {
	for (i of arr) {
		const productCard = document.createElement("div");
		productCard.classList.add("product-card");

		const img = document.createElement("img");
		img.setAttribute("src", i.image);

		const productInfo = document.createElement("div");
		productInfo.classList.add("product-info");

		const productInfoDiv = document.createElement("div");

		const productPrice = document.createElement("p");
		productPrice.innerText = `$${i.price}`;

		const productName = document.createElement("p");
		productName.innerText = i.name;

		productInfoDiv.appendChild(productPrice);
		productInfoDiv.appendChild(productName);

		const productInfoFigure = document.createElement("figure");

		const productImageCart = document.createElement("img");
		productImageCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

		productInfoFigure.appendChild(productImageCart);

		productInfo.appendChild(productInfoDiv);
		productInfo.appendChild(productInfoFigure);

		productCard.appendChild(img);
		productCard.appendChild(productInfo);

		cardsContainer.appendChild(productCard);
	}
}

renderProduct(productList);
