// Toggle Menu Desktop
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

menuEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
	const isAsideCartMenuCerrado = asideCartMenu.classList.contains("inactive");
	if (!isAsideCartMenuCerrado) {
		asideCartMenu.classList.add("inactive");
	}
	desktopMenu.classList.toggle("inactive");
}

// Toggle Menu Mobile
const mobileMenu = document.querySelector(".mobile-menu");
const menuHamIcon = document.querySelector(".menu-icon");

menuHamIcon.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
	const isAsideCartMenuCerrado = asideCartMenu.classList.contains("inactive");
	if (!isAsideCartMenuCerrado) {
		asideCartMenu.classList.add("inactive");
	}
	mobileMenu.classList.toggle("inactive");
}

// Toggle Aside-Carrito - Mobile y desktop
const asideCartMenu = document.querySelector(".product-detail");
const cartIcon = document.querySelector(".navbar-shopping-cart");

cartIcon.addEventListener("click", toggleCarrito);

function toggleCarrito() {
	const isMobileMenuCerrado = mobileMenu.classList.contains("inactive");
	const isDesktopMenuCerrado = desktopMenu.classList.contains("inactive");

	if (!isMobileMenuCerrado || !isDesktopMenuCerrado) {
		mobileMenu.classList.add("inactive");
		desktopMenu.classList.add("inactive");
	}
	asideCartMenu.classList.toggle("inactive");
}

const productList = [];

productList.push({
	name: "Bike",
	price: 120,
	image:
		"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
	name: "Pantalla",
	price: 1200,
	image:
		"https://www.lg.com/cac/images/televisores/md07504124/gallery/N01_d1.jpg",
});

productList.push({
	name: "Xbox",
	price: 500,
	image:
		"https://exitocol.vtexassets.com/arquivos/ids/7234186/consola-xbox-series-x-1tb-microsoft.jpg?v=637532554326130000",
});

productList.push({
	name: "Teclado",
	price: 100,
	image:
		"https://http2.mlstatic.com/D_NQ_NP_745312-MLA46504064560_062021-O.webp",
});

function renderProducts(arr) {
	for (product of arr) {
		const productCard = document.createElement("div");
		productCard.classList.add("product-card");

		const productImg = document.createElement("img");
		productImg.setAttribute("src", product.image);

		const productInfo = document.createElement("div");
		productInfo.classList.add("product-info");

		const productInfoDiv = document.createElement("div");

		const productPrecio = document.createElement("p");
		productPrecio.innerText = "$ " + product.price;

		const productName = document.createElement("p");
		productName.innerText = product.name;

		productInfoDiv.appendChild(productPrecio);
		productInfoDiv.appendChild(productName);

		const productFigure = document.createElement("figure");

		const productCartIcon = document.createElement("img");
		productCartIcon.setAttribute("src", "./icons/bt_add_to_cart.svg");

		productFigure.appendChild(productCartIcon);

		productInfo.appendChild(productInfoDiv);
		productInfo.appendChild(productFigure);

		productCard.appendChild(productImg);
		productCard.appendChild(productInfo);

		const cardsContainer = document.querySelector(".cards-container");
		cardsContainer.appendChild(productCard);
	}
}

renderProducts(productList);
