// Toggle Menu Mobile
const mobileMenu = document.querySelector(".mobile-menu");
const menuHamIcon = document.querySelector(".menu-icon");

menuHamIcon.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
	if (mobileMenu.classList.contains("inactive")) {
		closeMenus();
		mobileMenu.classList.toggle("inactive");
	} else {
		mobileMenu.classList.toggle("inactive");
	}
}

// Toggle Aside-Carrito - Mobile y desktop
const asideCartMenu = document.querySelector(".product-detail");
const cartIcon = document.querySelector(".navbar-shopping-cart");

cartIcon.addEventListener("click", toggleCarrito);

function toggleCarrito() {
	if (asideCartMenu.classList.contains("inactive")) {
		closeMenus();
		asideCartMenu.classList.toggle("inactive");
	} else {
		asideCartMenu.classList.toggle("inactive");
	}
}

// Toggle aside product detail
const fullProDet = document.querySelector(".full-product-detail");

function openFullProDet() {
	if (fullProDet.classList.contains("inactive")) {
		closeMenus();
		fullProDet.classList.toggle("inactive");
	} else {
		fullProDet.classList.toggle("inactive");
	}
}
// Close aside product detail
const fullProDetBtn = document.querySelector(".full-product-detail-close");

fullProDetBtn.addEventListener("click", closeFullProDet);

function closeFullProDet() {
	fullProDet.classList.add("inactive");
}

// Toggle Menu Desktop
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

menuEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
	if (desktopMenu.classList.contains("inactive")) {
		closeMenus();
		desktopMenu.classList.toggle("inactive");
	} else {
		desktopMenu.classList.toggle("inactive");
	}
}

// Render ProductList
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

renderProducts(productList);

function renderProducts(arr) {
	for (product of arr) {
		const productCard = document.createElement("div");
		productCard.classList.add("product-card");

		const productImg = document.createElement("img");
		productImg.setAttribute("src", product.image);
		productImg.addEventListener("click", openFullProDet);

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

//Funcion cerrar Menus
function closeMenus() {
	mobileMenu.classList.add("inactive");
	desktopMenu.classList.add("inactive");
	asideCartMenu.classList.add("inactive");
	fullProDet.classList.add("inactive");
}
